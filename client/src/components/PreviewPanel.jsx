function PreviewPanel({ isChatOpen }) {
  return (
    <div
      className={`
        flex-1
        min-w-[500px]
        ${isChatOpen ? 'max-w-[1280px]' : 'max-w-none'}
        h-[88vh]
        min-h-[544px]
        max-h-[817px]
        px-4
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
          p-6
          flex
          flex-col
        "
      >

        {/* Top Section */}
        <div className="flex items-start justify-between">

          {/* Left */}
          <div>

            <h1 className="text-[32px] font-bold text-[#1F1B16]">
              Modern Minimalist Bedroom
            </h1>

            {/* Tags */}
            <div className="flex items-center gap-3 mt-4">

              <div className="preview-tag">
                12ft × 14ft
              </div>

              <div className="preview-tag">
                Minimalist
              </div>

              <div className="preview-tag">
                Budget: ₹1,20,000
              </div>

            </div>

          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">

            <button className="secondary-btn">
              Save Design
            </button>

            <button className="primary-btn">
              Regenerate
            </button>

          </div>

        </div>

        {/* Main Preview */}
        <div
          className="
            flex-1
            mt-6
            rounded-[30px]
            overflow-hidden
            bg-[#F5F1EB]
            relative
          "
        >

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="Room Preview"
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* 360 Badge */}
          <button
            className="
              absolute
              top-5
              right-5
              bg-black/70
              text-white
              px-4
              py-2
              rounded-2xl
              text-sm
              backdrop-blur-md
            "
          >
            360°
          </button>

        </div>

        {/* Bottom Thumbnails */}
        <div className="flex items-center gap-4 mt-5">

          {/* Thumbnail */}
          <div className="thumbnail active-thumb">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop"
              alt=""
              className="thumb-img"
            />
          </div>

          <div className="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=400&auto=format&fit=crop"
              alt=""
              className="thumb-img"
            />
          </div>

          <div className="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=400&auto=format&fit=crop"
              alt=""
              className="thumb-img"
            />
          </div>

          <div className="thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop"
              alt=""
              className="thumb-img"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default PreviewPanel;