export default async function GetAllBlogPost() {
  const res = await fetch(
    "https://backend-dxgwebsite.vercel.app/site/blog",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  ).then((res) => res.json());
 
  
  return res.data;
  
}




 


