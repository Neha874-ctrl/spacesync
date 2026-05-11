import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

function AIAssistant({ open, setOpen }) {
    if (!open) return null;

    return (
        <div
            onClick={() => setOpen(false)}
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/20
        backdrop-blur-sm
        px-4
      "
        >

            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="
          w-full
          max-w-[720px]
          h-[82vh]
          bg-white/95
          dark:dark-panel-bg
          backdrop-blur-xl
          rounded-[36px]
          border
          border-[#E7DED3]
          dark:border-[#2A2A2A]
          shadow-2xl
          flex
          flex-col
          overflow-hidden
          animate-[fadeIn_.25s_ease]
        "
            >

                {/* Header */}
                <div
                    className="
            px-8
            py-6
            border-b
            border-[#E7DED3]
            dark:border-[#2A2A2A]
            flex
            items-center
            justify-between
          "
                >

                    {/* Left */}
                    <div className="flex items-center gap-4">

                        <div
                            className="
                w-14
                h-14
                rounded-2xl
                bg-[#EFE7FF]
                dark:dark-card-bg
                flex
                items-center
                justify-center
                text-[#6D4AFF]
                dark:text-[#8B6EFF]
              "
                        >
                            <AutoAwesomeOutlinedIcon sx={{ fontSize: 30 }} />
                        </div>

                        <div>

                            <h1 className="text-2xl font-bold text-[#1F1B16] dark:text-[#EAEAEA]">
                                AI Assistant
                            </h1>

                            <p className="text-sm text-[#8A8178] dark:text-[#A0A0A0] mt-1">
                                Your personal interior design copilot
                            </p>

                        </div>

                    </div>

                    {/* Close */}
                    <button
                        onClick={() => setOpen(false)}
                        className="
              w-11
              h-11
              rounded-2xl
              bg-[#F5F1EB]
              dark:dark-card-bg
              hover:bg-[#EFE7FF]
              dark:hover:bg-[#2A2A2A]
              transition-all
              flex
              items-center
              justify-center
              text-[#6D4AFF]
              dark:text-[#8B6EFF]
            "
                    >
                        <CloseIcon />
                    </button>

                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-8 py-6">

                    {/* Intro Card */}
                    <div
                        className="
              bg-[#F7F2FF]
              dark:dark-card-bg
              rounded-[28px]
              p-6
              border
              border-[#E9DFFF]
              dark:border-[#2A2A2A]
            "
                    >

                        <h2 className="text-xl font-semibold text-[#1F1B16] dark:text-[#EAEAEA]">
                            Hello Neha 👋
                        </h2>

                        <p className="text-[#5F5850] dark:text-[#A0A0A0] mt-3 leading-relaxed">
                            I can help you improve layouts, optimize budgets,
                            suggest furniture, enhance lighting, and redesign
                            your room in different aesthetics.
                        </p>

                    </div>

                    {/* Suggestions */}
                    <div className="mt-8">

                        <h3 className="text-lg font-semibold text-[#1F1B16] dark:text-[#EAEAEA] mb-5">
                            Suggested Prompts
                        </h3>

                        <div className="grid grid-cols-2 gap-4">

                            <button className="ai-prompt-btn">
                                Make this room look more spacious
                            </button>

                            <button className="ai-prompt-btn">
                                Suggest better lighting ideas
                            </button>

                            <button className="ai-prompt-btn">
                                Reduce the budget by ₹20,000
                            </button>

                            <button className="ai-prompt-btn">
                                Convert this room into Japandi style
                            </button>

                        </div>

                    </div>

                    {/* Chat Messages */}
                    <div className="mt-10 space-y-6">

                        {/* User */}
                        <div className="flex justify-end">

                            <div
                                className="
                  max-w-[75%]
                  bg-[#EFE7FF]
                  dark:bg-[#6D4AFF]
                  text-[#5B3EF5]
                  dark:text-white
                  px-5
                  py-4
                  rounded-[24px]
                  text-sm
                  leading-relaxed
                  shadow-md
                "
                            >
                                How can I improve lighting in this room?
                            </div>

                        </div>

                        {/* AI */}
                        <div className="flex">

                            <div
                                className="
                  max-w-[80%]
                  bg-[#F5F1EB]
                  dark:dark-card-bg
                  text-[#3B342D]
                  dark:text-[#EAEAEA]
                  px-5
                  py-5
                  rounded-[24px]
                  text-sm
                  leading-relaxed
                  border border-transparent
                  dark:border-[#2A2A2A]
                "
                            >

                                <p className="font-semibold mb-3">
                                    Here are some suggestions:
                                </p>

                                <ul className="space-y-2 list-disc pl-5 text-[#5F5850] dark:text-[#A0A0A0]">

                                    <li>
                                        Add warm ambient cove lighting
                                    </li>

                                    <li>
                                        Use pendant lights beside the bed
                                    </li>

                                    <li>
                                        Add sheer curtains for natural light
                                    </li>

                                    <li>
                                        Include a soft table lamp near workspace
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Input */}
                <div
                    className="
            p-6
            border-t
            border-[#E7DED3]
            dark:border-[#2A2A2A]
          "
                >

                    <div className="flex items-center gap-4">

                        {/* Input */}
                        <div
                            className="
                flex-1
                bg-[#F5F1EB]
                dark:dark-card-bg
                rounded-2xl
                px-5
                py-4
                border border-transparent
                dark:border-[#2A2A2A]
              "
                        >

                            <input
                                type="text"
                                placeholder="Ask anything about interior design..."
                                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-sm
                  text-[#1F1B16]
                  dark:text-[#FFFFFF]
                  placeholder:text-[#8A8178]
                  dark:placeholder:text-[#A0A0A0]
                "
                            />

                        </div>

                        {/* Send */}
                        <button
                            className="
                w-14
                h-14
                rounded-2xl
                bg-[#6D4AFF]
                hover:bg-[#5B3EF5]
                transition-all
                text-white
                text-lg
                flex
                items-center
                justify-center
                shadow-lg
              "
                        >
                            ➜
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AIAssistant;