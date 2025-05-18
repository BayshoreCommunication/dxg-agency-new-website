import OurEventGallerySection from "@/components/Sections/PortfolioSections/OurEventGallerySection";
import { PortfolioBreadCrumbSection } from "@/components/Sections/PortfolioSections/PortfolioBreadCrumbSection";

export default function Portfolio() {
  return (
    <div className="bg-black">
      <PortfolioBreadCrumbSection />
      <OurEventGallerySection />
    </div>
  );
}
