const quoteArray = [
  {
    quote:
      "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "All progress takes place outisde the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    quote: "If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "Success seems to be connected with action. Successful people keep moving.",
    author: "Conrad Hilton",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantakis",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
