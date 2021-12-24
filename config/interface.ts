
    interface Slider {
        Picturehandle: string;
        videoHandle: string;
    }

    export interface About {
        aboutImage: string;
        sectionTitle: string;
        sectionDescription: string;
    }

    export interface Skill {
        name: string;
        level: number;
        category: string;
    }

    export interface Skills {
        sectionTitle: string;
        sectionDescription: string;
        skillCategory: string[];
        skills: Skill[];
    }

    interface Experience {
        company: string;
        position: string;
        website: string;
        duration: string;
        logo: string;
        description: string;
        highlights: string[];
    }

    export interface Work {
        sectionTitle: string;
        sectionDescription: string;
        experiences: Experience[];
    }

    interface Api {
        slider: Slider[];
        about: About;
        skills: Skills;
        work: Work;
    }

    export interface MockProp {
        data: Api;
    }