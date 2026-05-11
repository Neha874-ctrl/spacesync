import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";

function Inspiration() {
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

  const galleryItems = [
    { id: 1, title: "Scandinavian Kitchen", sub: "Neutral tones • Wooden accents", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900&auto=format&fit=crop" },
    { id: 2, title: "Luxury Beige Room", sub: "Premium textures • Soft curves", img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop" },
    { id: 3, title: "Cozy Workspace", sub: "Productivity • Warm setup", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop" },
    { id: 4, title: "Japandi Living", sub: "Minimalist • Zen • Natural", img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=900&auto=format&fit=crop" },
    { id: 5, title: "Modern Bathroom", sub: "Clean lines • Marble", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=900&auto=format&fit=crop" },
    { id: 6, title: "Kids Adventure Room", sub: "Colorful • Playful", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=900&auto=format&fit=crop" },
    { id: 7, title: "Boho Dining Area", sub: "Rattan • Earthy vibes", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=900&auto=format&fit=crop" },
    { id: 8, title: "Emerald Green Office", sub: "Bold colors • Professional", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=900&auto=format&fit=crop" },
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

        {/* Fixed Header */}
        <div className="flex-shrink-0">

          <div className="flex items-start justify-between">

            <div>
              <h1 className="text-[42px] font-bold text-[#1F1B16] dark:text-[#FFFFFF]">
                Inspiration ✨
              </h1>
              <p className="text-[#7B746B] dark:text-[#A0A0A0] mt-2 text-[16px]">
                Discover beautiful spaces curated by AI and designers.
              </p>
            </div>

            {/* Search */}
            <div
              className="
                w-[360px]
                h-[56px]
                rounded-2xl
                border
                border-[#E7DED3]
                dark:border-[#2A2A2A]
                bg-[#FAF8F5]
                dark:dark-card-bg
                flex
                items-center
                px-5
                gap-3
              "
            >
              <SearchIcon sx={{ color: "#8A8178" }} />
              <input
                type="text"
                placeholder="Search inspiration..."
                className="
                  flex-1
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

          </div>

          {/* Categories */}
          <div className="flex gap-3 flex-wrap mt-8">
            <button className="insp-category active-insp-category">All</button>
            <button className="insp-category">Minimalist</button>
            <button className="insp-category">Japandi</button>
            <button className="insp-category">Scandinavian</button>
            <button className="insp-category">Luxury</button>
            <button className="insp-category">Boho</button>
            <button className="insp-category">Contemporary</button>
          </div>

        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mt-8">

          {/* Featured Banner */}
          <div
            className="
              rounded-[32px]
              overflow-hidden
              relative
              h-[260px]
              flex-shrink-0
            "
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10 flex items-end p-8">
              <div className="max-w-[480px]">
                <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-md text-white text-sm">
                  <AutoAwesomeOutlinedIcon sx={{ fontSize: 18 }} />
                  AI Curated
                </div>
                <h2 className="text-white text-[32px] font-bold mt-4 leading-tight">Warm Minimal Bedroom</h2>
                <button className="mt-5 px-6 py-3 rounded-2xl bg-white text-[#1F1B16] text-sm font-medium hover:scale-[1.05] transition-all duration-300 shadow-lg">
                  Explore Design
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Gallery Section */}
          <div className="relative mt-10 group">
            
            <h3 className="text-2xl font-bold text-[#1F1B16] dark:text-[#FFFFFF] mb-6">
              Trending Gallery
            </h3>

            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="
                absolute 
                left-2 
                top-[60%] 
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
                top-[60%] 
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
              className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar scroll-smooth no-scrollbar"
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="min-w-[320px] w-[320px] insp-card">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="insp-image h-[200px]"
                    />
                    <div className="insp-actions">
                      <button className="insp-icon-btn">
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: 20 }} />
                      </button>
                      <button className="insp-icon-btn">
                        <BookmarkBorderOutlinedIcon sx={{ fontSize: 20 }} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="insp-title text-base">{item.title}</h3>
                    <p className="insp-subtitle text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Inspiration;