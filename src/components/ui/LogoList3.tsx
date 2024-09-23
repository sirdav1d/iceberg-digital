/** @format */

import Image from 'next/image';
import arrow from '@/assets/arrow.svg';
import { HygraphImage } from '@/lib/types';

type Props = {
	heading: string;
	logos: HygraphImage[];
};

export type Logo3Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const LogoList3 = (props: Logo3Props) => {
	const { heading, logos } = {
		...props,
	} as Props;
	return (
		<section className='overflow-hidden py-8'>
			<div className=' flex mb-8 items-center justify-start gap-2  px-[5%] relative w-fit xl:w-full mx-auto'>
				<h2 className=' font-bold leading-[1.2]  md:leading-[1.2] text-base md:text-lg'>
					{heading}
				</h2>
				<Image
					className='hidden md:block '
					src={arrow}
					alt={'arrow'}></Image>
			</div>
			<div className='flex items-center pt-5'>
				{Array(2)
					.fill(0)
					.map((_, index) => (
						<div
							key={index}
							className='flex shrink-0 animate-loop-horizontally items-center'>
							{logos.map((logo, index) => (
								<Image
									width={120}
									height={64}
									key={index}
									className='mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14 grayscale hover:grayscale-0 transition-all ease-linear duration-200'
									src={logo.url}
									alt={'logos'}
								/>
							))}
						</div>
					))}
			</div>
		</section>
	);
};
