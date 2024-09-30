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
import { IoLogoWhatsapp } from 'react-icons/io5';
import { Button } from './button';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from './navigation-menu';

export default function Header(props: { url: string }) {
	return (
		<section className='flex justify-between w-full items-center'>
			<div className='flex flex-col lg:flex-row items-center justify-between'>
				<a href='/'>
					<img
						className='w-[220px] md:w-[300px]'
						src={props.url}
						width={280}
						height={200}
						alt='logo Iceberg Digital '
					/>
				</a>
			</div>
			<div className='lg:flex gap-5 hidden'>
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
				<a
					href='https://wa.me/554187241092?text=Ol%C3%A1,%20estava%20navegando%20em%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
					target='_blank'
					rel='noopener noreferrer'>
					<Button className=' w-fit text-base 2xl:text-lg hover:shadow-lg group px-5'>
						Whatsapp
						<IoLogoWhatsapp
							size={28}
							className='group-hover:translate-x-1 transition-all duration-200 ease-linear'
						/>
					</Button>
				</a>
			</div>
			<div className='flex lg:hidden h-full'>
				<Sheet>
					<SheetTrigger asChild>
						<AlignJustify
							size={40}
							className='bg-transparent text-zinc-50'
						/>
					</SheetTrigger>
					<SheetContent className='h-full flex flex-col gap-5 justify-between'>
						<SheetHeader className='mt-10'>
							<a
								href='/'
								className=''>
								<img
									className='w-full'
									src={'/logo-dark.png'}
									width={260}
									height={200}
									alt='logo Iceberg Digital '
								/>
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
						<SheetFooter className=''>
							<SheetClose asChild>
								<a
									className=' w-full'
									href='https://wa.me/554187241092?text=Ol%C3%A1,%20estava%20navegando%20em%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
									target='_blank'
									rel='noopener noreferrer'>
									<Button className=' w-full text-lg hover:shadow-lg group px-5 mx-auto '>
										Whatsapp
										<IoLogoWhatsapp
											size={28}
											className='group-hover:translate-x-1 transition-all duration-200 ease-linear'
										/>
									</Button>
								</a>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</section>
	);
}
