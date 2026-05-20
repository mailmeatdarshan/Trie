"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SubmissionHistory = ({ submissions }) => {
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  if (!submissions || submissions.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No submissions yet.
      </div>
    );
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Accepted":
        return (
          <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Accepted
          </Badge>
        );
      case "Wrong Answer":
        return (
          <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20">
            <XCircle className="mr-1 h-3 w-3" />
            Wrong Answer
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="text-muted-foreground">
            {status}
          </Badge>
        );
    }
  };

  return (
    <div className="rounded-md border mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Language</TableHead>
            <TableHead>Runtime</TableHead>
            <TableHead>Memory</TableHead>
            <TableHead>Code</TableHead>
            <TableHead className="text-right">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => {
            const averageMemory = submission.memory ? 
              JSON.parse(submission.memory)
                .filter(m => m !== null)
                .reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / 
              (JSON.parse(submission.memory).filter(m => m !== null).length || 1) : 0;
              
            const averageTime = submission.time ? 
              JSON.parse(submission.time)
                .filter(t => t !== null)
                .map(t => parseFloat(t.replace(" s", "")))
                .reduce((a, b) => a + b, 0) / 
              (JSON.parse(submission.time).filter(t => t !== null).length || 1) : 0;

            return (
              <TableRow key={submission.id}>
                <TableCell>{getStatusBadge(submission.status)}</TableCell>
                <TableCell>{submission.language}</TableCell>
                <TableCell>{averageTime.toFixed(3)} s</TableCell>
                <TableCell>{averageMemory.toFixed(2)} KB</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle>Submission Code ({submission.language})</DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="mt-4 h-[60vh] w-full rounded-md border p-4 bg-muted">
                        <pre className="text-sm font-mono whitespace-pre-wrap">
                          {submission.sourceCode}
                        </pre>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="text-right text-muted-foreground text-xs">
                  {new Date(submission.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
