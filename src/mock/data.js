import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ayush Chakraborty', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My Name is ',
  name: 'Ayush Chakraborty',
  subtitle: 'Passionate about changing the world with technology.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'About4.jpg',
  paragraphOne: 'My name is Ayush Chakraborty. I’m a graduate of 2021 from the University of Maryland - College Park with a degree in Computer Science. I am most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://aiy-wish.github.io/static/media/resume.98034d70.pdf', // if no resume, the button will not show up
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
    title: 'Stockets',
    info: 'A user friendly, streamlit app for people interested in stocks, where one can see the predicted stock prices in future with every parameters listed.',
    info2: 'Implemented using Python,Streamlit, Pandas, and is deployed on Heroku using CircleCI',
    url: 'https://share.streamlit.io/aiy-wish/stockets/main/app.py',
    repo: 'https://github.com/aiy-wish/stockets', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Chord Dictionary',
    info: 'Built a simple Chord Dictionary created using javascript, Howler.js, and Tonal.js which would help any music beginners or amateurs to learn about different Chord sounds.',
    info2: '',
    url: 'https://ayushc.me/',
    repo: 'https://github.com/aiy-wish/Chord-Dictionary', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Virtual Reality Locomotion',
    info: 'Constructed a Virtual Museum for the Philips Collection Museum in D.C. as part of a research project. A Virtual Reality implementation in Museum has the potential to reach a far broader audience.',
    
    info2: 'This project presents a test‑bed and a space for experimentation for the design and evaluation of immersive experiences and architecturesbefore they are developed at full scale. Implemented using Unity, Visual Studio, C# for scripting, SDK’s like GoogleVR SDK, VRTK SDK and SteamVR SDK were used.',
    url: 'https://ayushc.me/',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
