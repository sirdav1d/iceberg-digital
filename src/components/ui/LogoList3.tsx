/** @format */

import Image from 'next/image';
import arrow from '@/assets/arrow.svg';

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	heading: string;
	logos: ImageProps[];
};

export type Logo3Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const LogoList3 = (props: Logo3Props) => {
	const { heading, logos } = {
		...Logo3Defaults,
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='overflow-hidden py-12 md:py-16 lg:py-20'>
			<div className=' flex mb-8 w-full items-center justify-start gap-2  px-[5%] md:mb-10 lg:mb-12 relative '>
				<h1 className='text-base font-bold leading-[1.2] md:text-md md:leading-[1.2] '>
					{heading}
				</h1>
				<Image
					src={arrow}
					alt={'arrow'}></Image>
				<span className='h-[2px] w-[80px] bg-zinc-950 absolute left-0 rounded-full' />
			</div>
			<div className='flex items-center pt-7 md:pt-0'>
				{Array(2)
					.fill(0)
					.map((_, index) => (
						<div
							key={index}
							className='flex shrink-0 animate-loop-horizontally items-center'>
							{logos.map((logo, index) => (
								<Image
									width={100}
									height={64}
									key={index}
									className='mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14'
									src={logo.src}
									alt={'logos'}
								/>
							))}
						</div>
					))}
			</div>
		</section>
	);
};

export const Logo3Defaults: Logo3Props = {
	heading: "Used by the world's most average companies",
	logos: [
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
			alt: 'Webflow logo 1',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg',
			alt: 'Relume logo 1',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
			alt: 'Webflow logo 2',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg',
			alt: 'Relume logo 2',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
			alt: 'Webflow logo 3',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg',
			alt: 'Relume logo 3',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
			alt: 'Webflow logo 4',
		},
		{
			src: 'https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg',
			alt: 'Relume logo 4',
		},
	],
};
