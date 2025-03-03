const core = [
  {
    img: 'ryan-carniato.jpeg',
    github: 'ryansolid',
    name: 'Ryan Carniato',
    role: 'Project Founder and Manager',
    bio: 'Front-end JS performance enthusiast and long time super-fan of fine-grained reactive programming.',
  },
  {
    img: 'david-dibiase.jpeg',
    github: 'davedbase',
    name: 'David Di Biase',
    role: 'Contributor, Website and Community Manager',
    bio: 'David is a full-stack developer. He owns and operates Pilot, a Toronto-based brand technology company.',
  },
  {
    img: 'alexandre-mouton-brady.jpeg',
    github: 'amoutonbrady',
    name: 'Alexandre Mouton Brady',
    role: 'Library Maintainer',
    bio: 'A multi-talented web developer with a preference for the front. He takes great pleasure in making the web more alive.',
  },
  {
    img: 'milo-m.svg',
    github: 'modderme123',
    name: 'Milo M.',
    role: 'Library Maintainer',
    bio: ' A web developer with an interest in reactive programming and making the web a better place.',
  },
  {
    img: 'ryan-turnquist.jpeg',
    github: 'rturnq',
    name: 'Ryan Turnquist',
    role: 'Library Maintainer',
    bio: 'Full-stack developer, web UX enthusiast, passionate problem solver.',
  },
  {
    img: 'dan-jutan.jpeg',
    github: 'jutanium',
    name: 'Dan Jutan',
    role: 'Documentation Engineer',
    bio: 'Web developer passionate about using the web to make things make sense.',
  },
] as const;

const translators = [
  {
    name: 'Gaving Cong',
    language: 'zh-cn',
    flag: '🇨🇳',
    link: 'https://github.com/Gavin-Gong',
  },
  {
    name: 'Jun Shindo (jay-es)',
    language: 'jp',
    flag: '🇯🇵',
    link: 'https://github.com/jay-es',
  },
  {
    name: 'David Di Biase',
    language: 'it',
    flag: '🇮🇹',
    link: 'https://github.com/davedbase',
  },
  {
    name: 'Candido Sales Gomez',
    language: 'pt',
    flag: '🇧🇷',
    link: 'https://github.com/candidosales',
  },
  {
    name: 'Steven Yung',
    language: 'fr',
    flag: '🇫🇷',
    link: 'https://github.com/xstevenyung',
  },
  {
    name: 'Mehdi (MidouWebDev)',
    language: 'fr',
    flag: '🇫🇷',
    link: 'https://github.com/MidouWebDev',
  },
  {
    name: 'Athif Humam',
    language: 'in',
    flag: '🇮🇩',
    link: 'https://github.com/athif23',
  },
  {
    name: 'Alex Lohr',
    language: 'de',
    flag: '🇩🇪',
    link: 'https://github.com/atk',
  },
  {
    name: 'Pheianox',
    language: 'ru',
    flag: '🇷🇺',
    link: 'https://github.com/pheianox',
  },
  {
    name: 'TheFedaikin',
    language: 'ru',
    flag: '🇷🇺',
    link: 'https://github.com/TheFedaikin',
  },
  {
    name: 'Yury Popov',
    language: 'ru',
    flag: '🇷🇺',
    link: 'https://github.com/nairabrab',
  },
  {
    name: 'Vladislav Mamon',
    language: 'ru',
    flag: '🇷🇺',
    link: 'https://github.com/norskeld',
  },
  {
    name: 'Lechuck Roh',
    language: 'ko-kr',
    flag: '🇰🇷',
    link: 'https://github.com/lechuckroh',
  },
  {
    name: 'Adrián Curiel',
    language: 'es',
    flag: '🇪🇸',
    link: 'https://github.com/havc-dev',
  },
];

const contributors = [
  {
    name: 'Eric Rochon',
    company: 'Brood Studio',
    link: 'https://brood.studio',
    detail: "A special thanks to Eric for his incredible contribution to Solid's brand.",
  },
  {
    name: 'Sarah Kim',
    company: 'Pilot Interactive',
    link: 'https://www.pilotinteractive.io',
    detail: 'Sarah has graciously provided her expertise in usability and design.',
  },
  {
    name: 'Les Pruszynski',
    company: '',
    link: 'https://github.com/seneca',
    detail: 'Les provides support for copywriting on the website and our tutorials.',
  },
  {
    name: 'Joaquín (userquin)',
    company: '',
    link: 'https://github.com/userquin',
    detail: 'Provided extreme guidance and support for PWA integration of our website.',
  },
  {
    name: 'Erik Demaine',
    company: '',
    link: 'https://github.com/edemaine',
    detail:
      'Provided excellent documentation support and a major contributor to enabling Dark Mode on Solid Site.',
  },
  {
    name: 'Évelyne Lachance',
    company: '',
    link: 'https://github.com/eslachance',
    detail: "Lead Advocate and head moderator of Solid's Discord community.",
  },
  {
    name: 'Ali Sal',
    company: '',
    link: 'https://github.com/AlidotSal',
    detail: 'Exceptional support with testing, design and maintaining Solid Site.',
  },
] as const;

const ecosystem = [
  {
    name: 'Joe Pea',
    company: 'NASA',
    link: 'https://github.com/trusktr',
    detail: 'Founder of Lume and a powerhouse in UI.',
  },
  {
    name: 'Moshe Uminer',
    company: '',
    link: 'https://www.pilotinteractive.io',
    detail: 'Full-stack support and TypeScript guidance.',
  },
  {
    name: 'Steve Sewell',
    company: 'Builder.io',
    link: 'https://www.builder.io',
    detail: 'Founder of Builder.io CMS and creator of JSX-Lite.',
  },
  {
    name: 'Vish Vadlamani',
    company: '',
    link: '',
    detail: 'Provides support and insight on Solid.',
  },
  {
    name: 'Alex Lohr',
    company: '',
    link: '',
    detail: 'Web developer and engineer.',
  },
  {
    name: 'Alexis Munsayac',
    company: 'LyonInc',
    link: 'https://lxsmnsyc.vercel.app/',
    detail: 'Vice president of software engineer and research at LyonInc.',
  },
  {
    name: 'Caleb Taylor',
    company: '',
    link: 'https://github.com/aquaductape',
    detail: 'Front-End Developer',
  },
  {
    name: 'Shaun Regenbaum',
    company: '402 Media',
    link: 'https://github.com/Shaun-Regenbaum',
    detail: 'Front-end developer and general Solid supporter',
  },
  {
    name: 'Oren Elbaum',
    company: '',
    link: 'https://github.com/orenelbaum',
    detail: 'Developer and active ecosystem contributor.',
  },
  {
    name: 'high1',
    company: '',
    link: 'https://github.com/high1',
    detail: 'Active community contributor and starter maintainerter.',
  },
] as const;

export const ContributorsData = () => ({
  core,
  contributors,
  translators,
  ecosystem,
});

export type ContributorsDataProps = ReturnType<typeof ContributorsData>;
