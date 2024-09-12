/** @format */

'use client';

import { Button } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';
import { useEffect, useState } from 'react';
import { RxChevronRight } from 'react-icons/rx';
import clsx from 'clsx';
import Image from 'next/image';

type ImageProps = {
	src: string;
	alt?: string;
};

type ContentProps = {
	tagline: string;
	heading: string;
	description: string;
	buttons: ButtonProps[];
	image: ImageProps;
};

type Props = {
	contents: ContentProps[];
	images: ImageProps[];
};

export type Layout349Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout349 = (props: Layout349Props) => {
	const { contents, images } = {
		...Layout349Defaults,
		...props,
	} as Props;

	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const sectionHeight = window.innerHeight;
			const currentScrollPosition = window.scrollY + sectionHeight / 2;
			const currentSection = Math.floor(currentScrollPosition / sectionHeight);
			setActiveSection(currentSection);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section
			id='benefits'
			className='px-[5%]'>
			<div className='container relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20'>
				<div className='grid grid-cols-1 gap-12 md:block'>
					{contents.map((content, index) => (
						<div key={index}>
							<div className='flex flex-col items-start justify-center md:h-screen'>
								<p className='mb-3 font-semibold md:mb-4'>{content.tagline}</p>
								<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
									{content.heading}
								</h2>
								<p className='md:text-md'>{content.description}</p>

								<div className='mt-10 block w-full md:hidden'>
									<Image
										width={400}
										height={400}
										src={content.image.src}
										className='w-full'
										alt={'test'}
									/>
								</div>
							</div>
							<div
								className={clsx(
									'fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300',
									{
										'opacity-100': activeSection === 3 || activeSection === 5,
										'opacity-0': activeSection !== 3 && activeSection !== 5,
									},
								)}
							/>
						</div>
					))}
				</div>
				<div className='sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center'>
					{images.map((image, index) => (
						<Image
							width={400}
							height={400}
							key={index}
							src={image.src}
							className={clsx('absolute w-full', {
								'opacity-100': activeSection === index + 2,
								'opacity-0': activeSection !== index + 2,
							})}
							alt={'test'}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export const Layout349Defaults: Layout349Props = {
	contents: [
		{
			tagline: 'Tagline',
			heading: 'Medium length section heading goes here',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
			buttons: [
				{ title: 'Button', variant: 'secondary' },
				{
					title: 'Button',
					variant: 'link',
					size: 'link',
					iconRight: <RxChevronRight />,
				},
			],
			image: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg',
				alt: 'Relume placeholder image 1',
			},
		},
		{
			tagline: 'Tagline',
			heading: 'Medium length section heading goes here',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
			buttons: [
				{ title: 'Button', variant: 'secondary' },
				{
					title: 'Button',
					variant: 'link',
					size: 'link',
					iconRight: <RxChevronRight />,
				},
			],
			image: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg',
				alt: 'Relume placeholder image 2',
			},
		},
		{
			tagline: 'Tagline',
			heading: 'Medium length section heading goes here',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
			buttons: [
				{ title: 'Button', variant: 'secondary' },
				{
					title: 'Button',
					variant: 'link',
					size: 'link',
					iconRight: <RxChevronRight />,
				},
			],
			image: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg',
				alt: 'Relume placeholder image 3',
			},
		},
		{
			tagline: 'Tagline',
			heading: 'Medium length section heading goes here',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
			buttons: [
				{ title: 'Button', variant: 'secondary' },
				{
					title: 'Button',
					variant: 'link',
					size: 'link',
					iconRight: <RxChevronRight />,
				},
			],
			image: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg',
				alt: 'Relume placeholder image 4',
			},
		},
	],
	images: [
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg',
			alt: 'Relume placeholder image 1',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg',
			alt: 'Relume placeholder image 2',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg',
			alt: 'Relume placeholder image 3',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg',
			alt: 'Relume placeholder image 4',
		},
	],
};
