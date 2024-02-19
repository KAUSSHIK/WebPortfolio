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
		shortDescription:"At Collins Aerospace, I executed high-level and low-level tests within an Agile environment, significantly enhancing software reliability.<div style=\"height: 10px;\"></div>My role involved translating requirements into structured ADA code, aligning with project objectives for flight management systems. In adherence to DO-178B and DO-178C guidelines, I led the formulation and refinement of certain test cases, improving testing efficiency and mitigating security risks.<div style=\"height: 10px;\"></div>Additionally, I played a key role in updating a vast old code base with newer calculations to improve the accuracy of flight management systems. My work contributed to maintaining high standards of software quality and reliability, ensuring compliance with rigorous aerospace software development standards."
	},
	{
		slug: 'it-technician',
		company: 'Iowa State University',
		description: 'Worked as a Student IT Technician at the Department of Physics at Iowa State University.',
		contract: ContractType.PartTime,
		type: 'IT Technician',
		location: 'Ames, IA',
		period: { from: new Date('2022-08-20'),
		to: new Date('2023-05-14') },
		skills: getSkills('html', 'css', 'js', 'linux', 'bash'),
		name: 'Student IT Technician',
		color: '#ffffff',
		links: [],
		logo: Assets.ISU,
		shortDescription: 'In my role as a Student IT Technician at Iowa State University\'s Department of Physics, I applied advanced computer programming skills, notably in JavaScript, to develop automated solutions that addressed long-standing IT tickets.<div style="height: 10px;"></div>This initiative not only enhanced operational efficiency but also led to a dramatic 90% reduction in related issues.<div style="height: 10px;"></div>I provided critical technical support for software problems, ensuring minimal downtime and optimizing the user experience.<div style="height: 10px;"></div>My work contributed to maintaining high standards of IT support services, leveraging skills in HTML, CSS, Linux, and Bash scripting to improve departmental IT operations.'
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
