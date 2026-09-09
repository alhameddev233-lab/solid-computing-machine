import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import {
  FaBox,
  FaUser,
  FaCog,
  FaShoppingCart,
  FaBell,
  FaMoneyBill,
  FaUsers,
  FaUserPlus,
  FaCheckCircle,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { dataLine, dataBar } from "../assets/ChartData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { img, member } from "../assets/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const stats = [
    {
      icon: <FaMoneyBill />,
      title: "Today's Money",
      value: "$53K",
      percentage: "+55%",
      text: "than last week",
      positive: true,
    },
    {
      icon: <FaUsers />,
      title: "Today's Users",
      value: "2,300",
      percentage: "+3%",
      text: "than last month",
      positive: true,
    },
    {
      icon: <FaUserPlus />,
      title: "New Clients",
      value: "3,462",
      percentage: "-2%",
      text: "than yesterday",
      positive: false,
    },
    {
      icon: <GiNetworkBars />,
      title: "Sales",
      value: "$103,430",
      percentage: "+5%",
      text: "than yesterday",
      positive: true,
    },
  ];

  const smallCards = [
    { icon: <FaShoppingCart />, title: "Orders", value: "140" },
    { icon: <FaBox />, title: "Products", value: "120" },
    { icon: <FaUser />, title: "Users", value: "30" },
    { icon: <FaCog />, title: "Setting", value: "12" },
  ];

  const projects = [
    {
      image: img.xd,
      alt: "Material XD",
      name: "Material XD Version",
      members: [member.team1, member.team2, member.team3, member.team4],
      budget: "$14,000",
      completion: 60,
    },
    {
      image: img.atlassian,
      alt: "Atlassian",
      name: "Add Progress Track",
      members: [member.team2, member.team4],
      budget: "$3,000",
      completion: 10,
    },
    {
      image: img.slack,
      alt: "Slack",
      name: "Fix Platform Errors",
      members: [member.team1, member.team3],
      budget: "Not set",
      completion: 100,
    },
    {
      image: img.spotify,
      alt: "Spotify",
      name: "Launch our Mobile App",
      members: [member.team4, member.team3, member.team2, member.team1],
      budget: "$20,500",
      completion: 100,
    },
    {
      image: img.Jirasvg,
      alt: "Jira",
      name: "Add the New Pricing Page",
      members: [member.team4],
      budget: "$500",
      completion: 25,
    },
    {
      image: img.invision,
      alt: "Invision",
      name: "Redesign New Online Shop",
      members: [member.team4],
      budget: "$2,000",
      completion: 40,
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden rounded-2xl bg-gray-50 dark:bg-gray-950">
      <section className="w-full px-3 sm:px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-2 pb-4 pt-14 sm:pt-6">
          <Link
            to="/"
            className="text-sm text-gray-500 transition hover:text-sky-600"
          >
            Dashboard
          </Link>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-gray-700 dark:text-gray-300">Home</span>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              Home
            </h1>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="search"
                placeholder="Search"
                className="w-full rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-800 outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-64 lg:w-72"
              />
              <div className="flex items-center justify-between gap-5 sm:justify-start">
                <Link
                  to="/sign-in"
                  className="flex items-center gap-2 text-gray-500 transition hover:text-sky-600"
                >
                  <FaUserCircle className="text-lg" />
                  <span className="text-sm">Sign in</span>
                </Link>
                <button
                  type="button"
                  className="text-lg text-gray-500 transition hover:text-sky-600"
                  aria-label="Notifications"
                >
                  <FaBell />
                </button>
                <button
                  type="button"
                  className="text-lg text-gray-500 transition hover:text-sky-600"
                  aria-label="Settings"
                >
                  <FaCog />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-4 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-800 text-white dark:bg-gray-700">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white sm:text-2xl">
                    {item.value}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1 border-t border-gray-100 pt-3 text-sm dark:border-gray-800">
                <span
                  className={`font-semibold ${item.positive ? "text-green-500" : "text-red-500"}`}
                >
                  {item.percentage}
                </span>
                <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-3 py-4 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {smallCards.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-xl text-white dark:bg-gray-700">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.value}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="w-full px-3 py-4 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 md:gap-6">
          <div className="min-w-0 rounded-xl bg-white p-4 shadow-md dark:bg-gray-900">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Sale Data
            </h3>
            <div className="relative min-h-[280px] w-full sm:min-h-[320px]">
              <Link
                data={dataLine}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="min-w-0 rounded-xl bg-white p-4 shadow-md dark:bg-gray-900">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              Products Data
            </h3>
            <div className="relative min-h-[280px] w-full sm:min-h-[320px]">
              <Bar
                data={dataBar}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full  px-3 py-4 sm:px-4 md:px-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-3 border-b border-gray-200 p-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-800 dark:text-white">
                Projects
              </h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <FaCheckCircle />
                <span>30 done this month</span>
              </div>
            </div>
            <button
              type="button"
              className="self-end text-xl text-gray-500 transition hover:text-gray-900 dark:hover:text-white sm:self-auto"
              aria-label="Project menu"
            >
              <CiMenuKebab />
            </button>
          </div>
          <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-4 lg:border-b lg:border-gray-200 lg:px-4 lg:py-4 dark:lg:border-gray-800">
            <div className="text-[11px] font-medium uppercase text-gray-400">
              Companies
            </div>
            <div className="text-[11px] font-medium uppercase text-gray-400">
              Members
            </div>
            <div className="text-[11px] font-medium uppercase text-gray-400">
              Budget
            </div>
            <div className="text-[11px] font-medium uppercase text-gray-400">
              Completion
            </div>
          </div>
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center ${
                index !== projects.length - 1
                  ? "border-b border-gray-200 dark:border-gray-800"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={project.image}
                  className="h-10 w-10 shrink-0 object-contain"
                  alt={project.alt}
                />
                <div>
                  <span className="text-xs text-gray-400 lg:hidden">
                    COMPANY
                  </span>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {project.name}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-400 lg:hidden">MEMBERS</span>
                <div className="mt-1 flex items-center lg:mt-0">
                  {project.members.map((image, memberIndex) => (
                    <img
                      key={`${project.name}-${memberIndex}`}
                      src={image}
                      className={`h-7 w-7 rounded-full border-2 border-white dark:border-gray-900 ${
                        memberIndex > 0 ? "-ml-2" : ""
                      }`}
                      alt="Member"
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-400 lg:hidden">BUDGET</span>
                <p className="mt-1 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
                  {project.budget}
                </p>
              </div>
              <div>
                <span className="text-xs text-gray-400 lg:hidden">
                  COMPLETION
                </span>
                <div className="mt-1 flex items-center gap-2 lg:mt-0">
                  <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`h-2 rounded-full ${project.completion === 100 ? "bg-green-500" : "bg-blue-500"}`}
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {project.completion}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-4 px-4 py-6 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>
          © 2026, made with 💖 by{" "}
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Creative Tim
          </span>{" "}
          for a better web. Distributed by{" "}
          <span className="font-bold text-gray-700 dark:text-gray-300">
            ThemeWagon
          </span>
        </p>
        <ul className="flex flex-wrap justify-center gap-5 sm:justify-end">
          <li>
            <button type="button" className="transition hover:text-blue-500">
              Creative Tim
            </button>
          </li>
          <li>
            <button type="button" className="transition hover:text-blue-500">
              About Us
            </button>
          </li>
          <li>
            <button type="button" className="transition hover:text-blue-500">
              Blog
            </button>
          </li>
          <li>
            <button type="button" className="transition hover:text-blue-500">
              License
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Dashboard;
