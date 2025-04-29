import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHandshake, FaUniversity, FaBriefcase, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Timeline data
const timelineItems = [
  {
    date: "2015 - 2018",
    title: "University of Hull",
    subtitle: "BSc Computer Science",
    description: "Specialised in Advanced Programming (C/C++), ML (Weka), Web (C#/.Net). Built a self-flying drone with infrared cameras, PID systems, Python 3D plotting, and Raspberry Pi.",
    icon: <FaUniversity />,
    bgColor: "#4f46e5",
    tags: ["C++", "C#", "Python", "Machine Learning", "Infrared Systems"],
  },
  {
    date: "2017 - 2018",
    title: "Contract Work",
    subtitle: "Small Projects and Websites",
    description: "HUD system integrating Hololens with ERP, several Umbraco CMS websites, ePoS systems.",
    icon: <FaHandshake />,
    bgColor: "#f6339a",
    tags: ["Hololens", "Umbraco", "ERP", "C#", "ePoS"],
  },
  {
    date: "2018 - 2021",
    title: "Software Developer",
    subtitle: "1Plus1Loans",
    description: "Process optimization, monolithic .NET systems, automated KYC/AML, SQL Server tuning, reporting for stakeholders.",
    icon: <FaBriefcase />,
    bgColor: "#047857",
    tags: [".NET Framework", "SQL Server", "DevExpress", "KYC", "AML", "Umbraco CMS", "JQuery"],
  },
  {
    date: "2020 - 2021",
    title: "Lead Software Developer",
    subtitle: "1Plus1Loans",
    description: "3D Secure 2.1 integration, FCA compliance, subscription payment redesign, public website redevelopment.",
    icon: <FaBriefcase />,
    bgColor: "#047857",
    tags: ["3DS 2.1", "FCA Compliance", "Payments", "Subscriptions", "Web Development"],
  },
  {
    date: "2021 - 2022",
    title: "Senior Developer",
    subtitle: "Auto-Trail VR Ltd",
    description: "Quickly triaged and resolved legacy issues at Auto-Trail, improving performance and security. Overhauled the sales configurator, inspection, and type approval systems, and began deeply integrating with ERP.",
    icon: <FaCode />,
    bgColor: "#d53433",
    tags: [".NET framework (various)", "PHP", "Redis", "SQL Server", "JQuery", "Infor Visual"],
  },
  {
    date: "2022 - present",
    title: "Senior Developer / System Architect",
    subtitle: "Auto-Trail VR Ltd",
    description: "Led ERP migration to Infor M3, cleansing data and updating internal systems to align with new processes. Introduced a modern .NET 9 + Golang/HTMX stack with Redis, RabbitMQ, Hangfire, and CI/CD pipelines (TeamCity, Jenkins). Built DRY, API-driven tooling with automated frontend generation and deep M3 integration.",
    icon: <FaCode />,
    bgColor: "#d53433",
    tags: [".NET 9", "Golang", "Redis", "RabbitMQ", "SignalR", "HTMX", "ERP Integration", "Teamcity", "Jenkins"],
  },
  {
    date: "The Future",
    title: "What's Next?",
    subtitle: "",
    description: "Continuing to build clean, scalable systems and chase technical excellence! Think we're a good match? Let's talk!",
    icon: <FaCode />,
    bgColor: "#8a2ae0",
    tags: ["Open to Opportunities", "Tech Leadership", "Software Architecture"],
    cta: {
      label: "Connect on LinkedIn",
      link: "https://uk.linkedin.com/in/adam-evans-software-developer"
    }
  },
];

// Timeline Card component
const TimelineCard = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: item.bgColor, color: '#fff' }}
    contentArrowStyle={{ borderRight: `7px solid ${item.bgColor}` }}
    date={item.date}
    iconStyle={{ background: item.bgColor, color: '#fff' }}
    icon={item.icon}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h3 className="vertical-timeline-element-title font-bold text-2xl">{item.title}</h3>
      {item.subtitle && (
        <h4 className="vertical-timeline-element-subtitle font-bold text-xl">{item.subtitle}</h4>
      )}
      <p>{item.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs font-semibold text-white transition-transform transform hover:scale-105"
          >
            #{tag}
          </span>
        ))}
      </div>
      {item.cta && (
        <div className="mt-6">
          <a
            href={item.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-800 font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            {item.cta.label}
          </a>
        </div>
      )}
    </motion.div>
  </VerticalTimelineElement>
);

const Timeline = () => (
  <div className="bg-gradient-to-r from-pink-600 to-yellow-400 py-10">
    <h2 className="text-4xl font-bold text-center mb-5 text-white">My Journey</h2>
    <h3 className="text-small text-center font-light italic mb-10 text-white">Well, the bits you'll care about anyway ;)</h3>
    <VerticalTimeline lineColor="#4f46e5">
      {timelineItems.map((item, idx) => (
        <TimelineCard key={idx} item={item} />
      ))}
    </VerticalTimeline>
  </div>
);

export default Timeline;
