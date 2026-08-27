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
	length: string;
	width: string;
	height: string;
	tank: string;
	consumption: string;
	amenities: string[];
	gallery?: CamperImage[];
};

export type CamperImage = {
	original: string;
	thumb: string;
};

export type CamperReview = {
	reviewer_name: string;
	reviewer_rating: number;
	comment: string;
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
