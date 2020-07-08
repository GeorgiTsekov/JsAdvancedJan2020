class Library {

    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: (libraryName.length * 2),
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        if (type !== 'normal' && type !== 'special' && type !== 'vip') {
            throw new Error(`The type ${type} is invalid`);
        }

        let index = this.subscribers.findIndex(x => x.name === name);

        if (index === -1) {
            let subscriber = {
                name: name,
                type: type,
                books: []
            }

            this.subscribers.push(subscriber);

            return subscriber;
        } else {
            this.subscribers[index].type = type;
            return this.subscribers[index];
        }
    }

    unsubscribe(name) {
        let index = this.subscribers.findIndex(x => x.name === name);

        if (index === - 1) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers.splice(index, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let index = this.subscribers.findIndex(x => x.name === subscriberName);

        if (index === -1) {
            throw new Error(`There is no such subscriber as ${subscriberName}`)
        }

        let typeOfSubscriber = this.subscribers[index].type;
        let subTypeLimit = this.subscriptionTypes[typeOfSubscriber];

        if (this.subscribers[index].books.length >= subTypeLimit) {
            throw new Error(`You have reached your subscription limit ${subTypeLimit}!`)
        }

        let book = {
            title: bookTitle,
            author: bookAuthor
        };

        this.subscribers[index].books.push(book);

        return this.subscribers[index];
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`
        }

        return this.subscribers.map(s => {          
            const booksOutput = s.books
            .map(b => `${b.title} by ${b.author}`)
            .join(', ');

            return `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${booksOutput}`
        })
        .join('\n');
    }
}



let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());

