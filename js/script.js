/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


     /*** 
     Created an array of five quote objects called "quotes"
     with four properties: quote, source, year, tags'
     Also, used the console.log() method to log(write) the 
     array to the console. When adding the tags property I
     added another aspect to the css file to space it accordingly.
     ***/
     var quotes = [
     {quote: 'Simplicity is the ultimate sophistication',
     source: 'Leonardo da Vinci',
     year: 1470,
     tags: 'Masters'
     },
     {quote: 'What we think, we become',
      source: 'Buddha',
      tags: 'Masters'
     },
  
     {quote: 'Oh, the things you can find, if you do not stay behind',
      source: 'Dr. Seuss',
      citation: 'On Beyond Zebra!',
      year: 1955,
      tags: 'Humor'
     },

     { quote: 'Let the beauty of what you love be what you do',
     source: 'Rumi',
     year: '13th Century',
     tags: 'Masters'
     },
     {quote: 'Life itself is the most wonderful fairy tale',
      source: 'Hans Christian Andersen',
      year: 1850,
      tags: 'Literary'
      }
     ];  
      console.log(quotes);
    
      function colore() {
      return Math.floor(Math.random() * 256);
      }


     /***
     This "getRandomQuote" function created a variable to store a random number, to
     then, choose the random number,
     then, return a random quote object from the "quotes" array
     ***/
     function getRandomQuote(quotes) {
      var number = Math.floor(Math.random() * quotes.length);
      var randomQuote = quotes[number];
      return randomQuote;
      }
      var result = getRandomQuote(quotes);
      console.log(result);

      function refresh() {
      let seconds = setInterval (printQuote, 3000);
      }
      //here the time element has been introduced


      /***
      This "printQuote" function does,
     a random display of the quotes in the array when,
      "Show another quote" box is clicked,
      within the scope of the function, the background colors will
     randomly change.
      I intentionally left the commented out code to remind
      my future self there is always more than one way.
     ***/

      function printQuote() {
      var letitbe = getRandomQuote(quotes);
      var words = '';
     var x = colore();
     // var x = Math.floor(Math.random() *256);
     var y = colore();
     // var y = Math.floor(Math.random() *256);
     var z = colore();
     // var z = Math.floor(Math.random() *256);
     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);
  
      words += '<p class="quote">' + letitbe.quote + '</p>';
      words += '<p class="source">' + letitbe.source;

      if(letitbe.citation) {
      words += '<span class="citation">' + letitbe.citation + '</span>';
      }
      if( letitbe.year) {
     words += '<span class="year">' + letitbe.year + '</span>';
      }
     if(letitbe.tags) {
     words += '<span class="tags">' + letitbe.tags + '</span>';
      }
      words += '</p>';

      document.body.style.background = bgColor;
      document.getElementById('quote-box').innerHTML = words;
   
      }
   

     /*** 
     When "Show another quote" button is clicked
     the event listener activates and invokes the
      "printQuote" function
     ***/

     document.getElementById('loadQuote').addEventListener("click", printQuote, false);
      refresh ();

