/** @format */

export type THero = {
	logoNav: HygraphImage;
	headline: string;
	subheadline: string;
	ctaHero: string;
	imageHero: HygraphImage;
};

export type HygraphImage = {
	url: string;
};

export type TFeature = {
	featureTitle: string;
	features: HygraphFeature[];
};

export type HygraphFeature = {
	id: string;
	title: string;
	description: string;
	image: HygraphImage;
};

export type HygraphBenefit = {
	id: string;
	title: string;
	description: string;
	image: HygraphImage;
};

