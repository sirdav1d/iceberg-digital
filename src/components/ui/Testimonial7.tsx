/** @format */

'use client';

import { Testimonial } from '@/lib/types';
import type { CarouselApi } from '@relume_io/relume-ui';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@relume_io/relume-ui';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
	testimonials: Testimonial[];
};

export type Testimonial7Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Testimonial7 = (props: Testimonial7Props) => {
	const { testimonials } = {
		...props,
	} as Props;

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap() + 1);
		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section
			id='relume'
			className='overflow-hidden px-[5%] py-16'>
			<div className='container'>
				{/* for all available options: https://www.embla-carousel.com/api/options/ */}
				<Carousel
					setApi={setApi}
					opts={{
						loop: true,
						align: 'start',
					}}
					className='overflow-hidden'>
					<div className='relative'>
						<CarouselContent className='ml-0 md:mx-3'>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className='pl-0 md:basis-full md:px-16'>
									<TestimonialCard testimonial={testimonial} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='mt-8 hidden bg-white md:flex md:size-14' />
						<CarouselNext className='mt-8 hidden bg-white md:flex md:size-14' />
					</div>
					<div className='mt-[30px] flex items-center justify-center md:mt-[46px]'>
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => api?.scrollTo(index)}
								className={clsx(
									'relative mx-[3px] inline-block size-2 rounded-full',
									{
										'bg-black': current === index + 1,
										'bg-neutral-darker/40': current !== index + 1,
									},
								)}
							/>
						))}
					</div>
				</Carousel>
			</div>
		</section>
	);
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<div className='container max-w-lg'>
			<div className='flex flex-col items-center text-center'>
				<Image
					width={240}
					height={44}
					src={testimonial.logo.url}
					alt={testimonial.position}
					className='object-contain'
				/>
				<blockquote className='my-6 text-xl font-semibold md:my-8 md:text-2xl'>
					{testimonial.testimonialDescription}
				</blockquote>
				<div className='flex flex-col items-center justify-center'>
					<Image
						width={64}
						height={64}
						src={testimonial.avatar.url}
						alt={testimonial.name}
						className='mb-4 size-16 min-h-16 min-w-16 rounded-full object-cover'
					/>
					<div className='flex flex-col items-center justify-center '>
						<p className='font-semibold'>{testimonial.name}</p>
						<p>
							<span>{testimonial.position}</span>{' '}
							{/* <span>{testimonial.companyName}</span> */}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
