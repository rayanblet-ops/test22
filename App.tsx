
import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components ---
const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XMarkIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const BuildingOfficeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75zM9 12.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 12.75z" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 21.75H14.25M12 18.75V15M12 9.75c-1.036 0-1.875-.84-1.875-1.875S10.964 6 12 6s1.875.84 1.875 1.875-1.875 3.75-1.875 3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25z" />
  </svg>
);

const UserGroupIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.284.12A3 3 0 017.125 18.72M3 18.72a9.094 9.094 0 013.741-.479 3 3 0 014.682-2.72m-7.284.12A3 3 0 002.875 18.72m12.44-.412a3 3 0 01-5.358 0M15.375 18.72a3 3 0 01-3-3V11.25a3 3 0 013-3h.008a3 3 0 013 3v4.47m-3.008 0a3 3 0 01-3 3z" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.998-.552-1.348l-1.295-1.295a.75.75 0 00-1.06 0l-2.24 2.24a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 010-1.06l2.24-2.24a.75.75 0 000-1.06l-1.295-1.295a2.25 2.25 0 00-1.348-.552V4.5A2.25 2.25 0 004.5 2.25H2.25z" />
    </svg>
);

const EnvelopeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

// --- Icons for Specialties Section ---
const BookOpenIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.94-2.196 1.026-3.417a4.5 4.5 0 00-4.5-4.5c-1.222.086-2.381.5-3.417 1.026L3 11.42m8.42 3.75l-2.496-3.03" />
  </svg>
);

const AcademicCapIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-2.072a50.57 50.57 0 012.658-.813m15.482 0l2.072-2.072a50.57 50.57 0 00-2.658-.813m-15.482 0l-2.072 2.072" />
  </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25v-4.07m18 0a2.25 2.25 0 00-2.25-2.25h-13.5a2.25 2.25 0 00-2.25 2.25m18 0v-4.477a2.25 2.25 0 00-2.25-2.25h-13.5a2.25 2.25 0 00-2.25 2.25v4.477m18 0a2.25 2.25 0 00-2.25-2.25h-13.5a2.25 2.25 0 00-2.25 2.25m18 0l-2.939-9.296a2.25 2.25 0 00-2.15-1.554H8.34a2.25 2.25 0 00-2.15 1.554L3.25 14.15" />
  </svg>
);

// --- Icons for Infrastructure Section ---
const BeakerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.238.19.477.386.714.582A10.493 10.493 0 0115 5.25c2.148 0 4.07.832 5.558 2.22.624.583.942 1.477.942 2.427v.003c0 1.343-1.04 2.52-2.36 2.734a6.743 6.743 0 01-1.139 6.279c-1.353 1.95-3.56 3.296-6.002 3.296h-.008c-3.75 0-6.75-2.686-6.75-6s3-6 6.75-6h.008c.966 0 1.89.223 2.734.636" />
    </svg>
);

const BuildingLibraryIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
);

const HomeModernIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.55M5.25 7.16v.654a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25v-.654" />
    </svg>
);

const BoltIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

// --- Icons for Education Section ---
const CalendarDaysIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 14.25h.008v.008H12v-.008z" />
    </svg>
);

const ComputerDesktopIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.87a3 3 0 01-.879-2.122v-1.007M15 15.75a3 3 0 00-3-3H9a3 3 0 00-3 3v.25m6-3.25a3 3 0 013 3v.25m0 0a3 3 0 01-3 3h-3a3 3 0 01-3-3v-.25m6 3.25v.25a3 3 0 01-3 3h-3a3 3 0 01-3-3v-.25" />
    </svg>
);
const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" />
    </svg>
);
const CubeTransparentIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25m9 5.25l9-5.25" />
    </svg>
);

// --- Icons for Student Life Section ---
const HeartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const FlagIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
);

const SpeakerWaveIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
);

// --- Icons for Teachers Section ---
const UsersIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598M12 14.25a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z" />
  </svg>
);
const LightBulbIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 00-7.5 0c.887.66 2.028 1.022 3.232 1.022s2.345-.362 3.232-1.022zM9 11.25a3 3 0 116 0 3 3 0 01-6 0z" />
    </svg>
);

// --- Icons for Admission Section ---
const ClipboardDocumentListIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM10.5 12h.008v.008H10.5V12z" />
    </svg>
);
const PaperAirplaneIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);
const ChartBarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);
const QuestionMarkCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
);

// --- Icons for Career Section ---
const ArrowTrendingUpIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" />
    </svg>
);

const LifebuoyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
);

// --- Icons for Support Section ---
const CurrencyDollarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>
);

const DocumentTextIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

// --- Icons for Future Section ---
const RocketLaunchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 00-5.84-2.56m0 0a14.95 14.95 0 00-2.56-5.84m2.56 5.84c-2.302 0-4.18-.785-5.84-2.56m5.84 2.56v-4.82a6 6 0 017.38-5.84m-7.38 5.84h-4.82a6 6 0 01-5.84-7.38m14.56 0a14.95 14.95 0 00-2.56-5.84m2.56 5.84a14.95 14.95 0 00-5.84-2.56" />
  </svg>
);

const CpuChipIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25h1.5M19.5 12h1.5m-3.75 3.75h1.5M15.75 21v-1.5M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
  </svg>
);
const WrenchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877-2.496-3.03c-.528-1.036-.94-2.196-1.026-3.417a4.5 4.5 0 00-4.5-4.5c-1.222.086-2.381.5-3.417 1.026L3 11.42m8.42 3.75h.008v.008h-.008v-.008z" />
  </svg>
);


