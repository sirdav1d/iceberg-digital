/** @format */

'use client';

import { BiEnvelope, BiPhone } from 'react-icons/bi';

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
			className='px-[5%] py-16'>
			<div className='container flex flex-col justify-center items-center gap-y-12'>
				<div>
					<div className='rb-6 mb-6 md:mb-8 text-center max-w-lg'>
						<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</h2>
						<p className='md:text-md'>{description}</p>
					</div>

					<div className='flex flex-col  justify-between items-center gap-4 py-2'>
						<div className='flex items-center gap-4 md:text-lg font-bold'>
							<BiEnvelope className='size-8 flex-none' />
							<p>{email}</p>
						</div>
						<div className='flex items-center gap-4 md:text-lg font-bold'>
							<BiPhone className='size-8 flex-none' />
							<p>{phone}</p>
						</div>
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
