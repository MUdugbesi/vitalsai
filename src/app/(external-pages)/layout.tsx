'use client';
import Footer from '@/components/navigation/footer';
import Navbar from '@/components/navigation/navbar';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function LandingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex min-h-screen w-screen flex-col justify-between bg-background text-foreground'>
			<Navbar />
			<div className='mt-3 md:mt-6'>{children}</div>
			<AnimatedSection>
				<Footer />
			</AnimatedSection>
		</div>
	);
}
