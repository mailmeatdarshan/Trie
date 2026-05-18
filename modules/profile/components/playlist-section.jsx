import React from 'react';
import { List, Calendar, FileText, LayoutGrid } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';



const PlaylistsSection = ({ playlists }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="px-6">
        <div className="flex items-center gap-3">
        <List className="w-6 h-6 text-blue-500" />
          <CardTitle className="text-2xl font-bold">My Playlists</CardTitle>
          <Badge variant="outline" className="rounded-full bg-blue-50 text-blue-600 border-blue-200">
            {playlists.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-6">

      {playlists.length === 0 ? (
        <Card className="border-dashed">
            <CardContent className="py-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <List className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No Playlists Created</h3>
            <p className="text-muted-foreground">Create your first playlist to organize your problems!</p>
            </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <Link key={playlist.id} href={`/playlists/${playlist.id}`}>
              <Card
                className="hover:shadow-md transition-all duration-200 group flex flex-col h-full cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors shrink-0">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate" title={playlist.name}>
                      {playlist.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 h-10 overflow-hidden">
                      {playlist.description || 'No description provided'}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-none flex items-center gap-1.5">
                          <LayoutGrid className="w-3.5 h-3.5" />
                          {playlist.problems?.length || 0} Problems
                      </Badge>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Created {formatDate(playlist.createdAt)}</span>
                      </div>
                  </div>
                </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
      </CardContent>
    </Card>
  );
};

export default PlaylistsSection;