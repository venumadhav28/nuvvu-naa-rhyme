import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Page1Birthday from "@/components/Page1Birthday";
import Page2Feelings from "@/components/Page2Feelings";
import Page3Confession from "@/components/Page3Confession";
import Page4Clues from "@/components/Page4Clues";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {currentPage === 1 && <Page1Birthday key="page1" onNext={nextPage} />}
        {currentPage === 2 && <Page2Feelings key="page2" onNext={nextPage} />}
        {currentPage === 3 && <Page3Confession key="page3" onYes={nextPage} />}
        {currentPage === 4 && <Page4Clues key="page4" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
