import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export type Language = "en";

export interface Project {
	name: string;
	featured: boolean;
	href: string;
	img: string;
	description: string;
}

export interface Experience {
	title: string;
	time: string;
	points: string[];
}

export interface Resume {
	blurbs: any;
	experience: Experience[];
}
