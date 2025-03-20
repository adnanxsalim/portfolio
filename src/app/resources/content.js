import { InlineCode as IC } from "@/once-ui/components";

const person = {
  firstName: "Adnan",
  lastName: "Salim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  mainRole: "Full Stack Engineer", // What I do for a living
  role: "Cloud and DevOps Engineer", // Work Role
  position: "Intern -", // Intern, Jr., Sr., etc
  company: "ipsr solutions ltd",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // IANA time zone identifier, e.g., 'Europe/Vienna'
  locality: "Kozhikode, Kerala, India", // Where am I based in
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about tech, personal development and such.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adnanxsalim",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adnan-a-salim/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/adnanxsalim",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adnanxsalim@outlook.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hey, there!</>,
  subline: (
    <>
      I'm {person.firstName}, I work as a {person.role} at <IC>{person.company}</IC>.<br />I craft and optimize intuitive, scalable cloud infrastructure.<br /> On the after hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.locality}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey! I'm {person.firstName}. I'm from Kozhikode, Kerala, India. I’m a B. Tech. graduate, majoring in Computer Science.
        <br />
        I work as a Cloud and DevOps Intern at ipsr solutions ltd. I’ve completed several projects in this domain, including various web hosting methods, AWS services, and DevOps tools such as Ansible and Docker. 
        <br /><br />
        Apart from that, I've been fiddling with things for the last 5+ years.
        <br /><br />
        My current skill stack:<br />
        - DevOps (AWS, Linux System Administration, Ansible, Scripting, etc)<br />
        - Development (self-taught; Next.js, Blockchain, etc)<br />
        - Design (self-taught; using Figma)<br />
        - Marketing (LinkedIn Certified Digital Marketing Specialist)<br />
        - Trading (Stocks and Crypto)<br />
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "ipsr solutions ltd.",
        timeframe: "Oct 2024 - Present",
        role: `${person.position} ${person.role}`,
        achievements: [
          <>
            Specialized in Linux server administration techniques and tools through the command line.
          </>,
          <>
            Configured and optimized Linux-based web hosting environments in multiple ways including
            Apache, WordPress, Nginx, virtual hosting setups, and LAMP/LEMP stack deployments.
          </>,
          <>
            Integrated diverse AWS services including EC2 instances, Lambda functions, IAM, CloudWatch
            monitoring and automation, SES/SNS notifications, EBS and EFS storage, RDS databases, VPC
            setups, Load Balancer configurations, Auto-Scaling, and Elastic Beanstalk environments.
          </>,
          <>
            Optimized application delivery through Ansible for infrastructure automation, Jenkins for
            CI/CD processes, and Docker for container deployment and optimization.
          </>,
          <>
            Refined understanding of cPanel, WHM and DNS.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "APJ Abdul Kalam Technological University",
        description: <>Graduated in B. Tech. Computer Science from College of Engineering, Vadakara.</>,
      },
      {
        name: "ipsr solutions ltd.",
        description: <>Trained as a Cloud and DevOps Intern.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Linux Administration",
        description: <>Manipulating linux systems from the command line interface.</>,
        images: [],
      },
      {
        title: "AWS",
        description: <>Launching cloud infrastructure, load balancing, storage, monitoring and automation</>,
        images: [],
      },
      {
        title: "Web Hosting",
        description: <>Various types of web hosting on Linux-based servers.</>,
        images: [],
      },
      {
        title: "DevOps Tools",
        description: <>Ansible to automate (IaC), Docker for containerization, Jenkins for CI/CD.</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Shadcn UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Figma",
        description: <>Creating designs in Figma with speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech, personal development and more.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
