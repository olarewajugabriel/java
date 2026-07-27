// Task 5: Complex Data Structure - My Personal Library 3
const books = [
  {
    title: "Things Fall Apart",
    description: "A classic African novel.",
    numberOfPages: 209,
    author: "Chinua Achebe",
    reading: true
  },
  {
    title: "Rich Dad Poor Dad",
    description: "A book about financial literacy.",
    numberOfPages: 336,
    author: "Robert Kiyosaki",
    reading: false
  },
  {
    title: "Atomic Habits",
    description: "A book on habit formation.",
    numberOfPages: 328,
    author: "James Clear",
    reading: true
  }
];

// Loop through and log books with reading status === true
for (let i = 0; i < books.length; i++) {
  if (books[i].reading === true) {
    console.log(books[i]);
  }
}