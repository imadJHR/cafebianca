// src/components/FilterBar.jsx

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "../../src/components/ui/tabs";
import { Button } from "../../src/components/ui/button";

const FilterBar = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef(null);

  // Effect to handle the sticky behavior
  useEffect(() => {
    // We target the main content area after the hero section to trigger the sticky bar
    const heroSection = document.getElementById("hero-section"); 
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { rootMargin: "-80px 0px 0px 0px" } // Trigger when the hero is 80px out of view from top
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  // Effect to scroll the active category into view on mobile
  useEffect(() => {
    if (selectedCategory && scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-category="${selectedCategory}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [selectedCategory]);

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="sticky top-[70px] z-30 w-full bg-neutral-50/80 backdrop-blur-lg shadow-sm"
        >
          <div className="container mx-auto px-4 lg:px-8 py-3">
            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-center">
              <Tabs
                value={selectedCategory || "all"}
                onValueChange={(val) => onCategoryChange(val === "all" ? null : val)}
              >
                <TabsList className="bg-white/60 p-1.5 rounded-xl border">
                  <TabsTrigger value="all" className="rounded-lg px-4 data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                    Tous
                  </TabsTrigger>
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="rounded-lg px-4 data-[state=active]:bg-emerald-500 data-[state=active]:text-white capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Mobile Horizontally Scrolling Pills */}
            <div
              ref={scrollContainerRef}
              className="md:hidden flex items-center gap-2 overflow-x-auto pb-2 -mb-2 no-scrollbar"
            >
              <Button
                size="sm"
                data-category="all"
                variant={!selectedCategory ? "default" : "outline"}
                onClick={() => onCategoryChange(null)}
                className={`rounded-full whitespace-nowrap shrink-0 ${!selectedCategory ? 'bg-emerald-500 text-white hover:bg-emerald-600 border-transparent' : 'bg-white'}`}
              >
                Tous
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  data-category={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => onCategoryChange(category)}
                  className={`rounded-full whitespace-nowrap shrink-0 capitalize ${selectedCategory === category ? 'bg-emerald-500 text-white hover:bg-emerald-600 border-transparent' : 'bg-white'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterBar;