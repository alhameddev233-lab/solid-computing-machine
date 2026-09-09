import { NavLink } from "react-router-dom";
import { HiMiniServerStack, HiServer } from "react-icons/hi2";
import { FaHome, FaUser, FaTable } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const navClass = ({ isActive }) =>
    `flex w-full items-center gap-4 rounded-lg px-5 py-3 font-semibold transition duration-200 ${
      isActive
        ? "bg-gray-900 text-white shadow-sm"
        : "text-gray-600 hover:bg-cyan-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
    }`;

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed left-4 top-4 z-50 h-[calc(100vh-2rem)] w-64 overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 dark:border-gray-800 dark:bg-gray-900 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]"
        } md:translate-x-0`}
      >
        <div className="mb-8 border-b border-gray-100 pb-5 text-center dark:border-gray-800">
          <h1 className="p-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            Material Tailwind React UI
          </h1>

          <button
            type="button"
            onClick={closeSidebar}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <ul className="flex flex-col gap-3 text-lg">
          <li>
            <NavLink to="/" onClick={closeSidebar} className={navClass}>
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Profile" onClick={closeSidebar} className={navClass}>
              <FaUser />
              <span>Profile</span>
            </NavLink>
          </li>

          <li>
            <li>
              <NavLink to="/Table" onClick={closeSidebar} className={navClass}>
                <FaTable />
                <span>Table</span>
              </NavLink>
            </li>
          </li>

          <li>
            <NavLink
              to="/notifications"
              onClick={closeSidebar}
              className={navClass}
            >
              <FiAlertCircle />
              <span>notifications</span>
            </NavLink>
          </li>

          <li className="mt-5">
            <h2 className="px-5 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Auth Pages
            </h2>
          </li>

          <li className=" hidden"></li>

          <li>
            <NavLink to="/sign-in" onClick={closeSidebar} className={navClass}>
              <HiMiniServerStack />
              <span>Sign In</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sign_up" onClick={closeSidebar} className={navClass}>
              <HiMiniServerStack />
              <span>Sign up</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
