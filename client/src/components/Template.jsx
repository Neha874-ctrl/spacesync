import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";

function Templates() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const templateList = [
    { id: 1, title: "Modern Minimal Bedroom", type: "Bedroom", items: 24, tags: ["Minimalist", "Warm", "Neutral"], img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop", badge: "Popular" },
    { id: 2, title: "Sage Green Kitchen", type: "Kitchen", items: 18, tags: ["Modern", "Green", "Elegant"], img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900&auto=format&fit=crop", badge: "Trending" },
    { id: 3, title: "Luxury Living Room", type: "Living Room", items: 32, tags: ["Luxury", "Beige", "Premium"], img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop", badge: "Luxury" },
    { id: 4, title: "Cozy Workspace", type: "Workspace", items: 12, tags: ["Workspace", "Cozy", "Warm"], img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900&auto=format&fit=crop", badge: "New" },
    { id: 5, title: "Japandi Bathroom", type: "Bathroom", items: 15, tags: ["Zen", "Wood", "Stone"], img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=900&auto=format&fit=crop", badge: "Relaxing" },
    { id: 6, title: "Industrial Loft", type: "Living Room", items: 40, tags: ["Industrial", "Brick", "Metal"], img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop", badge: "Edgy" },
    { id: 7, title: "Tropical Patio", type: "Outdoor", items: 20, tags: ["Plants", "Summer", "Open"], img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=900&auto=format&fit=crop", badge: "Fresh" },
    { id: 8, title: "Classic Library", type: "Office", items: 55, tags: ["Dark", "Gold", "Old-school"], img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=900&auto=format&fit=crop", badge: "Expert" },
    { id: 9, title: "Smart Home Entry", type: "Hallway", items: 8, tags: ["Tech", "Sleek", "Blue"], img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=900&auto=format&fit=crop", badge: "Modern" },
  ];

  return (
    <div
      className="
        flex-1
        h-[88vh]
        min-h-[544px]
        max-h-[817px]
        px-4
        pb-4
        overflow-hidden
        animate-[fadeIn_0.5s_ease]
      "
    >

      <div
        className="
          h-full
          max-w-[1620px]
          bg-white
          dark:dark-panel-bg
          border
          border-[#E7DED3]
          dark:border-[#2A2A2A]
          rounded-[32px]
          p-8
          flex
          flex-col
          overflow-hidden
          shadow-sm
        "
      >

        {/* Header Section (Fixed) */}
        <div className="flex-shrink-0">
          <div className="flex items-start justify-between">
            {/* Left */}
            <div>
              <h1 className="text-[42px] font-bold text-[#1F1B16] dark:text-[#FFFFFF]">
                Templates ✨
              </h1>
              <p className="text-[#7B746B] dark:text-[#A0A0A0] mt-2 text-[16px]">
                Choose a template and customize it to your style.
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="w-[340px] h-[56px] rounded-2xl border border-[#E7DED3] dark:border-[#2A2A2A] bg-[#FAF8F5] dark:dark-card-bg flex items-center px-5 gap-3">
                <SearchIcon sx={{ color: "#8A8178" }} />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="flex-1 bg-transparent outline-none text-sm text-[#1F1B16] dark:text-[#FFFFFF] placeholder:text-[#8A8178] dark:placeholder:text-[#A0A0A0]"
                />
              </div>

              {/* Filter */}
              <button className="h-[56px] px-5 rounded-2xl border border-[#E7DED3] dark:border-[#2A2A2A] bg-[#FAF8F5] dark:dark-card-bg flex items-center gap-2 text-[#3B342D] dark:text-[#EAEAEA] hover:border-[#6D4AFF] transition-all">
                <FilterListRoundedIcon />
                <span className="text-sm">Filter</span>
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 mt-8 flex-wrap">
            <button className="template-category active-category">All</button>
            <button className="template-category">Living Room</button>
            <button className="template-category">Bedroom</button>
            <button className="template-category">Kitchen</button>
            <button className="template-category">Workspace</button>
            <button className="template-category">Bathroom</button>
            <button className="template-category">Hallway</button>
          </div>
        </div>

        {/* Gallery Section with Side Arrows */}
        <div className="relative flex-1 mt-10 group overflow-hidden">
          
          <h3 className="text-2xl font-bold text-[#1F1B16] dark:text-[#FFFFFF] mb-6">
            Trending Templates
          </h3>

          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="
              absolute 
              left-2 
              top-[55%] 
              -translate-y-1/2 
              z-10 
              w-12 
              h-12 
              rounded-full 
              bg-white/90 
              dark:bg-[#1E1E1E]/90 
              backdrop-blur-md 
              border 
              border-[#E7DED3] 
              dark:border-[#2A2A2A] 
              flex 
              items-center 
              justify-center 
              text-[#6D4AFF] 
              shadow-xl 
              opacity-0 
              group-hover:opacity-100 
              transition-all 
              duration-300 
              hover:scale-110
            "
          >
            <ChevronLeftIcon sx={{ fontSize: 28 }} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="
              absolute 
              right-2 
              top-[55%] 
              -translate-y-1/2 
              z-10 
              w-12 
              h-12 
              rounded-full 
              bg-white/90 
              dark:bg-[#1E1E1E]/90 
              backdrop-blur-md 
              border 
              border-[#E7DED3] 
              dark:border-[#2A2A2A] 
              flex 
              items-center 
              justify-center 
              text-[#6D4AFF] 
              shadow-xl 
              opacity-0 
              group-hover:opacity-100 
              transition-all 
              duration-300 
              hover:scale-110
            "
          >
            <ChevronRightIcon sx={{ fontSize: 28 }} />
          </button>

          {/* Horizontal Gallery */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 custom-scrollbar scroll-smooth no-scrollbar"
          >
            {templateList.map((item) => (
              <div key={item.id} className="min-w-[340px] w-[340px] template-card">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="template-image h-[210px]"
                  />
                  <div className="template-badge">{item.badge}</div>
                  <button className="favorite-btn">
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-[#1F1B16] dark:text-[#FFFFFF] truncate">
                    {item.title}
                  </h2>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="template-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <p className="text-sm text-[#8A8178] dark:text-[#A0A0A0]">
                      {item.type} • {item.items} items
                    </p>
                    <button className="use-template-btn">Use</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Templates;