import { BlogHeaderSection, RecentBlogSection } from "@/components/Sections";
const page = () => {
  return (
    <div className="bg-black">
      <BlogHeaderSection />
      <RecentBlogSection />
      {/* <CreateAService />
      <MultipleServiceSection /> */}
    </div>
  );
};

export default page;
