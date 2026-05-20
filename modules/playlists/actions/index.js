"use server";

import { db } from "@/lib/db";

export const getAllPlaylists = async () => {
  try {
    const playlists = await db.playlist.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            imageUrl: true,
          },
        },
        problems: {
          include: {
            problem: {
              select: {
                id: true,
                title: true,
                difficulty: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, data: playlists };
  } catch (error) {
    console.error("❌ Error fetching all playlists:", error);
    return { success: false, error: "Failed to fetch playlists" };
  }
};

export const getPlaylistById = async (id) => {
  try {
    const playlist = await db.playlist.findUnique({
      where: {
        id: id,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            imageUrl: true,
          },
        },
        problems: {
          include: {
            problem: {
              include: {
                user: {
                  select: {
                    firstName: true,
                    lastName: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!playlist) {
      return { success: false, error: "Playlist not found" };
    }

    return { success: true, data: playlist };
  } catch (error) {
    console.error("❌ Error fetching playlist detail:", error);
    return { success: false, error: "Failed to fetch playlist details" };
  }
};

export const removeProblemFromPlaylist = async (playlistId, problemId) => {
  try {
    await db.problemInPlaylist.delete({
      where: {
        playlistId_problemId: {
          playlistId: playlistId,
          problemId: problemId,
        },
      },
    });

    return { success: true, message: "Problem removed from playlist" };
  } catch (error) {
    console.error("❌ Error removing problem from playlist:", error);
    return { success: false, error: "Failed to remove problem from playlist" };
  }
};

