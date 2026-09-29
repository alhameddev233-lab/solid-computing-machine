import React from "react";
import { Link } from "react-router-dom";
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
import { img, member } from "../assets/image";
import { GiNetworkBars } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";

const Table = () => {
  return (
    <div className="">
      <section className="w-full px-3 sm:px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-2 pb-4 pt-14 sm:pt-6">
          <Link
            to="/"
            className="text-sm text-gray-500 transition hover:text-sky-600"
          >
            Dashboard
          </Link>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Table
          </span>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              Table{" "}
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
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col  bg-[#263839] gap-3 border-b border-gray-200 p-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
            <div className="">
              <h2 className="text-base font-semibold text-white dark:text-white">
                Authors Table
              </h2>
            </div>
            <button
              type="button"
              className="self-end text-xl text-gray-500 transition hover:text-white dark:hover:text-white sm:self-auto"
              aria-label="Project menu"
            >
              <CiMenuKebab />
            </button>
          </div>
          <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-4 lg:border-b lg:border-gray-200 lg:px-4 lg:py-4 dark:lg:border-gray-800">
            <div className="text-[11px] font-medium uppercase text-gray-400">
              author
            </div>
            <div className="text-[11px] font-medium uppercase text-gray-400">
              function{" "}
            </div>
            <div className="text-[11px] font-medium uppercase text-gray-400">
              status
            </div>
            <div className="text-[11px] font-medium uppercase text-gray-400">
              employed
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center">
            <div className="flex flex-row gap-2">
              <img
                src={member.team2}
                className="md:w-12 w-15 rounded-2xl flex-col "
                alt=""
              />
              <span className="flex-col gap-2">
                {" "}
                <h1 className="text-[14px] text-[#090a0a] font-bold">
                  John Michael
                </h1>
                <p className="text-[12px] text-[#546E74] font-medium">
                  john@creative-tim.com
                </p>
              </span>
            </div>
            <span className="flex-col gap-2">
              {" "}
              <h1 className="text-[14px] text-[#090a0a] font-bold">Manager</h1>
              <p className="text-[12px] text-[#546E74] font-medium">
                Organization
              </p>
            </span>

            <button className="bg-green-900 text-white font-medium w-20 rounded-2xl">
              ONLINE
            </button>

            <div className="text-[14px] text-[#233538] font-semibold">
              <a href="#">23/04/18</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center">
            <div className="flex flex-row gap-2">
              <img
                src={member.team1}
                className="md:w-12 w-15 rounded-2xl flex-col "
                alt=""
              />
              <span className="flex-col gap-2">
                {" "}
                <h1 className="text-[14px] text-[#090a0a] font-bold">
                  Alexa Liras
                </h1>
                <p className="text-[12px] text-[#546E74] font-medium">
                  alexa@creative-tim.com
                </p>
              </span>
            </div>
            <span className="flex-col gap-2">
              {" "}
              <h1 className="text-[14px] text-[#090a0a] font-bold">
                Programator
              </h1>
              <p className="text-[12px] text-[#546E74] font-medium">
                Developer
              </p>
            </span>

            <button className="bg-gray-500 text-white font-medium w-20 rounded-2xl uppercase">
              OFFLINE
            </button>

            <div className="text-[14px] text-[#233538] font-semibold">
              <a href="#">11/01/19</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center">
            <div className="flex flex-row gap-2">
              <img
                src={member.team4}
                className="md:w-12 w-15 rounded-2xl flex-col "
                alt=""
              />
              <span className="flex-col gap-2">
                {" "}
                <h1 className="text-[14px] text-[#090a0a] font-bold">
                  Laurent Perrier
                </h1>
                <p className="text-[12px] text-[#546E74] font-medium">
                  laurent@creative-tim.com
                </p>
              </span>
            </div>
            <span className="flex-col gap-2">
              {" "}
              <h1 className="text-[14px] text-[#090a0a] font-bold">
                Executive
              </h1>
              <p className="text-[12px] text-[#546E74] font-medium">Projects</p>
            </span>

            <button className="bg-green-700 text-white font-medium w-20 rounded-2xl uppercase">
              ONLINE
            </button>

            <div className="text-[14px] text-[#233538] font-semibold">
              <a href="#">19/09/17</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center">
            <div className="flex flex-row gap-2">
              <img
                src={member.team3}
                className="md:w-12 w-15 rounded-2xl flex-col "
                alt=""
              />
              <span className="flex-col gap-2">
                {" "}
                <h1 className="text-[14px] text-[#090a0a] font-bold">
                  Michael Levi
                </h1>
                <p className="text-[12px] text-[#546E74] font-medium">
                  michael@creative-tim.com
                </p>
              </span>
            </div>
            <span className="flex-col gap-2">
              {" "}
              <h1 className="text-[14px] text-[#090a0a] font-bold">
                Programator{" "}
              </h1>
              <p className="text-[12px] text-[#546E74] font-medium">
                Developer
              </p>
            </span>

            <button className="  bg-green-700 text-white font-medium w-20 rounded-2xl uppercase">
              ONLINE
            </button>

            <div className="text-[14px] text-[#233538] font-semibold">
              <a href="#">24/12/08</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center">
            <div className="flex flex-row gap-2">
              <img
                src={img.mars}
                className="md:w-12 w-15 rounded-2xl flex-col "
                alt=""
              />
              <span className="flex-col gap-2">
                {" "}
                <h1 className="text-[14px] text-[#090a0a] font-bold">
                  Bruce Mars
                </h1>
                <p className="text-[12px] text-[#546E74] font-medium">
                  bruce@creative-tim.com{" "}
                </p>
              </span>
            </div>
            <span className="flex-col gap-2">
              {" "}
              <h1 className="text-[14px] text-[#090a0a] font-bold">Manager</h1>
              <p className="text-[12px] text-[#546E74] font-medium">Projects</p>
            </span>

            <button className="bg-gray-500 text-white font-medium w-20 rounded-2xl uppercase">
              OFFLINE
            </button>

            <div className="text-[14px] text-[#233538] font-semibold">
              <a href="#">04/10/21</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:items-center">
            <div className="flex flex-row gap-2">
              <img
                src={member.team2}
                className="md:w-12 w-15 rounded-2xl flex-col "
                alt=""
              />
              <span className="flex-col gap-2">
                {" "}
                <h1 className="text-[14px] text-[#090a0a] font-bold">
                  Alexa Liras
                </h1>
                <p className="text-[12px] text-[#546E74] font-medium">
                  alexa@creative-tim.com
                </p>
              </span>
            </div>
            <span className="flex-col gap-2">
              {" "}
              <h1 className="text-[14px] text-[#090a0a] font-bold">
                Programator
              </h1>
              <p className="text-[12px] text-[#546E74] font-medium">
                Developer
              </p>
            </span>

            <button className="bg-gray-500 text-white font-medium w-20 rounded-2xl uppercase">
              OFFLINE
            </button>

            <div className="text-[14px] text-[#233538] font-semibold">
              <a href="#">14/09/20</a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-4 sm:px-4 md:px-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col  bg-[#263839] gap-3 border-b border-gray-200 p-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
            <div className="">
              <h2 className="text-base font-semibold text-white dark:text-white">
                Projects
              </h2>
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

export default Table;
