'use server';

import {
  summarizeProject,
  type SummarizeProjectInput,
} from '@/ai/flows/summarize-project-success-factors';
import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Here you would typically send an email or save to a database.
    // We'll just log it to the console for this example.
    console.log('New contact form submission:', validatedFields.data);

    return {
      success: true,
      message: 'Thank you! Your message has been sent.',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}

export async function getProjectSummary(project: SummarizeProjectInput) {
  try {
    const result = await summarizeProject(project);
    return result;
  } catch (error) {
    console.error('AI summary generation failed:', error);
    return {
      summary:
        'An AI-generated summary for this project could not be created at this time. Please check the project description for more details.',
    };
  }
}
