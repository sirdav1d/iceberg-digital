/** @format */

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '../ui/navigation-menu';
import logo from '@/assets/logo.png';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function Hero() {
	return (
		<section className='max-w-full bg-brand-green-600 md:m-10 flex flex-col items-center p-4 md:p-20 pt-10 shadow-2xl gap-20 rounded-lg '>
			<div className='flex flex-col md:flex-row items-center justify-between w-full'>
				<a href='/'>
					<Image
						src={logo}
						width={280}
						height={200}
						alt='logo Iceberg Digital'></Image>
				</a>

				<NavigationMenu>
					<NavigationMenuList className='text-zinc-100 gap-5 hover:text-gold-500 cursor-pointer '>
						<NavigationMenuItem>
							<NavigationMenuLink className='hover:text-brand-gold-500 transition-all duration-200 ease-linear'>
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href='#solutions'
								className='hover:text-brand-gold-500 transition-all duration-200 ease-linear'>
								Soluções
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href='#benefits'
								className='hover:text-brand-gold-500 transition-all duration-200 ease-linear'>
								Benefícios
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href='#contact'
								className='hover:text-brand-gold-500 transition-all duration-200 ease-linear'>
								Contato
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<Button className='mt-5 w-fit text-base 2xl:text-lg hover:shadow-lg group px-5'>
					Whatsapp
					<IoLogoWhatsapp
						size={28}
						className='group-hover:translate-x-1 transition-all duration-200 ease-linear'
					/>
				</Button>
			</div>
			<div className='w-full  h-full  flex justify-between items-center flex-col md:flex-row gap-10'>
				<div className='flex flex-col gap-5 md:w-2/3'>
					<h1 className='text-zinc-50 font-bold text-4xl xl:text-7xl xxl:text-9xl relative z-20'>
						Transforme Seu Negócio Em Uma Máquina de Vendas
						<span className='bg-brand-yellow-500 rounded-full w-24 h-24 absolute blur-3xl top-0 -right-30 z-10' />
					</h1>
					<p className='text-zinc-200 font-medium max-w-lg text-lg xxl:text-2xl'>
						Com a experiência de mais de 250 empresas atendidas, criamos
						estratégias sob medida para transformar seu negócio em uma potência
						de vendas
					</p>
					<Button className='mt-5 w-fit text-lg 2xl:text-xl hover:shadow-lg group px-5'>
						Solicitar Orçamento
						<MoveRight className='group-hover:translate-x-2 transition-all duration-200 ease-linear' />
					</Button>
				</div>
				<div className='w-full md:w-1/3 z-20'>
					<Image
						width={500}
						height={400}
						src={
							'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						alt='estratégia'
						className='object-cover rounded-lg size-full'></Image>
				</div>
			</div>
		</section>
	);
}
