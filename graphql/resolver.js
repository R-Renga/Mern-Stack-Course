const data = {
    authors: [
        {
            id: "1",
            authorname: "raja",
            books: ["101", "102"]
        },
        {
            id: "2",
            authorname: "hari",
            books: ["101", "103"]
        }
    ],
    books: [
        { id: "101", name: "yogi", publishedyear: 2014, author: "1" },
        { id: "102", name: "yogiraj", publishedyear: 2014, author: "2" },
        { id: "103", name: "yogirenga", publishedyear: 2014, author: "1" },
    ]
};


export const resolvers =  {
    Book: {
        author: (parent) => {
            return data.authors.find(author => author.id === parent.author);
        }
    },
    Author: {
        book: (parent) => {
            return data.books.filter(book => book.author === parent.id);
        }
    },
    Query: {
        books: () => data.books,
        authors: () => data.authors
    },
    Mutation: {
        AddBook: (parent, args) => {
            const newBook = { 
                id: (data.books.length + 1).toString(), 
                ...args 
            };
            data.books.push(newBook);
            return newBook;
        }
    }
}