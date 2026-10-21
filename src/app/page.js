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
    "That’s my motto — a reminder to stay open to new possibilities, trust the process, and make the most of every opportunity. As an Information Systems graduate from Institut Teknologi Sepuluh Nopember (ITS), I’ve explored different areas, from data and business processes to technology and system development. Through internships, teaching, academic projects, and organizational experiences, I’ve learned to adapt to new challenges, approach problems systematically, and keep growing along the way.",

  education: {
    degree: "Bachelor of Information Systems",
    university: "Institut Teknologi Sepuluh Nopember",
    period: "2022 — 2026",
    gpa: "3.67 / 4.00",
    thesisTitle:
      "Analysis Of The Effect Of Barriers On Loyalty and E-WOM In Online Food Delivery (OFD) Services Using Partial Least Squares-Structural Equation Modeling. Case Study: GoFood",
  },

  workExperience: [
  {
    id: "exp-w1",
    role: "SCADA & OTM Intern",
    company: "PT. PLN (Persero) UIP2B JAMALI",
    period: "Aug 2025 - Des 2025",
    location: "Depok, Indonesia",

    summary:
      "Supported operational process analysis and system requirements identification to improve workflows. Monitored real-time grid data across 600+ substations in Java-Madura-Bali, performed data validation and reconciliation across 20+ substations, and supported system migration, inventory management, and technical equipment procurement.",

    skills: [
      "SCADA",
      "Grafana",
      "Data Validation",
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

    summary:
      "Delivered hands-on instruction in business process automation and modeling using ProcessMaker, BPMN.io, and SAP Signavio to 40+ students per session. Guided students through case-based projects, troubleshooting implementation issues and evaluating project outcomes based on functionality, efficiency, and process logic.",

    skills: [
      "ProcessMaker",
      "BPMN.io",
      "SAP SIgnavio",
    ],

    highlights: [
      "Monitored JMB substations using Grafana and Spectrum Power 7.",
      "Supported SP4 to SP7 migration and P2P validation activities.",
      "Worked with IEC 101, IEC 61850, RTU, and SAS-related documentation.",
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

    summary:
      "Delivered hands-on instruction on Odoo modules to 40+ students during practical sessions. Guided students through business case-based exercises, troubleshooting implementation issues and evaluating project outcomes based on configuration accuracy and relevance to assigned business cases.",

    skills: [
      "Odoo",
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
      organization: "Himpunan Mahasiswa Sistem Informasi",
      period: "Apr 2024 - Mar 2025",
      role: "Staff of Internal Affairs",
      description:
        "Managed a 140+ member badminton community and organized 10 regular training sessions. Coordinated the Information Systems badminton team for competitions, including member and logistics coordination. Also served as Head of LO for Wisuda 130 and Treasurer for Wisuda 129, supporting event coordination and financial administration.",
    },
    {
      id: "org-2",
      organization: "ISE! ITS 2024",
      period: "Mar 2024 - Nov 2024",
      role: "Director of Data Management",
      description:
        "Led a 17-member Data Management team in managing registration data for 1,000+ participants, ensuring data quality and availability throughout the event. Delivered real-time reports and insights on registration trends and participant demographics to support decision-making, while coordinating data collection and processing to ensure accurate and timely results.",
    },
    {
      id: "org-3",
      organization: "Pasar Juang",
      period: "Sep 2023 - Nov 2023",
      role: "Expert Staff of Data Management",
      description:
        "Collected and organized data from vendors and event visitors to support operational needs. Consolidated the collected data into structured reports, presenting information clearly to support event evaluation.",
    },
    {
      id: "org-4",
      organization: "ISE! ITS 2023",
      period: "Mar 2023 - Nov 2023",
      role: "Staff of Admin&LO",
      description:
        "Awarded “Staff of the Month” in June 2023 for strong performance and dedication. Managed administrative procedures throughout the event series and prepared the necessary documents and materials to support event administration.",
    },
    {
      id: "org-5",
      organization: "GERIGI 2023",
      period: "Jul 2023 - Aug 2023",
      role: "Staff of Scretarial",
      description:
        "Guided and provided event information to 20 participants, reviewed their submitted tasks and activities, and supported them in resolving issues and answering questions throughout the event.",
    },
    {
      id: "org-6",
      organization: "Ini Lho ITS",
      period: "Oct 2022 - Feb 2023",
      role: "Staff of Data Management",
      description:
        "Collected, managed, and summarized administrative data for 1,000+ participants. Served as a Liaison Officer (LO), assisting and guiding open campus participants, while preparing administrative documents and materials to support the event.",
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
      tools: ["Power BI", "IT-BSC"],
      coverImage:
        "/images/itbsc.jpg",
      shortDesc:
        "Developed an interactive Power BI dashboard using the IT BSC framework to monitor IT performance and KPI achievement across central and branch-level operations.",
      driveDocUrl: "https://drive.google.com/drive/folders/1zlsYftN6YQTzWtMFZUXMK_05jky6XQCf?usp=drive_link",
    },

    {
      id: "proj-4",
      year: "2024",
      title: "University Student Admission Dashboard with ETL Pipeline",
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
      tools: ["Figma"],
      coverImage:
        "/images/icar.jpg",
      shortDesc:
        "Developed I-RIT, a campus transportation integration platform that encourages the use of eco-friendly i-Car public transport through a convenient, personalized digital experience integrated with myITS accounts.",
      driveDocUrl: "https://drive.google.com/drive/folders/1HJ4fW8fc7jr5N_twwRX54-RJYY_D-iRG?usp=drive_link",
    },
  ],
};

const navItems = [
  ["/home", "Home"],
  ["/aboutme", "About"],
  ["/exp", "Experience"],
  ["/project", "Projects"],
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

  useEffect(() => {
    const updateRoute = () => {
      setCurrentRoute(window.location.hash.replace("#", "") || "/");
      setMobileMenuOpen(false);

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
              Portofolio
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
              ["Projects", "/project"],
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
  */

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
  );

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
        min-h-[460px]
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
        <div className="h-[58px]">
          <h3 className="font-serif text-2xl leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Fixed Description Area */}
        <div className="h-[96px] mt-3">
          <p className="text-sm leading-6 text-[#2D2D2D]">
            {project.shortDesc}
          </p>
        </div>

        {/* Tools */}
        <div className="h-[34px] mt-4 flex flex-wrap content-start gap-2">
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
  {/* TYPOGRAPHY ACCENT */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      right-[5rem]
      top-[-2rem]
      lg:right-[8rem]
      lg:top-[-1rem]
      font-serif
      italic
      text-[20rem]
      sm:text-[25rem]
      lg:text-[26rem]
      leading-none
      tracking-[-0.08em]
      text-brand-pinkDark
      opacity-[0.12]
      select-none
      z-0
    "
  >
    L
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl">
    
    <p className="text-[12px] sm:text-xs uppercase tracking-[.28em] text-brand-sageDark mb-7">
      Information Systems Graduate From Institut Teknologi Sepuluh Nopember
    </p>

    <h1 className="font-serif text-[4.5rem] sm:text-[6.5rem] lg:text-[8rem] leading-[.82] tracking-[-.065em]">
      Hi, I'm{" "}
      <span className="italic text-brand-pinkDark">
        Laras.
      </span>
    </h1>

    <p className="mt-9 max-w-2xl text-sm sm:text-[15px] leading-7 text-brand-muted">
      An Information Systems graduate who enjoys learning how things
      work and finding ways to make them better. With a mix of technical
      and business experience, I'm always open to new challenges.
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

    {/* QUOTE */}
    <div className="mt-18 lg:mt-20 max-w-4xl">
      <h2
        className="
          font-serif
          text-3xl
          sm:text-4xl
          lg:text-[3.25rem]
          leading-[1.08]
          tracking-[-.035em]
          pl-[0.55em]
          -indent-[0.55em]
        "
      >
        “Learning how things work, <br />
        <span className="italic text-brand-pinkDark">
          discovering how they could be better.
        </span>
        ”
      </h2>

      {/* CTA */}
      <button
        onClick={() => navigateTo("/aboutme")}
        className="
          mt-8
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

  </div>
</section>

      {/* EXPERIENCE */}

      <section className="py-14 border-t border-brand-line">
  {/* Section Header */}
  <div className="flex justify-between items-end mb-6">
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
      All Experience
      <ArrowRight />
    </button>
  </div>

  {/* Experience Cards */}
  <div className="grid md:grid-cols-1 gap-5">
    {PORTFOLIO_DATA.workExperience.slice(0, 1).map((exp) => (
      <article
        key={exp.id}
        className="
          group
          rounded-2xl
          border
          border-brand-line
          bg-white/40
          overflow-hidden
          transition-all
          duration-300
          hover:bg-brand-pinkLight
          hover:border-brand-pinkSoft
        "
      >
        <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[145px_1fr] min-h-[220px]">

          {/* Thumbnail */}
          <div className="relative bg-brand-pinkSoft overflow-hidden">
  {exp.photos?.[0]?.url ? (
    <img
      src={exp.photos[0].url}
      alt={exp.photos[0].caption || exp.role}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-[9px] uppercase tracking-[.15em] text-brand-pinkDark/60 text-center px-3">
        Experience
      </span>
    </div>
  )}
</div>

          {/* Content */}
          <div className="p-5 sm:p-6 flex flex-col">

            {/* Role + Year + Location */}
<div className="grid grid-cols-[1fr_auto] gap-x-4">

  {/* Role */}
  <h3 className="font-serif text-2xl leading-none">
    {exp.role}
  </h3>

  {/* Year */}
  <p className="text-[12px] leading-none text-brand-muted text-right self-center whitespace-nowrap">
    {exp.period}
  </p>

  {/* Company */}
  <p className="text-sm text-brand-pinkDark leading-tight mt-1.5">
    {exp.company}
  </p>

  {/* Location */}
  <p className="text-[12px] leading-none text-brand-muted text-right whitespace-nowrap">
    {exp.location}
  </p>

</div>

            {/* Summary */}
            <p className="text-base sm:text-sm leading-6 text-[#2D2D2D] mt-4 line-clamp-2">
              {exp.summary}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-auto pt-5">
              {exp.skills?.map((skill) => (
                <span
                  key={skill}
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-brand-line
                    bg-brand-bg
                    px-2.5
                    py-1
                    text-[12px]
                    tracking-[.04em]
                    text-brand-text
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </article>
    ))}
  </div>

  {/* Mobile CTA */}
  <div className="mt-6 sm:hidden">
    <button
      onClick={() => navigateTo("/exp")}
      className="
        inline-flex
        items-center
        gap-2
        text-xs
        uppercase
        tracking-widest
        underline
        underline-offset-4
        hover:text-brand-pinkDark
        transition-colors
      "
    >
      View full experience
      <span>↗</span>
    </button>
  </div>
</section>

      {/* PROJECTS */}

      <section className="py-14 border-t border-brand-line">
  <div className="flex justify-between items-end mb-6">
    <div>
      <span className="text-xs uppercase tracking-[.25em] text-brand-muted">
        03 / Projects
      </span>

      <h2 className="font-serif text-4xl sm:text-5xl mt-2">
        Selected Projects
      </h2>
    </div>

    <button
      onClick={() => navigateTo("/project")}
      className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-pinkDark"
    >
      All projects
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
        src="/images/profile.png"
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

      {/* Thesis Tools */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-brand-line
            bg-brand-bg
            px-3
            py-1.5
            text-[11px]
            tracking-[.04em]
            text-brand-text
          "
        >
          PLS-SEM
        </span>

        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-brand-line
            bg-brand-bg
            px-3
            py-1.5
            text-[11px]
            tracking-[.04em]
            text-brand-text
          "
        >
          SmartPLS
        </span>

        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-brand-line
            bg-brand-bg
            px-3
            py-1.5
            text-[11px]
            tracking-[.04em]
            text-brand-text
          "
        >
          Data Analysis
        </span>
      </div>

    </div>
  </div>
</section>
    </div>
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

    {/* Work Experience */}
{/* Work Experience */}
<section className="border-t border-brand-line pt-8 pb-12">
  <div className="mb-6">
    <span className="text-base uppercase tracking-[.25em] text-brand-muted">
      Work Experience
    </span>
  </div>

  <div className="flex flex-col gap-5">
  {PORTFOLIO_DATA.workExperience.map((exp) => (
    <article
      key={exp.id}
      className="
        group
        rounded-2xl
        border
        border-brand-line
        bg-white/40
        overflow-hidden
        transition-all
        duration-300
        hover:bg-brand-pinkLight
        hover:border-brand-pinkSoft
      "
    >
      <div className="grid grid-cols-[150px_minmax(0,1fr)] sm:grid-cols-[190px_minmax(0,1fr)] min-h-[220px]">

        {/* Photo */}
        <div className="relative bg-brand-pinkSoft overflow-hidden">
          {exp.photos?.[0]?.url ? (
            <img
              src={exp.photos[0].url}
              alt={exp.photos[0].caption || exp.role}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[9px] uppercase tracking-[.15em] text-brand-pinkDark/60 text-center px-3">
                Experience
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 p-5 sm:p-6 flex flex-col">

          <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4">
            <h3 className="font-serif text-2xl leading-none min-w-0">
              {exp.role}
            </h3>

            <p className="text-[12px] leading-none text-brand-muted text-right self-center whitespace-nowrap">
              {exp.period}
            </p>

            <p className="text-sm text-brand-pinkDark leading-tight mt-1.5">
              {exp.company}
            </p>

            <p className="text-[12px] leading-none text-brand-muted text-right whitespace-nowrap">
              {exp.location}
            </p>
          </div>

          <p className="text-sm leading-6 text-[#2D2D2D] mt-5">
            {exp.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {exp.skills?.map((skill) => (
              <span
                key={skill}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-brand-line
                  bg-brand-bg
                  px-2.5
                  py-1
                  text-[11px]
                  tracking-[.04em]
                  text-brand-text
                "
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </article>
  ))}
</div>
</section>


    {/* ======================================================
        ORGANIZATIONAL EXPERIENCE
    ====================================================== */}

    <section className="border-t border-brand-line py-12">
  <div className="mb-7">
    <span className="text-base uppercase tracking-[.25em] text-brand-muted">
      Organizational Experience
    </span>
  </div>

  <div className="border-t border-brand-line">
    {PORTFOLIO_DATA.orgExperience.map((org) => (
      <div
        key={org.id}
        className="
          group
          border-b border-brand-line
          py-6 sm:py-7
          transition-colors
          hover:bg-brand-pinkLight/40
        "
      >
        <div className="grid grid-cols-[125px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)_340px] gap-x-4 sm:gap-x-5">
          
          {/* Period */}
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[.12em] text-brand-pinkDark pt-1">
            {org.period}
          </span>

          {/* Role + Description */}
          <div className="min-w-0">
            <h3 className="font-serif text-xl sm:text-2xl leading-tight group-hover:text-brand-pinkDark transition-colors">
              {org.role}
            </h3>

            {/* Description — appears on hover */}
            <div
              className="
                grid
                grid-rows-[0fr]
                opacity-0
                transition-all
                duration-300
                group-hover:grid-rows-[1fr]
                group-hover:opacity-100
              "
            >
              <div className="overflow-hidden">
                <p className="w-full pt-3 text-[14px] leading-6 text-[#2D2D2D]">
                  {org.description}
                </p>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div className="hidden sm:block pt-1">
            <span className="text-base text-brand-pinkDark">
              {org.organization}
            </span>
          </div>

          {/* Mobile organization */}
          <div className="sm:hidden col-start-2 mt-1.5">
            <span className="text-xs text-brand-pinkDark">
              {org.organization}
            </span>
          </div>

        </div>
      </div>
    ))}
  </div>
</section>
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
      Projects
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
    pageContent = <HomePage />;
  } else if (currentRoute === "/aboutme") {
    pageContent = <AboutMePage />;
  } else if (currentRoute === "/exp") {
    pageContent = <ExperiencePage />;
  } else if (currentRoute === "/project") {
    pageContent = <ProjectPage />;
  } else {
    pageContent = <HomePage />;
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />

      <main className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16">
        {pageContent}
      </main>
    </div>
  );
}