/** @format */

import Hero from '@/components/sections/Hero';
import { Contact5 } from '@/components/ui/Contact5';
import { Footer4 } from '@/components/ui/Footer4';
import { Layout237 } from '@/components/ui/Layout237';
import { Layout349 } from '@/components/ui/Layout349';
import { LogoList3 } from '@/components/ui/LogoList3';
import { Testimonial7 } from '@/components/ui/Testimonial7';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-start min-h-screen'>
			<Hero />
			<LogoList3 heading='Empresas Que Confiam Em Nosso Trabalho' />
			<Layout237 />
			<Layout349 />
			<Testimonial7 />
			<Contact5 />
			<Footer4 />
		</main>
	);
}
