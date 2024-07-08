// blog.js

// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
const createBlogPostElement = (blogData) => {
    const article = document.createElement('article');
    article.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = blogData.blogTitle;
    article.appendChild(title);

    const content = document.createElement('blockquote');
    content.textContent = blogData.blogContent;
    article.appendChild(content);

    const author = document.createElement('p');
    author.textContent = `Post by: ${blogData.userName} on ${blogData.date}`;
    article.appendChild(author);

    mainElement.appendChild(article);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const displayNoPostsMessage = () => {
    const message = document.createElement('p');
    message.textContent = 'No blog posts to display.';
    mainElement.appendChild(message);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = () => {
    const blogData = readLocalStorage('blogs');
    if (blogData.length === 0) {
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
