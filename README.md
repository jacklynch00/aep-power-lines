# AEP Power Lines Hackathon Project

## Contents
- [About](#about)
- [A Small Note About the Project](#a-small-note-about-the-project)
- [Getting Started](#getting-started)
- [Deploying to Vercel](#deploying-to-vercel)

## About
This project was designed and developed as a solo-project during the 2021 Ohio State HACK OHI/O Hackathon event. I chose the attempt the AEP Hackathon challenge which was asked us to create an easy way to injest and store hundreds, if not thousands, of images of AEP's power lines, power poles and transformers and then allow users to annotate and markup those images. This is in an effort to identify any poles or power lines that are down and need fixing. To solve this problem, I chose to create a webapp using the Next.js framework, paired with a serverless backend using Firebase Firestore, Firebase Storage (for storing images), and Firebase Cloud Functions.

### A Small Note About the Project
After the Hackathon was over, I needed to submit my code the contest, so I made a branch ```work-complete-during-hackathon``` that holds the code that I submitted. I have chosen to continue development of some of the features I wanted to implement, but did't have enough time to complete, as well as clean up the code and make it production ready.

## Getting Started
1. Clone the repository:
```git clone https://github.com/jacklynch00/aep-power-lines.git```

2. Navigate to firebase and create a new project
	- After creating the project, save the app configuration variables to a ```.env``` file in the root folder of the project
		- Make sure to prefix the environment variables with ```NEXT_PUBLIC_```
	- ```bash
		NEXT_PUBLIC_API_KEY=______
		NEXT_PUBLIC_AUTH_DOMAIN=______
		NEXT_PUBLIC_PROJECT_ID=______
		NEXT_PUBLIC_STORAGE_BUCKET=______
		NEXT_PUBLIC_MESSAGING_SENDER_ID=______
		NEXT_PUBLIC_APP_ID=______
		```
3. Once the environment file is created, you can execute the following to launch the development environment:
	```bash
	npm run dev
	# or
	yarn dev
	```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
