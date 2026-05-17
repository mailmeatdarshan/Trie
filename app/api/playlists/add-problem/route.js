import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const dbUser = await db.user.findUnique({
      where: { clerkId: user.id }
    });

    if (!dbUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const { problemId, playlistId } = await request.json();

    if (!problemId || !playlistId) {
      return NextResponse.json(
        { success: false, error: "Problem ID and playlist ID are required" },
        { status: 400 }
      );
    }

    // Verify problem exists
    const problem = await db.problem.findUnique({
      where: { id: problemId }
    });

    if (!problem) {
        return NextResponse.json({
            success: false,
            error: "Problem not found"
        }, { status: 404 });
    }

    // Verify playlist belongs to user
    const playlist = await db.playlist.findFirst({
      where: {
        id: playlistId,
        userId: dbUser.id,
      },
    });

    if (!playlist) {
      return NextResponse.json(
        { success: false, error: "Playlist not found or unauthorized" },
        { status: 404 }
      );
    }

    // Check if problem is already in playlist
    const existingEntry = await db.problemInPlaylist.findFirst({
        where: {
            playlistId,
            problemId
        }
    });

    if (existingEntry) {
        return NextResponse.json({
            success: false,
            error: "Problem is already in this playlist"
        }, { status: 400 });
    }

    // Add problem to playlist
    try {
        const problemInPlaylist = await db.problemInPlaylist.create({
          data: {
            problemId,
            playlistId,
          },
        });

        return NextResponse.json({
          success: true,
          data: problemInPlaylist,
        });
    } catch (createError) {
        // Handle race condition where record might have been created between check and create
        if (createError.code === 'P2002') {
            return NextResponse.json({
                success: false,
                error: "Problem is already in this playlist"
            }, { status: 400 });
        }
        throw createError; // Re-throw to be caught by the outer catch
    }
  } catch (error) {
    console.error("Error adding problem to playlist:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add problem to playlist" },
      { status: 500 }
    );
  }
}