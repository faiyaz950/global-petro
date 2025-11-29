'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { getProjectSummary } from '@/app/actions';
import type { Project } from '@/lib/types';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ProjectDetailsModal({
  project,
  isOpen,
  onOpenChange,
}: ProjectDetailsModalProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && project) {
      setIsLoading(true);
      setSummary('');
      const input = {
        projectName: project.name,
        projectDescription: project.description,
        clientName: project.client,
        contractorName: project.contractor,
        completionDate: project.completionDate,
        sector: project.sector,
        status: project.status,
      };
      getProjectSummary(input)
        .then((result) => {
          setSummary(result.summary);
        })
        .catch((error) => {
          console.error(error);
          setSummary(
            'An error occurred while generating the project summary.'
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isOpen, project]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        {project && (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">
                {project.name}
              </DialogTitle>
              <DialogDescription>
                {project.sector} Sector &bull; Client: {project.client}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <h4 className="font-semibold">Project Description</h4>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div>
                <h4 className="font-semibold">AI-Generated Summary</h4>
                {isLoading ? (
                  <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">{summary}</p>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
