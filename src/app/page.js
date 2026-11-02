"use client";

import { useEffect, useState } from "react";

const PORTFOLIO_DATA = {
  name: "Gita Elizza Larasati",
  role: "Information Systems Graduate",
  email: "gitaelizza@gmail.com",
  linkedin: "https://www.linkedin.com/in/gitaelizza/",
  resume: "https://drive.google.com/drive/folders/1FLV09pWH8WAaCCDFATDc6e8qXz2NG9Zb?usp=drive_link",

  shortAbout:
    "An Information Systems graduate who enjoys learning how things work and finding ways to make them better. With a mix of technical and business experience, I'm always open to new challenges.",

  fullAbout:
    "That’s my motto: a reminder to give my best, trust the process, and stay open to every opportunity. I’m an Information Systems graduate from Institut Teknologi Sepuluh Nopember (ITS) with a focus on business and system analysis. From mapping business processes during my internship at PT PLN (Persero) UIP2B JAMALI, to documenting software requirements and designing dashboards in academic projects, I enjoy turning business needs into clear, structured solutions. Through my roles as a teaching assistant and in student organizations, I’ve also learned to communicate clearly, collaborate across teams, and keep growing along the way.",

  education: {
    degree: "Bachelor of Information Systems",
    university: "Institut Teknologi Sepuluh Nopember",
    period: "2022 — 2026",
    gpa: "3.67 / 4.00",
    thesisTitle:
      "Analysis Of The Effect Of Barriers On Loyalty and E-WOM In Online Food Delivery (OFD) Services Using Partial Least Squares-Structural Equation Modeling. Case Study: GoFood",
  },

  trainings: [
    /*{
      id: "train-1",
      title: "TEFL",
      organizer: "Penyelenggara",
      period: "2025",
      description:
        "X",
      certificates: [
        {
          title: "Certificate — Training Title 1",
          image: "/images/certs/train-1.jpg",
        },
      ],
    },*/
    {
      id: "train-1",
      title: "Introduction to SAP S/4HANA with GBI 4.2",
      organizer: "SAP University Alliances",
      period: "2024",
      description:
        "Completed the Introduction to SAP S/4HANA with GBI 4.2 training to learn the fundamentals of Enterprise Resource Planning (ERP) and how it integrates a company’s business processes. Gained hands-on experience with SAP S/4HANA through the Global Bike Inc. (GBI) 4.2 case study, working with the Sales and Distribution (SD), Materials Management (MM), and Production Planning (PP) modules, including business process flows, the relationships between processes and modules, and data management in an integrated system. The training provided an understanding of how ERP systems support operational efficiency, data consistency, and information-based decision-making.",
      certificates: [
        {
          title: "Certificate — Introduction to SAP S/4HANA with GBI 4.2",
          image: "/images/sertifsap.png",
        },
      ],
    },
    {
      id: "train-2",
      title: "Latihan Keterampilan Manajemen Mahasiswa Pra Tingkat Dasar (LKMM Pra-TD)",
      organizer: "Fakultas Teknologi Elektro dan Informatika Cerdas ITS",
      period: "2023",
      description:
        "Completed the Student Management Skills Training to build foundational self-management and organizational skills for academic and organizational roles. The program covered critical thinking, effective communication, teamwork, time management, and problem-solving. It also provided an understanding of planning, prioritization, decision-making, and accountability in achieving shared goals.",
      certificates: [
        {
          title: "Certificate — Latihan Keterampilan Manajemen Mahasiswa Pra Tingkat Dasar (LKMM Pra-TD)",
          image: "/images/sertifpratd.png",
        },
      ],
    },
    {
      id: "train-3",
      title: "Latihan Keterampilan Mahasiswa Wirausaha (LKMW)",
      organizer: "Institut Teknologi Sepuluh Nopember",
      period: "2022",
      description:
        "Completed the Student Entrepreneurship Skills Training to build foundational knowledge and skills in designing and managing a business. The program focused on entrepreneurial mindset, business opportunity identification, business planning, creativity, and innovation in developing value-adding solutions. It also strengthened critical thinking, problem-solving, decision-making, and teamwork in developing business ideas in a structured way.",
      certificates: [
        {
          title: "Certificate — Latihan Keterampilan Mahasiswa Wirausaha (LKMW)",
          image: "/images/sertiflkmw.png",
        },
      ],
    },
  ],

  skills: {
    hard: [
      {
        group: "Business Process & ERP",
        items: ["SAP S/4HANA Fiori", "Odoo", "ProcessMaker", "BPMN.io", "SAP Signavio"],
      },
      {
        group: "Data & Analytics",
        items: ["Power BI", "Excel", "MySQL", "SmartPLS", "SPSS", "DBeaver"],
      },
      {
        group: "Programming & Frameworks",
        items: ["Javascript", "HTML", "R", "Java", "PHP", "Python", "Laravel", "Next.js"],
      },
      {
        group: "System Analysis & Documentation",
        items: ["Software Requirements Specification (SRS)",  "Business Requirements Document (BRD)", "UML (Use Case, Robustness, Sequence, Class Diagram)", "Business Process Modeling", "Functional Specification Document (FSD)"],
      },
    ],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
    soft: [
      "Analytical Thinking",
      "Communication",
      "Attention to Detail",
      "Leadership",
      "Problem Solving",
      "Teaching & Mentoring",
      "Teamwork",
      "Adaptability",
      "Time Management",
    ],
  },

  workExperience: [
  {
    id: "exp-w1",
    role: "SCADA & Automation Intern",
    company: "PT. PLN (Persero) UIP2B JAMALI",
    period: "Aug 2025 - Des 2025",
    location: "Depok, Indonesia",

    points: [
      "Analyzed operational business processes and identified system requirements and workflow improvements.",
      "Modeled and documented the end-to-end procurement process, from planning to goods receipt, and managed technical equipment inventory data.",
      "Performed point-to-point (P2P) data validation across 20+ substations by reconciling field data with central SCADA records, and supported system migration through data validation and reconciliation.",
      "Monitored real-time grid data across 600+ substations in Java-Madura-Bali using Grafana and monitoring systems.",
    ],

    skills: [
      "Business Process Analysis",
      "Data Validation",
      "Procurement Process",
      "SCADA",
    ],

    certificates: [
      {
        title: "Internship Certificate — PT PLN (Persero) UIP2B JAMALI",
        image: "/images/sertifpln.jpg",
      },
      
      {
        label: "View evaluation",
        title: "Internship Evaluation — PT PLN (Persero) UIP2B JAMALI",
        image: "/images/penilaianmagang.jpg",
      },
    ],

    photos: [
      {
        caption: "SCADA & OTM Intern",
        url: "/images/magangpln.jpeg",
      },
    ],
  },

  {
    id: "exp-w2",
    role: "Teaching Assistant and Grader for Business Process Management",
    company: "Enterprise Systems Laboratory, Information Systems ITS",
    period: "Mar 2025 - Jun 2025",
    location: "Surabaya, Indonesia",

    
    points: [
      "Guided business process modeling and workflow automation implementation using ProcessMaker, BPMN.io, and SAP Signavio across 2 classes, with 40+ students per session.",
      "Mentored students in designing end-to-end business process models and building automated workflows through case-based projects, resolving configuration and implementation issues.",
      "Reviewed and graded 65 submissions against functionality, efficiency, and process logic, providing structured feedback to improve design quality.",
    ],

    skills: [
      "BPMN",
      "ProcessMaker",
      "SAP Signavio",
    ],

    certificates: [
      {
        label: "View Certificate 1",
        title: "Teaching Assistant Certificate — Business Process Management (Modeling)",
        image: "/images/sertifpemodelan.jpg",
      },
      {
        label: "View Certificate 2",
        title: "Teaching Assistant Certificate — Business Process Management (Automation)",
        image: "/images/sertifotomasi.jpg",
      },
    ],

    photos: [
      {
        caption: "MPB",
        url: "/images/mpb.jpeg",
      },
    ],
  },
  {
    id: "exp-w3",
    role: "Teaching Assistant and Grader for Enterprise Systems",
    company: "Enterprise Systems Laboratory, Information Systems ITS",
    period: "Sep 2024 - Oct 2024",
    location: "Surabaya, Indonesia",

    
    points: [
      "Supported hands-on implementation of Odoo ERP modules through business case studies, with 40+ students per session.",
      "Served as person in charge (PIC) for 4 project groups, providing technical guidance on Odoo configuration and implementation aligned with case requirements and resolving issues along the way.",
      "Evaluated Odoo implementation results from 4 groups on configuration accuracy and alignment with business requirements, and provided recommendations for improvement.",
    ],

    skills: [
      "Odoo", "ERP", "Business Case Analysis",
    ],

    certificates: [
      {
        title: "Teaching Assistant Certificate — Enterprise Systems",
        image: "/images/sertifodoo.png",
      },
    ],

    photos: [
      {
        caption: "Odoo",
        url: "/images/odoo.jpeg",
      },
    ],
  },
],

  orgExperience: [
    {
      id: "org-1",
      
      documentation: ["/images/wisuda130.jpeg", "/images/komunbadmin.jpeg"],
      organization: "Himpunan Mahasiswa Sistem Informasi",
      period: "Apr 2024 - Mar 2025",
      role: "Staff of Internal Affairs",
      description:
        "Managed a 140+ member badminton community, achieving 100% of KPI targets for membership, training attendance, and session frequency across 10 training sessions. Led 8 Liaison Officer (LO) staff for Wisuda 130, coordinating 200+ graduates and 400+ guests to ensure smooth event operations. Served as Treasurer for Wisuda 129, managing financial administration including budget planning, transaction records, and accountability reporting.",
      certificates: [
        {
          title: "Certificate — Staff of Internal Affairs, Himpunan Mahasiswa Sistem Informasi",
          image: "/images/sertifia.png",
        },
      ],
      },
    {
      id: "org-2",
      
      documentation: ["/images/damen1.jpeg", "/images/damen2.jpeg"],
      organization: "ISE! ITS 2024",
      period: "Mar 2024 - Nov 2024",
      role: "Director of Data Management",
      description:
        "Led a 17-member Data Management team in developing and managing registration data for 1,000+ participants, ensuring data availability and quality throughout the event. Delivered real-time registration reports and insights on daily registration trends and participant demographics to support decision-making. Coordinated data collection and processing across the team to ensure data accuracy, consistency, and timely delivery.",
      
      certificates: [
        {
          title: "Certificate — Director of Data Management, ISE! ITS 2024",
          image: "/images/sertif ise.png",
        },
      ],
    },
    {
      id: "org-3",
      
      documentation: ["/images/pasjung1.jpeg", "/images/pasjung2.jpeg"],
      organization: "Pasar Juang",
      period: "Sep 2023 - Nov 2023",
      role: "Expert Staff of Data Management",
      description:
        "Managed and ensured the accuracy of participant data and administrative processes for 1,500+ visitors throughout the event. Maintained 50 vendors data, prepared and monitored registration sheets, and distributed attendance and feedback forms to participants. Supervised technical data input to maintain data consistency and quality, and assisted in post-event reporting and certificate distribution.",
      certificates: [
        {
          title: "Certificate — Expert Staff of Data Management, Pasar Juang",
          image: "/images/sertif pasjung.png",
        },
      ],
      },
    {
      id: "org-4",
      
      documentation: ["/images/ise2.jpeg", "/images/ise3.jpeg"],
      organization: "ISE! ITS 2023",
      period: "Mar 2023 - Nov 2023",
      role: "Staff of Admin&LO",
      description:
        "Named Staff of the Month (June 2023) in recognition of outstanding performance and contribution. Verified participants for the Grand Talkshow and managed the official WhatsApp channel for participant communication. Documented weekly meeting minutes and handled internal administrative processes to support committee operations.",
      certificates: [
        {
          title: "Certificate — Staff of Admin&LO, ISE! ITS 2023",
          image: "/images/sertifise.png",
        },
      ],
      },
    {
      id: "org-5",
      
      documentation: ["/images/gerigi1.jpeg", "/images/gerigi2.jpeg"],
      organization: "GERIGI 2023",
      period: "Jul 2023 - Aug 2023",
      role: "Staff of Scretarial",
      description:
        "Provided clear information and guidance to participants throughout the event. Received, reviewed, and evaluated participant assignments in line with program requirements. Resolved technical and non-technical participant issues promptly, ensuring timely assistance and direction.",
      certificates: [
        {
          title: "Certificate — Staff of Scretarial, GERIGI 2023",
          image: "/images/sertifgerigi.png",
        },
      ],
      },
    {
      id: "org-6",
      
      documentation: ["/images/ilits1.jpeg", "/images/ilits2.jpeg"],
      organization: "Ini Lho ITS",
      period: "Oct 2022 - Feb 2023",
      role: "Staff of Data Management",
      description:
        "Prepared registration sheets, managed attendance and feedback forms, and approved ticketing for 1,000+ participants at the main event of a campus introduction program. Served as department representative for 20+ high school students, introducing and explaining ITS academic departments. Supervised 40+ participants during the try-out session, produced post-event reports, and coordinated participant certificate distribution.",
      certificates: [
        {
          title: "Certificate — Staff of Data Management, Ini Lho ITS",
          image: "/images/sertif ilits.png",
        },
      ],
      },
  ],

  projects: [
    {
      id: "proj-1",
      year: "2026",
      title: "Analyzing Barriers to Loyalty and e-WOM using PLS-SEM",
      category: "Data Analysis",
      tools: ["SmartPLS", "SPSS", "Excel"],
      coverImage:
        "/images/pls.jpg",
      shortDesc:
        "Examined consumer behavior and loyalty in the online food delivery users in Indonesia aged 18–39 who had used the service within the previous six months.",
      driveDocUrl: "https://drive.google.com/drive/folders/13BV3HYPbBpA3Tyhp-BENestii1sYlDnT?usp=drive_link",
    },

    {
      id: "proj-2",
      year: "2025",
      title: "PaduPadan: Digital Wardrobe Platform",
      category: "Software Development",
      tools: ["MySQL", "Laravel", "Figma"],
      coverImage:
        "/images/padupadan.jpg",
      shortDesc:
        "A fashion management website that helps users organize their clothing collections, discover outfit combinations, and get personalized styling recommendations.",
      driveDocUrl: "https://drive.google.com/drive/folders/1T5A0aefuUsDRQd6iaI4cO1BrSprfC6ow?usp=sharing",
    },

    {
      id: "proj-3",
      year: "2025",
      title: "IT BSC Performance Dashboard",
      category: "Data Visualization",
      tools: ["Power BI", "IT-BSC", "Excel"],
      coverImage:
        "/images/itbsc.jpg",
      shortDesc:
        "Developed an interactive Power BI dashboard using the IT BSC framework to monitor IT performance and KPI achievement across central and branch-level operations.",
      driveDocUrl: "https://drive.google.com/drive/folders/1zlsYftN6YQTzWtMFZUXMK_05jky6XQCf?usp=drive_link",
    },

    {
      id: "proj-4",
      year: "2024",
      title: "University Admission Dashboard with ETL Pipeline",
      category: "Data Visualization",
      tools: ["Power BI", "Pentaho", "Dbeaver", "ETL"],
      coverImage:
        "/images/etl.jpg",
      shortDesc:
        "Developed an interactive dashboard to support stakeholders in analyzing university admission and selection results and facilitate data-driven decision-making.",
      driveDocUrl: "https://drive.google.com/drive/folders/1YBKSXbLlYVSp6pww44_hrCGYnSnfyyVB?usp=drive_link",
    },
/*
    {
      id: "",
      year: "2024",
      title: "ISchedule: Academic Schedule & Task Management App",
      category: "Software Development",
      tools: ["Flutter", "Dart"],
      coverImage:
        "/images/ischedule.jpg",
      shortDesc:
        "Developed ISchedule, a digital application that helps Information Systems students manage class schedules and track academic assignments efficiently.",
      driveDocUrl: "https://drive.google.com/drive/folders/1-WcH0uGyUKaNQhNaM7zYzR_CTCFWHeCm?usp=drive_link",
    }, */

    {
      id: "proj-5",
      year: "2023",
      title: "I-RIT: Smart Campus Transportation Platform",
      category: "UI/UX Design",
      tools: ["Figma", "Software Requirements Specification (SRS)"],
      coverImage:
        "/images/icar.jpg",
      shortDesc:
        "Developed I-RIT, a campus transportation platform that promotes eco-friendly i-Car services through a convenient, personalized experience integrated with myITS accounts.",
      driveDocUrl: "https://drive.google.com/drive/folders/1HJ4fW8fc7jr5N_twwRX54-RJYY_D-iRG?usp=drive_link",
    },
  ],
};

