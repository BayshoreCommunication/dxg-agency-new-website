const postData = fetch("https://backend-dxgwebsite.vercel.app/site/blog", {
  cache: "force-cache",
  next: { revalidate: 5 },
}).then((res) => res.json());

export default postData;
