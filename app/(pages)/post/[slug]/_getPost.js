import GetAllBlogPost from "@/lib/GetAllBlogPost";

// Fetch all blog posts once (without pagination for full dataset)
const postData = GetAllBlogPost();

export default postData;
