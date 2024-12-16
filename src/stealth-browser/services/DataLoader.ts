import fs from 'fs';
import path from 'path';
import { DataLoaderError } from '../exceptions/DataLoaderError';
import { IDataLoader } from '../interfaces/IDataLoader';

const configPath = path.resolve('config/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export default class DataLoader implements IDataLoader {
	private userAgentsPath: string;
	private languagesPath: string;

	constructor() {
		this.userAgentsPath = path.resolve(config.userAgentsPath);
		this.languagesPath = path.resolve(config.languagesPath);
	}

	loadUserAgents(): string[] {
		try {
			const data = fs.readFileSync(this.userAgentsPath, 'utf-8');
			return data
				.split('@')
				.map(line => line.trim())
				.filter(line => line !== '');
		} catch (error) {
			throw new DataLoaderError(
				`Ошибка загрузки файла User-Agent: ${this.userAgentsPath}`,
				(error as Error).message
			);
		}
	}

	loadLanguages(): string[] {
		try {
			const data = fs.readFileSync(this.languagesPath, 'utf-8');
			return data
				.split('@')
				.map(line => line.trim())
				.filter(line => line !== '');
		} catch (error) {
			throw new DataLoaderError(
				`Ошибка загрузки файла языков: ${this.languagesPath}`,
				(error as Error).message
			);
		}
	}
}

export { DataLoader };
