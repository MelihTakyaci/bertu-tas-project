"use client";
import SidebarButtons from "@/components/SidebarButtons";
import PowerBIViewer from "@/components/PowerBIViewer";
import MobileModal from "@/components/MobileModal";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-6 gap-6">
      <Navbar />
      <div className="flex sm:flex-row flex-col">
        <SidebarButtons onSelect={(url) => setSelectedUrl(url)} />
        
        {!isMobile && selectedUrl && (
          <div className="flex-1">
            <PowerBIViewer url={selectedUrl} />
          </div>
        )}

        {isMobile && selectedUrl && (
          <MobileModal url={selectedUrl} onClose={() => setSelectedUrl(null)} />
        )}
      </div>
    </div>
  );
}