/** @format */

import Image from 'next/image';
import {
	BiLogoFacebookCircle,
	BiLogoGoogle,
	BiLogoInstagram,
	BiLogoLinkedinSquare,
} from 'react-icons/bi';

type Links = {
	title: string;
	url: string;
};

type ColumnLinks = {
	links: Links[];
};

type SocialMediaLinks = {
	url: string;
	icon: React.ReactNode;
};

type FooterLink = {
	title: string;
	url: string;
};

type Props = {
	logo: string;
	columnLinks: ColumnLinks[];
	socialMediaLinks: SocialMediaLinks[];
	footerText: string;
	footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Footer4 = (props: Footer4Props) => {
	const { footerText, columnLinks, footerLinks, socialMediaLinks } = {
		...Footer4Defaults,
		...props,
	} as Props;
	return (
		<footer className='px-[5%] py-12 md:py-18 lg:py-20 w-full bg-gradient-to-r from-brand-green-600 to-brand-green-900 text-zinc-50'>
			<div className='container'>
				<div className='grid grid-cols-1 items-center justify-center justify-items-center w-full gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20'>
					<a
						href={'/'}
						className='lg:justify-self-start'>
						<Image
							width={440}
							height={300}
							src={props.logo!}
							alt={'logo iceberg digital'}
							className='inline-block lg:scale-150'
						/>
					</a>
					{columnLinks.map((column, index) => (
						<ul
							key={index}
							className='grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start'>
							{column.links.map((link, linkIndex) => (
								<li
									key={linkIndex}
									className='font-normal'>
									<a
										className='hover:text-yellow-400 transition-all duration-200 ease-linear'
										href={link.url}>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					))}
					<div className='flex items-center justify-center justify-items-center gap-x-3 w-full lg:justify-self-end '>
						{socialMediaLinks.map((link, index) => (
							<a
								target='_blank'
								className='hover:text-yellow-400 transition-all duration-200 ease-linear'
								key={index}
								href={link.url}>
								{link.icon}
							</a>
						))}
					</div>
				</div>
				<div className='h-px w-full bg-zinc-600/30' />
				<div className='flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8 font-light'>
					<p className='mt-8 md:mt-0 text-center'>{footerText}</p>
					<ul className='grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0'>
						{footerLinks.map((link, index) => (
							<li
								key={index}
								className='underline underline-offset-1 '>
								<a
									className='hover:text-yellow-400 transition-all duration-200 ease-linear'
									href={link.url}>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export const Footer4Defaults: Footer4Props = {
	columnLinks: [
		{
			links: [
				{ title: 'Home', url: '/#home' },
				{ title: 'Soluções', url: '/#solutions' },
				{ title: 'Benefícios', url: '/#benefits' },
				{ title: 'Contato', url: '/#contact' },
			],
		},
	],
	socialMediaLinks: [
		{
			url: 'https://www.facebook.com/IcebergDigitalAds',
			icon: <BiLogoFacebookCircle className='size-8' />,
		},
		{
			url: 'https://www.instagram.com/agencia_iceberg',
			icon: <BiLogoInstagram className='size-8' />,
		},
		{
			url: 'https://www.linkedin.com/company/icebergdigitalltda/',
			icon: <BiLogoLinkedinSquare className='size-8' />,
		},
		{
			url: 'https://g.page/r/CUs4QPf2ABm-EBM/review',
			icon: <BiLogoGoogle className='size-8' />,
		},
		{
			url: 'https://www.reclameaqui.com.br/empresa/iceberg-digital/',
			icon: (
				<div className='w-32'>
					<Image
						className='w-32 grayscale hover:grayscale-0 transition-all ease-linear duration-200'
						width={800}
						height={800}
						src={'/reclame-aqui-logo.png'}
						alt='Logo Reclame Aqui'
					/>
				</div>
			),
		},
	],
	footerText: '© 2024 Iceberg Digital. Todos Os Direitos Reservados.',
	footerLinks: [
		{ title: 'Políticas de Privacidade', url: '/politics' },
		{ title: 'Termos de Uso', url: '/politics' },
	],
};
