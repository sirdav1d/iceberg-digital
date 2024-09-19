/** @format */

import { HygraphFeature } from '@/lib/types';
import Image from 'next/image';

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
			className='px-[5%] py-16'>
			<div className='container flex flex-col items-center'>
				<div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
					<div className='w-full max-w-7xl'>
						<h2 className='rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-7xl max-w-lg'>
							{heading}
						</h2>
					</div>
				</div>
				<div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
					{sections.map((section, index) => (
						<div
							key={index}
							className={`${
								section.title == 'Gestão de Tráfego'
									? 'bg-brand-green-500 text-zinc-50 scale-105'
									: ''
							} flex w-full flex-col items-start p-4 rounded-lg shadow-medium`}>
							<div className='rb-5 mb-5 md:mb-6'>
								<Image
									width={40}
									height={40}
									src={section.image.url}
									className='size-12'
									alt={'icon'}
								/>
							</div>
							<h3 className='mb-5 text-xl font-bold md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl'>
								{section.title}
							</h3>
							<p>{section.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