// --- Data for Specialties ---
const specialtiesData = [
  {
    code: "21.02.01",
    name: "Разработка и эксплуатация нефтяных и газовых месторождений",
    isProfile: true,
    duration9: "3 года 10 месяцев",
    duration11: "2 года 10 месяцев",
    form: "Очная, Заочная",
    budgetPlaces: 75,
    paidPlaces: 25,
    passingScore: "4.5",
    keyDisciplines: ["Геология нефти и газа", "Технология добычи", "Эксплуатация скважин", "Гидродинамика пласта"],
    skills: ["Управление процессом добычи", "Диагностика оборудования", "Анализ геофизических данных", "Оптимизация разработки"],
    internship: "ПАО «НК «Роснефть», ПАО «ЛУКОЙЛ», ПАО «Татнефть»",
    qualification: "Техник-технолог",
    prospects: "Оператор по добыче нефти и газа, мастер, технолог. Средняя з/п от 80 000 руб.",
    furtherEducation: "Уфимский государственный нефтяной технический университет (УГНТУ), РГУ нефти и газа им. Губкина (сокращенные программы)."
  },
  {
    code: "21.02.02",
    name: "Бурение нефтяных и газовых скважин",
    isProfile: true,
    duration9: "3 года 10 месяцев",
    duration11: "2 года 10 месяцев",
    form: "Очная",
    budgetPlaces: 50,
    paidPlaces: 25,
    passingScore: "4.3",
    keyDisciplines: ["Технология бурения", "Буровые растворы", "Ремонт скважин", "Промышленная безопасность"],
    skills: ["Ведение процесса бурения", "Контроль параметров бурового раствора", "Ликвидация аварий и осложнений", "Супервайзинг"],
    internship: "ООО «Башнефть-Бурение», ООО «Газпром бурение»",
    qualification: "Техник-технолог",
    prospects: "Помощник бурильщика, буровой мастер, инженер по бурению. Средняя з/п от 100 000 руб.",
    furtherEducation: "УГНТУ, Тюменский индустриальный университет (ТИУ)."
  },
  {
    code: "15.02.12",
    name: "Монтаж, техобслуживание и ремонт оборудования",
    isProfile: false,
    duration9: "3 года 10 месяцев",
    duration11: "2 года 10 месяцев",
    form: "Очная",
    budgetPlaces: 25,
    paidPlaces: 15,
    passingScore: "4.1",
    keyDisciplines: ["Детали машин", "Технология ремонта", "Диагностика оборудования", "Гидравлика и пневматика"],
    skills: ["Монтаж и демонтаж узлов", "Проведение планово-предупредительных ремонтов", "Чтение чертежей", "Наладка оборудования"],
    internship: "Ремонтные цеха нефтегазовых компаний, машиностроительные заводы",
    qualification: "Техник-механик",
    prospects: "Слесарь-ремонтник, механик участка, сервисный инженер. Средняя з/п от 70 000 руб.",
    furtherEducation: "Профильные технические вузы страны."
  },
  {
    code: "09.02.07",
    name: "Информационные системы и программирование",
    isProfile: false,
    duration9: "3 года 10 месяцев",
    duration11: "2 года 10 месяцев",
    form: "Очная",
    budgetPlaces: 25,
    paidPlaces: 20,
    passingScore: "4.6",
    keyDisciplines: ["Алгоритмизация и программирование", "Базы данных", "Веб-технологии", "Сетевое администрирование"],
    skills: ["Разработка ПО на Python/Java/C#", "SQL", "Frontend и Backend разработка", "Тестирование и отладка"],
    internship: "IT-отделы нефтегазовых компаний, IT-компании региона",
    qualification: "Программист, Разработчик веб и мультимедийных приложений",
    prospects: "Программист, веб-разработчик, системный администратор. Средняя з/п от 75 000 руб.",
    furtherEducation: "Уфимский университет науки и технологий (УУНиТ), Казанский федеральный университет (КФУ)."
  }
];

// --- Data for Teachers Section ---
const featuredTeachersData = [
  {
    name: "Сидоров Иван Петрович",
    title: "Кандидат тех. наук, преподаватель высшей категории",
    imageUrl: "https://picsum.photos/200/200?image=786",
    bio: "Более 20 лет опыта работы на буровых установках в Западной Сибири. Автор 15 научных публикаций и патента на изобретение. Эксперт WorldSkills.",
    philosophy: "Теория без практики мертва. Моя задача — не просто дать знания, а научить применять их в реальных производственных условиях.",
    studentQuote: "Иван Петрович объясняет сложнейшие процессы так, что становится понятно даже гуманитарию. Его примеры из личного опыта бесценны.",
    studentName: "Дмитрий, выпускник 2023"
  },
  {
    name: "Кузнецова Ольга Викторовна",
    title: "Заслуженный учитель РБ, преподаватель химии",
    imageUrl: "https://picsum.photos/200/200?image=761",
    bio: "Автор уникальной методики преподавания органической химии для нефтяников. Подготовила более 30 призеров республиканских олимпиад.",
    philosophy: "Химия — это не скучные формулы, а магия, которая происходит вокруг нас. Я учу видеть эту магию и управлять ей.",
    studentQuote: "Благодаря Ольге Викторовне я полюбила химию. Она умеет зажечь интерес к своему предмету и всегда готова помочь разобраться в трудной теме.",
    studentName: "Анастасия, 3 курс"
  },
   {
    name: "Михайлов Сергей Александрович",
    title: "Преподаватель IT-дисциплин, сертифицированный эксперт",
    imageUrl: "https://picsum.photos/200/200?image=669",
    bio: "Практикующий разработчик, участвовал в создании автоматизированных систем управления для нефтегазовых компаний. Руководитель студенческого IT-клуба.",
    philosophy: "Сегодня программист в нефтегазовой отрасли — это ключевой специалист. Я готовлю студентов к решению реальных, а не академических задач.",
    studentQuote: "Сергей Александрович всегда в курсе последних IT-трендов. На его парах мы работаем над настоящими проектами, это круче любой теории.",
    studentName: "Тимур, 4 курс"
  }
];

// --- Data for Admission Section ---
const admissionCalendarData = [
    { date: "20 июня", event: "Начало приема документов", description: "Старт приемной кампании 2025 года." },
    { date: "15 августа", event: "Завершение приема документов", description: "Последний день подачи заявлений на очную форму обучения." },
    { date: "16 августа", event: "Публикация конкурсных списков", description: "На сайте будут размещены списки поступающих." },
    { date: "20 августа", event: "Завершение приема оригиналов", description: "Последний день для предоставления оригинала аттестата." },
    { date: "22 августа", event: "Приказы о зачислении", description: "Публикация приказов о зачислении на бюджетные места." }
];

