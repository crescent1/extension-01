// async function fetchDataQuotes() {
//     let text = "";
//     const url = "https://zenquotes.io/api/quotes";
//     const res = await fetch(url, {
//         mode: "cors",
//         method: 'GET',
//     });

//     const quotes = await res.json();
//     console.log(quotes);

//     quotes.forEach(myFunction);
//     document.getElementById("quote").innerHTML = text;


//     function myFunction(element, index) {
//         text += element.q; 
//     }

    
// }
// fetchDataQuotes();

let text = "";
const data = [
    {
        "q": "<blockquote>&ldquo;You will succeed because most people are lazy.&rdquo; &mdash; <footer>Shahir Zag</footer></blockquote>"
    },
    {
        "q": "<blockquote>&ldquo;The least deviation from truth will be multiplied later.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
    },
    {
        "q": "<blockquote>&ldquo;It does not matter how slowly you go so long as you do not stop.&rdquo; &mdash; <footer>Confucius</footer></blockquote>"
    }
];

data.forEach(myFunction);
document.getElementById("quote").innerHTML = text;


function myFunction(element, index) {
    text += element.q; 
  }