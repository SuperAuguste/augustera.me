export interface Project {
	name: string;
	featured: boolean;
	href: string;
	img: string;
	description: string;
}

export interface Resume {
	about: any;
	skills: any;
	experience: any;
	talks: any;
}

export interface BlogPostSummary {
	slug: string,
	title: string;
	publish_date: Date;
}

export interface BlogPost {
	slug: string,
	title: string;
	publish_date: Date;
	content: any;
}
