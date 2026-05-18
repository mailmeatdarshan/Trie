import React from 'react'
import { getPlaylistById } from '@/modules/playlists/actions'
import PlaylistDetailContent from '@/modules/playlists/components/playlist-detail-content'
import { notFound } from 'next/navigation'

const PlaylistDetailPage = async ({ params }) => {
    const { id } = await params
    const { data: playlist, error } = await getPlaylistById(id)

    if (error || !playlist) {
        return notFound()
    }

    return (
        <div className="container mx-auto px-4 py-32">
            <PlaylistDetailContent playlist={playlist} />
        </div>
    )
}

export default PlaylistDetailPage
