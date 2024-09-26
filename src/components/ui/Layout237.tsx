/** @format */

'use client';
import { HygraphFeature } from '@/lib/types';
import { CMSIcon } from './CMSIcon';
import { motion } from 'framer-motion';

type Props = {
	heading: string;
	sections: HygraphFeature[];
};

export type Layout237Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout237 = (props: Layout237Props) => {
	const { heading, sections } = {
		...props,
	} as Props;
	return (
		<section
			id='solutions'
			className='px-[5%] py-16 w-full mx-auto '>
			<div className='container flex flex-col items-center w-full '>
				<div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
					<div className='w-full max-w-7xl'>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0, duration: 0.5 }}
							className='rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-7xl max-w-lg'>
							{heading}
						</motion.h2>
					</div>
				</div>
				<div className='grid grid-cols-1 items-start w-full justify-center gap-y-12 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
					{sections.map((section, index) => (
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.15, duration: 0.3 }}
							key={index}
							className={`hover:bg-brand-green-500 border-b-4 border-brand-yellow-500 group hover:scale-110 hover:text-zinc-50 h-full transition-all ease-linear duration-200 flex w-full flex-col items-start p-5 rounded-lg shadow-medium`}>
							<div className='mb-5 ml-1 scale-150'>
								<CMSIcon icon={section.iconSvg}></CMSIcon>
							</div>
							<h3 className='mb-5 text-xl font-bold md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl'>
								{section.title}
							</h3>
							<p>{section.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
