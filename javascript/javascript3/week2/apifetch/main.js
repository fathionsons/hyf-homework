console.log("loaded");
function display(data) {
  const post = document.createElement("ul");
  const listOfPosts = document.querySelector('.fathi > ul');
  data.forEach(item => {
    listOfPosts.appendChild(itemBlockDisplay(post,item));
  });


}
function fetchApi() {
    const postsReq = fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then(response => response.json())
      .then(delay => setTimeoutPromise(delay))
      .then(data => display(data));
  }

function itemBlockDisplay(post,item) {
  const title = document.createElement("h2");
  const body = document.createElement("p");
  title.innerHTML = item.title;
  body.innerHTML = item.body;
  post.appendChild(title);
  post.appendChild(body);
  return post;
}
function setTimeoutPromise(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

fetchApi();