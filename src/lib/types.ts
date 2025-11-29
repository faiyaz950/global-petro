export type Sector = 'Oil & Gas' | 'Infrastructure' | 'Utilities' | 'Pipeline';

export interface Project {
  id: string;
  name: string;
  client: string;
  contractor: string;
  completionDate: string;
  sector: Sector;
  status: 'Completed' | 'Ongoing' | 'Planned';
  description: string;
  imageId: string;
}
