// blog.js

// TODO: Create a variable that selects the main element, and a variable that selects the back button element\
const mainElement = document.querySelector('main');
const ulElement = document.getElementById('main-ul');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
const createBlogPostElement = (blogData) => {
    console.log(blogData.title)
    const listItem = document.createElement('li')

    const article = document.createElement('article');
    article.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = blogData.title;
    article.appendChild(title);

    const content = document.createElement('blockquote');
    content.textContent = blogData.content;
    article.appendChild(content);

    const author = document.createElement('p');
    author.textContent = `Post by: ${blogData.username}`;
    article.appendChild(author);

    listItem.appendChild(article);
    ulElement.appendChild(listItem);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const displayNoPostsMessage = () => {
    const message = document.createElement('p');
    message.textContent = "No Blog posts yet...";
    mainElement.appendChild(message);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = () => {
    let blogData = JSON.parse(localStorage.getItem('blogs'))
    if (!blogData) {
        displayNoPostsMessage();
    } else {
        blogData.forEach(createBlogPostElement);
    }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', () => {
    redirectPage('index.html');
});
