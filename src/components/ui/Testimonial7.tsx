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
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
		<section className='overflow-hidden px-[5%] py-16'>
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
						<CarouselPrevious className='mt-8 hidden bg-white md:flex md:size-14 hover:bg-brand-gold-400 hover:border-brand-gold-500 transition-all ease-linear duration-200' />
						<CarouselNext className='mt-8 hidden bg-white md:flex md:size-14 hover:bg-brand-gold-400 hover:border-brand-gold-500 transition-all ease-linear duration-200' />
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
		<div className='container max-w-lg '>
			<div className='flex flex-col items-center text-center '>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0, duration: 0.6 }}>
					<img
						width={240}
						height={44}
						src={testimonial.logo.url}
						alt={testimonial.position}
						className='w-48 lg:w-52 xxl:w-60 object-contain'
					/>
				</motion.div>
				<motion.blockquote
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 0.3 }}
					className='my-6 text-xl font-semibold md:my-8 md:text-2xl  max-w-xs md:max-w-full px-4'>
					{testimonial.testimonialDescription}
				</motion.blockquote>
				<div className='flex flex-col items-center justify-center'>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.3 }}>
						<img
							width={64}
							height={64}
							src={testimonial.avatar.url}
							alt={testimonial.name}
							className='mb-4 size-16 min-h-16 min-w-16 rounded-full object-cover'
						/>
					</motion.div>
					<div className='flex flex-col items-center justify-center '>
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.3 }}
							className='font-semibold'>
							{testimonial.name}
						</motion.p>
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.3 }}>
							<span>{testimonial.position}</span>{' '}
							{/* <span>{testimonial.companyName}</span> */}
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};
