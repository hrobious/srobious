export const profile = {
  name: "Md Robious Sunny",
  han: "羅比烏斯",
  title: "Software Quality Assurance Engineer",
  subtitles: ["Data Analyst", "Statistics & Data Science"],
  tagline: "Turning Data into Insights",
  location: "Khilkhet Thana, Dhaka, Bangladesh",
  address: "Bashundhara R/A, Block-G, Road-9, Dhaka, Bangladesh",
  phone: "01710360359",
  email: "srobious1996@gmail.com",
  linkedin: "linkedin.com/in/srobious",
  linkedinUrl: "https://linkedin.com/in/srobious",
  birthday: "July 28",
  about:
    "I am a motivated and detail-oriented professional with experience as a Data Annotator at Acote Group. During my time there, I developed strong skills in handling large datasets, labeling data accurately, and maintaining quality standards to support AI and machine learning projects. I have a keen interest in working with data and continuously improving my analytical and technical abilities.",
  about2:
    "I am particularly passionate about data-related roles and Software Quality Assurance (SQA), where I can apply my attention to detail, problem-solving mindset, and commitment to delivering high-quality results. I am always eager to learn new tools and technologies, adapt to new challenges, and contribute effectively to a dynamic team. My goal is to build a career where I can grow professionally while adding value through reliable and efficient work.",
};

export type Role = {
  role: string;
  han: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  place?: string;
  notes: string[];
};

export const experience: Role[] = [
  {
    role: "Research Assistant",
    han: "研究",
    company: "Intelligent Image Management, Inc. (IIMI) USA",
    type: "Full-time",
    period: "Jul 2026 — Present",
    duration: "2 mos",
    place: "Remote",
    notes: [
      "Supporting research workflows on large-scale image and document datasets.",
      "Verifying output accuracy and reporting quality deviations.",
    ],
  },
  {
    role: "Data Annotator",
    han: "標注",
    company: "Acote Group",
    type: "Full-time",
    period: "Nov 2025 — May 2026",
    duration: "7 mos",
    notes: [
      "Labeled and validated large datasets powering AI / ML training pipelines.",
      "Upheld annotation guidelines and quality thresholds across batches.",
    ],
  },
  {
    role: "Information Technology Specialist",
    han: "技術",
    company: "Pulze Edu",
    type: "Full-time",
    period: "Feb 2025 — Oct 2025",
    duration: "9 mos",
    notes: [
      "Maintained systems, resolved technical issues and supported daily operations.",
      "Documented recurring faults to reduce repeat incidents.",
    ],
  },
  {
    role: "Data Management Analyst",
    han: "數據",
    company: "Next Accessories Ltd.",
    type: "Full-time",
    period: "Feb 2024 — Nov 2024",
    duration: "10 mos",
    place: "Remote",
    notes: [
      "Organised, cleaned and reconciled operational data records.",
      "Produced reporting that supported management decisions.",
    ],
  },
  {
    role: "Information Technology Specialist",
    han: "資訊",
    company: "OSCL — Overseas Study Counseling Ltd.",
    type: "Full-time",
    period: "Nov 2022 — Sep 2023",
    duration: "11 mos",
    notes: [
      "Owned IT infrastructure, user support and data integrity of student records.",
    ],
  },
  {
    role: "Information Technology Executive",
    han: "實習",
    company: "OSCL — Overseas Study Counseling Ltd.",
    type: "Internship",
    period: "May 2022 — Oct 2022",
    duration: "6 mos",
    notes: ["Assisted the IT team with systems, records and daily operations."],
  },
];

export const education = [
  {
    school: "American International University-Bangladesh",
    degree: "Bachelor of Science, Computer Engineering",
    period: "Aug 2017 — Aug 2022",
    han: "學士",
  },
  {
    school: "BIAM Model School & College",
    degree: "H.S.C, Science",
    period: "Aug 2014 — Jul 2016",
    han: "高中",
  },
  {
    school: "BIAM Model School & College",
    degree: "S.S.C, Science",
    period: "Jan 2004 — Jul 2014",
    han: "中學",
  },
];

export const skills = [
  { name: "Manual Testing & Test Cases", han: "測試", level: 88 },
  { name: "Bug Reporting & Tracking", han: "缺陷", level: 85 },
  { name: "Data Annotation & Labeling", han: "標注", level: 94 },
  { name: "Data Cleaning & Analysis", han: "分析", level: 86 },
  { name: "Statistics & Reporting", han: "統計", level: 80 },
  { name: "SQL & Spreadsheets", han: "查詢", level: 82 },
];

export const virtues = [
  {
    han: "精",
    title: "Precision",
    text: "Detail-oriented review of every dataset, record and test path.",
  },
  {
    han: "信",
    title: "Reliability",
    text: "Consistent quality standards delivered on schedule, batch after batch.",
  },
  {
    han: "學",
    title: "Learning",
    text: "A continuous learner adapting quickly to new tools and technologies.",
  },
  {
    han: "察",
    title: "Insight",
    text: "Turning raw, noisy data into clear and usable insight.",
  },
];

export const nav = [
  { id: "hero", label: "Home", han: "首" },
  { id: "about", label: "About", han: "志" },
  { id: "experience", label: "Journey", han: "歷" },
  { id: "skills", label: "Craft", han: "藝" },
  { id: "education", label: "Study", han: "學" },
  { id: "contact", label: "Contact", han: "訊" },
];
