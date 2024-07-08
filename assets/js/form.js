// form.js

// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const formSubmission = (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorMSG = document.getElementById('error')

    if (!username || !title || !content) {
        errorMSG.textContent = ('Please complete the form.');
        return;
    }else{
        const blogData = {
            username,
            title,
            content,
        };
    
        storeLocalStorage('blogs', blogData);
        redirectPage('blog.html');
    }
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', formSubmission);
