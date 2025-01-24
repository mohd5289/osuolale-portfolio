export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Bills Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Carepulse",
    des: "A Health Care Management Information System",
    img: "/carepulse.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg", "/sentry.svg"],
    link: "https://carepulse-kohl-sigma.vercel.app/",
  },
  {
    id: 2,
    title: "News App in Jetpack Compose",
    des: "Seamlessly get the latest news with An Android app built with Jetpack Compose and the latest android libraries.",
    img: "/NewsComposeApp.png",
    iconLists: ["/android.svg", "/AndroidStudio1.svg", "/Kotlin.svg", "/c.svg"],
    link: "https://github.com/mohd5289/NewsComposeApp.git",
  },
  {
    id: 3,
    title: "NBTE Information Portal",
    des: "National Board for Technical Education Digital Directory which contains the Directory of Accredited Programmes",
    img: "/NBTEInfoPortal.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/Laravel.svg",
      "/mysql.svg",
    ],
    link: "https://nbte-information-portal.vercel.app/",
  },
  {
    id: 4,
    title: "Bills",
    des: "Create a seamless payment gateway for your subscribers",
    img: "/Bills.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/prisma-2.svg",
      "/postgresql-icon.svg",
    ],
    link: "https://bills-user-frontend.onrender.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Osuolale was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osuolale enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osuolale is the ideal partner.",
    name: "Alex Oamen",
    title: "Project Manager",
  },
  {
    quote:
      "Collaborating with Osuolale was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osuolale enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osuolale is the ideal partner.",
    name: "Alex Oamen",
    title: "Project Manager",
  },
  {
    quote:
      "Collaborating with Osuolale was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osuolale enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osuolale is the ideal partner.",
    name: "Alex Oamen",
    title: "Project Manager",
  },
  {
    quote:
      "Collaborating with Osuolale was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osuolale enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osuolale is the ideal partner.",
    name: "Alex Oamen",
    title: "Project Manager",
  },
  {
    quote:
      "Collaborating with Osuolale was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osuolale enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osuolale is the ideal partner.",
    name: "Alex Oamen",
    title: "Project Manager",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Next.js and laravel",
    desc: "Lead the development of a NBTE Information Portal using React.js and Laravel, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Android Kotlin App Dev - JSM Tech",
    desc: "Designed and developed a News app for both Android platforms using Android Studio with Kotlin.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the development of a Carepulse for a Health Information Management System for a client.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies for Bills website.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mohd5289",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/mohd5289",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammed-osuolale-ibrahim-704aa2ab",
  },
];
