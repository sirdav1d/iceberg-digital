/** @format */

import React from 'react';

import { PoliticQuery } from '@/lib/queries';
import { fetchHygraph } from '@/lib/fetchHygraph';
import { PoliticPage } from '@/lib/types';
import { CMSIcon } from '@/components/ui/CMSIcon';
import Image from 'next/image';
import logo from '@/assets/logo-dark.png';
import { Footer4 } from '@/components/ui/Footer4';

export default async function Politcs() {
	const resp: PoliticPage = await fetchHygraph(PoliticQuery);
	const data = resp.politics[0];

	return (
		<main className=' w-full '>
			<div className='max-w-xl my-20 flex flex-col items-center justify-center mx-auto  gap-5'>
				<a href='/'>
					<Image
						width={320}
						height={80}
						src={logo}
						alt='logo Iceberg'></Image>
				</a>
				<CMSIcon icon={data.termContent}></CMSIcon>
				<CMSIcon icon={data.politicContent}></CMSIcon>
			</div>
			<Footer4 />
		</main>
	);
}
