/** @format */

'use client';

import { THero } from '@/lib/types';
import { MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import Header from '../ui/Header';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@relume_io/relume-ui';

export default function Hero(props: THero) {
	const mobile = useMediaQuery('(min-width: 660px)');

	return (
		<motion.section
			whileInView={{ margin: !mobile ? 0 : 24 }}
			viewport={{ amount: 'all' }}
			initial={{ margin: 0 }}
			exit={{ margin: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			id='home'
			className='max-w-full h-full bg-gradient-to-r from-brand-green-600 justify-center to-brand-green-800 flex flex-col items-center px-4 pt-10 md:px-14 shadow-xlarge gap-10 md:rounded-xl '>
			<>
				<Header url={props.logoNav.url} />
				<div className='w-full h-full  flex justify-between items-center flex-col lg:flex-row gap-20'>
					<div className='flex flex-col gap-5 w-full lg:w-1/2'>
						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className='text-zinc-50 font-bold text-5xl md:text-7xl xxl:text-10xl relative z-20'>
							{props.headline}
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.3 }}
							className='text-zinc-200 font-normal max-w-md text-lg xxl:text-xl'>
							{props.subheadline}
						</motion.p>
						<motion.a
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.3 }}
							href='https://typebot.co/my-typebot-okmrw5c'
							target='_blank'
							rel='noopener noreferrer'>
							<Button className='mt-5 xl:mt-10 w-fit text-lg xxl:text-xl hover:shadow-lg group px-5'>
								{props.ctaHero}
								<MoveRight className='group-hover:translate-x-1 transition-all duration-200 ease-linear' />
							</Button>
						</motion.a>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.6, duration: 0.3 }}
						className='w-full lg:w-1/2 z-20 relative flex flex-col items-center justify-center'>
						<motion.span
							animate={{ scale: 1.2 }}
							transition={{
								duration: 5,
								ease: 'easeInOut',
								repeat: Infinity,
								repeatType: 'reverse',
							}}
							initial={{ scale: 1 }}
							exit={{ scale: 1 }}
							className='bg-brand-yellow-500 rounded-full w-28 h-28 xl:w-64 xl:h-64 absolute blur-2xl ml-5 lg:blur-[80px] lg:mt-20 lg:ml-10 -z-10 '
						/>
						<img
							width={1400}
							height={1100}
							src={props.imageHero.url}
							alt='estratégia'
							className='object-cover rounded-lg size-full'
						/>
					</motion.div>
				</div>
			</>
		</motion.section>
	);
}
