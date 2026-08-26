export type Camper = {
	id: string;
	name: string;
	price: number;
	rating: number;
	location: string;
	description: string;
	form: string;
	transmission: string;
	engine: string;
	coverImage: string;
	totalReviews: number;
};

export type CamperResponse = {
	campers: Camper[];
	totalPages: number;
};

export type FilterValues = {
	location: string;
	form: string;
	transmission: string;
	engine: string;
};
