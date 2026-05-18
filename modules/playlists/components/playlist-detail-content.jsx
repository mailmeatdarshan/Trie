import React from 'react';
import Link from 'next/link';
import { LayoutGrid, Calendar, User, ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const PlaylistDetailContent = ({ playlist }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "EASY": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "MEDIUM": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "HARD": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default: return "";
    }
  };

  return (
    <div className="space-y-10">
      <Link href="/playlists" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-500 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Playlists
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Column: Metadata */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="h-2 bg-amber-500" />
            <CardHeader className="p-6">
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400 mb-2">
                <LayoutGrid className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Playlist</span>
              </div>
              <CardTitle className="text-3xl font-bold mb-4">{playlist.name}</CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                {playlist.description || 'No description provided for this collection.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-6">
              <div className="flex items-center justify-between py-4 border-y border-zinc-100 dark:border-zinc-800">
                <span className="text-sm font-medium text-zinc-500">Problems</span>
                <Badge variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 font-bold">
                  {playlist.problems?.length || 0}
                </Badge>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Curated by</span>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border-2 border-white dark:border-zinc-900 shadow-sm">
                    <AvatarImage src={playlist.user.imageUrl} />
                    <AvatarFallback><User className="w-5 h-5 text-zinc-400" /></AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-zinc-100">
                      {playlist.user.firstName} {playlist.user.lastName}
                    </div>
                    <div className="text-xs text-zinc-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(playlist.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Problem List */}
        <div className="lg:col-span-2">
          <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
            <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 px-6 py-4">
              <CardTitle className="text-lg">Included Problems</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="px-6">Title</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead className="text-right px-6">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {playlist.problems?.length > 0 ? (
                    playlist.problems.map(({ problem }) => (
                      <TableRow key={problem.id} className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                        <TableCell className="px-6 py-4">
                          <Link href={`/problem/${problem.id}`} className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-amber-500 transition-colors">
                            {problem.title}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getDifficultyColor(problem.difficulty)} border-0 font-bold text-[10px]`}>
                            {problem.difficulty}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right px-6">
                          <Link href={`/problem/${problem.id}`}>
                            <Button variant="ghost" size="sm" className="hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-900/20 dark:hover:text-amber-400 gap-2">
                              Solve <ExternalLink className="w-3.5 h-3.5" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-10 text-zinc-500">
                        No problems have been added to this playlist yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetailContent;
