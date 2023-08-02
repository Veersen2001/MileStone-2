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
   console.log('envrnt',event);
  
   closeModal()
   displayBlogs();
   BlogForm.reset()
  
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
      ReadBlog.textContent="Read Blog"
      blogElement.className="userBlog"
      blogElement.classList.add("blog-post")
      blogElement.innerHTML = `
      <img src="${blog.postUrl}">
      <h3>${blog.title}</h3>
      <p>${blog.description}</p>
      `
      blogElement.appendChild(ReadBlog)
     
      ReadBlog.addEventListener('click',()=>displayBlogsPage(blog))
      Container.appendChild(blogElement)

      
    })
  }
  
 //  read blog 

  function displayBlogsPage(blog){
    blogContainer.innerHTML = "";
     const displayContainer = blogContainer.style.display;
     if(displayContainer=="block")
     {
      blogContainer.style.display = "none"
       
     }
     else{
      blogContainer.style.display = "block"
     }
    backArrow.style.display="block"
    blogContainer.appendChild(backArrow)
    const blogInfo=document.createElement('div')
    blogInfo.className = 'blogInfo'
    blogInfo.innerHTML = `
    <div>
    <h3>${blog.title}</h3>
    <p>${blog.description}</p>
    </div>
    <img src="${blog.postUrl}">
    `
    const blogContent=document.createElement('div')
    blogContent.className = 'blogContent'
    blogContent.innerHTML = `
    <p>${blog.content}</p>

    `


    blogContainer.appendChild(blogInfo)
    blogContainer.appendChild(blogContent);
  
   }

    backArrow.addEventListener('click',()=>{
      
      blogContainer.style.display="none"
     
    })
    
    

   

   function showModal() {
      document.getElementById('myForm').style.display = "block"
  }

  // Function to close the modal
  function closeModal() {
      myForm.style.display = "none"
  }

  // Event listeners
  addBlog.addEventListener("click", showModal)
  closePage.addEventListener("click", closeModal)
   
  
  // Event Listeners
  BlogForm.addEventListener("submit",StoreBlog);

  // load to existing Blogs
   displayBlogs();
})
