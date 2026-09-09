import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Dashborad from "./Component/Dashborad";
import Profile from "./pages/Profile";
import Sing from "./pages/Sign-in";
import Table from "./pages/Table";
import Notifications from "./pages/notifications";
import Sign_up from "./pages/Sign_up";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950">
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

      <button
        type="button"
        onClick={openSidebar}
        className="fixed left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-xl text-white shadow-md md:hidden"
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <main className="min-h-screen w-full p-3 sm:p-4 md:ml-72 md:w-auto">
        <Routes>
          <Route path="/" element={<Dashborad />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/table" element={<Table />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/sign-in" element={<Sing />} />{" "}
          <Route path="/Sign_up" element={<Sign_up />} />{" "}
        </Routes>
      </main>
    </div>
  );
}

export default App;
