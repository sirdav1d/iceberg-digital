/** @format */

import Hero from '@/components/sections/Hero';
import { Contact5 } from '@/components/ui/Contact5';
import { Footer4 } from '@/components/ui/Footer4';
import { Layout237 } from '@/components/ui/Layout237';
import { Layout349 } from '@/components/ui/Layout349';
import { LogoList3 } from '@/components/ui/LogoList3';
import MyBubble from '@/components/ui/MyBubble';
import { Testimonial7 } from '@/components/ui/Testimonial7';
import { fetchHygraph } from '@/lib/fetchHygraph';
import { HomeQuery } from '@/lib/queries';
import { THomepage } from '@/lib/types';

export default async function Home() {
	//@typescript-eslint/no-unused-vars
	const resp: THomepage = await fetchHygraph(HomeQuery);
	const data = resp.homepages[0];
	return (
		<main className='flex flex-col items-center justify-start overflow-x-hidden md:overflow-visible'>
			<MyBubble></MyBubble>
			<Hero
				logoNav={{
					url: data.logoNav.url,
				}}
				headline={data.headline}
				subheadline={data.subheadline}
				ctaHero={data.ctaHero}
				imageHero={{
					url: data.imageHero.url,
				}}
			/>
			<LogoList3
				heading='Empresas Que Confiam Em Nosso Trabalho'
				logos={data.logoList}
			/>
			<Layout237
				heading={data.featureTitle}
				sections={data.features}
			/>
			<Layout349 contents={data.benefits} />

			<Testimonial7 />
			<Contact5
				email='comercial@icebergdigital.com.br'
				phone='+55 41 98724-1092'
				heading='Fale Conosco'
				description='Entre em Contato e Descubra Como Podemos Fortalecer Sua Presença Digital e Impulsionar Seu Sucesso'
			/>
			<Footer4 />
		</main>
	);
}
