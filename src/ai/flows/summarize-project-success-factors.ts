'use server';
/**
 * @fileOverview Summarizes the success factors and challenges of a project using an LLM.
 *
 * - summarizeProject - A function that summarizes project success factors and challenges.
 * - SummarizeProjectInput - The input type for the summarizeProject function.
 * - SummarizeProjectOutput - The return type for the summarizeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project, including its goals, execution, and outcomes.'),
  clientName: z.string().describe('The name of the client for whom the project was completed.'),
  contractorName: z.string().describe('The name of the contractor responsible for the project.'),
  completionDate: z.string().describe('The date when the project was completed (YYYY-MM-DD).'),
  sector: z.string().describe('The sector that the project belongs to (e.g., Oil & Gas, Power, Energy, Infrastructure).'),
  status: z.string().describe('The status of the project (e.g., Completed, Ongoing, Planned).'),
});
export type SummarizeProjectInput = z.infer<typeof SummarizeProjectInputSchema>;

const SummarizeProjectOutputSchema = z.object({
  summary: z.string().describe('A summary of the project, highlighting key success factors and challenges.'),
});
export type SummarizeProjectOutput = z.infer<typeof SummarizeProjectOutputSchema>;

export async function summarizeProject(input: SummarizeProjectInput): Promise<SummarizeProjectOutput> {
  return summarizeProjectFlow(input);
}

const summarizeProjectPrompt = ai.definePrompt({
  name: 'summarizeProjectPrompt',
  input: {schema: SummarizeProjectInputSchema},
  output: {schema: SummarizeProjectOutputSchema},
  prompt: `You are an expert project analyst summarizing the key success factors and challenges of construction projects. Use the project details provided to generate a concise summary.

Project Name: {{{projectName}}}
Project Description: {{{projectDescription}}}
Client: {{{clientName}}}
Contractor: {{{contractorName}}}
Completion Date: {{{completionDate}}}
Sector: {{{sector}}}
Status: {{{status}}}

Focus on extracting the most important success factors and challenges encountered during the project. The summary should be no more than 150 words.
`,
});

const summarizeProjectFlow = ai.defineFlow(
  {
    name: 'summarizeProjectFlow',
    inputSchema: SummarizeProjectInputSchema,
    outputSchema: SummarizeProjectOutputSchema,
  },
  async input => {
    const {output} = await summarizeProjectPrompt(input);
    return output!;
  }
);
