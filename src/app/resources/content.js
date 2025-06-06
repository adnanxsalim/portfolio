import { InlineCode as IC } from "@/once-ui/components";

const person = {
  firstName: "Adnan",
  lastName: "Salim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  mainRole: "Full Stack Engineer", // What I do for a living
  role: "System Administrator", // Work Role
  position: "Intern", // Intern, Jr., Sr., etc
  company: "Hashroot",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Kolkata", // IANA time zone identifier, e.g., 'Europe/Vienna'
  locality: "Kozhikode, Kerala, India", // Where am I based in
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
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
    link: "mailto:hello@adnansal.im",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hey, there!</>,
  subline: (
    <>
      I'm {person.firstName}, I work as a {person.role} {person.position} at <IC>{person.company}</IC>.
      <br />
      In the after-hours, I build my own projects.
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
    link: "https://cal.com/adnansalim",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey! I'm {person.firstName}. I'm from Kozhikode, Kerala, India. I’m a B. Tech. graduate, majored in Computer Science.
        <br />
        I work as a {person.role} {person.position} at {person.company}.
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
        company: "Hashroot",
        timeframe: "May 2025 - Present",
        role: `${person.role} ${person.position}`,
        achievements: [
          <>
            Configured and maintained 12+ web servers and hosting environments
            including LAMP stack, Apache, Nginx, WordPress, Plesk, cPanel, and WHM.
          </>,
          <>
            Administered 4+ Windows Server tasks such as static IP set up, role-based IIS
            installation, RDP access, policies, shared folders, and security rules.
          </>,
          <>
            Monitored and analyzed 1,000+ log entries to detect threats, troubleshoot
            issues, and ensure optimal server performance and uptime.
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
      {
        company: "ipsr solutions ltd.",
        timeframe: "Oct 2024 - May 2025",
        role: `Linux, Cloud and DevOps Trainee`,
        achievements: [
          <>
            Gained hands-on expertise in Linux server administration with 100+ hours of
            CLI-based configuration and troubleshooting.
          </>,
          <>
            Configured and optimized 3+ types of Web Servers, inluding Apache & Nginx.
          </>,
          <>
            Integrated 10+ AWS services (e.g., EC2, S3, IAM, CloudWatch, Lambda, RDS) to
            build scalable and secure cloud architectures.
          </>,
          <>
            Developed and maintained several Ansible playbooks to automate
            infrastructure provisioning, reducing manual configuration time by 40%.
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
        description: <>Graduated in B. Tech. (Computer Science) from College of Engineering, Vadakara.</>,
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
        title: "Solidity",
        description: <>Building efficient smart contract code for blockchains.</>,
        images: [],
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
