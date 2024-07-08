// form.js

// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmission = (event) => {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;
    const errorMessage = document.getElementById('error');

    if (!userName || !blogTitle || !blogContent) {
        if (!errorMessage) {
            const error = document.createElement('div');
            error.id = 'error';
            error.textContent = 'All fields are required.';
            form.appendChild(error);
        }
        return;
    } else if (errorMessage) {
        errorMessage.remove();
    }

    const blogData = {
        userName,
        blogTitle,
        blogContent,
        date: new Date().toLocaleString()
    };

    storeLocalStorage('blogs', blogData);
    redirectPage('blog.html');
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmission);
