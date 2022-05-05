document.addEventListener('DOMContentLoaded', function(){

const quoteText = document.querySelector('#js-quote-text');
const authorText = document.querySelector('#js-author-text');
const blockQuote = document.querySelector('#block');
const twitterButton = document.querySelector('#js-tweet');
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.quotable.io/random';

async function getQuote(){

    spinner.classList.remove('hidden');
    
    newQuoteButton.disabled = true;

    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText)
        }

    const json = await response.json();
   quoteText.textContent = `" ${json.content} "`;
   authorText.textContent = json.author;

    }
    catch(err){
        console.log(err)
        alert('Failed to generate new random quote')
    }
    finally{
        newQuoteButton.disabled = false;
        spinner.classList.add('hidden');
    }
}




const spinner = document.querySelector('#js-spinner');

});