export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image?: string;
    href?: string;
    color: string;
    stack: string[];
    highlights: string[];
}