const navItems = [
  ["/home", "Home"],
  ["/aboutme", "About"],
  ["/exp", "Experience"],
  ["/project", "Project"],
];

function ArrowUpRight({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CopyIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function MenuIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function Page() {
  const [currentRoute, setCurrentRoute] = useState("/");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openOrgId, setOpenOrgId] = useState(null);
  const [activeCert, setActiveCert] = useState(null);

  
  useEffect(() => {
    if (!activeCert) return;

    const onKey = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeCert]);

  useEffect(() => {
    const updateRoute = () => {
      setCurrentRoute(window.location.hash.replace("#", "") || "/");
      setMobileMenuOpen(false);
      setOpenOrgId(null);
      setActiveCert(null);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    updateRoute();

    window.addEventListener("hashchange", updateRoute);

    return () => {
      window.removeEventListener("hashchange", updateRoute);
    };
  }, []);

  const navigateTo = (path) => {
    setMobileMenuOpen(false);
    window.location.hash = path;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    } catch {
      const textarea = document.createElement("textarea");

      textarea.value = PORTFOLIO_DATA.email;

      document.body.appendChild(textarea);
      textarea.select();

      document.execCommand("copy");

      textarea.remove();
    }

    setCopiedEmail(true);

    setTimeout(() => {
      setCopiedEmail(false);
    }, 2200);
  };

  /*
  ============================================================
  FULL SCREEN MENU
  ============================================================
  */

  const FullScreenMenu = () => {
    if (!mobileMenuOpen) return null;

    return (
      <div className="fixed inset-0 z-[999] bg-brand-bg">
        <div className="h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="h-20 flex items-center justify-between border-b border-brand-line">
            <button
              onClick={() => navigateTo("/")}
              className="font-serif text-xl tracking-tight"
            >
              Portfolio
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center hover:text-brand-pinkDark transition-colors"
              aria-label="Close menu"
            >
              <XIcon />
            </button>
          </div>

          <nav className="flex flex-col pt-16 sm:pt-20">
            {[
              ["Home", "/home"],
              ["About", "/aboutme"],
              ["Experience", "/exp"],
              ["Project", "/project"],
            ].map(([label, path], index) => (
              <button
                key={label}
                onClick={() => navigateTo(path)}
                className="group flex items-baseline gap-5 py-4 text-left"
              >
                <span className="text-[20px] tracking-[.2em] text-brand-muted">
                  0{index + 1}
                </span>

                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-.035em] group-hover:text-brand-pinkDark transition-colors">
                  {label}
                </span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-8 left-6 sm:left-10 lg:left-16 right-6 sm:right-10 lg:right-16 flex flex-col sm:flex-row justify-between gap-3 text-[10px] uppercase tracking-[.18em] text-brand-muted">
            <span>{PORTFOLIO_DATA.email}</span>

            <span>Information Systems Graduate</span>
          </div>
        </div>
      </div>
    );
  };

  /*
  ============================================================
  LANDING PAGE
  ============================================================
  */

  if (currentRoute === "/" || currentRoute === "") {
    return (
      <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col relative overflow-hidden">
        <div className="soft-circle w-[500px] h-[500px] bg-brand-pinkSoft/25 -top-40 -right-40" />

        <div className="soft-circle w-[500px] h-[500px] bg-brand-sageSoft/30 -bottom-60 -left-60" />

        <header className="px-6 sm:px-10 lg:px-16 pt-8 flex justify-between items-center relative z-10">
          <span className="font-semibold text-sm tracking-[.15em]">
            G.E.L<span className="text-brand-pinkDark">.</span>
          </span>
          <span className="text-[15px] uppercase tracking-[.25em] text-brand-muted">
            2026
          </span>
        </header>


        <FullScreenMenu />

        <main className="relative z-10 px-6 sm:px-10 lg:px-16 py-45">
          <div className="max-w-8xl mx-auto">
            <p className="text-s uppercase tracking-[.5em] text-brand-muted mb-8">
              Portfolio
            </p>
            <h1 className="font-serif text-[15vw] md:text-[11vw] leading-[.78] tracking-[-.06em]">
              Gita Elizza
              <br />
              <span className="italic text-brand-pinkDark">Larasati</span>
            </h1>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <p className="max-w-md text-sm sm:text-base leading-relaxed text-brand-muted">
                
              </p>

              <button
                onClick={() => navigateTo("/home")}
                className="group flex items-center gap-5 text-xs font-bold uppercase tracking-[.2em]"
              >
                <span className="border-b border-brand-text pb-2">Enter Portfolio</span>
                <span className="w-11 h-11 rounded-full border border-brand-text flex items-center justify-center group-hover:bg-brand-text group-hover:text-white transition-all">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /*
  ============================================================
  NAVBAR
  ============================================================
  */

  const Navbar = () => (
    <>
      <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-xl border-b border-brand-line">
        <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          <button
            onClick={() => navigateTo("/")}
            className="font-serif text-xl tracking-tight"
          >
            Portfolio<span className="italic text-brand-pinkDark">.</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center hover:text-brand-pinkDark transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <FullScreenMenu />
    </>
  );

  /*
  ============================================================
  PAGE INTRO
  ============================================================
  

  const PageIntro = ({ number, title, description }) => (
    <section className="mb-4">
      <div className="pt-12 md:pt-16 pb-2">
        <span className="text-xs uppercase tracking-[.25em] text-brand-muted">
          {number}
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[.9] tracking-[-.04em] mt-4">
          {title}
        </h1>

        <p className="text-sm text-brand-muted leading-7 max-w-2xl mt-7">
          {description}
        </p>
      </div>
    </section>
  ); */

  /*
  ============================================================
  PROJECT CARD
  ============================================================
  */

  const ProjectCard = ({ project, index }) => {

  return (
    <article
      className="
        group
        h-full
        flex
        flex-col
        rounded-2xl
        border
        border-brand-line
        bg-white/40
        p-5
        sm:p-6
        transition-all
        duration-300
        hover:bg-brand-pinkLight
        hover:border-brand-pinkSoft
      "
    >
      {/* Category + Number */}
      <div className="flex items-start justify-between gap-4">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-brand-pinkSoft/60
            px-3
            py-1.5
            text-[11px]
            uppercase
            tracking-[.08em]
            text-brand-pinkDark
          "
        >
          {project.category}
        </span>

        <span
        className="
            inline-flex
            items-center
            rounded-full
            bg-brand-sageSoft/60
            px-3
            py-1.5
            text-[11px]
            uppercase
            tracking-[.08em]
            text-brand-sageDark
          "
        >{project.year}</span>
      </div>

      {/* Dummy Image */}
      <div className="mt-5 aspect-[16/9] overflow-hidden rounded-xl bg-brand-pinkLight">
  <img
    src={project.coverImage}
    alt={project.title}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
  />
</div>

      {/* Content */}
      <div className="flex flex-1 flex-col mt-5">

        {/* Fixed Title Area */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl leading-tight break-words">
            {project.title}
          </h3>
        </div>

        {/* Fixed Description Area */}
        <div className="mt-3">
          <p className="text-sm leading-6 text-[#2D2D2D]">
            {project.shortDesc}
          </p>
        </div>

        {/* Tools */}
        <div className="mt-4 flex flex-wrap content-start gap-2">
          {project.tools?.map((tool) => (
            <span
              key={tool}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-brand-line
                bg-brand-bg
                px-3
                py-1.5
                text-[12px]
                tracking-[.04em]
                text-brand-text
              "
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Details */}
<div className="mt-auto pt-8">
  <a
    href={project.driveDocUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      text-[11px]
      uppercase
      tracking-[.16em]
      text-brand-text
      transition-colors
      duration-300
      hover:text-brand-pinkDark
    "
  >
    <span className="inline-flex items-center gap-2 border-b border-current pb-1">
      <span>Details</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
        ↗
      </span>
    </span>
  </a>
</div>

      </div>
    </article>
  );
};

  /*
  ============================================================
  HOME PAGE
  ============================================================
  */

  const HomePage = () => (
    <div className="reveal">
      {/* HERO */}

<section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
  
  <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px] gap-x-12 gap-y-6 items-start">

  
  <div className="min-w-0 max-w-5xl lg:col-start-1">
    
    <p className="text-[12px] sm:text-xs uppercase tracking-[.28em] text-brand-sageDark mb-7">
      Information Systems Graduate From Institut Teknologi Sepuluh Nopember
    </p>

    <h1 className="font-serif whitespace-nowrap text-[3.25rem] sm:text-[5rem] lg:text-[5.25rem] xl:text-[7rem] leading-[.9] tracking-[-.06em]">
      Hi, I'm{" "}
      <span className="italic text-brand-pinkDark">
        Laras.
      </span>
    </h1>

    <p className="mt-9 max-w-2xl text-sm sm:text-[15px] leading-7 text-brand-muted">
      An Information Systems graduate who enjoys understanding how business processes work and turning them into clear system solutions. With experience in process modeling, requirements documentation, and data dashboards, I’m always open to new challenges.
    </p>

    {/* QUICK LINKS */}
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">

      <a
        href={PORTFOLIO_DATA.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] uppercase tracking-[.16em]
                   underline underline-offset-4
                   hover:text-brand-pinkDark
                   hover:border-brand-pinkDark
                   transition-colors"
      >
        Resume
      </a>

      <a
        href={PORTFOLIO_DATA.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] uppercase tracking-[.16em]
                   underline underline-offset-4
                   hover:text-brand-pinkDark
                   hover:border-brand-pinkDark
                   transition-colors"
      >
        LinkedIn
      </a>

      <button
        onClick={handleCopyEmail}
        className="flex items-center gap-2
                   text-[12px] uppercase tracking-[.16em]
                   underline underline-offset-4
                   hover:text-brand-pinkDark
                   hover:border-brand-pinkDark
                   transition-colors"
      >
        <span>
          {copiedEmail
            ? "Email copied"
            : PORTFOLIO_DATA.email}
        </span>

        {copiedEmail ? (
          <CheckIcon className="w-3 h-3 shrink-0" />
        ) : (
          <CopyIcon className="w-3 h-3 shrink-0" />
        )}
      </button>
    </div>

  </div>

  
  <div className="min-w-0 lg:col-start-1">
    <h2
      className="
        font-serif
        text-[length:clamp(1.05rem,4.4vw,2.25rem)]
        lg:text-[length:clamp(1.25rem,2.8vw,2.5rem)]
        leading-[1.15]
        tracking-[-.03em]
        pl-[0.55em]
        -indent-[0.55em]
      "
    >
      <span className="block whitespace-nowrap">
        “Learning how things work,
      </span>
      <span className="block whitespace-nowrap italic text-brand-pinkDark">
        discovering how they could be better.
        <span className="not-italic text-brand-text">”</span>
      </span>
    </h2>

    {/* CTA */}
    <button
      onClick={() => navigateTo("/aboutme")}
      className="
        mt-6
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-brand-text
        px-5
        py-2.5
        text-[10px]
        uppercase
        tracking-[.16em]
        font-medium
        hover:bg-brand-text
        hover:text-white
        transition-all
        duration-300
      "
    >
      <span>Read more about me</span>
      <ArrowRight />
    </button>
  </div>

  
  <div className="hidden lg:block lg:col-start-2 lg:row-start-1 lg:row-span-2 self-start mt-2">
    <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl bg-brand-pinkLight">
      <img
        src="/images/profilfix.png"
        alt={PORTFOLIO_DATA.name}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.parentElement.parentElement.style.display = "none";
        }}
      />
    </div>
  </div>

  </div>
</section>

      

      <section className="pt-14 border-t border-brand-line">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-xs uppercase tracking-[.25em] text-brand-muted">
              02 / Experience
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl mt-2">
              Selected Experience
            </h2>
          </div>

          <button
            onClick={() => navigateTo("/exp")}
            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-pinkDark"
          >
            View full experience
            <ArrowRight />
          </button>
        </div>
      </section>

      
      {renderWorkExperience({ bare: true })}
      
      {/* Mobile CTA */}
      <div className="pb-14 sm:hidden">
        <button
          onClick={() => navigateTo("/exp")}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest underline underline-offset-4 hover:text-brand-pinkDark transition-colors"
        >
          View full experience
          <span>↗</span>
        </button>
      </div>

      {/* PROJECTS */}

      <section className="py-14 border-t border-brand-line">
  <div className="flex justify-between items-end mb-6">
    <div>
      <span className="text-xs uppercase tracking-[.25em] text-brand-muted">
        03 / Project
      </span>

      <h2 className="font-serif text-4xl sm:text-5xl mt-2">
        Selected Project
      </h2>
    </div>

    <button
      onClick={() => navigateTo("/project")}
      className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-pinkDark"
    >
      View full project
      <ArrowRight />
    </button>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {PORTFOLIO_DATA.projects.slice(0, 3).map((project, index) => (
      <ProjectCard
        key={project.id}
        project={project}
        index={index}
      />
    ))}
  </div>
</section>
    </div>
  );

  /*
  ============================================================
  ABOUT PAGE
  ============================================================
  */

  const AboutMePage = () => (
    <div className="reveal">
      <section className="relative pt-12 md:pt-16 pb-10 overflow-hidden">
  <div className="relative text-center">
    {/* Eyebrow */}
    <p className="text-xs sm:text-sm uppercase tracking-[.22em] text-brand-pinkDark">
      SO, WHO AM I?
    </p>

    {/* Main title */}
    <h1
      className="
        font-serif
        uppercase
        text-[4rem]
        sm:text-[6rem]
        md:text-[8rem]
        lg:text-[10rem]
        leading-[0.8]
        tracking-[0.12em]
        text-brand-pinkDark
        opacity-[0.18]
        mt-6
        whitespace-nowrap
      "
    >
      ABOUT ME
    </h1>
  </div>
</section>

      <section className="border-t border-brand-line py-12">
  <div className="grid md:grid-cols-[.3fr_1fr] gap-8 items-start">

    <div className="image-hover overflow-hidden rounded-[1.5rem] bg-brand-pinkLight w-full max-w-[220px] aspect-[4/5]">
      <img
        src="/images/profilaboutme.png"
        alt={PORTFOLIO_DATA.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";

          e.currentTarget.parentElement.innerHTML =
            '<div class="w-full h-full flex items-center justify-center text-sm text-brand-muted px-6 text-center">Add your photo as <b class="mx-1">profile.jpg</b> inside the public folder.</div>';
        }}
      />
    </div>

    <div className="min-w-0">
      <p className="text-base uppercase tracking-[.25em] text-brand-pinkDark">
        Hello, I'm Laras!
      </p>

      <h2 className="font-serif text-4xl sm:text-5xl leading-tight mt-3">
        if it's meant to be,{" "}
        <span className="italic text-brand-sageDark">
          then it will be.
        </span>
      </h2>

      <p className="text-base leading-7 text-brand-muted text-justify mt-7">
        {PORTFOLIO_DATA.fullAbout}
      </p>
    </div>

  </div>
</section>

      <section className="border-t border-brand-line py-12">
  {/* Section Header */}
  <div className="flex items-end justify-between gap-6 mb-7">
    <span className="text-[14px] uppercase tracking-[.25em] text-brand-muted">
      Education
    </span>

    <span className="hidden sm:block text-[12px] uppercase tracking-[.15em] text-brand-muted">
      Academic Background
    </span>
  </div>

  {/* Education Card */}
  <div className="pastel-card rounded-2xl p-6 sm:p-7">

    {/* Degree Information */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
      
      <div className="min-w-0">
        <p className="text-[12px] uppercase tracking-[.2em] text-brand-pinkDark">
          Bachelor's Degree
        </p>

        <h3 className="font-serif text-2xl sm:text-3xl mt-2 leading-tight">
          {PORTFOLIO_DATA.education.degree}
        </h3>

        <p className="text-base text-brand-sageDark mt-1.5">
          {PORTFOLIO_DATA.education.university}
        </p>
      </div>

      {/* Period + GPA */}
      <div className="shrink-0 sm:text-right">
        <p className="text-[12px] text-brand-muted">
          2022 — 2026
        </p>

        <span
          className="
            inline-flex
            items-center
            mt-2
            rounded-full
            bg-white
            border
            border-brand-line
            px-3
            py-1.5
            text-[12px]
            tracking-[.04em]
            text-brand-text
          "
        >
          GPA {PORTFOLIO_DATA.education.gpa}
        </span>
      </div>

    </div>

    {/* Thesis */}
    <div className="mt-7 pt-5 border-t border-brand-line">

      <p className="text-[12px] uppercase tracking-[.2em] text-brand-muted">
        Undergraduate Thesis
      </p>

      <p className="mt-2 text-[17px] leading-6 text-[#2D2D2D]">
        {PORTFOLIO_DATA.education.thesisTitle}
      </p>

    </div>
  </div>
</section>

      {/* TRAININGS */}
      <section className="border-t border-brand-line py-12">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 mb-7">
          <span className="text-[14px] uppercase tracking-[.25em] text-brand-muted">
            Training
          </span>

          <span className="hidden sm:block text-[12px] uppercase tracking-[.15em] text-brand-muted">
            Courses & Certifications
          </span>
        </div>

        <div className="border-t border-brand-line">
          {PORTFOLIO_DATA.trainings.map((train) => (
            <div
              key={train.id}
              className="
                group
                border-b border-brand-line
                py-6 sm:py-7
                transition-colors
                hover:bg-brand-pinkLight/40
              "
            >
              <div className="grid grid-cols-[100px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)_300px] gap-x-4 sm:gap-x-5">
                {/* Period */}
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[.12em] text-brand-pinkDark pt-1">
                  {train.period}
                </span>

                {/* Title + Organizer */}
                <div className="min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl leading-tight group-hover:text-brand-pinkDark transition-colors">
                    {train.title}
                  </h3>

                  <p className="mt-1.5 text-sm text-brand-pinkDark">
                    {train.organizer}
                  </p>

                  {train.description && (
                    <p className="mt-3 text-[14px] leading-6 text-[#2D2D2D]">
                      {train.description}
                    </p>
                  )}

                  {/* Certificate (mobile) */}
                  <div className="sm:hidden">
                    {renderCertButtons(train.certificates, "pt-3")}
                  </div>
                </div>

                {/* Certificate (desktop) */}
                <div className="hidden sm:flex sm:justify-end sm:items-start pt-1">
                  {renderCertButtons(train.certificates, "pt-0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-brand-line py-12">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 mb-7">
          <span className="text-[14px] uppercase tracking-[.25em] text-brand-muted">
            Skills
          </span>

          <span className="hidden sm:block text-[12px] uppercase tracking-[.15em] text-brand-muted">
            Hard & Soft Skills
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
          {/* Hard Skills */}
          <div className="pastel-card rounded-2xl p-6 sm:p-7">
            <p className="text-[12px] uppercase tracking-[.2em] text-brand-pinkDark">
              Hard Skills
            </p>

            <div className="mt-5 flex flex-col gap-6">
              {PORTFOLIO_DATA.skills.hard.map((cat) => (
                <div key={cat.group}>
                  <h3 className="font-serif text-xl leading-tight">
                    {cat.group}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-brand-line
                          bg-brand-bg
                          px-3
                          py-1.5
                          text-[12px]
                          tracking-[.04em]
                          text-brand-text
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Languages */}
              <div>
                <h3 className="font-serif text-xl leading-tight">
                  Languages
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {PORTFOLIO_DATA.skills.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-brand-line
                        bg-brand-bg
                        px-3
                        py-1.5
                        text-[12px]
                        tracking-[.04em]
                        text-brand-text
                      "
                    >
                      {lang.name}
                      <span className="text-brand-muted">· {lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="pastel-card rounded-2xl p-6 sm:p-7">
            <p className="text-[12px] uppercase tracking-[.2em] text-brand-sageDark">
              Soft Skills
            </p>

            <ul className="mt-5 flex flex-col">
              {PORTFOLIO_DATA.skills.soft.map((skill, i) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-4 py-3 border-b border-brand-line last:border-b-0"
                >
                  <span className="text-[11px] tracking-[.2em] text-brand-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="font-serif text-lg leading-tight">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  /*
  ============================================================
  SHARED RENDER HELPERS (dipakai di Home & Experience)
  ============================================================
  */

  const renderCertButtons = (certs, wrapperClass = "pt-6", hidden = false) => {
    if (!certs || certs.length === 0) return null;

    return (
      <div className={`flex flex-wrap items-start content-start gap-2 sm:flex-nowrap ${wrapperClass}`}>
        {certs.map((cert) => (
          <button
            key={(cert.label || "cert") + (cert.image || cert.images?.[0])}
            type="button"
            tabIndex={hidden ? -1 : 0}
            onClick={() => setActiveCert(cert)}
            className="
              inline-flex
              items-center
              gap-1.5
              whitespace-nowrap
              rounded-full
              border
              border-brand-text
              px-3
              py-1.5
              text-[10px]
              uppercase
              tracking-[.08em]
              font-medium
              text-brand-text
              hover:bg-brand-text
              hover:text-white
              transition-all
              duration-300
            "
          >
            <span>{cert.label || "View certificate"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        ))}
      </div>
    );
  };

  const renderWorkCard = (exp) => (
    <article
      key={exp.id}
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-brand-line
        bg-white/40
        transition-all
        duration-300
        hover:bg-brand-pinkLight
        hover:border-brand-pinkSoft
      "
    >
      {/* Photo */}
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-brand-pinkSoft">
        {exp.photos?.[0]?.url ? (
          <img
            src={exp.photos[0].url}
            alt={exp.photos[0].caption || exp.role}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="px-3 text-center text-[9px] uppercase tracking-[.15em] text-brand-pinkDark/60">
              Experience
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex min-w-0 flex-1 flex-col p-5">
        {/* Period + Location */}
        <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
          <span className="inline-flex items-center whitespace-nowrap rounded-full bg-brand-pinkSoft/60 px-2.5 py-1 text-[10px] uppercase tracking-[.05em] text-brand-pinkDark">
            {exp.period}
          </span>

          <span className="inline-flex items-center whitespace-nowrap rounded-full bg-brand-sageSoft/60 px-2.5 py-1 text-[10px] uppercase tracking-[.05em] text-brand-sageDark">
            {exp.location}
          </span>
        </div>

        {/* Role + Company */}
        <h3
          title={exp.role}
          className="mt-4 line-clamp-2 min-h-[2.5em] font-serif text-lg leading-tight"
        >
          {exp.role}
        </h3>

        <p
          title={exp.company}
          className="mt-1.5 text-[12px] leading-tight text-brand-pinkDark sm:truncate"
        >
          {exp.company}
        </p>

        {/* Points */}
        <ul className="mt-4 flex flex-col gap-2">
          {exp.points?.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-6 text-[#2D2D2D]">
              <span
                aria-hidden="true"
                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pinkDark"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Bottom block: skills + buttons */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {exp.skills?.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-brand-line bg-brand-bg px-2.5 py-1 text-[11px] tracking-[.04em] text-brand-text"
              >
                {skill}
              </span>
            ))}
          </div>

          {renderCertButtons(exp.certificates, "pt-4")}
        </div>
      </div>
    </article>
  );

  
  const renderWorkExperience = ({ bare = false, limit = null } = {}) => {
    const items = limit
      ? PORTFOLIO_DATA.workExperience.slice(0, limit)
      : PORTFOLIO_DATA.workExperience;

    return (
      <section
        className={
          bare ? "pt-2 pb-10" : "border-t border-brand-line pt-8 pb-12"
        }
      >
        <div className="mb-6">
          <span className="text-base uppercase tracking-[.25em] text-brand-muted">
            Work Experience
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((exp) => renderWorkCard(exp))}
        </div>
      </section>
    );
  };

  const renderOrgExperience = () => (
    <section className="border-t border-brand-line py-12">
      <div className="mb-7">
        <span className="text-base uppercase tracking-[.25em] text-brand-muted">
          Organizational Experience
        </span>
      </div>

      <div className="border-t border-brand-line">
        {PORTFOLIO_DATA.orgExperience.map((org) => {
          const isOpen = openOrgId === org.id;

          // sertifikat + dokumentasi kegiatan
          const docItems = [
            ...(org.certificates || []),
            ...(org.documentation?.length
              ? [
                  {
                    label: "View documentation",
                    title: `Documentation — ${org.organization}`,
                    images: org.documentation,
                  },
                ]
              : []),
          ];

          return (
            <div
              key={org.id}
              className={`
                group
                border-b border-brand-line
                py-6 sm:py-7
                transition-colors
                hover:bg-brand-pinkLight/40
                ${isOpen ? "bg-brand-pinkLight/40" : ""}
              `}
            >
              <div className="grid grid-cols-[100px_minmax(0,1fr)_32px] sm:grid-cols-[160px_minmax(0,1fr)_300px_40px] gap-x-4 sm:gap-x-5">

                {/* Period */}
                <span className="pt-1 text-[11px] sm:text-[12px] uppercase tracking-[.12em] text-brand-pinkDark">
                  {org.period}
                </span>

                {/* Role */}
                <div className="min-w-0">
                  <h3
                    className={`font-serif text-xl sm:text-2xl leading-tight transition-colors group-hover:text-brand-pinkDark ${
                      isOpen ? "text-brand-pinkDark" : ""
                    }`}
                  >
                    {org.role}
                  </h3>

                  {/* Organization (mobile) */}
                  <p className="sm:hidden mt-1.5 text-xs text-brand-pinkDark">
                    {org.organization}
                  </p>
                </div>

                {/* Organization (desktop) */}
                <div className="hidden sm:block pt-1 text-right">
                  <span className="text-base text-brand-pinkDark">
                    {org.organization}
                  </span>
                </div>

                {/* Toggle +/× — paling kanan */}
                <button
                  type="button"
                  onClick={() => setOpenOrgId(isOpen ? null : org.id)}
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen
                      ? `Hide description for ${org.role}`
                      : `Show description for ${org.role}`
                  }
                  className="
                    justify-self-end
                    shrink-0
                    w-8
                    h-8
                    sm:w-9
                    sm:h-9
                    flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-brand-line
                    text-brand-text
                    hover:border-brand-pinkDark
                    hover:text-brand-pinkDark
                    transition-colors
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                  </svg>
                </button>

                {/* Description row — melebar di bawah role + organisasi */}
                <div
                  className={`
                    col-span-full
                    sm:col-start-2
                    sm:col-span-2
                    grid
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-hover:opacity-100"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    {/* mulai sejajar dengan role, berakhir sejajar ujung kanan nama organisasi */}
                    <div className="mt-4 border-t border-brand-line pt-4">
                      <p className="text-[14px] leading-7 text-[#2D2D2D] sm:text-justify">
                        {org.description}
                      </p>

                      {renderCertButtons(docItems, "pt-4", !isOpen)}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  /*
  ============================================================
  EXPERIENCE PAGE
  ============================================================
  */

  const ExperiencePage = () => (
  <div className="reveal">
    <section className="relative pt-12 md:pt-16 pb-10 overflow-hidden">
  <div className="relative text-center">
    {/* Eyebrow */}
    <p className="text-xs sm:text-sm uppercase tracking-[.22em] text-brand-pinkDark">
      Work & Organizational
    </p>

    {/* Main title */}
    <h1
      className="
        font-serif
        uppercase
        text-[4rem]
        sm:text-[6rem]
        md:text-[8rem]
        lg:text-[10rem]
        leading-[0.8]
        tracking-[0.12em]
        text-brand-pinkDark
        opacity-[0.18]
        mt-6
        whitespace-nowrap
      "
    >
      Experience
    </h1>
  </div>
</section>

    {/* ======================================================
        WORK EXPERIENCE
    ====================================================== */}

    {renderWorkExperience()}

    {renderOrgExperience()}
  </div>
);

  /*
  ============================================================
  PROJECT PAGE
  ============================================================
  */

  const ProjectPage = () => (
    <div className="reveal">
      <section className="relative pt-12 md:pt-16 pb-10 overflow-hidden">
  <div className="relative text-center">
    {/* Eyebrow */}
    <p className="text-xs sm:text-sm uppercase tracking-[.22em] text-brand-pinkDark">
      Selected
    </p>

    {/* Main title */}
    <h1
      className="
        font-serif
        uppercase
        text-[4rem]
        sm:text-[6rem]
        md:text-[8rem]
        lg:text-[10rem]
        leading-[0.8]
        tracking-[0.12em]
        text-brand-pinkDark
        opacity-[0.18]
        mt-6
        whitespace-nowrap
      "
    >
      Project
    </h1>
  </div>
</section>

      <section className="border-t border-brand-line pt-10 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );

  /*
  ============================================================
  ROUTING
  ============================================================
  */

  let pageContent;

  if (currentRoute === "/home") {
    pageContent = HomePage();
  } else if (currentRoute === "/aboutme") {
    pageContent = AboutMePage();
  } else if (currentRoute === "/exp") {
    pageContent = ExperiencePage();
  } else if (currentRoute === "/project") {
    pageContent = ProjectPage();
  } else {
    pageContent = HomePage();
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />

      <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
        {pageContent}
      </main>

      {/* CERTIFICATE MODAL */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 sm:p-8"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
        >
          <div
            className="relative w-full max-w-4xl max-h-full flex flex-col rounded-2xl bg-brand-bg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-brand-line">
              <p className="font-serif text-lg sm:text-xl leading-tight">
                {activeCert.title}
              </p>

              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="shrink-0 w-9 h-9 flex items-center justify-center hover:text-brand-pinkDark transition-colors"
                aria-label="Close certificate"
              >
                <XIcon />
              </button>
            </div>

            <div className="overflow-auto p-4 sm:p-6 bg-white/40">
              {(() => {
                const imgs = activeCert.images || [activeCert.image];

                return (
                  <div
                    className={`grid gap-4 ${
                      imgs.length > 1 ? "sm:grid-cols-2" : ""
                    }`}
                  >
                    {imgs.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={activeCert.title}
                        className="mx-auto max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.insertAdjacentHTML(
                            "afterend",
                            '<p class="text-sm text-center text-brand-muted py-10">Gambar belum ditemukan. Cek path-nya di PORTFOLIO_DATA.</p>'
                          );
                        }}
                      />
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}