import { Lang } from '@/lib/dictionaries';

export type ChessRunEvent = {
	id: number;
	image: Record<Lang, string>;
	country: string;
	title: string;
	beginDate: string;
	endDate: string;
};

export type Result = {
	id: number;
	player: Partial<Player>;
	country: string;
	title: string;
	beginDate: string;
	endDate?: string;
	finalRank: number;
};

export type Player = {
	id: number;
	image?: string;
	last_name: string;
	first_name: string;
	birth_date: Date;
	cr_elo: number;
	elo: number;
	country_id: number;
	division: string;
	country: string;
	gender: string;
	active: boolean;
	club_id: number;
	rank: number;
};

export type Games = {
	id: number;
	player_white: Partial<Player>;
	player_black: Partial<Player>;
	round: number;
	event: string;
	game_date: string;
	result: string;
	termination: string;
};
