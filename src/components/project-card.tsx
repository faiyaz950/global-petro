import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Calendar, Users, CheckSquare } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative aspect-video">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            data-ai-hint={image.imageHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-headline text-lg font-bold">{project.name}</h3>
            <p className="text-sm opacity-80">{project.sector}</p>
        </div>
      </div>
      
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="space-y-3">
          <p className="flex items-center justify-center gap-2">
            <Users size={16} /> <span>Client: {project.client}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Calendar size={16} /> <span>{project.completionDate}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <CheckSquare size={16} /> <span>Status: {project.status}</span>
          </p>
        </div>
        <Button onClick={onViewDetails} className="mt-6" variant="secondary">
          View Summary <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
