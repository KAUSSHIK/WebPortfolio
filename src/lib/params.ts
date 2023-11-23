import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Kausshik\'s Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons | undefined => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.Email:
			return Icons.Email;
	}
	return undefined;
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Kausshik',
	lastName: 'Manojkumar',
	description:
		'Hi, I am Kausshik Manojkumar, a passionate software engineer majoring in CS + Math @ Iowa State University. My passion for software lies with dreaming up ideas and making them come true with code. I love collaborating with other people who would love to make projects which, in turn, make a quantifiable change to tomorrow\'s society. Please click the links on the Navigation Bar to learn more about me, my work, and my projects.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/KAUSSHIK' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/kausshikm'
		},
		
		{
			platform: Platform.Email,
			link: 'kausshikmanojkumar@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
