/** @format */

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Button } from './button';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from './navigation-menu';
import logodark from '@/assets/logo-dark.png';

export default function Header(props: { url: string }) {
	return (
		<section className='flex justify-between w-full items-center'>
			<div className='flex flex-col md:flex-row items-center justify-between'>
				<a href='/'>
					<Image
						className='w-[220px] md:w-[300px]'
						src={props.url}
						width={280}
						height={200}
						alt='logo Iceberg Digital '></Image>
				</a>
			</div>
			<div className='md:flex gap-5 hidden'>
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
				<Button className=' w-fit text-base 2xl:text-lg hover:shadow-lg group px-5'>
					Whatsapp
					<IoLogoWhatsapp
						size={28}
						className='group-hover:translate-x-1 transition-all duration-200 ease-linear'
					/>
				</Button>
			</div>
			<div className='flex md:hidden h-full'>
				<Sheet>
					<SheetTrigger asChild>
						<AlignJustify
							size={40}
							className='bg-transparent text-zinc-50'
						/>
					</SheetTrigger>
					<SheetContent className='h-full flex flex-col gap-5 justify-between'>
						<SheetHeader className='mt-10'>
							<a href='/'>
								<Image
									src={logodark}
									width={260}
									height={200}
									alt='logo Iceberg Digital '></Image>
							</a>
						</SheetHeader>
						<div className='flex flex-col gap-5 justify-between'>
							<NavigationMenu>
								<NavigationMenuList className='gap-5 hover:text-gold-500 cursor-pointer flex flex-col text-zinc-950 text-2xl font-bold'>
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
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button className=' w-full text-lg hover:shadow-lg group px-5'>
									Whatsapp
									<IoLogoWhatsapp
										size={28}
										className='group-hover:translate-x-1 transition-all duration-200 ease-linear'
									/>
								</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</section>
	);
}
