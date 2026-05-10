import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatPanel from "./components/ChatPanel";
import DetailsPanel from "./components/DetailsPanel";
import PreviewPanel from "./components/PreviewPanel";
import AIAssistant from "./components/AIAssistant";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F1EB] text-[#1F1B16]">

      {/* Left Sidebar */}
      <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Top Navbar Row */}
        <div className="flex items-center w-full">
          {!isChatOpen && (
            <button
              onClick={() => setIsChatOpen(true)}
              className="
                w-12
                h-12
                ml-4
                bg-[#6D4AFF]
                hover:bg-[#5B3EF5]
                rounded-[20px]
                flex
                items-center
                justify-center
                text-white
                transition-all
                shadow-sm
                flex-shrink-0
              "
            >
              <ChevronRightIcon />
            </button>
          )}
          <Navbar isChatOpen={isChatOpen} onOpenAIAssistant={() => setIsAIAssistantOpen(true)} />
        </div>

        {/* Center Content */}
        <div className="flex flex-1">

          {/* Main Preview */}
          <PreviewPanel isChatOpen={isChatOpen} />

          {/* Right Details */}
          <DetailsPanel isChatOpen={isChatOpen} />

        </div>
      </div>

      {/* Modals */}
      <AIAssistant open={isAIAssistantOpen} setOpen={setIsAIAssistantOpen} />

    </div>
  );
}

export default App;

