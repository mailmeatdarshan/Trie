import React from 'react'
import { getPlaylistById } from '@/modules/playlists/actions'
import PlaylistDetailContent from '@/modules/playlists/components/playlist-detail-content'
import { notFound } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

const PlaylistDetailPage = async ({ params }) => {
    const { id } = await params
    const { data: playlist, error } = await getPlaylistById(id)
    const user = await currentUser()

    let dbUser = null
    if (user) {
        dbUser = await db.user.findUnique({
            where: { clerkId: user.id },
            select: { id: true }
        })
    }

    if (error || !playlist) {
        return notFound()
    }

    return (
        <div className="container mx-auto px-4 py-32">
            <PlaylistDetailContent playlist={playlist} currentDbUserId={dbUser?.id} />
        </div>
    )
}

export default PlaylistDetailPage
