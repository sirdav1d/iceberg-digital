/** @format */

'use client';

import { HygraphBenefit } from '@/lib/types';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	contents: HygraphBenefit[];
};

export type Layout349Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout349 = (props: Layout349Props) => {
	const { contents } = {
		...props,
	} as Props;

	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const sectionHeight = window.innerHeight;
			const currentScrollPosition = window.scrollY + sectionHeight / 10;
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
			<div className='container relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 lg:grid-cols-2 lg:py-0 lg:gap-x-20'>
				<div className='grid grid-cols-1 gap-12 md:block'>
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.3 }}
						exit={{ opacity: 0 }}
						className='absolute text-4xl md:text-6xl lg:text-8xl font-bold top-0 md:top-20 w-full text-center '>
						Nossos Diferenciais
					</motion.h2>
					{contents.map((content, index) => (
						<div key={index}>
							<div className='flex flex-col items-start justify-center lg:h-screen'>
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0, duration: 0.3 }}
									exit={{ opacity: 0 }}
									className='rb-5 my-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-6xl capitalize'>
									{content.title}
								</motion.h2>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2, duration: 0.3 }}
									exit={{ opacity: 0 }}
									className='md:text-lg'>
									{content.description}
								</motion.p>
								<div className='block w-full lg:hidden'>
									<Image
										width={400}
										height={400}
										src={content.image.url}
										className='w-full'
										alt={content.title}
									/>
								</div>
							</div>
							<div
								className={clsx(
									'fixed inset-0 -z-10 bg-zinc-300/10 transition-opacity duration-300',
									{
										'opacity-100': activeSection === 3 || activeSection === 5,
										'opacity-0': activeSection !== 3 && activeSection !== 5,
									},
								)}
							/>
						</div>
					))}
				</div>
				<div className='sticky top-0 hidden h-screen lg:flex md:flex-col md:items-center md:justify-center'>
					{contents.map((content, index) => (
						<AnimatePresence
							key={index}
							mode='wait'>
							{activeSection === index + 2 && (
								<motion.img
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: 0, duration: 0.3 }}
									width={400}
									height={400}
									key={index}
									src={content.image.url}
									className={clsx('absolute w-full', {
										'opacity-100': activeSection === index + 2,
										'opacity-0': activeSection !== index + 2,
									})}
									alt={'Imagem ilustrativa'}
								/>
							)}
						</AnimatePresence>
					))}
				</div>
			</div>
		</section>
	);
};
