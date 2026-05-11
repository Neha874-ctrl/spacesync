function DetailsPanel({ isChatOpen }) {
  return (
    <div
      className={`
        flex-shrink-0
        ${isChatOpen ? 'w-[360px]' : 'w-[25vw] min-w-[360px] max-w-[600px]'}
        h-[88vh]
        min-h-[544px]
        max-h-[817px]
        pr-4
        pb-4
        transition-all duration-300 ease-in-out
      `}
    >

      <div
        className="
          h-full
          bg-white
          dark:dark-panel-bg
          border
          border-[#E7DED3]
          dark:border-[#2A2A2A]
          rounded-[32px]
          overflow-hidden
          flex
          flex-col
        "
      >

        {/* Tabs */}
        <div className="flex border-b border-[#E7DED3] dark:border-[#2A2A2A]">

          <button
            className="
              flex-1
              py-5
              text-sm
              font-semibold
              text-[#6D4AFF]
              dark:text-[#8B6EFF]
              border-b-2
              border-[#6D4AFF]
              dark:border-[#8B6EFF]
            "
          >
            Furniture & Decor
          </button>

          <button
            className="
              flex-1
              py-5
              text-sm
              text-[#8A8178]
              dark:text-[#A0A0A0]
            "
          >
            Room Details
          </button>

        </div>

        {/* Furniture List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

          {/* Item */}
          <div className="furniture-card dark:border-[#2A2A2A] dark:hover:border-[#6D4AFF] dark:bg-[#262626]">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title dark:text-[#FFFFFF]">
                King Size Bed
              </h3>

              <p className="furniture-brand dark:text-[#A0A0A0]">
                Urban Ladder
              </p>

            </div>

            <p className="furniture-price dark:text-[#FFFFFF]">
              ₹28,999
            </p>

          </div>

          {/* Item */}
          <div className="furniture-card dark:border-[#2A2A2A] dark:hover:border-[#6D4AFF] dark:bg-[#262626]">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title dark:text-[#FFFFFF]">
                Study Table
              </h3>

              <p className="furniture-brand dark:text-[#A0A0A0]">
                Pepperfry
              </p>

            </div>

            <p className="furniture-price dark:text-[#FFFFFF]">
              ₹8,999
            </p>

          </div>

          {/* Item */}
          <div className="furniture-card dark:border-[#2A2A2A] dark:hover:border-[#6D4AFF] dark:bg-[#262626]">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title dark:text-[#FFFFFF]">
                Office Chair
              </h3>

              <p className="furniture-brand dark:text-[#A0A0A0]">
                Green Soul
              </p>

            </div>

            <p className="furniture-price dark:text-[#FFFFFF]">
              ₹6,999
            </p>

          </div>

          {/* Item */}
          <div className="furniture-card dark:border-[#222222] dark:hover:border-[#6D4AFF] dark:bg-[#1A1A1A]">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title dark:text-[#FFFFFF]">
                Wardrobe
              </h3>

              <p className="furniture-brand dark:text-[#A0A0A0]">
                IKEA
              </p>

            </div>

            <p className="furniture-price dark:text-[#FFFFFF]">
              ₹24,990
            </p>

          </div>

        </div>

        {/* Budget Section */}
        <div className="border-t border-[#E7DED3] dark:border-[#2A2A2A] p-5">

          <h2 className="text-lg font-semibold text-[#1F1B16] dark:text-[#FFFFFF]">
            Budget Summary
          </h2>

          {/* Progress */}
          <div className="mt-5">

            <div className="flex items-center justify-between text-sm">

              <span className="text-[#8A8178] dark:text-[#A0A0A0]">
                Total Budget
              </span>

              <span className="font-semibold text-[#1F1B16] dark:text-[#FFFFFF]">
                ₹1,20,000
              </span>

            </div>

            <div className="w-full h-3 bg-[#F3EEE8] dark:bg-[#050505] rounded-full mt-3 overflow-hidden">

              <div
                className="
                  h-full
                  bg-[#6D4AFF]
                  rounded-full
                  w-[82%]
                "
              ></div>

            </div>

            <div className="flex items-center justify-between mt-3 text-sm">

              <span className="text-[#8A8178] dark:text-[#A0A0A0]">
                Remaining
              </span>

              <span className="font-semibold text-green-600 dark:text-green-400">
                ₹12,318
              </span>

            </div>

          </div>

          {/* Button */}
          <button
            className="
              w-full
              mt-5
              py-3
              rounded-2xl
              border
              border-[#E7DED3]
              dark:border-[#2A2A2A]
              bg-[#FAF8F5]
              dark:bg-[#1E1E1E]
              text-sm
              text-[#3B342D]
              dark:text-[#EAEAEA]
              hover:border-[#6D4AFF]
              dark:hover:bg-[#2A2A2A]
              dark:hover:border-[#6D4AFF]
              transition-all
            "
          >
            View Full Breakdown
          </button>

        </div>

      </div>

    </div>
  );
}

export default DetailsPanel;