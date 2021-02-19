
const quoteContainer = document.getElementById('quote-container');
const quoteText= document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get out from api

  async function getQuote(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

        try{ 
                const response = await fetch(proxyUrl + apiUrl);
                const data = await response.json();
                authorText.innerText = data.quoteAuthor;
                authorText.innerText = data.quoteText;
                  
        }catch(error) {
            getQuote(); 
           
        }
  }
 



//   async function getQuotes() {
//     const apiUrl = "https://type.fit/api/quotes";
 
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//     } catch (error) {
//         apiQuotes = localQuotes;
//     }
//     newQuote();
// }    