export async function GetAllBlogPost() {
  const bloData = await fetch(
    "https://backend-dxgwebsite.vercel.app/site/blog",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );
  return bloData.json();
}
const blogsData = await GetAllBlogPost();

export default blogsData;
