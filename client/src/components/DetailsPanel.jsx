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
          border
          border-[#E7DED3]
          rounded-[32px]
          overflow-hidden
          flex
          flex-col
        "
      >

        {/* Tabs */}
        <div className="flex border-b border-[#E7DED3]">

          <button
            className="
              flex-1
              py-5
              text-sm
              font-semibold
              text-[#6D4AFF]
              border-b-2
              border-[#6D4AFF]
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
            "
          >
            Room Details
          </button>

        </div>

        {/* Furniture List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

          {/* Item */}
          <div className="furniture-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title">
                King Size Bed
              </h3>

              <p className="furniture-brand">
                Urban Ladder
              </p>

            </div>

            <p className="furniture-price">
              ₹28,999
            </p>

          </div>

          {/* Item */}
          <div className="furniture-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title">
                Study Table
              </h3>

              <p className="furniture-brand">
                Pepperfry
              </p>

            </div>

            <p className="furniture-price">
              ₹8,999
            </p>

          </div>

          {/* Item */}
          <div className="furniture-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title">
                Office Chair
              </h3>

              <p className="furniture-brand">
                Green Soul
              </p>

            </div>

            <p className="furniture-price">
              ₹6,999
            </p>

          </div>

          {/* Item */}
          <div className="furniture-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=300&auto=format&fit=crop"
              alt=""
              className="furniture-img"
            />

            <div className="flex-1">

              <h3 className="furniture-title">
                Wardrobe
              </h3>

              <p className="furniture-brand">
                IKEA
              </p>

            </div>

            <p className="furniture-price">
              ₹24,990
            </p>

          </div>

        </div>

        {/* Budget Section */}
        <div className="border-t border-[#E7DED3] p-5">

          <h2 className="text-lg font-semibold text-[#1F1B16]">
            Budget Summary
          </h2>

          {/* Progress */}
          <div className="mt-5">

            <div className="flex items-center justify-between text-sm">

              <span className="text-[#8A8178]">
                Total Budget
              </span>

              <span className="font-semibold text-[#1F1B16]">
                ₹1,20,000
              </span>

            </div>

            <div className="w-full h-3 bg-[#F3EEE8] rounded-full mt-3 overflow-hidden">

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

              <span className="text-[#8A8178]">
                Remaining
              </span>

              <span className="font-semibold text-green-600">
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
              bg-[#FAF8F5]
              text-sm
              text-[#3B342D]
              hover:border-[#6D4AFF]
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