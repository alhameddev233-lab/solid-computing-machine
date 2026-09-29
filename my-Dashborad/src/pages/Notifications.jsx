import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { FaUserCircle, FaBell, FaCog, FaPen, FaIcons } from "react-icons/fa";

const Notifications = () => {
  return (
    <div className="grow p-4">
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
            notifications
          </span>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              notifications
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

      <section className="md:w-full w-full p-4">
        <div className="container">
          <div className="bg-white md:w-full w-full md:h-full h-full p-6 m-4 rounded-2xl">
            <h1 className="font-semibold p-2 text-[18px]">Alerts</h1>

            <div className="p-2">
              <div className="bg-[#212121] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 ">
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="bg-[#4CAF50] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 ">
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-[#FF9800] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 ">
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-[#F44336] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 ">
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-full w-full p-4">
        <div className="container">
          <div className="bg-white md:w-full w-full md:h-full h-full p-6 m-4 rounded-2xl">
            <h1 className="font-semibold p-2">Alerts with Icon</h1>

            <div className="p-2">
              <div className="bg-[#212121] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 flex flex-row gap-2 ">
                    <span className="p-2">
                      {" "}
                      <FiAlertCircle />
                    </span>{" "}
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="bg-[#4CAF50] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 flex flex-row gap-2 ">
                    <span className="p-2">
                      {" "}
                      <FiAlertCircle />
                    </span>{" "}
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-[#FF9800] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 flex flex-row gap-2 ">
                    <span className="p-2">
                      {" "}
                      <FiAlertCircle />
                    </span>{" "}
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-[#F44336] rounded-2xl p-2">
                <div className="flex flex-row justify-between items-center text-white p-2">
                  <p className="text-white p-2 flex flex-row gap-2 ">
                    <span className="p-2">
                      {" "}
                      <FiAlertCircle />
                    </span>{" "}
                    A simple gray alert with an example link. Give it a click if
                    you like.
                  </p>
                  <button className="text-white font-bold">
                    <FiX />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default Notifications;
