
/*This code defines a function called titleCase that takes a book title as
input and returns the same title in title case. The function uses the split method
to split the title into an array of words, 
loops through each word, and capitalizes the first letter of each word. Finally, the function
joins the words back together into a string and returns it.

To demonstrate how to use the titleCase function, the code includes an example where it is called with an original
book title of "the quick brown fox jumps over the lazy dog". The formatted title is then printed to the console 
along with the original title for comparison.*/

function titleCase(bookTitle) {
  // split the book title into an array of words
  const words = bookTitle.split(' ');

  // loop through each word in the array
  for (let i = 0; i < words.length; i++) {
  
    // split each word into an array of characters
    const characters = words[i].split('');

    // capitalize the first character of the word
    characters[0] = characters[0].toUpperCase();

    // join the characters back together into a string
    words[i] = characters.join('');
  }

  // join the words back together into a string and return it
  return words.join(' ');
}

//  Usage
const originalTitle = "the quick brown fox jumps over the lazy dog";
const formattedTitle = titleCase(originalTitle);

console.log(`nodeOriginal Title: ${originalTitle}`);
console.log(`Formatted Title: ${formattedTitle}`);

