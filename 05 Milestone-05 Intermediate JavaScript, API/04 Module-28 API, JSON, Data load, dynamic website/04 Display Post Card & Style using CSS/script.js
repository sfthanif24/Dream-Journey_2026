const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      displayPosts(data);
    });
};

const displayPosts = (posts) => {
  // 1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // 2. create element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;

    // 3. add to the container
    postContainer.appendChild(postCard);
  });
};

loadPost();
