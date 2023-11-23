import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'java',
		color: 'orange',
		description:
			'Experienced with Java',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'py',
		color: 'yellow',
		description:
			'Experienced with Python',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'c',
		color: 'blue',
		description:
			'Familiar with C',
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		description:
			'Familiar with C++',
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'Familiar with CSS',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'Familiar with JavaScript',
		logo: Assets.JavaScript,
		name: 'JavaScript'
	}),
	s({
		slug: 'AWS',
		color: 'grey',
		description:
			'Familiar with AWS S3, CloudFront, and EC2',
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'Tf',
		color: 'orange',
		description:
			'Actively using TensorFlow to develop a machine learning models',
		logo: Assets.TensorFlow,
		name: 'TensorFlow'
	}),
	s({
		slug: 'mysql',
		color: 'blue',
		description: 'Familiar with MySQL and Database Management',
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'MongoDB',
		color: 'green',
		description:
			'Familiar with creating MongoDB databases and querying them',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'neo4j',
		color: 'blue',
		description:
			'Fairly familiar with Neo4j and Graph Databases',
		logo: Assets.Neo4j,
		name: 'Neo4j'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description:
			'Used NumPy for data analysis and manipulation in ML projects',
		logo: Assets.Numpy,
		name: 'NumPy'
	}),
	s({
		slug: 'Spring',
		color: 'green',
		description:
			'Developed a Android Application with a Spring backend',
		logo: Assets.Spring,
		name: 'Spring'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description:
			'Used NumPy for data analysis and manipulation in ML projects',
		logo: Assets.Numpy,
		name: 'NumPy'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description:
			'Used NumPy for data analysis and manipulation in ML projects',
		logo: Assets.Numpy,
		name: 'NumPy'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
