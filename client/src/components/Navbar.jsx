import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar({ isChatOpen, onOpenAIAssistant }) {
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
        border
        border-[#E7DED3]
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
            hover:text-[#6D4AFF]
            transition-all
          "
        >
          <MenuIcon />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Logo Shape */}
          <div className="flex flex-col gap-[3px]">
            <div className="w-6 h-[5px] bg-[#6D4AFF] rounded-full"></div>
            <div className="w-6 h-[5px] bg-[#6D4AFF] rounded-full rotate-[12deg]"></div>
            <div className="w-6 h-[5px] bg-[#6D4AFF] rounded-full"></div>
          </div>

          <h1 className="text-[30px] font-bold text-[#1F1B16]">
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

        <button className="nav-btn">
          <FavoriteBorderOutlinedIcon sx={{ fontSize: '1.25em' }} />
          <span>Inspiration</span>
        </button>

        <button className="nav-btn">
          <GridViewOutlinedIcon sx={{ fontSize: '1.25em' }} />
          <span>Templates</span>
        </button>

        <button onClick={onOpenAIAssistant} className="nav-btn">
          <AutoAwesomeOutlinedIcon sx={{ fontSize: '1.25em' }} />
          <span>AI Assistant</span>
        </button>
      </div>

      {/* Right Profile */}
      <div className="flex items-center gap-1 xl:gap-3">
        {/* Avatar */}
        <div
          className="
            w-11
            h-11
            rounded-full
            bg-[#EFE7FF]
            flex
            items-center
            justify-center
            text-[#6D4AFF]
            font-semibold
          "
        >
          N
        </div>

        {/* Name */}
        <p className="text-sm font-semibold text-[#1F1B16]">
          Neha Sharma
        </p>

        <KeyboardArrowDownIcon
          sx={{
            color: "#7A7269",
            fontSize: 20,
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;