"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

export const SubmissionHistory = ({ submissions }) => {
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Language</TableHead>
            <TableHead>Runtime</TableHead>
            <TableHead>Memory</TableHead>
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
