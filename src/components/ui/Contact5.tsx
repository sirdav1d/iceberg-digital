/** @format */

'use client';

import { BiEnvelope, BiPhone } from 'react-icons/bi';
import { motion } from 'framer-motion';

type Props = {
	heading: string;
	description: string;
	email: string;
	phone: string;
};

export type Contact5Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
	const { heading, description, email, phone } = {
		...Contact5Defaults,
		...props,
	} as Props;

	return (
		<section
			id='contact'
			className='px-[5%] py-16 xl:py-24'>
			<div className='container flex flex-col justify-center items-center gap-y-12'>
				<div>
					<div className='rb-6 mb-6 md:mb-8 text-center max-w-md'>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0, duration: 0.3 }}
							exit={{ opacity: 0 }}
							className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.3 }}
							exit={{ opacity: 0 }}
							className='md:text-md'>
							{description}
						</motion.p>
					</div>

					<div className='flex flex-col  justify-between items-center gap-4 py-2'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.3 }}
							exit={{ opacity: 0 }}
							className='flex items-center gap-4 md:text-lg font-bold'>
							<BiEnvelope className='size-8 flex-none' />
							<p>{email}</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.3 }}
							exit={{ opacity: 0 }}
							className='flex items-center gap-4 md:text-lg font-bold'>
							<BiPhone className='size-8 flex-none' />
							<p>{phone}</p>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Contact5Defaults: Contact5Props = {
	heading: 'Contact us',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	email: 'hello@relume.io',
	phone: '+1 (555) 000-0000',
};
