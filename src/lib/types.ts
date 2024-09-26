/** @format */

import { RichTextContent } from '@graphcms/rich-text-types';

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

export type TBenefit = {
	benefitsTitle: string;
	benefits: HygraphBenefit[];
};

export type HygraphFeature = {
	id: string;
	title: string;
	description: string;
	image: HygraphImage;
	icon: IconHygraph;
	iconSvg: string;
};

export type HygraphBenefit = {
	id: string;
	title: string;
	description: string;
	image: HygraphImage;
};

export type THomepage = {
	homepages: ContentHomepage[];
};

export type ContentHomepage = {
	logoNav: HygraphImage;
	headline: string;
	subheadline: string;
	ctaHero: string;
	imageHero: HygraphImage;
	featureTitle: string;
	features: HygraphFeature[];
	benefitsTitle: string;
	benefits: HygraphBenefit[];
	logoList: HygraphImage[];
	testimonials: Testimonial[];
};

export type IconHygraph = {
	raw: RichTextContent;
	html: RichTextContent;
};

export type Testimonial = {
	id: string;
	name: string;
	position: string;
	testimonialDescription: string;
	logo: HygraphImage;
	avatar: HygraphImage;
};

export type Politic = {
	politicContent: string;
	termContent: string;
};

export type PoliticPage = {
	politics: Politic[];
};
