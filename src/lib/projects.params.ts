import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'swipehire-android-application',
		color: '#49ab58',
		description:
			'SwipeHire is a swipe-based matching app (like Tinder) made to streamline the recruitment process. The app serves as a portal to hire candidates for open positions. The hiring manager of a company sees the candidates and chooses who is fit for the next round of interviews by \'swiping\' on them. Think of it as an offspring of LinkedIn and Tinder, but for hiring.<br> <br> To watch a <a href="https://www.youtube.com/watch?v=sh5D8t5I2jo">demo</a> of the app, click on the hyperlink.',
		shortDescription:
			'Imagine a crossover between Tinder and LinkedIn, but for hiring. SwipeHire is a new way to hire, and a new way to get hired.',
		links: [{ to: 'https://github.com/KAUSSHIK/SwipeHire', label: 'SwipeHire on Github' }],
		logo: Assets.Springio,
		name: 'SwipeHire: A new way to hire',
		period: {
			from: new Date('2023-01-16'),
			to: new Date('2023-05-16')
		},
		skills: getSkills('java', 'Spring', 'mysql', 'gitlab'),
		type: 'Android Application',
	},
	{
		slug: 'brain-tumor-classification',
		color: '#f27f1b',
		description:
			'A Deep Learning model to classify brain tumors from 2D MRI scans comprising of over 3500 images.',
		shortDescription:
			'A Deep Learning model to classify brain tumors from 2D MRI scans comprising of over 3500 images.',
		links: [{ to: 'https://github.com/KAUSSHIK/BrainTumorClassification', label: 'Classifier on Github' }],
		logo: Assets.TensorFlow,
		name: 'Brain Tumor Classification',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
