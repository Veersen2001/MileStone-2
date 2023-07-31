const addBlog = document.getElementById("addBlog");
const closePage = document.getElementById("closePage");

const AddBlog = document.getElementById("AddBlog");
const BlogForm = document.getElementById("blogForm");

AddBlog.addEventListener("click", (event) => {
  event.preventDefault();
  const postUrl = document.getElementById("postUrl").value;
  const BlogContent = document.getElementById("writeBlog").value;
  const BlogTitle = document.getElementById("blogTitle").value;
  const BlogDescription = document.getElementById("blogDescription").value;

  const blog = {
    BlogTitle,
    postUrl,
    BlogDescription,
    BlogContent,
  };
  // Save the new blog to LocalStorage

  // existingBlogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blog));
  const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  console.log(existingBlogs.BlogTitle);
  document.getElementById("myForm").style.display = "none";
  // renderBlogs();
});

// open add blog form
addBlog.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});

// close add blog form
closePage.addEventListener("click", () => {
  document.getElementById("myForm").style.display = "none";
});
