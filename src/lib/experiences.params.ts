import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'collins-aerospace',
		company: 'Collins Aerospace',
		description: 'Working as a software developer intern at Collins Aerospace a subsidiary of Raytheon Technologies (RTX).',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Cedar Rapids, IA',
		period: { from: new Date('2023-05-29') },
		skills: getSkills('svn', 'js', 'html'),
		name: 'Software Engineering Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.RTX,
		shortDescription: 'At Collins Aerospace, I executed high-level and low-level tests within an Agile environment, significantly enhancing software reliability. My role involved translating requirements into structured ADA code, aligning with project objectives for flight management systems. I led the formulation and refinement of test cases, improving testing efficiency and mitigating security risks. Additionally, I played a key role in updating an old code base with newer calculations to improve the accuracy of flight management systems'
	},
	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
	// 	name: 'Freelancer',
	// 	color: '#ffffff',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'At Collins Aerospace, I executed high-level and low-level tests within an Agile environment, significantly enhancing software reliability. My role involved translating requirements into structured ADA code, aligning with project objectives for flight management systems. I led the formulation and refinement of test cases, improving testing efficiency and mitigating security risks. Additionally, I played a key role in updating an old code base with newer calculations to improve the accuracy of flight management systems'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: '#ffffff',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: ''
	// }
];

export default MY_EXPERIENCES;
