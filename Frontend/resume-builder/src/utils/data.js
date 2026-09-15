import TEMPLATE_ONE_IMG from '../assets/template-one.png'
import TEMPLATE_TWO_IMG from '../assets/template-two.png'
import TEMPLATE_THREE_IMG from '../assets/template-three.png'


export const resumeTemplates = [
    {
        id: '01',
        thumbnailImg: TEMPLATE_ONE_IMG,
        colorPaletteCode: 'themeOne'
    },
    {
        id: '02',
        thumbnailImg: TEMPLATE_TWO_IMG,
        colorPaletteCode: 'themeOne'
    },
    {
        id: '03',
        thumbnailImg: TEMPLATE_THREE_IMG,
        colorPaletteCode: 'themeOne'
    },
]

export const themeColorPalette = {
    themeOne: [
        ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

        ["#E9FBFB", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
        ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
        ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
        ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
        ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

        ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
        ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
        ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
        ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
        ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

        ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
        ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
    ],
};

export const DUMMY_RESUME_DATA = {
    profileInfo: {
        profileImg: null,
        previewUrl: "",
        fullName: "John Doe",
        designation: "Senior Software Engineer",
        summary:
        "Passionate and results-driven developer with 6+ years of experience build",
    },
    contactInfo: {
        email: "john.doe@example.com",
        phone: "+1234567890",
        location: "#12 Anywhere, Any City, Any Country",
        linkedin: "https://linkedin.com/timetoprogram",
        github: "https://github.com/timetoprogram",
        website: "https://timetoprogram",
    },
    workExperience: [
      {
        company: "Teck Experts",
        role: "Senior Frontend Engineer",
        startDate: "2022-03",
        endDate: "2025-04",
        description:
        "Leading the frontend team to build scalable applications using Reactjs",
      },
      {
        company: "Coding Dev",
        role: "Full Stack Developer",
        startDate: "2020-01",
        endDate: "2022-02",
        description:
        "Worked on cross-functional teams developing full-stack solutions with Reactjs, Nodejs, Expressjs, MongoDB, Mongoose",
      },
      {
        company: "Startup Company",
        role: "Junior web Developer",
        startDate: "2018-12",
        endDate: "2019-12",
        description:
        "Build responsive websites for startups and small businesses.",
      },
    ],
    education: [
        {
            degree: "M.sc Software Engineering",
            institution: "University of Peshawar",
            startDate: "2021-08",
            endDate: "2023-06",
        },
        {
            degree: "B.sc Computer Science",
            institution: "University of Peshawar",
            startDate: "2017-08",
            endDate: "2021-05",
        },
        {
            degree: "High School diploma",
            institution: "Frontier Public High School",
            startDate: "2015-08",
            endDate: "2017-06",
        },
    ],
    skills: [
        { name: "JavaScript", progress: 95 },
        { name: "React", progress: 90 },
        { name: "Node.js", progress: 85 },
        { name: "TypeScript", progress: 75 },
        { name: "MongoDB", progress: 75 },
    ],
    projects: [
        {
            title: "Project Manager App",
            description:
              "A task and team management app build with MERN stack. Includes user roles",
            github: "https://github.com/timetoprogram/project-manager-app",
        },
        {
            title: "Blog CMS",
            description:
            "An e-commerce site built with Next.js and stripe integration. Supports cart",
            liveDemo: "https://e0commerce-demo.timetoprogram.com",
        },
        {
            title: "Project Manager App",
            description:
              "Atask and team management app build with MERN stack. Includes user roles",
            github: "https://github.com/timetoprogram/project-manager-app",
            liveDemo: "https://e0commerce-demo.timetoprogram.com",
        },
    ],
    certifications: [
        {
            title: "Full Stack Web Developer",
            issuer: "Udemy",
            year: "2023",
        },
        {
            title: "Frontend Web Developer",
            issuer: "Coursera",
            year: "2022",
        },
    ],
    languages: [
        { name: "English", progress: 90 },
        { name: "Turkish", progress: 70 },
        { name: "Urdu", progress: 100 },
    ],
    interests: ["Reading", "Open Source Contribution", "Hiking"],
};