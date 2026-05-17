import React from 'react';
import { Trophy, CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


const SolvedProblems = ({ solvedProblems }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'EASY': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'HARD': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="mb-8 border-none shadow-none bg-transparent">
      <CardHeader className="px-6">
        <div className="flex items-center gap-3">
        <Trophy className="w-6 h-6 text-amber-500" />
          <CardTitle className="text-2xl font-bold">Solved Problems</CardTitle>
          <Badge variant="outline" className="rounded-full bg-amber-50 text-amber-600 border-blue-200">
            {solvedProblems.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-6">

      {solvedProblems.length === 0 ? (
        <Card className="border-dashed">
            <CardContent className="py-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No Problems Solved Yet</h3>
            <p className="text-muted-foreground">Start solving problems to see your achievements here!</p>
            </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solvedProblems.map((solved) => (
            <Card
              key={solved.id}
              className="hover:shadow-md transition-all duration-200 group"
            >
              <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                        {solved.problem?.title || 'Unknown Problem'}
                    </h3>
                    {solved.problem?.difficulty && (
                        <Badge variant="secondary" className={`${getDifficultyColor(solved.problem.difficulty)} text-[10px] py-0 px-2`}>
                            {solved.problem.difficulty}
                        </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Solved {formatDate(solved.createdAt)}</span>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      </CardContent>
    </Card>
  );
};

export default SolvedProblems;