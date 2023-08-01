document.addEventListener("DOMContentLoaded" , ()=>{
  const addBlog = document.getElementById("addBlog")
  const closePage = document.getElementById("closePage")
  const BlogForm = document.getElementById("blogForm")
  const Container = document.getElementById('container')
  const blogContainer = document.querySelector('.blogContainer')
  const backArrow = document.getElementById('back_home');
 
  


  // Function to fetch existing blog from Localstorage

  function getBlogs()
  {
    return JSON.parse(localStorage.getItem("blogs")) || []
  }

  // function to save blogs to localstorage

  function saveBlog(blogs){
    localStorage.setItem("blogs",JSON.stringify(blogs))
  }



  // handle from submission
  function StoreBlog(event){
    event.preventDefault()

   const PostUrl = document.getElementById("postUrl").value
   const BlogContent = document.getElementById("writeBlog").value
    const BlogTitle = document.getElementById("blogTitle").value
   const BlogDescription = document.getElementById("blogDescription").value
   
   const newBlog = {
    postUrl:PostUrl,
    title:BlogTitle,
    description:BlogDescription,
    content:BlogContent

   }
   const blogs = getBlogs()
   blogs.push(newBlog)
   saveBlog(blogs)

    document.getElementById("myForm").style.display = "none"

  
    displayBlogs();
  }
  // Function to display all blocks on the home page
  function displayBlogs()
  {
    const blogs = getBlogs()
    Container.innerHTML = "";
    blogs.forEach((blog)=> {
      const blogElement = document.createElement("div")
      const ReadBlog = document.createElement('button')
      ReadBlog.id='readBlog'
      ReadBlog.textContent = "read Blog"
      blogElement.className="userBlog"
      blogElement.classList.add("blog-post")
      blogElement.innerHTML = `
        <img src="${blog.postUrl}">
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
      `
      console.log(blog.title);
      Container.appendChild(blogElement)
      blogElement.appendChild(ReadBlog)
      ReadBlog.addEventListener("click", () => displayBlogPage(blog))

    })
  }


    function displayBlogPage(blog){
     backArrow.style.display = "block"
    blogContainer.appendChild(backArrow);
    
    const blogInfo=document.createElement('div')
    blogInfo.className = 'blogInfo'
     blogInfo.innerHTML = `
      <div>
       <h3>${blog.title}</h3>
       <p>${blog.description}</p>
       </div>
        <img src="${blog.postUrl}">
      `
    blogContainer.appendChild(blogInfo)

    const blogContent=document.createElement('div')
     blogContent.className = 'blogContent'
      blogContent.innerHTML = `
     <p>${blog.content}</p>
    `
    blogContainer.appendChild(blogContent);
    
    backArrow.addEventListener('click',backHome)
   }
   
  //  
   function backHome()
   {
    
   }

  // open add blog form
  addBlog.addEventListener("click", () => {
    document.getElementById("myForm").style.display = "block"
  })

  // close add blog form
  closePage.addEventListener("click", () => {
    document.getElementById("myForm").style.display = "none"
  })

  // Event Listeners
  BlogForm.addEventListener("submit",StoreBlog);

  // load to existing Blogs
   displayBlogs();
})
