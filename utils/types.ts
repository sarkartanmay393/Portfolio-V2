type Contacts = {
    twitter: string,
    linkedin: string,
}

type Blog = {
    _id: string,
    title: string,
    slug: string,
    brief: string,
    dateAdded: string,
    coverImage: string,
    time: string,
    totalReactions: string,
    tags: string[],
}
    
type Project = {
    title: string;
    image?: string;
    url: string;
    workType: string;
    description: string;
    madeby: string;
    demo: string;
}

export type { Contacts, Blog, Project };