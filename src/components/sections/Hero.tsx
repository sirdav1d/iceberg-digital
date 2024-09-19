/** @format */

import { THero } from '@/lib/types';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Header from '../ui/Header';

export default function Hero(props: THero) {
	return (
		<section
			id='home'
			className='max-w-full min-h-full bg-brand-green-600 md:m-5 flex flex-col items-center px-4 py-10 md:px-14 md:py-14 shadow-xlarge gap-14 md:rounded-xl '>
			<>
				<Header url={props.logoNav.url} />
				<div className='w-full h-full  flex justify-between items-center flex-col md:flex-row gap-20'>
					<div className='flex flex-col gap-5 md:w-2/3'>
						<h1 className='text-zinc-50 font-bold text-5xl md:text-7xl xxl:text-10xl relative z-20'>
							{props.headline}
							<span className='bg-brand-yellow-500 rounded-full w-24 h-24 absolute blur-3xl top-10 right-10 xl:-right-40 z-10' />
						</h1>
						<p className='text-zinc-200 font-normal max-w-md text-lg xxl:text-xl'>
							{props.subheadline}
						</p>
						<Button className='mt-5 w-fit text-lg 2xl:text-xl hover:shadow-lg group px-5'>
							{props.ctaHero}
							<MoveRight className='group-hover:translate-x-1 transition-all duration-200 ease-linear' />
						</Button>
					</div>
					<div className='w-full md:w-1/2 z-20'>
						<Image
							width={500}
							height={400}
							src={props.imageHero.url}
							alt='estratégia'
							className='object-cover rounded-lg size-full'></Image>
					</div>
				</div>
			</>
		</section>
	);
}
