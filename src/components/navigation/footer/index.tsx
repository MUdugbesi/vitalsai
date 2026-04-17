import { Flex } from '@mantine/core';
import React from 'react';
import { FOOTER_LINKS } from './links';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='min-h-96.5 h-auto w-full bg-foreground/5 mt-10 md:px-8 pt-16 pb-12'>
			<Flex
				justify={'space-between'}
				className='px-5 md:px-20 max-sm:flex-col w-full max-sm:gap-10'
			>
				<div className='md:w-[30%] flex flex-col gap-5 md:gap-10 h-full'>
					<h3 className='text-xl font-bold text-primary'>VitalSign AI</h3>
					<p className='text-secondary text-sm'>
						NHS Digital Compliant Interface. Designed for clinical precision and
						high-density data interpretation. Registered with the MHRA as a
						Class IIa Medical Device (Pending).
					</p>
				</div>

				<Flex className='gap-20'>
					{FOOTER_LINKS.map((footer, _id) => (
						<ul key={_id}>
							<li className='max-sm:text-sm text-primary font-semibold'>
								{footer.title}
							</li>
							{footer.links.map(({ link, description }, _id) => (
								<Link href={link} key={_id}>
									<li className='hover:text-secondary mt-4 text-xs md:text-sm'>
										{description}
									</li>
								</Link>
							))}
						</ul>
					))}
				</Flex>
			</Flex>
			<div className='h-12 justify-start items-end flex px-5 md:px-20 mt-10'>
				<p className='md:text-sm text-[10px] max-sm:mx-auto'>
					&copy;2026 VITALSIGN AI. NHS DIGITAL COMPLIANT INTERFACE.
				</p>
			</div>
		</div>
	);
};

export default Footer;
