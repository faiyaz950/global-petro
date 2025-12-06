'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Building2, Users, CheckCircle2, Clock, FileText } from 'lucide-react';
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
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        {project && (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl mb-2">
                {project.name}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {project.sector} Sector
                </span>
                <span className="text-muted-foreground">•</span>
                <Badge className={getStatusColor(project.status)}>
                  {project.status === 'Completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                  {project.status === 'Ongoing' && <Clock className="w-3 h-3 mr-1" />}
                  {project.status}
                </Badge>
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Project Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="p-2 rounded-lg bg-[#932445]/10">
                    <Users className="w-5 h-5 text-[#932445]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Client</p>
                    <p className="text-sm font-semibold text-gray-900">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="p-2 rounded-lg bg-[#932445]/10">
                    <Building2 className="w-5 h-5 text-[#932445]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Contractor</p>
                    <p className="text-sm font-semibold text-gray-900">{project.contractor}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="p-2 rounded-lg bg-[#932445]/10">
                    <Calendar className="w-5 h-5 text-[#932445]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Completion Date</p>
                    <p className="text-sm font-semibold text-gray-900">{project.completionDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="p-2 rounded-lg bg-[#932445]/10">
                    <FileText className="w-5 h-5 text-[#932445]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Sector</p>
                    <p className="text-sm font-semibold text-gray-900">{project.sector}</p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#932445]" />
                  Project Overview
                </h4>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm leading-relaxed text-gray-700">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Highlights */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#932445]" />
                  Key Highlights
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#932445]/5 border border-[#932445]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#932445] flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Successfully delivered in the <strong>{project.sector}</strong> sector
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#932445]/5 border border-[#932445]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#932445] flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Completed in partnership with <strong>{project.contractor}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#932445]/5 border border-[#932445]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#932445] flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Project status: <strong>{project.status}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
