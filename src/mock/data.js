import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ayush Chakraborty', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My Name is',
  name: 'Ayush Chakraborty',
  subtitle: 'Senior Computer Science Major',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'About4.jpg',
  paragraphOne: 'Undergoing BS in Computer Science at University of Maryland- College Park. Always been a "go-to" person capable of thinking out of the box and delivering solutions in challenging situations.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Musico',
    info: 'A user friendly, secured flask app for music enthusiasts where one can browse through different musico pages and post anything and reply to anything',
    info2: 'Implemented using Python,Flask, Bootstrap, and is deployed on Heroku using CircleCI',
    url: 'https://musico-flask-app.herokuapp.com/',
    repo: 'https://github.com/aiy-wish/musico-flask-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Chord Dictionary',
    info: 'Built a simple Chord Dictionary created using javascript, Howler.js, and Tonal.js which would help any music beginners or amateurs to learn about different Chord sounds.',
    info2: '',
    url: '',
    repo: 'https://github.com/aiy-wish/Chord-Dictionary', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Virtual Reality Locomotion',
    info: 'Constructed a Virtual Museum for the Philips Collection Museum in D.C. as part of a research project. A Virtual Reality implementation in Museum has the potential to reach a far broader audience.',
    
    info2: 'This project presents a test‑bed and a space for experimentation for the design and evaluation of immersive experiences and architecturesbefore they are developed at full scale. Implemented using Unity, Visual Studio, C# for scripting, SDK’s like GoogleVR SDK, VRTK SDK and SteamVR SDK were used.',
    url: '',
    repo: 'https://github.com/aiy-wish/VR_Locomotion', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://github.com/aiy-wish',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/aiy_wish',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ayush-chakraborty/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aiy-wish',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