const faqData = [
    { question: "Нужны ли результаты ОГЭ/ЕГЭ для поступления?", answer: "Нет, зачисление на все специальности проходит на основании конкурса среднего балла аттестата. Вступительных испытаний нет." },
    { question: "Какие льготы есть при поступлении?", answer: "Особые права при приеме имеют дети-сироты, инвалиды I и II групп, а также абитуриенты, поступающие по договорам о целевом обучении с предприятиями-партнерами." },
    { question: "Какова стоимость обучения?", answer: "Стоимость обучения на платной основе варьируется от 65 000 до 85 000 рублей в год в зависимости от специальности. Точную сумму на 2025 год уточняйте в приемной комиссии." },
    { question: "Есть ли стипендии?", answer: "Да, студенты, обучающиеся на бюджете, получают государственную академическую стипендию при условии хорошей успеваемости. Также существуют повышенные стипендии за особые достижения и социальные стипендии." },
    { question: "Как получить место в общежитии?", answer: "При подаче документов необходимо указать в заявлении, что вы нуждаетесь в общежитии. Места предоставляются в первую очередь иногородним студентам на основании личного заявления. Заселение начинается с 25 августа." }
];

// --- Data for Support Section ---
const scholarshipsInfo = [
  {
    type: "Академическая",
    amount: "от 1 800 ₽/мес.",
    condition: "За хорошую успеваемость (без троек по итогам сессии)."
  },
  {
    type: "Повышенная",
    amount: "до 5 000 ₽/мес.",
    condition: "За отличную учебу и достижения в научной, спортивной или общественной деятельности."
  },
  {
    type: "Социальная",
    amount: "от 2 700 ₽/мес.",
    condition: "Для студентов из льготных категорий (сироты, инвалиды и др.), независимо от успеваемости."
  },
  {
    type: "Именные",
    amount: "до 15 000 ₽/мес.",
    condition: "От компаний-партнеров («Роснефть», «ЛУКОЙЛ») для лучших студентов профильных специальностей."
  }
];


// --- Reusable Components defined outside App to prevent re-renders ---

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <section id={id} className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-12">{title}</h2>
            {children}
        </div>
    </section>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-900/50 text-cyan-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-900/50 text-cyan-400">
                {icon}
            </div>
            <h3 className="ml-4 text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="text-gray-400 space-y-2 flex-grow">{children}</div>
    </div>
);

interface TeacherProfileCardProps {
    name: string;
    title: string;
    imageUrl: string;
    bio: string;
    philosophy: string;
    studentQuote: string;
    studentName: string;
}

const TeacherProfileCard: React.FC<TeacherProfileCardProps> = ({ name, title, imageUrl, bio, philosophy, studentQuote, studentName }) => (
    <div className="bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col space-y-4 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center space-x-4">
            <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full border-2 border-cyan-500" />
            <div>
                <h4 className="text-xl font-bold text-white">{name}</h4>
                <p className="text-sm text-cyan-400">{title}</p>
            </div>
        </div>
        <p className="text-gray-400 text-sm border-l-2 border-gray-700 pl-3">{bio}</p>
        <blockquote className="bg-gray-900/50 p-3 rounded-lg border-l-4 border-cyan-600">
            <p className="text-gray-300 italic">"{philosophy}"</p>
        </blockquote>
        <div className="bg-gray-800 p-3 rounded-lg text-sm">
            <p className="text-gray-400 italic">"{studentQuote}"</p>
            <footer className="text-right mt-2 text-cyan-500">— {studentName}</footer>
        </div>
    </div>
);

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center py-4 px-2 focus:outline-none"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4 bg-gray-800/50 rounded-b-lg">
                    <p className="text-gray-300">{answer}</p>
                </div>
            </div>
        </div>
    );
};


