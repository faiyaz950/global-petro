'use client';

import {
  Building2,
  Factory,
  LucideIcon,
  Waypoints,
  Zap,
} from 'lucide-react';
import type { Sector } from '@/lib/types';

export const sectorIcons: Record<Sector, LucideIcon> = {
  'Oil & Gas': Factory,
  Infrastructure: Building2,
  Utilities: Zap,
  Pipeline: Waypoints,
};
