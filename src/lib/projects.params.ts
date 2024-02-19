import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'swipehire-android-application',
		color: '#49ab58',
		description:
			'SwipeHire is a swipe-based matching app designed to revolutionize the recruitment process. This Android application, akin to a blend of LinkedIn and Tinder, enables hiring managers to efficiently select candidates for interviews.<div style="height: 10px;"></div>My role involved backend development, where I utilized Spring Boot, Maven, Hibernate, and MySQL. I implemented robust data structures and algorithms to ensure optimal performance and security.<div style="height: 10px;"></div>Additionally, I played a key role in establishing Continuous Integration/Continuous Deployment (CI/CD) pipelines, enhancing the app\'s functionality and user experience.<div style="height: 10px;"></div>For more details, explore the <a href="https://github.com/KAUSSHIK/SwipeHire">GitHub repository</a> or view my résumé.<br><br>To watch a demo of the app, click on the <a href="https://www.youtube.com/watch?v=sh5D8t5I2jo">link</a>.',
		shortDescription:
			'Imagine a crossover between Tinder and LinkedIn, but for hiring. SwipeHire is a new way to hire, and a new way to get hired.<br><br><b>Role:</b> Backend Developer',
		links: [{ to: 'https://github.com/KAUSSHIK/SwipeHire', label: 'SwipeHire on Github' }],
		logo: Assets.Springio,
		name: 'SwipeHire: A new way to hire',
		period: {
			from: new Date('2023-01-16'),
			to: new Date('2023-05-17')
		},
		skills: getSkills('java', 'Spring', 'mysql', 'gitlab'),
		type: 'Android Application',
	},
	{
		slug: 'brain-tumor-classification',
		color: '#f27f1b',
		description:
			'This Brain Tumor Classification project was deeply personal, driven by my motivation to contribute to the medical field following my mother\'s recovery from a brain tumor.<div style="height: 10px;"></div>Utilizing a dataset of over 3,000 MRI images, I developed a convolutional neural network (CNN) using TensorFlow and Keras.<div style="height: 10px;"></div>By integrating transfer learning with EfficientNet, I enhanced model accuracy by 30% over baseline models, achieving an impressive 97% accuracy on the test set.<div style="height: 10px;"></div>The model was rigorously validated with real-world data, showing a practical accuracy of 90%.<div style="height: 10px;"></div>An interactive UI was created with IPython widgets for real-time classification, demonstrating potential medical applications.<div style="height: 10px;"></div>This project not only highlights technical proficiency but also a commitment to leveraging technology for meaningful impact.<div style="height: 10px;"></div>For more details, explore the <a href="https://github.com/KAUSSHIK/BrainTumorClassification">GitHub repository</a> or view my résumé.',
		shortDescription:
			'Fine-tuned a deep learning model to classify brain tumors from 2D MRI scans comprising of over 3500 images. Verified predictions with real life data from hospitals in India. <br><br><b>Role:</b> Machine Learning Engineer',
		links: [{ to: 'https://github.com/KAUSSHIK/BrainTumorClassification', label: 'Classifier on Github' }],
		logo: Assets.TensorFlow,
		name: 'Brain Tumor Classification',
		period: {
			from: new Date('2023-09-16'),
			to: new Date('2023-10-17')
		},
		skills: getSkills('Tf', 'numpy', 'py', 'keras'),
		type: 'Machine Learning Project',
		// screenshots: [
		// 	{
		// 		label: 'screen 1',
		// 		src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '2',
		// 		src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '3',
		// 		src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '4',
		// 		src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '5',
		// 		src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '6',
		// 		src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	}
		// ]
	},
	{
		slug: 'aws-cloud-deployment',
		color: '#808080',
		description:
			'This project involved developing a personal portfolio website, emphasizing the use of AWS for deployment and management.<div style="height: 10px;"></div>I utilized AWS S3 Buckets for hosting static website content, ensuring scalability and reliability. AWS CloudFront was implemented as a content delivery network to reduce latency, enhance loading speeds, and provide a seamless global user experience.<div style="height: 10px;"></div>This deployment strategy showcases my skills in leveraging AWS technologies for efficient cloud solutions, demonstrating an advanced understanding of cloud infrastructure and its application in real-world scenarios. <div style="height: 10px;"></div>For more details, explore the <a href="https://dgsevtpq0sqzo.cloudfront.net./">website</a> or view my résumé.',
		shortDescription:
			'A showcase of AWS deployment skills through a personal portfolio website, utilizing S3 Buckets for storage and CloudFront for fast, global content delivery.<br><br><b>Role:</b> Cloud Deployment Engineer',
		links: [{ to: 'https://dgsevtpq0sqzo.cloudfront.net./', label: 'Visit My Portfolio' }],
		logo: Assets.AWS,
		name: 'Personal Website Deployment',
		period: {
			from: new Date('2023-07-01'),
			to: new Date('2023-08-29')
		},
		skills: getSkills('AWS', 'html', 'css', 'js'),
		type: 'Cloud Deployment',
	},
	{
		slug: 'coming-soon',
		color: '#b901ff',
		description:
			'To see more of my projects, please check back soon. I am constantly working on new and exciting projects, and I can\'t wait to share them with you!<div style="height: 10px;"></div> I am currently working on <ol><li>A web application for an Elevation Based Navigation System. For more details, explore the <a href="https://github.com/KAUSSHIK/EleNav">GitHub repository</a>.</li> <li>A Make2Innovate (M2I) initiative st Iowa State University where my team is trying to make a HUD (Heads Up Display) for astronaut helmets.</li><li>To look at all the porjects i worked on since highschool please explore my <a href="https://github.com/KAUSSHIK/">GitHub repositories</a>.</li></ol>',
		shortDescription:
			'More major projects are comign soon, but feel free to explore my GitHub for other relevant and smaller scale projects.<br><br><b>Role:</b> Aspiring Software Engineer',
		links: [{ to: 'https://github.com/KAUSSHIK/KAUSSHIK', label: 'Kausshik\'s GitHub' }],
		logo: Assets.github,
		name: 'Miscellaneous Projects',
		period: {
			from: new Date('2018-04-01')
		},
		skills: getSkills('py', 'java', 'css', 'js', 'sql', 'c', 'c++'),
		type: 'Other Projects',
	},
];

export default MY_PROJECTS;
