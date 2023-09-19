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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function loadJSON(file: string, language: Language = "en") {
	return JSON.parse(
		(
			await readFile(join(__dirname, "../../content", language, file))
		).toString(),
	);
}
