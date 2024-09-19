/** @format */

'use client';

import { HygraphBenefit } from '@/lib/types';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
								<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl max-w-md capitalize'>
									{content.title}
								</h2>
								<p className='md:text-lg'>{content.description}</p>

								<div className='mt-10 block w-full md:hidden'>
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
					{contents.map((content, index) => (
						<Image
							width={440}
							height={400}
							key={index}
							src={content.image.url}
							className={clsx('absolute w-full', {
								'opacity-100': activeSection === index + 1,
								'opacity-0': activeSection !== index + 1,
							})}
							alt={'Imagem ilustrativa'}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
