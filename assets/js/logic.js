// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const circleElement = document.getElementById('circle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        document.documentElement.style.setProperty('--circle-color', '#ffb100');
        toggleButton.textContent = '☀️'
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        document.documentElement.style.setProperty('--circle-color', '#FFFFFF'); 
        toggleButton.textContent = '🌙'
        localStorage.setItem('theme', 'dark');
    }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

const readLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

const storeLocalStorage = (key, newData) => {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

