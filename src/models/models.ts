export type Langauges = 'it' | 'en';

export interface ProjectVM{
    title?: string;
    description: string;
    technologies?: string[];
}

export interface JobVM{
    title: string;
    company: string;
    location: string;
    date: string;
    projects: ProjectVM[];
    isJob: boolean; //-> true = job, -> false = education
    showMainProjects?: boolean;
}