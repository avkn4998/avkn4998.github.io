document.addEventListener('DOMContentLoaded', function () {
    const endpoint = 'https://icanhazdadjoke.com/';
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const getQuoteButton = document.getElementById('get-quote');
  
    // Function to fetch a random Dad Joke
    async function getDadJoke() {
      try {
        const response = await fetch(endpoint, {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        return data.joke;
      } catch (error) {
        console.error('Error fetching Dad Joke:', error);
      }
    }
  
    // Function to update the DOM with a new Dad Joke
    async function displayDadJoke() {
      // Check if there is no existing Dad Joke text
      if (!quoteText.textContent.trim()) {
        const joke = await getDadJoke();
        quoteText.textContent = joke;
        quoteAuthor.textContent = ''; // Dad Jokes typically don't have an author
      }
    }
  
    // Event listener for the "Get Quote" button
    getQuoteButton.addEventListener('click', displayDadJoke);
  });