// --- Main Application Component ---

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const smoothScrollTo = (targetId: string, duration = 600) => {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        const headerOffset = 80; // height of the nav bar (h-20 = 5rem = 80px)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        const startPosition = window.pageYOffset;
        let startTime: number | null = null;

        const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, offsetPosition - startPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        smoothScrollTo(targetId);
    };

    const navLinks = [
        { href: '#about', label: 'О колледже' },
        { href: '#why-us', label: 'Почему мы' },
        { href: '#specialties', label: 'Специальности' },
        { href: '#infrastructure', label: 'Инфраструктура' },
        { href: '#education', label: 'Учебный процесс' },
        { href: '#student-life', label: 'Студ. жизнь' },
        { href: '#teachers', label: 'Преподаватели' },
        { href: '#admission', label: 'Поступление' },
        { href: '#careers', label: 'Карьера' },
        { href: '#support', label: 'Поддержка' },
        { href: '#future', label: 'Будущее' },
        { href: '#partners', label: 'Партнеры' },
        { href: '#contacts', label: 'Контакты' },
    ];

    const activeSpecialty = specialtiesData[activeTab];

    return (
        <div className="bg-gray-900 font-sans">
            {/* --- Navigation --- */}
            <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center h-20">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold text-white">
                      <span className="text-cyan-400">ОНК</span> им. С.И. Кувыкина
                    </a>
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                            aria-label="Открыть меню"
                        >
                            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>

                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-64 origin-top-right bg-gray-800/90 backdrop-blur-md rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-2 max-h-[70vh] overflow-y-auto">
                                    {navLinks.map(link => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-900/50 hover:text-cyan-400 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <header id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1074')" }}></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Октябрьский нефтяной колледж
                        <span className="block text-cyan-400 text-3xl md:text-5xl mt-2">им. С.И. Кувыкина</span>
                    </h1>
                    <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300">
                        Ваш старт в успешную карьеру в нефтегазовой отрасли!
                    </p>
                    <a href="#admission" onClick={(e) => handleNavClick(e, '#admission')} className="mt-8 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Подать заявку
                    </a>
                </div>
            </header>

            <main>
                {/* --- About Section --- */}
                <Section id="about" title="Добро пожаловать в ОНК!">
                    <div className="max-w-4xl mx-auto text-center text-lg text-gray-300 space-y-6">
                        <p>
                            <span className="font-bold text-white">Полное официальное название:</span> Государственное автономное профессиональное образовательное учреждение Октябрьский нефтяной колледж им. С.И. Кувыкина.
                        </p>
                        <p>
                            Основанный в <span className="font-bold text-cyan-400">1952 году</span>, наш колледж прошел славный путь от небольшого техникума до одного из ведущих учебных заведений России по подготовке специалистов для топливно-энергетического комплекса. Мы гордимся своей историей, которая неразрывно связана с развитием нефтяной промышленности страны.
                        </p>
                        <p>
                            Колледж имеет все необходимые <span className="font-bold text-white">государственные лицензии и аккредитации</span>, что гарантирует высокое качество образования и соответствие федеральным стандартам.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-8">
                            <div className="flex items-center text-left">
                                <MapPinIcon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white">Наш адрес</h4>
                                    <p className="text-gray-400">г. Октябрьский, Республика Башкортостан, ул. Ленина, д. 59</p>
                                    <p className="text-gray-500 text-sm">Удобное расположение рядом с автовокзалом и основными транспортными артериями города.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- Why Us Section --- */}
                <Section id="why-us" title="Почему выбирают нас?">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={<TrophyIcon className="w-8 h-8"/>} 
                            title="Признание и достижения" 
                            description="Колледж неоднократно входил в топ «100 лучших ссузов России» и награжден званием «Лидер отрасли» за вклад в подготовку кадров."
                        />
                        <FeatureCard 
                            icon={<AcademicCapIcon className="w-8 h-8"/>} 
                            title="Сильнейший преподавательский состав" 
                            description="Наши преподаватели — это эксперты-практики с многолетним опытом работы на ведущих предприятиях отрасли."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.622.504-1.125 1.125-1.125h3.375c.621 0 1.125.503 1.125 1.125v3.375c0 .621-.504 1.125-1.125-1.125h-3.375a1.125 1.125 0 01-1.125-1.125v-3.375z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.125a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h9.375c.621 0 1.125.503 1.125 1.125v11.625c0 .621-.504 1.125-1.125 1.125h-9.375z" /></svg>}
                            title="Современная база" 
                            description="Лаборатории и мастерские, оснащенные по последнему слову техники, позволяют получать практические навыки на реальном оборудовании."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0012 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-5.418c.53.945 1 2.055 1 3.253 0 1.258-.5 2.44-1.34 3.386" /></svg>}
                            title="Стратегическое партнерство" 
                            description="Тесное сотрудничество с лидерами нефтегазовой индустрии: от производственной практики до целевого обучения."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
                            title="Гарантия трудоустройства" 
                            description="Более 90% наших выпускников трудоустраиваются по специальности в первый год после окончания колледжа. Мы готовим востребованных специалистов."
                        />
                        <FeatureCard 
                            icon={<UserGroupIcon className="w-8 h-8"/>} 
                            title="Насыщенная студенческая жизнь" 
                            description="Спортивные секции, творческие кружки, волонтерское движение и студенческое самоуправление. У нас интересно не только учиться!"
                        />
                    </div>
                </Section>
                
                 {/* --- Specialties Section --- */}
                <Section id="specialties" title="Наши специальности">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Выберите свое будущее в нефтегазовой отрасли и IT. Мы предлагаем востребованные программы, разработанные совместно с лидерами индустрии.</p>
                    <div className="flex flex-wrap justify-center border-b border-gray-700 mb-8">
                        {specialtiesData.map((spec, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`py-3 px-4 text-sm sm:text-base font-medium border-b-2 transition-colors duration-300 relative ${activeTab === index ? 'text-cyan-400 border-cyan-400' : 'text-gray-400 border-transparent hover:text-white hover:border-gray-500'}`}
                            >
                                {spec.name}
                                {spec.isProfile && <span className="absolute top-1 right-1 text-xs text-cyan-400/70">профильная</span>}
                            </button>
                        ))}
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{activeSpecialty.code} {activeSpecialty.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {/* General Info */}
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold text-white">Срок обучения:</p>
                                <p className="text-gray-400">На базе 9 кл: <span className="text-gray-300">{activeSpecialty.duration9}</span></p>
                                <p className="text-gray-400">На базе 11 кл: <span className="text-gray-300">{activeSpecialty.duration11}</span></p>
                            </div>
                             <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold text-white">Места и конкурс:</p>
                                <p className="text-gray-400">Бюджет: <span className="text-gray-300">{activeSpecialty.budgetPlaces}</span>, Платно: <span className="text-gray-300">{activeSpecialty.paidPlaces}</span></p>
                                <p className="text-gray-400">Проходной балл (средний): <span className="text-gray-300">{activeSpecialty.passingScore}</span></p>
                            </div>
                             <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="font-semibold text-white">Квалификация:</p>
                                <p className="text-cyan-400 text-lg">{activeSpecialty.qualification}</p>
                            </div>
                            {/* Key Disciplines */}
                            <div className="bg-gray-800 p-4 rounded-lg md:col-span-2 lg:col-span-1">
                                <div className="flex items-center mb-2">
                                  <BookOpenIcon className="w-6 h-6 text-cyan-400 mr-3" />
                                  <h4 className="font-semibold text-white">Ключевые дисциплины</h4>
                                </div>
                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                    {activeSpecialty.keyDisciplines.map(d => <li key={d}>{d}</li>)}
                                </ul>
                            </div>
                            {/* Skills */}
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <WrenchScrewdriverIcon className="w-6 h-6 text-cyan-400 mr-3" />
                                  <h4 className="font-semibold text-white">Практические навыки</h4>
                                </div>
                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                    {activeSpecialty.skills.map(s => <li key={s}>{s}</li>)}
                                </ul>
                            </div>
                            {/* Internship & Prospects */}
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <BriefcaseIcon className="w-6 h-6 text-cyan-400 mr-3" />
                                  <h4 className="font-semibold text-white">Практика и карьера</h4>
                                </div>
                                <p className="text-gray-400 mb-2"><span className="font-semibold text-gray-300">Места практики:</span> {activeSpecialty.internship}</p>
                                <p className="text-gray-400"><span className="font-semibold text-gray-300">Перспективы:</span> {activeSpecialty.prospects}</p>
                                <p className="text-gray-400 mt-2"><span className="font-semibold text-gray-300">Дальнейшее обучение:</span> {activeSpecialty.furtherEducation}</p>
                            </div>
                        </div>
                    </div>
                </Section>

                 {/* --- Infrastructure Section --- */}
                <Section id="infrastructure" title="Наша инфраструктура">
                     <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Мы создали современную и комфортную среду, где каждый студент может раскрыть свой потенциал. Учитесь, развивайтесь и живите полной студенческой жизнью в ОНК!</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <InfoCard icon={<BuildingOfficeIcon className="w-8 h-8"/>} title="Учебные корпуса">
                            <p>Два просторных учебных корпуса общей площадью более 15 000 м² после капитального ремонта. Светлые аудитории оснащены мультимедийным оборудованием и интерактивными досками.</p>
                         </InfoCard>
                         <InfoCard icon={<BeakerIcon className="w-8 h-8"/>} title="Лаборатории и мастерские">
                             <p>Более 30 специализированных лабораторий, включая:</p>
                             <ul className="list-disc list-inside pl-2 text-sm">
                                <li>Тренажер-имитатор бурения</li>
                                <li>Лаборатория гидравлики и нефтегазового оборудования</li>
                                <li>Химико-аналитическая лаборатория</li>
                                <li>Мастерские по ремонту и обслуживанию техники</li>
                             </ul>
                         </InfoCard>
                         <InfoCard icon={<BuildingLibraryIcon className="w-8 h-8"/>} title="Библиотека">
                            <p>Современный библиотечный комплекс с фондом более 100 000 изданий. К услугам студентов читальный зал, компьютеры с доступом к электронным базам данных (eLibrary, IPR Books) и Wi-Fi.</p>
                         </InfoCard>
                         <InfoCard icon={<BoltIcon className="w-8 h-8"/>} title="Спортивный комплекс">
                            <p>Большой игровой спортзал, тренажерный зал, открытый стадион с футбольным полем и беговыми дорожками. Работают секции по волейболу, баскетболу, мини-футболу, легкой атлетике.</p>
                         </InfoCard>
                         <InfoCard icon={<HomeModernIcon className="w-8 h-8"/>} title="Общежитие">
                            <p>Комфортабельное общежитие на 400 мест для иногородних студентов. Комнаты на 2-3 человека, на каждом этаже оборудованные кухни, душевые и зоны отдыха. Доступный Wi-Fi. Стоимость проживания ~1500 руб/мес.</p>
                         </InfoCard>
                         <InfoCard icon={<UserGroupIcon className="w-8 h-8"/>} title="Студенческая жизнь">
                            <p>Просторная столовая с разнообразным меню и демократичными ценами. Работает медпункт и актовый зал на 500 мест, где проходят все праздники и мероприятия. Действует музей истории колледжа.</p>
                         </InfoCard>
                     </div>
                </Section>
                
                {/* --- Educational Process Section --- */}
                <Section id="education" title="Современный учебный процесс">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Мы сочетаем проверенные временем методики с передовыми технологиями, чтобы готовить специалистов, готовых к вызовам завтрашнего дня.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard icon={<CalendarDaysIcon className="w-8 h-8"/>} title="Сбалансированный учебный план">
                           <p>Учебный год разделен на семестры с четким графиком сессий и каникул. Расписание занятий (3-4 пары в день) обеспечивает оптимальный баланс между лекциями, семинарами и практическими занятиями в лабораториях.</p>
                        </InfoCard>
                        <InfoCard icon={<ComputerDesktopIcon className="w-8 h-8"/>} title="Инновационные технологии">
                           <p>Активно используем Moodle и другие электронные платформы для доступа к учебным материалам 24/7. Поощряется проектная деятельность, позволяющая студентам решать реальные производственные кейсы.</p>
                        </InfoCard>
                        <InfoCard icon={<SparklesIcon className="w-8 h-8"/>} title="Конкурсы профмастерства">
                           <p>Наши студенты — постоянные участники и призеры региональных и национальных чемпионатов WorldSkills Russia и «Абилимпикс», демонстрируя высокий уровень подготовки и мастерства.</p>
                        </InfoCard>
                        <InfoCard icon={<BriefcaseIcon className="w-8 h-8"/>} title="Практика на производстве">
                           <p>Производственная практика (до 6 месяцев за весь период обучения) проходит на предприятиях-партнерах. Это оплачиваемая работа, где студенты под руководством наставников погружаются в профессию.</p>
                        </InfoCard>
                         <InfoCard icon={<CubeTransparentIcon className="w-8 h-8"/>} title="Тренажеры и симуляторы">
                           <p>Для отработки практических навыков в безопасных условиях используются современные симуляторы бурения, виртуальные тренажеры по эксплуатации оборудования и автоматизированные обучающие комплексы.</p>
                        </InfoCard>
                        <InfoCard icon={<AcademicCapIcon className="w-8 h-8"/>} title="Наука и развитие">
                           <p>Студенты ведут научно-исследовательскую работу, выступают на конференциях. Дипломное проектирование нацелено на решение реальных задач. Есть курсы повышения квалификации и доп. образования.</p>
                        </InfoCard>
                    </div>
                </Section>

                {/* --- Student Life Section --- */}
                <Section id="student-life" title="Яркая студенческая жизнь">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Учеба в ОНК — это не только лекции и практика. Это время открытий, дружбы и самореализации. Мы создали все условия, чтобы каждый студент нашел занятие по душе.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard icon={<UserGroupIcon className="w-8 h-8"/>} title="Студенческий совет">
                           <p>Активный студенческий совет — это голос каждого студента. Ребята организуют мероприятия, реализуют проекты по улучшению жизни в колледже и представляют интересы учащихся перед администрацией.</p>
                        </InfoCard>
                        <InfoCard icon={<SparklesIcon className="w-8 h-8"/>} title="Творческие коллективы">
                           <p>Раскрой свои таланты! У нас действуют команда КВН, вокальная и театральная студии, танцевальные коллективы. Наши студенты — звезды городских и республиканских фестивалей.</p>
                        </InfoCard>
                        <InfoCard icon={<FlagIcon className="w-8 h-8"/>} title="Спортивные клубы">
                           <p>Здоровый дух в здоровом теле! Сборные колледжа по волейболу, баскетболу, футболу и легкой атлетике регулярно занимают призовые места на соревнованиях различного уровня.</p>
                        </InfoCard>
                        <InfoCard icon={<CalendarDaysIcon className="w-8 h-8"/>} title="Традиции колледжа">
                           <p>Мы чтим наши традиции: торжественное «Посвящение в студенты», празднование Дня нефтяника, интеллектуальные игры, конкурсы «Мисс и Мистер ОНК» и, конечно, незабываемый выпускной бал.</p>
                        </InfoCard>
                        <InfoCard icon={<HeartIcon className="w-8 h-8"/>} title="Волонтерское движение">
                           <p>Наши студенты-волонтеры помогают ветеранам, организуют экологические акции, участвуют в социальных проектах и делают мир вокруг себя немного лучше и добрее.</p>
                        </InfoCard>
                        <InfoCard icon={<SpeakerWaveIcon className="w-8 h-8"/>} title="Студенческие СМИ">
                           <p>Студенческая газета «Проф.com», активные группы в социальных сетях и развивающийся YouTube-канал позволяют быть в курсе всех событий и делиться самыми яркими моментами жизни колледжа.</p>
                        </InfoCard>
                    </div>
                    <div className="max-w-4xl mx-auto mt-16 space-y-8">
                        <blockquote className="border-l-4 border-cyan-500 pl-6 text-left">
                            <p className="text-gray-300 italic">"Здесь я нашел не только профессию, но и настоящих друзей. Студсовет научил меня быть лидером, а команда КВН – смотреть на жизнь с юмором!"</p>
                            <footer className="mt-2 text-sm text-gray-400">— Артём, 3 курс, специальность 'Разработка месторождений'</footer>
                        </blockquote>
                        <blockquote className="border-l-4 border-cyan-500 pl-6 text-left">
                            <p className="text-gray-300 italic">"Я всегда любила петь, и в колледже смогла развить свой талант в вокальной студии. Выступления на сцене – это незабываемые эмоции! Рада, что учебу можно совмещать с творчеством."</p>
                            <footer className="mt-2 text-sm text-gray-400">— Елена, 2 курс, специальность 'Информационные системы'</footer>
                        </blockquote>
                    </div>
                </Section>

                {/* --- Teachers Section --- */}
                <Section id="teachers" title="Наши преподаватели — наша гордость">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Знания передают не стены, а люди. В ОНК работают настоящие профессионалы, которые сочетают глубокие теоретические знания с богатым практическим опытом и искренней любовью к своему делу.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="text-4xl font-bold text-cyan-400">120+</div>
                            <div className="text-gray-400 mt-2">Преподавателей и мастеров</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="text-4xl font-bold text-cyan-400">85%</div>
                            <div className="text-gray-400 mt-2">Имеют высшую и первую категорию</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="text-4xl font-bold text-cyan-400">15+</div>
                            <div className="text-gray-400 mt-2">Кандидатов наук и доцентов</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="text-4xl font-bold text-cyan-400">40%</div>
                            <div className="text-gray-400 mt-2">С опытом работы на производстве</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard icon={<AcademicCapIcon className="w-8 h-8"/>} title="Постоянное развитие">
                           <p>Наши педагоги регулярно проходят стажировки на ведущих предприятиях отрасли, повышают квалификацию в лучших вузах страны и участвуют в научно-практических конференциях.</p>
                        </InfoCard>
                        <InfoCard icon={<BookOpenIcon className="w-8 h-8"/>} title="Методическая работа">
                           <p>Преподаватели разрабатывают авторские учебные пособия, методические материалы и активно публикуются в научных журналах, обогащая образовательный процесс передовым опытом.</p>
                        </InfoCard>
                        <InfoCard icon={<UsersIcon className="w-8 h-8"/>} title="Наставничество и кураторство">
                           <p>За каждой группой закреплен куратор, который помогает студентам в адаптации, решении учебных и личных вопросов. Мы практикуем индивидуальный подход к каждому студенту.</p>
                        </InfoCard>
                    </div>
                     <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mt-20 mb-10">Ключевые фигуры педагогического состава</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredTeachersData.map((teacher, index) => (
                            <TeacherProfileCard key={index} {...teacher} />
                        ))}
                    </div>
                </Section>

                {/* --- Admission Section --- */}
                <Section id="admission" title="Поступление 2025: Пошаговое руководство">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Мы сделали процесс поступления максимально прозрачным и понятным. Следуйте этому руководству, чтобы стать частью нашего колледжа.</p>
                    
                    {/* Applicant's Calendar */}
                    <h3 className="text-2xl font-bold text-center text-white mb-8">Календарь абитуриента 2025</h3>
                    <div className="relative max-w-4xl mx-auto mb-16">
                        <div className="absolute left-1/2 w-0.5 h-full bg-gray-700 hidden sm:block"></div>
                        {admissionCalendarData.map((item, index) => (
                            <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                                <div className={`w-full sm:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12 sm:text-right'}`}>
                                    <h4 className="text-xl font-bold text-cyan-400">{item.date}</h4>
                                    <p className="text-white font-semibold mt-1">{item.event}</p>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                                <div className="absolute left-1/2 -ml-3 z-10 w-6 h-6 rounded-full bg-cyan-500 border-4 border-gray-900 hidden sm:block"></div>
                            </div>
                        ))}
                    </div>

                    {/* Admission Steps */}
                     <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <InfoCard icon={<ClipboardDocumentListIcon className="w-8 h-8" />} title="Шаг 1: Подготовьте документы">
                            <ul className="list-disc list-inside space-y-1">
                                <li>Паспорт (оригинал и копия)</li>
                                <li>Аттестат (оригинал и копия)</li>
                                <li>4 фотографии 3х4 см</li>
                                <li>Медицинская справка (форма 086-у)</li>
                                <li>СНИЛС</li>
                                <li>Документы, подтверждающие льготы (при наличии)</li>
                            </ul>
                        </InfoCard>
                        <InfoCard icon={<PaperAirplaneIcon className="w-8 h-8" />} title="Шаг 2: Подайте заявление">
                             <p>Выберите удобный для вас способ:</p>
                             <ul className="list-disc list-inside space-y-1 mt-2">
                                <li><span className="font-bold text-white">Лично:</span> в приемной комиссии (каб. 101)</li>
                                <li><span className="font-bold text-white">По почте:</span> заказным письмом на адрес колледжа</li>
                                <li><span className="font-bold text-white">Онлайн:</span> через портал Госуслуги</li>
                             </ul>
                        </InfoCard>
                         <InfoCard icon={<ChartBarIcon className="w-8 h-8" />} title="Шаг 3: Отслеживайте списки">
                            <p>Конкурс проводится по среднему баллу аттестата. Следите за своим положением в конкурсных списках, которые ежедневно обновляются на официальном сайте колледжа.</p>
                         </InfoCard>
                         <InfoCard icon={<AcademicCapIcon className="w-8 h-8" />} title="Шаг 4: Подтвердите зачисление">
                            <p>Для зачисления на бюджетное место необходимо предоставить оригинал аттестата в приемную комиссию в установленные сроки. Не упустите свой шанс!</p>
                         </InfoCard>
                    </div>

                     {/* FAQ */}
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-center text-white mb-6">Часто задаваемые вопросы</h3>
                        {faqData.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </Section>
                
                {/* --- Careers Section --- */}
                <Section id="careers" title="Трудоустройство и карьера">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">
                        Диплом ОНК — это не просто документ об образовании, а прямой путь к высокооплачиваемой и востребованной профессии. Мы обеспечиваем всестороннюю поддержку на старте вашей карьеры.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                        <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-cyan-600 shadow-lg">
                            <div className="text-5xl font-bold text-cyan-400 mb-2">&gt;90%</div>
                            <div className="text-gray-400">Выпускников трудоустроены в первый год</div>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-cyan-600 shadow-lg">
                            <div className="text-5xl font-bold text-cyan-400 mb-2">от 75 000 ₽</div>
                            <div className="text-gray-400">Средняя стартовая зарплата</div>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg border-t-4 border-cyan-600 shadow-lg">
                            <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
                            <div className="text-gray-400">Предприятий-партнеров ждут вас</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InfoCard icon={<LifebuoyIcon className="w-8 h-8"/>} title="Центр содействия трудоустройству">
                            <p>Наш карьерный центр помогает студентам на всех этапах: от составления грамотного резюме и подготовки к собеседованию до подбора вакансий из эксклюзивной базы от наших партнеров.</p>
                        </InfoCard>
                        <InfoCard icon={<SpeakerWaveIcon className="w-8 h-8"/>} title="Ярмарки вакансий и Дни карьеры">
                            <p>Регулярно организуем встречи с представителями ведущих компаний. Это ваш шанс лично пообщаться с HR-специалистами, узнать о стажировках и открытых вакансиях, и зарекомендовать себя.</p>
                        </InfoCard>
                        <InfoCard icon={<BriefcaseIcon className="w-8 h-8"/>} title="Целевое обучение">
                            <p>Программы целевого обучения от таких гигантов, как «Роснефть» и «ЛУКОЙЛ», — это гарантия трудоустройства после выпуска, дополнительная стипендия и оплачиваемая практика.</p>
                        </InfoCard>
                        <InfoCard icon={<ArrowTrendingUpIcon className="w-8 h-8"/>} title="Перспективы роста">
                            <p>Наши выпускники начинают карьеру с позиций техника или оператора, и за 5-7 лет вырастают до руководителей участков, ведущих инженеров и начальников отделов.</p>
                        </InfoCard>
                    </div>
                </Section>

                {/* --- Social Support Section --- */}
                <Section id="support" title="Социальная поддержка и стипендии">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">
                        Мы заботимся о наших студентах и создаем все условия для того, чтобы вы могли сосредоточиться на главном — получении качественного образования и развитии своих талантов.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-center text-white mb-8">Стипендиальное обеспечение</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {scholarshipsInfo.map((scholarship, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center border-b-4 border-cyan-600 flex flex-col">
                                <h4 className="text-xl font-semibold text-white mb-2">{scholarship.type}</h4>
                                <div className="text-3xl font-bold text-cyan-400 my-4 flex-grow flex items-center justify-center">{scholarship.amount}</div>
                                <p className="text-gray-400 text-sm">{scholarship.condition}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-center text-white mt-16 mb-8">Меры социальной поддержки</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Помощь в трудных ситуациях">
                            <p>Студенты, оказавшиеся в сложной жизненной ситуации, могут обратиться за единовременной материальной помощью. Каждое обращение рассматривается индивидуально.</p>
                        </InfoCard>
                        <InfoCard icon={<HomeModernIcon className="w-8 h-8" />} title="Льготное проживание">
                            <p>Иногородним студентам предоставляется место в комфортабельном общежитии по социально низкой цене. Дети-сироты и инвалиды проживают бесплатно.</p>
                        </InfoCard>
                        <InfoCard icon={<HeartIcon className="w-8 h-8" />} title="Забота о здоровье">
                            <p>В колледже работает медпункт, где можно получить первую помощь. Также доступна бесплатная психологическая поддержка для всех студентов, нуждающихся в консультации.</p>
                        </InfoCard>
                    </div>
                    
                    <div className="max-w-4xl mx-auto mt-16 bg-gray-800/50 rounded-lg p-8">
                         <div className="flex flex-col md:flex-row items-center">
                            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                               <div className="flex items-center justify-center h-24 w-24 rounded-full bg-cyan-900/50 text-cyan-400">
                                   <DocumentTextIcon className="w-12 h-12" />
                               </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Как получить поддержку?</h3>
                                <p className="text-gray-300 mb-2">Для оформления социальной стипендии, материальной помощи или получения льгот необходимо предоставить подтверждающие документы.</p>
                                <p className="text-gray-400">По всем вопросам обращайтесь к социальному педагогу колледжа.</p>
                                <p className="font-semibold text-cyan-400 mt-2">Кабинет №205. Мы всегда готовы помочь!</p>
                            </div>
                         </div>
                    </div>
                </Section>
                
                {/* --- Future Section --- */}
                <Section id="future" title="Взгляд в будущее: планы развития колледжа">
                     <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Мы не стоим на месте. ОНК — это динамично развивающаяся площадка, которая активно внедряет передовые образовательные стандарты и технологии, чтобы наши выпускники всегда были на шаг впереди.</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <InfoCard icon={<SparklesIcon className="w-8 h-8"/>} title="Профессионалитет 2026">
                             <p>Мы стали участником федерального проекта «Профессионалитет». Это означает создание образовательно-производственного кластера, открытие 5 новых мастерских, оснащенных по мировым стандартам, и обновление 80% образовательных программ.</p>
                         </InfoCard>
                         <InfoCard icon={<CpuChipIcon className="w-8 h-8"/>} title="Цифровая трансформация">
                             <p>Внедрение единой цифровой образовательной платформы, запуск VR/AR-тренажеров для отработки сложных технологических операций и расширение использования дистанционных технологий для повышения доступности образования.</p>
                         </InfoCard>
                         <InfoCard icon={<RocketLaunchIcon className="w-8 h-8"/>} title="Новые специальности">
                             <p>Планируется открытие новых перспективных направлений подготовки, отвечающих запросам Индустрии 4.0: «Промышленная робототехника», «Эксплуатация беспилотных авиационных систем» и «Аддитивные технологии».</p>
                         </InfoCard>
                          <InfoCard icon={<BuildingOfficeIcon className="w-8 h-8"/>} title="Модернизация инфраструктуры">
                             <p>В планах — полная реновация студенческого общежития с созданием современных коворкинг-зон и строительство нового физкультурно-оздоровительного комплекса с бассейном.</p>
                         </InfoCard>
                         <InfoCard icon={<UserGroupIcon className="w-8 h-8"/>} title="Укрепление партнерств">
                            <p>Расширение программ целевого обучения, создание совместных с «Роснефтью» и «Газпромом» научно-исследовательских лабораторий на базе колледжа для решения реальных производственных задач.</p>
                         </InfoCard>
                         <InfoCard icon={<WrenchIcon className="w-8 h-8"/>} title="Экология и устойчивое развитие">
                            <p>Запуск программ по «зеленой энергетике» и экологической безопасности в нефтегазовой отрасли. Участие студентов в проектах по рекультивации земель и снижению углеродного следа.</p>
                         </InfoCard>
                     </div>
                     <div className="max-w-5xl mx-auto mt-20 bg-gray-800 rounded-xl shadow-2xl p-8 flex flex-col md:flex-row items-center">
                        <img src="https://picsum.photos/250/250?image=1005" alt="Директор колледжа" className="w-40 h-40 rounded-full border-4 border-cyan-500 mb-6 md:mb-0 md:mr-8 flex-shrink-0"/>
                        <div className="text-center md:text-left">
                           <h3 className="text-2xl font-bold text-white">Слово директора</h3>
                           <blockquote className="mt-4">
                               <p className="text-gray-300 italic">"Наша цель — не просто идти в ногу со временем, а опережать его. Мы создаем образовательную среду, где каждый студент может получить не только востребованную профессию, но и навыки будущего: критическое мышление, умение работать в команде и готовность к непрерывному обучению. ОНК — это инвестиция в надежное и успешное будущее."</p>
                           </blockquote>
                           <footer className="mt-4 text-right">
                               <p className="font-semibold text-white">Ахметов Рустам Маратович</p>
                               <p className="text-sm text-cyan-400">Директор ГАПОУ ОНК им. С.И. Кувыкина</p>
                           </footer>
                        </div>
                     </div>
                </Section>

                {/* --- Partners Section --- */}
                <Section id="partners" title="Наши ключевые партнеры">
                    <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 mb-12">Мы гордимся долгосрочными и продуктивными отношениями с крупнейшими компаниями России, которые предоставляют нашим студентам уникальные возможности для практики и будущего трудоустройства.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {['Роснефть', 'ЛУКОЙЛ', 'Газпром нефть', 'Татнефть', 'Башнефть', 'Сургутнефтегаз'].map(partner => (
                            <div key={partner} className="text-2xl font-semibold text-gray-500 hover:text-white transition-colors duration-300 filter grayscale hover:grayscale-0">
                                {partner}
                            </div>
                        ))}
                    </div>
                </Section>

                {/* --- Contact Section --- */}
                <Section id="contacts" title="Приемная комиссия">
                    <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
                        <p className="text-center text-lg text-gray-300 mb-8">
                            Готовы сделать первый шаг к успешной карьере? Свяжитесь с нами! Наши специалисты ответят на все ваши вопросы о специальностях, условиях поступления и студенческой жизни.
                        </p>
                        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                            <div className="flex flex-col items-center space-y-2">
                                <PhoneIcon className="w-10 h-10 text-cyan-400 mb-2"/>
                                <span className="text-xl font-bold">Телефон</span>
                                <a href="tel:+77777777777" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">+7 777 777 777</a>
                            </div>
                             <div className="flex flex-col items-center space-y-2">
                                <EnvelopeIcon className="w-10 h-10 text-cyan-400 mb-2"/>
                                <span className="text-xl font-bold">Email</span>
                                <a href="mailto:priem@onk-rb.ru" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">priem@onk-rb.ru</a>
                            </div>
                        </div>
                         <div className="text-center mt-8 text-gray-400">
                             <p>Часы работы: Пн-Пт, 9:00 - 17:00. Кабинет 101.</p>
                         </div>
                        <div className="text-center mt-12">
                           <a href="https://onk-rb.ru/" target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">
                                Перейти на официальный сайт
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
            
            {/* --- Footer --- */}
            <footer className="bg-gray-900 border-t border-gray-800 py-8">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Октябрьский нефтяной колледж им. С.И. Кувыкина. Все права защищены.</p>
                     <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://onk-rb.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Официальный сайт</a>
                        <a href="https://vk.com/onk_rb" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">ВКонтакте</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
