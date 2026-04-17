'use client';
import { Badge, Flex, Text } from '@mantine/core';
import FrameworkCard from '../cards/FrameworkCard';
import {
	AudioLines,
	ChartNoAxesGantt,
	GaugeIcon,
	SquareStack,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

const INTEGRATIONS = [
	{
		title: 'Centralized Monitoring',
		description:
			'Command center oversight for distributed patient populations, allowing a single clinical team to monitor hundreds of virtual beds simultaneously.',
		icon: ChartNoAxesGantt,
	},
	{
		title: 'Early Deterioration Detection',
		description:
			'AI-driven alerts identify subtle physiological shifts hours before traditional thresholds, enabling proactive intervention at home.',
		icon: GaugeIcon,
	},
	{
		title: 'Reduced Readmissions',
		description:
			'Closing the loop on post-discharge care. Intelligent monitoring reduces the revolving door effect of preventable hospital readmissions.',
		icon: SquareStack,
	},
];

const Integration = () => {
	const isMobile = useIsMobile();
	return (
		<div className='bg-foreground/5 mt-10 md:py-20 w-full py-10'>
			<Flex
				className='w-full md:w-[90%] mx-auto p-5'
				justify='center'
				gap={50}
				direction={'column'}
			>
				<Flex className='flex-col md:w-[50%] gap-10 md:pl-14 max-sm:items-center max-sm:justify-center'>
					<Badge
						variant='light'
						className='bg-secondary text-primary'
						fw={'normal'}
					>
						AT-HOME HEALTHCARE
					</Badge>
					<Text
						fw={'bolder'}
						fz={isMobile ? 35 : 45}
						lh={'h1'}
						ta={isMobile ? 'center' : 'left'}
					>
						Virtual Ward Integration
					</Text>
					<Text ta={isMobile ? 'center' : 'left'}>
						Facilitating hospital-level care in the comfort of a patient’s home.
						VitalSign AI bridges the gap between acute care and community
						monitoring, ensuring safety and efficiency through advanced remote
						diagnostics.
					</Text>
				</Flex>
				<Flex
					align={'center'}
					justify={'space-evenly'}
					className='max-sm:flex-col gap-10'
				>
					{INTEGRATIONS.map(({ title, description, icon }, _id) => (
						<FrameworkCard
							key={_id}
							id={_id}
							title={title}
							description={description}
							icon={icon}
							w={isMobile ? 0 : 400}
							h={269}
						/>
					))}
				</Flex>
			</Flex>
		</div>
	);
};

export default Integration;
