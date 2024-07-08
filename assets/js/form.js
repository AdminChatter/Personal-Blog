// form.js

// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const formSubmission = (event) => {
    event.preventDefault();

    const userName = document.getElementById('username').value;
    const blogTitle = document.getElementById('title').value;
    const blogContent = document.getElementById('content').value;

    if (!userName || !blogTitle || !blogContent) {
        window.alert("Please complete the form.");
        return;
    }

    const blogData = {
        userName,
        blogTitle,
        blogContent,
    };

    storeLocalStorage('blogs', blogData);
    redirectPage('blog.html');
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', formSubmission);
