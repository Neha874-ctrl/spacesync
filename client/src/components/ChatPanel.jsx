import AttachFileIcon from "@mui/icons-material/AttachFile";
function ChatPanel({ isOpen, onClose }) {
  return (
    <div className={`
      flex-shrink-0
      h-[97vh]
      min-h-[600px]
      max-h-[900px]
      bg-white
      flex
      flex-col
      overflow-hidden
      transition-all duration-300 ease-in-out
      ${isOpen 
        ? "w-[20vw] min-w-[260px] max-w-[380px] m-3 border border-[#E7DED3] opacity-100" 
        : "w-0 min-w-0 max-w-0 m-0 border-0 opacity-0"}
    `}>

      {/* Header */}
      <div className="px-6 py-5 border-b border-[#E7DED3]">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold text-[#1F1B16]">
              SpaceSync AI
            </h1>

            <p className="text-sm text-[#8A8178] mt-1">
              Always here to help
            </p>

          </div>

          <button 
            onClick={onClose}
            className="
            w-9
            h-9
            rounded-full
            bg-white
            border
            border-[#E7DED3]
            text-[#8A8178]
            hover:bg-[#F5F1EB]
            transition-all
          ">
            ✕
          </button>

        </div>

      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">

        {/* AI Message */}
        <div className="
          bg-[#F3EEE8]
          rounded-3xl
          p-4
          max-w-[85%]
        ">

          <p className="text-sm text-[#3B342D] leading-relaxed">
            Hi! I'm SpaceSync AI ✨
          </p>

          <p className="text-sm text-[#3B342D] mt-2 leading-relaxed">
            Tell me about your room or any changes you want to make.
          </p>

        </div>

        {/* User Message */}
        <div className="
          bg-[#EFE7FF]
          rounded-3xl
          p-4
          max-w-[85%]
          ml-auto
        ">

          <p className="text-sm text-[#6D4AFF] leading-relaxed">
            I want a modern minimalist bedroom with a study table.
          </p>

        </div>

      </div>

      {/* Input Section */}
      <div className="p-4 border-t border-[#E7DED3]">

        <div className="flex items-center gap-3">

          {/* Input Box */}
          <div
  className="
    flex-1
    bg-[#F3EEE8]
    rounded-2xl
    px-4
    py-3
    flex
    items-center
    gap-3
  "
>

  <input
    type="text"
    placeholder="Type your message..."
    className="
      flex-1
      bg-transparent
      outline-none
      text-sm
      text-[#1F1B16]
      placeholder:text-[#8A8178]
    "
  />

  {/* Attachment Icon */}
  <button
  className="
    text-[#8A8178]
    hover:text-[#6D4AFF]
    transition-all
    flex
    items-center
    justify-center
  "
>
  <AttachFileIcon fontSize="small" />
</button>
</div>
          {/* Send Button */}
          <button
            className="
              w-11
              h-11
              rounded-2xl
              bg-[#6D4AFF]
              hover:bg-[#5B3EF5]
              text-white
              flex
              items-center
              justify-center
              transition-all
              shadow-sm
            "
          >
            ➜
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChatPanel;