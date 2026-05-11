import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

function Navbar({
  isChatOpen,
  onOpenAIAssistant,
  isDarkMode,
  onToggleTheme,
  currentView,
  setCurrentView,
}) {
  return (
    <div
      className={`
        w-full
        min-w-[840px]
        ${isChatOpen ? 'max-w-[1620px]' : 'max-w-none'}
        h-[72px]
        m-3
        ml-1
        bg-white
        dark:dark-navbar-bg
        border
        border-[#E7DED3]
        dark:border-[#2A2A2A]
        rounded-[28px]
        flex
        items-center
        justify-between
        px-2 xl:px-6
        shadow-sm
        transition-all duration-300 ease-in-out
      `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 xl:gap-5">
        {/* Menu Icon */}
        <button
          className="
            text-[#7A7269]
            dark:text-[#A0A0A0]
            hover:text-[#6D4AFF]
            dark:hover:text-[#8B6EFF]
            hover:bg-[#F5F1EB]
            dark:hover:bg-[#2A2A2A]
            rounded-full
            p-2
            transition-all
          "
        >
          <MenuIcon />
        </button>

        {/* Logo */}
        <div
          onClick={() => setCurrentView("dashboard")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Refined Logo Shape */}
          <div className="flex flex-col gap-[4px]">

            <div className="w-7 h-[5px] bg-[#6D4AFF] rounded-full group-hover:w-8 transition-all duration-300"></div>

            <div className="w-5 h-[5px] bg-[#6D4AFF] rounded-full opacity-80 group-hover:translate-x-1 transition-all duration-300"></div>

            <div className="w-8 h-[5px] bg-[#6D4AFF] rounded-full group-hover:w-6 transition-all duration-300"></div>

          </div>

          <h1 className="text-[30px] font-bold text-[#1F1B16] dark:text-[#FFFFFF] tracking-tight">
            SpaceSync
          </h1>

        </div>
      </div>

      {/* Center Navigation */}
      <div className="flex items-center gap-1 xl:gap-4 px-2 xl:px-10 overflow-hidden">
        {/* Nav Button */}
        <button className="nav-btn">
          <AddIcon sx={{ fontSize: '1.25em' }} />
          <span>New Design</span>
        </button>

        <button className="nav-btn">
          <FolderOpenOutlinedIcon sx={{ fontSize: '1.25em' }} />
          <span>My Designs</span>
        </button>

        <button
          onClick={() => setCurrentView("inspiration")}
          className={`nav-btn ${currentView === "inspiration" ? "border-[#6D4AFF] text-[#6D4AFF] bg-[#F5F1EB] dark:bg-[#2A2A2A]" : ""}`}
        >
          <FavoriteBorderOutlinedIcon sx={{ fontSize: '1.25em' }} />
          <span>Inspiration</span>
        </button>

        <button
          onClick={() => setCurrentView("templates")}
          className={`nav-btn ${currentView === "templates" ? "border-[#6D4AFF] text-[#6D4AFF] bg-[#F5F1EB] dark:bg-[#2A2A2A]" : ""}`}
        >
          <GridViewOutlinedIcon sx={{ fontSize: '1.25em' }} />
          <span>Templates</span>
        </button>

        <button
          onClick={onOpenAIAssistant}
          className="nav-btn group"
        >
          <AutoAwesomeOutlinedIcon
            className="animate-float"
            sx={{ fontSize: '1.25em' }}
          />
          <span>AI Assistant</span>
        </button>
      </div>

      {/* Right Profile */}
      <div className="flex items-center gap-1 xl:gap-3">
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            text-[#7A7269]
            dark:text-[#A0A0A0]
            hover:bg-[#F5F1EB]
            dark:hover:bg-[#2A2A2A]
            hover:text-[#6D4AFF]
            dark:hover:text-[#8B6EFF]
            transition-all
            mr-1
          "
        >
          {isDarkMode ? (
            <LightModeOutlinedIcon sx={{ fontSize: 22 }} />
          ) : (
            <DarkModeOutlinedIcon sx={{ fontSize: 22 }} />
          )}
        </button>

        {/* Profile Section */}
        <button className="flex items-center gap-1 xl:gap-3 hover:bg-[#F5F1EB] dark:hover:bg-[#2A2A2A] p-1 pr-2 rounded-full transition-all">
          {/* Avatar */}
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-[#EFE7FF]
              dark:bg-[#2A2145]
              flex
              items-center
              justify-center
              text-[#6D4AFF]
              dark:text-[#8B6EFF]
              font-semibold
            "
          >
            N
          </div>

          {/* Name */}
          <p className="text-sm font-semibold text-[#1F1B16] dark:text-[#EAEAEA] hidden lg:block">
            Neha Sharma
          </p>

          <KeyboardArrowDownIcon
            sx={{
              color: isDarkMode ? "#A0A0A0" : "#7A7269",
              fontSize: 20,
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;