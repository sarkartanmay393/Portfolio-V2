type Contacts = {
    twitter: string,
    linkedin: string,
}

type Blog = {
      link: string,
      colorCode: string,
      views: string,
      title: string,
      subtitle: string,
      published_on: string,
      time: string,
      image: string,
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