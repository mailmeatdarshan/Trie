import React from 'react';
import Link from 'next/link';
import { List, Calendar, FileText, LayoutGrid, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AllPlaylistsContent = ({ playlists }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Community Playlists</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Explore curated collections of problems from the Trie community.
        </p>
      </div>

      {playlists.length === 0 ? (
        <Card className="border-dashed py-20">
            <CardContent className="text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <List className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No Playlists Found</h3>
            <p className="text-muted-foreground text-lg">Be the first to create a public playlist!</p>
            </CardContent>
        </Card>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <Link key={playlist.id} href={`/playlists/${playlist.id}`} className="flex flex-col h-full">
              <Card
                className="hover:shadow-xl transition-all duration-300 group flex flex-col border-zinc-200 dark:border-zinc-800 h-full cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-2xl p-4 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors shrink-0">
                      <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate" title={playlist.name}>
                        {playlist.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed min-h-[3rem]">
                        {playlist.description || 'No description provided'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-none px-3 py-1 flex items-center gap-2">
                            <LayoutGrid className="w-4 h-4" />
                            {playlist.problems?.length || 0} Problems
                        </Badge>
                        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 text-xs font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{formatDate(playlist.createdAt)}</span>
                        </div>
                    </div>
                    
                    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8 border border-zinc-200 dark:border-zinc-800">
                          <AvatarImage src={playlist.user.imageUrl} />
                          <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800">
                            <User className="w-4 h-4 text-zinc-500" />
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                          {playlist.user.firstName} {playlist.user.lastName}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPlaylistsContent;
