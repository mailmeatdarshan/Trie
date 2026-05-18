import React from 'react'
import { getAllPlaylists } from '@/modules/playlists/actions'
import AllPlaylistsContent from '@/modules/playlists/components/all-playlists-content'

const PlaylistsPage = async () => {
    const { data: playlists, error } = await getAllPlaylists()

    if (error) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <p className="text-destructive text-lg font-medium">Error loading playlists: {error}</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-32">
            <AllPlaylistsContent playlists={playlists} />
        </div>
    )
}

export default PlaylistsPage
