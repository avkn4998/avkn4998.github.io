document.addEventListener('DOMContentLoaded', function () {
    const endpoint = 'https://icanhazdadjoke.com/';
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const getQuoteButton = document.getElementById('get-quote');
    const shareTwitterButton = document.getElementById('share-twitter'); 
  
   
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
 
    async function displayDadJoke() {
        const joke = await getDadJoke();
        quoteText.textContent = joke;
    }
  
    getQuoteButton.addEventListener('click', displayDadJoke);
  
    shareTwitterButton.addEventListener('click', function () {
        const encodedQuote = encodeURIComponent(quoteText.textContent);
  

        const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodedQuote}&hashtags=QuoteMachine`;
  

        window.open(twitterShareURL, '_blank');
    });
});
