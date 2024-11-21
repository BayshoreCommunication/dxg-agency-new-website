export async function GetAllBlogPost() {
  const bloData = await fetch(
    "https://backend-dxgwebsite.vercel.app/site/blog"
  );
  return bloData.json();
}
const blogsData = await GetAllBlogPost();

export default blogsData;
