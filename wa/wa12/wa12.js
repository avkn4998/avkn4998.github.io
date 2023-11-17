document.addEventListener('DOMContentLoaded', function () {
    const endpoint = 'https://api.quotable.io/random';
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const getQuoteButton = document.getElementById('get-quote');
  
    // Function to fetch a random quote
    async function getQuote() {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }
  
    // Function to update the DOM with a new quote
    function displayQuote() {
      getQuote().then(quote => {
        quoteText.textContent = quote.content;
        quoteAuthor.textContent = `- ${quote.author}`;
      });
    }
  
    // Event listener for the "Get Quote" button
    getQuoteButton.addEventListener('click', displayQuote);
  
    // Display an initial quote when the page loads
    displayQuote();
  });