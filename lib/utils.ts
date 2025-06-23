import { Activity, FileSpreadsheet, PieChart, BarChart4, Award, Mail, TrendingUp, Users } from "lucide-react";


export const educationData = [
    {
        institution: "Nigerian Navy Secondary School Abeokuta",
        degree: "SSCE, WASSCE",
        year: "2014 - 2020",
        location: "Ogun, Nigeria",
        description: "High School Education"
    },
    {
        institution: "Lead City University",
        degree: "BSc. Public Relations",
        year: "2021 - 2024",
        location: "Ibadan, Nigeria",
        description: "Majored in Public relations at Lead City, University"
    },
    {
        institution: "SAIL",
        degree: "Growth Marketing Program",
        year: "2024 - 2025",
        location: "Lagos, Nigeria",
        description: "Data-driven marketing strategies and analytics"
    }
];

export const skills = [
    { name: "Email Marketing", icon: Mail, level: 95 },
    { name: "Growth Analytics", icon: TrendingUp, level: 90 },
    { name: "Customer Segmentation", icon: Users, level: 88 },
    { name: "Campaign Optimization", icon: Award, level: 92 }
];


export const projects: Project[] = [
    {
        title: "Fruit Frenzy Digital Marketing Strategy",
        details: "Comprehensive marketing strategy that increased brand awareness and product sales through targeted digital campaigns.",
        icon: Activity,
        skillsUsed: ["Social Media", "Content Planning"],
        live_url: "https://docs.google.com/document/d/1gG1yIsViduRONH_vbn0-7f1DMlexMj8O/edit?usp=sharing&ouid=117197134096504906065&rtpof=true&sd=true"
    },
    {
        title: "Content Calendar Development",
        details: "Created strategic content calendars for social media platforms, resulting in consistent brand messaging and increased engagement rates.",
        icon: FileSpreadsheet,
        skillsUsed: ["Social Media", "Content Planning"],
        live_url: "https://docs.google.com/spreadsheets/d/1XP_63dAxpAnapyswlA_NL2wDrDbJM1Gb/edit?usp=sharing&ouid=117197134096504906065&rtpof=true&sd=true"
    },
    {
        title: "Dangote Cement Performance Analysis",
        details: "In-depth analysis of performance metrics leading to actionable recommendations that improved operational efficiency.",
        icon: BarChart4,
        skillsUsed: ["Data Analysis", "Reporting"],
        live_url: "https://docs.google.com/document/d/1Zj6GoA00sIiRLgPpRQm4u0O0ydirtFqH/edit?usp=sharing&ouid=117197134096504906065&rtpof=true&sd=true"
    },
    {
        title: "Affiliate Marketing Project",
        details: "Designed and implemented an affiliate marketing program that generated new revenue streams and expanded the brand's reach.",
        icon: PieChart,
        skillsUsed: ["Affiliate Marketing", "Growth"],
        live_url: "https://drive.google.com/file/d/1Q08yyH0VoMHJWJbwZ61cB1fr0sVViN7_/view?usp=sharing"
    },
]