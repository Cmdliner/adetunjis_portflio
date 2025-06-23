declare global {
    type Project = {
        title: string;
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
        details: string;
        skillsUsed: string[];
        live_url:  string;
    }

    type ProjectProps = {
        project: Project
    }
}

export {}