import React from "react";
import { FcHome, FcAutomatic, FcPackage } from "react-icons/fc";
import { FaUserCircle, FaBell, FaCog, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { card, img, member } from "../assets/image";
import backgroundImage from "../assets/images/background-image.png";
const Profile = () => {
  const profileInfo = [
    ["First Name: ", "Alec M. Thompson"],
    ["Mobile: ", "(44) 123 1234 123"],
    ["Email: ", "alecthompson@mail.com"],
    ["Location: ", "USA"],
  ];

  const messages = [
    {
      image: member.team1,
      name: "Sophie B.",
      text: "Hi! I need more information...",
    },
    {
      image: member.team2,
      name: "Alexander",
      text: "Awesome work, can you...",
    },
    { image: member.team3, name: "Ivanna", text: "About files I can..." },
    {
      image: member.team4,
      name: "Peterson",
      text: "Have a great afternoon...",
    },
    {
      image: img.mars,
      name: "Bruce Mars",
      text: "Hi! I need more information...",
    },
  ];

  const projects = [
    {
      image: card.card1,
      title: "Modern",
      text: "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      image: card.card2,
      title: "Scandinavian",
      text: "Music is something that every person has his or her own specific opinion about.",
    },
    {
      image: card.card3,
      title: "Minimalist",
      text: "Different people have different taste, and various types of music.",
    },
    {
      image: card.card4,
      title: "Gothic",
      text: "Why would anyone pick blue over pink? Pink is obviously a better color.",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 dark:bg-gray-950">
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
            Profile
          </span>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              Profile
            </h1>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="search"
                placeholder="Search"
                className="w-full rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-800 outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:w-64 lg:w-72"
              />
              <div className="flex items-center justify-between gap-5">
                <Link
                  to="/sign-in"
                  className="flex items-center gap-2 text-gray-500 transition hover:text-sky-600"
                >
                  <FaUserCircle className="text-lg" />
                  <span className="text-sm">Sign in</span>
                </Link>
                <button
                  type="button"
                  className="text-lg text-gray-500 hover:text-sky-600"
                >
                  <FaBell />
                </button>
                <button
                  type="button"
                  className="text-lg text-gray-500 hover:text-sky-600"
                >
                  <FaCog />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-5 sm:px-4 md:px-6">
        <div
          className="relative min-h-[220px] rounded-xl bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:min-h-[280px] md:p-8"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/60" />
          <div className="relative z-10 pt-16 sm:pt-20 md:pt-24">
            <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-900 sm:p-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <img
                    src={img.mars}
                    className="h-[74px] w-[74px] rounded-xl object-cover shadow-lg"
                    alt="Richard Davis"
                  />
                  <div className="text-center sm:text-left">
                    <h1 className="text-base font-semibold text-gray-800 dark:text-white">
                      Richard Davis
                    </h1>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      CEO / Co-Founder
                    </p>
                  </div>
                </div>
                <nav className="w-full overflow-x-auto rounded-xl bg-blue-50 dark:bg-gray-800 lg:w-auto">
                  <ul className="flex min-w-max items-center justify-center gap-4 p-3 sm:gap-8">
                    <li>
                      <button
                        type="button"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
                      >
                        <FcHome className="text-xl" />
                        <span className="text-sm">App</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
                      >
                        <FcPackage className="text-xl" />
                        <span className="text-sm">Message</span>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
                      >
                        <FcAutomatic className="text-xl" />
                        <span className="text-sm">Settings</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-3">
                <div className="rounded-xl border border-gray-100 p-5 dark:border-gray-800">
                  <h2 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white">
                    Platform Settings
                  </h2>
                  <h3 className="mb-3 text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
                    Account
                  </h3>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <p>Email me when someone follows me</p>
                    <p>Email me when someone follows me</p>
                    <p>Email me when someone follows me</p>
                  </div>
                  <h3 className="mb-3 mt-6 text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
                    Application
                  </h3>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                    <p>New Launches And Projects</p>
                    <p>Monthly Product Updates</p>
                    <p>Subscribe to Newsletter</p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-5 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Profile Information
                    </h2>
                    <button
                      type="button"
                      className="text-gray-500 transition hover:text-blue-500"
                      aria-label="Edit profile"
                    >
                      <FaPen />
                    </button>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Hi, I'm Alec Thompson. Decisions: If you can't decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term.
                  </p>
                  <div className="my-5 border-b border-gray-100 dark:border-gray-800" />
                  <div className="space-y-4">
                    {profileInfo.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex flex-col gap-1 sm:flex-row sm:items-center"
                      >
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {label}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {value}
                        </p>
                      </div>
                    ))}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Social:
                      </h3>
                      <div className="flex items-center gap-3">
                        <img
                          src={img.facbook}
                          className="h-5 w-5"
                          alt="Facebook"
                        />
                        <img
                          src={img.twitter}
                          className="h-5 w-5"
                          alt="Twitter"
                        />
                        <img
                          src={img.inst}
                          className="h-5 w-5"
                          alt="Instagram"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-5 dark:border-gray-800">
                  <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                    Messages
                  </h2>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.name}
                        className="flex items-center gap-3"
                      >
                        <img
                          src={message.image}
                          className="h-12 w-12 shrink-0 rounded-xl object-cover transition duration-300 hover:scale-105"
                          alt={message.name}
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                            {message.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {message.text}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-xs font-semibold text-blue-500 hover:text-blue-700"
                        >
                          Reply
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Projects
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Architects design houses
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Project #{index + 1}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                        {project.text}
                      </p>
                      <button type="button" className="mt-auto w-fit pt-5">
                        <span className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-700">
                          VIEW PROJECT
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="mt-8 flex flex-col gap-4 py-6 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
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
                  <button
                    type="button"
                    className="font-semibold transition hover:text-blue-500"
                  >
                    Creative Tim
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="font-semibold transition hover:text-blue-500"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="font-semibold transition hover:text-blue-500"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="font-semibold transition hover:text-blue-500"
                  >
                    License
                  </button>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
