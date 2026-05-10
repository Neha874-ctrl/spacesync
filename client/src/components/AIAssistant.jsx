import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

function AIAssistant({ open, setOpen }) {
  if (!open) return null;

  return (
    <div
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
        className="
          w-full
          max-w-[720px]
          h-[82vh]
          bg-white/95
          backdrop-blur-xl
          rounded-[36px]
          border
          border-[#E7DED3]
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
                flex
                items-center
                justify-center
                text-[#6D4AFF]
              "
            >
              <AutoAwesomeOutlinedIcon sx={{ fontSize: 30 }} />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-[#1F1B16]">
                AI Assistant
              </h1>

              <p className="text-sm text-[#8A8178] mt-1">
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
              hover:bg-[#EFE7FF]
              transition-all
              flex
              items-center
              justify-center
              text-[#6D4AFF]
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
              rounded-[28px]
              p-6
              border
              border-[#E9DFFF]
            "
          >

            <h2 className="text-xl font-semibold text-[#1F1B16]">
              Hello Neha 👋
            </h2>

            <p className="text-[#5F5850] mt-3 leading-relaxed">
              I can help you improve layouts, optimize budgets,
              suggest furniture, enhance lighting, and redesign
              your room in different aesthetics.
            </p>

          </div>

          {/* Suggestions */}
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-[#1F1B16] mb-5">
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
                  text-[#5B3EF5]
                  px-5
                  py-4
                  rounded-[24px]
                  text-sm
                  leading-relaxed
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
                  text-[#3B342D]
                  px-5
                  py-5
                  rounded-[24px]
                  text-sm
                  leading-relaxed
                "
              >

                <p className="font-semibold mb-3">
                  Here are some suggestions:
                </p>

                <ul className="space-y-2 list-disc pl-5">

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
          "
        >

          <div className="flex items-center gap-4">

            {/* Input */}
            <div
              className="
                flex-1
                bg-[#F5F1EB]
                rounded-2xl
                px-5
                py-4
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
                  placeholder:text-[#8A8178]
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