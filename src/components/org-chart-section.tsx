import { Container } from '@/components/container';
import { ORG_CHART_DATA } from '@/lib/data/company-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const RoleCard = ({
  role,
  name,
  description,
}: {
  role: string;
  name?: string;
  description: string;
}) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="w-full text-center transition-all hover:shadow-md hover:border-primary">
          <CardHeader className="p-4">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
            <CardTitle className="text-base font-semibold">{role}</CardTitle>
          </CardHeader>
          {name && (
            <CardContent className="p-4 pt-0">
              <p className="text-sm font-medium text-primary">{name}</p>
            </CardContent>
          )}
        </Card>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export function OrgChartSection() {
  return (
    <section id="organization">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Our Leadership & Teams
          </h2>
          <p className="mt-4 text-muted-foreground">
            Meet the experienced leaders guiding our company and the typical structure of our expert project teams.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div>
            <h3 className="mb-8 text-center font-headline text-2xl font-semibold">
              Executive Leadership
            </h3>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              {ORG_CHART_DATA.leadership.map((member) => (
                <RoleCard key={member.role} {...member} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-8 text-center font-headline text-2xl font-semibold">
              Typical Project Team Structure
            </h3>
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
              {ORG_CHART_DATA.projectTeam.map((member) => (
                <RoleCard key={member.role} {...member} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
