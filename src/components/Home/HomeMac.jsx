"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
export function MacbookScrollDemo() {
  return <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll title={<span>Zefaza Industries Pvt Ltd.</span>} src={"/logoWhite.svg"} showGradient={false} />
    </div>;
}