// Task 4: Object Method - My Personal Library 2
const books = {
    title: "Things Fall Apart",
    description: "A novel about Igbo culture",
    numberOfPages: 209,
    author: "Chinua Achebe",
    reading: true,

    toggleReadingStatus() {
        this.reading = !this.reading;
        console.log(this.reading);
    }
};

books.toggleReadingStatus();