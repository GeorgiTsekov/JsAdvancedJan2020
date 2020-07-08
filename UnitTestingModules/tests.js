// let PaymentPackage = require('./js');
// let assert = require('chai').assert;

// describe('ctor behavior', () => {
//     it('check if name works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         let actualResult = paymentPackage.name;
//         let expectedResult = 'HR Services';

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if name works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         paymentPackage.name = 'Gosho'
//         let actualResult = paymentPackage.name;
//         let expectedResult = 'Gosho';

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if value works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500.5)
//         let actualResult = paymentPackage.value;
//         let expectedResult = 1500.5;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if value works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500.5)
//         paymentPackage.value = 100;
//         let actualResult = paymentPackage.value;
//         let expectedResult = 100;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if VAT works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         let actualResult = paymentPackage.VAT;
//         let expectedResult = 20;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if active works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         let actualResult = paymentPackage.active;
//         let expectedResult = true;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if name is empty string', () =>{
//         let actualResult = () => new PaymentPackage('', 1500);
//         let expectedResult = 'Name must be a non-empty string';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if name is empty string', () =>{
//         let actualResult = () => new PaymentPackage('Tosho', 1500).name = '';
//         let expectedResult = 'Name must be a non-empty string';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if name is not a string', () =>{
//         let actualResult = () => new PaymentPackage(3.5, 1500);
//         let expectedResult = 'Name must be a non-empty string';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if value is not a number', () =>{
//         let actualResult = () => new PaymentPackage('Gosho', "12.3");
//         let expectedResult = 'Value must be a non-negative number';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if value is not a number', () =>{
//         let actualResult = () => new PaymentPackage('Gosho', 123).value = 'asd';
//         let expectedResult = 'Value must be a non-negative number';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if value is negative', () =>{
//         let actualResult = () => new PaymentPackage('Gosho', -100);
//         let expectedResult = 'Value must be a non-negative number';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if VAT is positive number', () =>{
//         let paymentPackage = new PaymentPackage('Gosho', 100);
//         paymentPackage.VAT = 120;
//         let actualResult = paymentPackage.VAT;
//         let expectedResult = 120;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if VAT is negative number', () =>{
//         let actualResult = () => new PaymentPackage('Gosho', 100).VAT = -120;
//         let expectedResult = 'VAT must be a non-negative number';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if VAT is not a number', () =>{
//         let actualResult = () => new PaymentPackage('Gosho', 100).VAT = '123';
//         let expectedResult = 'VAT must be a non-negative number';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if active is not a boolean', () =>{
//         let actualResult = () => new PaymentPackage('Gosho', 100).active = '123';
//         let expectedResult = 'Active status must be a boolean';

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if active is a boolean', () =>{
//         let paymentPackage = new PaymentPackage('Gosho', 100);
//         paymentPackage.active = false;
//         let actualResult = paymentPackage.active;
//         let expectedResult = false;

//         assert.equal(actualResult, expectedResult)
//     })
// })

// describe('toString() behavior', () => {
//     it('check if toString() works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         let actualResult = paymentPackage.toString();
//         let expectedResult = 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if toString() works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         paymentPackage.active = false;
//         let actualResult = paymentPackage.toString();
//         let expectedResult = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if toString() works correctly', () =>{
//         let paymentPackage = new PaymentPackage('HR Services', 1500)
//         paymentPackage.active = false;
//         let actualResult = paymentPackage.toString();
//         let expectedResult = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'

//         assert.deepEqual(actualResult, expectedResult)
//     })
// })
// let SkiResort = require('./js');
// let assert = require('chai').assert;

// describe('SkiResort', function () {
//     it('check if ctor name works correctly', () =>{
//         let res = new SkiResort("Some");
//         let actualResult = res.name;
//         let expectedResult = 'Some';

//         assert.equal(actualResult, expectedResult)
//     })
// });

// describe('build Hotel', function () {
//     it('check if build works correctly', () =>{
//         let res = new SkiResort("Some");

//         let actualResult = res.build("Sun", 10);
//         let expectedResult = `Successfully built new hotel - Sun`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if name is null', () =>{
//         let res = new SkiResort("Some");

//         let actualResult = () => res.build("", 10);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if beds is negative', () =>{
//         let res = new SkiResort("Some");

//         let actualResult = () => res.build("Sun", -11);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if beds is negative', () =>{
//         let res = new SkiResort("Some");

//         let actualResult = () => res.build("Sun", 0);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })
// });

// describe('book Hotel', function () {
//     it('check if book works correctly', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         let actualResult = res.book("Sun", 5);
//         let expectedResult = "Successfully booked";

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if no beds', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         let actualResult = () => res.book("Sun", 11);
//         let expectedResult = "There is no free space";

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if no hotel with this name', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         let actualResult = () => res.book("Sat", 1);
//         let expectedResult = "There is no such hotel";

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if name is null', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         let actualResult = () => res.book("", 1);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if beds are negative', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         let actualResult = () => res.book("Sun", -2);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if beds are zero', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         let actualResult = () => res.book("Sun", 0);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })
// });

// describe('leave Hotel', function () {
//     it('check if leave works correctly', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         let actualResult = res.leave("Sun", 4, 1);
//         let expectedResult = `4 people left Sun hotel`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if no hotel with this name', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         let actualResult = () => res.leave("Sat", 1, 2);
//         let expectedResult = "There is no such hotel";

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if name is null', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         let actualResult = () => res.leave("", 1, 2);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if beds are negative', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         let actualResult = () => res.leave("Sun", -2, 3);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if beds are zero', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 10);
//         let actualResult = () => res.leave("Sun", 0, 2);
//         let expectedResult = "Invalid input";
//         assert.throw(actualResult, expectedResult)
//     })
// });

// describe('averageGrades Hotel', function () {
//     it('check if averageGrades works correctly', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         res.leave('Sun', 2, 2)
//         let actualResult = res.averageGrade();
//         let expectedResult = `Average grade: 2.00`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if averageGrades works correctly', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         res.leave('Sun', 1, 3)
//         res.leave('Sun', 1, 2)
//         res.leave('Sun', 1, 0.5)
//         let actualResult = res.averageGrade();
//         let expectedResult = `Average grade: 1.83`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if averageGrades no votes yet', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         let actualResult = res.averageGrade();
//         let expectedResult = "No votes yet";

//         assert.equal(actualResult, expectedResult)
//     })
// });

// describe('bestHotel Hotel', function () {

//     it('check if bestHotel works correctly', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         res.leave('Sun', 1, 3)
//         res.leave('Sun', 1, 2)
//         res.leave('Sun', 1, 0.5)
//         res.build("Moon", 10);
//         res.book("Moon", 5);
//         res.leave('Moon', 1, 3)
//         res.leave('Moon', 1, 2)
//         res.leave('Moon', 1, 1)
//         let actualResult = res.bestHotel;
//         let expectedResult = `Best hotel is Moon with grade 6. Available beds: 8`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if bestHotel no votes yet', () =>{
//         let res = new SkiResort("Some");
//         res.build("Sun", 10);
//         res.book("Sun", 5);
//         res.build("Moon", 10);
//         res.book("Moon", 3);
//         let actualResult = res.bestHotel;
//         let expectedResult = "No votes yet";

//         assert.equal(actualResult, expectedResult)
//     })
// });

// let BookStore = require('./js');
// let assert = require('chai').assert;

// describe('ctor', function () {
//     it('check if ctor name works correctly', () => {
//         let res = new BookStore("Some");
//         let actualResult = res.name;
//         let expectedResult = 'Some';

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if ctor books works correctly', () => {
//         let res = new BookStore("Some");
//         let actualResult = res.books;
//         let expectedResult = [];

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if ctor _workers works correctly', () => {
//         let res = new BookStore("Some");
//         let actualResult = res._workers;
//         let expectedResult = [];

//         assert.deepEqual(actualResult, expectedResult)
//     })
// });

// describe('stockBooks', function () {
//     it('check if books.length works correctly', () => {
//         let res = new BookStore("Some");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         let actualResult = res.books.length;
//         let expectedResult = 4;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if books.title works correctly', () => {
//         let res = new BookStore("Some");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         let actualResult = res.books[1].title
//         let expectedResult = 'Harry Potter';

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if books.author works correctly', () => {
//         let res = new BookStore("Some");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         let actualResult = res.books[2].author
//         let expectedResult = 'Hariet Stow';

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if books.author works correctly', () => {
//         let res = new BookStore("Some");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         let actualResult = res.books
//         let expectedResult = [{ author: 'Dan Braun', title: 'Inferno' }, { author: 'J.Rowling', title: 'Harry Potter' }, { author: 'Hariet Stow', title: 'Uncle Toms Cabin' }, { author: 'Upton Sinclear', title: 'The Jungle' }];

//         assert.deepEqual(actualResult, expectedResult)
//     })

// });

// describe('hire', function () {
//     it('check if books.length works correctly', () => {
//         let res = new BookStore("Store");
//         let actualResult = res.hire('George', 'seller')
//         let expectedResult = `George started work at Store as seller`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if books.length works correctly', () => {
//         let res = new BookStore("Store");
//         res.hire('George', 'seller');
//         let actualResult = () => res.hire('George', 'builder');
//         let expectedResult = 'This person is our employee';

//         assert.throw(actualResult, expectedResult)
//     })
// })

// describe('fire', function () {
//     it('check if fire works correctly', () => {
//         let res = new BookStore("Store");
//         res.hire('George', 'seller');
//         res.fire('George');
//         let actualResult = res.workers.length;
//         let expectedResult = 0;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if fire works correctly', () => {
//         let res = new BookStore("Store");
//         res.hire('George', 'seller');
        
//         let actualResult = res.fire('George');;
//         let expectedResult = `George is fired`;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if books.length works correctly', () => {
//         let res = new BookStore("Store");
//         res.hire('George', 'seller');
//         let actualResult = () => res.fire('Pesho');
//         let expectedResult = `Pesho doesn't work here`;

//         assert.throw(actualResult, expectedResult)
//     })
// })

// describe('sellBook', function () {
//     it('check if sellBook works correctly', () => {
//         let res = new BookStore("Store");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         res.hire('George', 'seller');
//         res.sellBook('Inferno', 'George');
//         let actualResult = res.books.length;
//         let expectedResult = 3;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if sellBook works correctly', () => {
//         let res = new BookStore("Store");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         res.hire('George', 'seller');
//         res.sellBook('Inferno', 'George');
//         let actualResult = res._workers[0].booksSold;
//         let expectedResult = 1;

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if not Worker with this name', () => {
//         let res = new BookStore("Store");
//         res.hire('George', 'seller');
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         let actualResult = () => res.sellBook('Inferno', 'Pesho');
//         let expectedResult = `Pesho is not working here`;

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if if not book with this name', () => {
//         let res = new BookStore("Store");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         res.hire('George', 'seller');
//         let actualResult = () => res.sellBook('Pesho', 'George');
//         let expectedResult = `This book is out of stock`;

//         assert.throw(actualResult, expectedResult)
//     })
// })

// describe('printWorkers', function () {
//     it('check if printWorkers works correctly', () => {
//         let res = new BookStore("Store");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         res.hire('George', 'seller');
//         res.sellBook('Inferno', 'George');
//         let actualResult = res.printWorkers();
//         let expectedResult = `Name:George Position:seller BooksSold:1`

//         assert.equal(actualResult, expectedResult)
//     })
// })

// describe('printWorkers', function () {
//     it('check if printWorkers works correctly', () => {
//         let res = new BookStore("Store");
//         res.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
//         res.hire('George', 'seller');
//         res.sellBook('Inferno', 'George');
//         let actualResult = res.workers.length;
//         let expectedResult = 1;

//         assert.equal(actualResult, expectedResult)
//     })
// })

// let SoftUniFy = require('./js');
// let assert = require('chai').assert;

// describe('ctor', function () {
//     it('check if ctor works correctly', () => {
//         let res = new SoftUniFy();
//         let actualResult = res.allSongs;
//         let expectedResult = {};

//         assert.deepEqual(actualResult, expectedResult)
//     })
// });

// describe('downloadSong', function () {
//     it('check if downloadSong works correctly', () => {
//         let res = new SoftUniFy();
//         res.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
//         let actualResult = res.allSongs;
//         let expectedResult = { Eminem: {rate: 0, songs: ['Venom - Knock, Knock let the devil in...'], votes: 0}};

//         assert.deepEqual(actualResult, expectedResult)
//     })
//     //TODO Maybe
// });

// describe('playSong', function () {
//     it('check if playSong works correctly', () => {
//         let res = new SoftUniFy();
//         res.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
//         let actualResult = res.playSong('Venom')
//         let expectedResult = `Eminem:\nVenom - Knock, Knock let the devil in...\n`

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if not that song', () => {
//         let res = new SoftUniFy();
//         res.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
        
//         let actualResult = res.playSong('ads')
//         let expectedResult = `You have not downloaded a ads song yet. Use SoftUniFy's function downloadSong() to change that!`

//         assert.deepEqual(actualResult, expectedResult)
//     })
// });

// describe('playSong', function () {
//     it('check if playSong works correctly', () => {
//         let res = new SoftUniFy();
//         res.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
//         let actualResult = res.playSong('Venom')
//         let expectedResult = `Eminem:\nVenom - Knock, Knock let the devil in...\n`

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if not that song', () => {
//         let res = new SoftUniFy();
//         res.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
        
//         let actualResult = res.playSong('ads')
//         let expectedResult = `You have not downloaded a ads song yet. Use SoftUniFy's function downloadSong() to change that!`

//         assert.deepEqual(actualResult, expectedResult)
//     })
// });

// describe('rateArtist', function () {
//     it('check if rateArtist works correctly', () => {
//         let res = new SoftUniFy();
//         res.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
//         res.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...')
//         res.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ')
//         res.playSong('Venom')
//         res.playSong('Phenomenal')
//         res.playSong('Light Me On Fire')
//         let actualResult = res.rateArtist()
//         let expectedResult = `The Venom is not on your artist list.`

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if not that song', () => {
//         let res = new SoftUniFy();
        
//         let actualResult = res.rateArtist()
//         let expectedResult = `The undefined is not on your artist list.`

//         assert.equal(actualResult, expectedResult)
//     })
// });

// let ChristmasMovies = require('./js');
// let assert = require('chai').assert;

// describe('ctor', function () {
//     it('check if ctor works correctly', () => {
//         let res = new ChristmasMovies();
//         let actualResult = res.movieCollection;
//         let expectedResult = [];

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if ctor works correctly', () => {
//         let res = new ChristmasMovies();
//         let actualResult = res.watched;
//         let expectedResult = {};

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if ctor works correctly', () => {
//         let res = new ChristmasMovies();
//         let actualResult = res.actors;
//         let expectedResult = [];

//         assert.deepEqual(actualResult, expectedResult)
//     })
// });

// describe('buyMovie', function () {
//     it('check if buyMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         let actualResult = res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let expectedResult = `You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if buyMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
//         let actualResult = res.movieCollection.length
//         let expectedResult = 1

//         assert.equal(actualResult, expectedResult)
//     })

//     it('check if buyMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let actualResult = () => res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let expectedResult = `You already own Home Alone in your collection!`;

//         assert.throw(actualResult, expectedResult)
//     })

    
// });

// describe('discardMovie', function () {
//     it('check if discardMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         res.watchMovie('Home Alone')
//         let actualResult = res.discardMovie('Home Alone')
//         let expectedResult = `You just threw away Home Alone!`

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if discardMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         res.watchMovie('Home Alone')
//         res.discardMovie('Home Alone')
//         let actualResult = res.movieCollection.length
//         let expectedResult = 0

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if discardMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let actualResult = () => res.discardMovie('Home Alone')
//         let expectedResult = `Home Alone is not watched!`

//         assert.throw(actualResult, expectedResult)
//     })

//     it('check if discardMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let actualResult = () => res.discardMovie('action');
//         let expectedResult = `action is not at your collection!`

//         assert.throw(actualResult, expectedResult)
//     })
// });

// describe('watchMovie', function () {
//     it('check if watchMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         res.watchMovie('Home Alone');
//         let actualResult = res.watched['Home Alone']
//         let expectedResult = 1

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if watchMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         res.watchMovie('Home Alone');
//         res.watchMovie('Home Alone');
//         let actualResult = res.watched['Home Alone']
//         let expectedResult = 2

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if watchMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let actualResult = () => res.watchMovie('action');
//         let expectedResult = 'No such movie in your collection!'

//         assert.throw(actualResult, expectedResult)
//     })
// });

// describe('favouriteMovie', function () {
//     it('check if favouriteMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         res.watchMovie('Home Alone');
//         let actualResult = res.favouriteMovie()
//         let expectedResult = `Your favourite movie is Home Alone and you have watched it 1 times!`

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if favouriteMovie works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         let actualResult = () => res.favouriteMovie();
//         let expectedResult = 'You have not watched a movie yet this year!'

//         assert.throw(actualResult, expectedResult)
//     })
// });

// describe('mostStarredActor', function () {
//     it('check if mostStarredActor works correctly', () => {
//         let res = new ChristmasMovies();
//         res.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
//         res.buyMovie('Home Alone 2', ['Macaulay Culkin'])
//         res.watchMovie('Home Alone');
//         res.watchMovie('Home Alone 2');
//         let actualResult = res.mostStarredActor()
//         let expectedResult = `The most starred actor is Macaulay Culkin and starred in 2 movies!`

//         assert.deepEqual(actualResult, expectedResult)
//     })

//     it('check if mostStarredActor works correctly', () => {
//         let res = new ChristmasMovies();
//         let actualResult = () => res.mostStarredActor();
//         let expectedResult = 'You have not watched a movie yet this year!'

//         assert.throw(actualResult, expectedResult)
//     })
// });

let Parser = require('./js');
let assert = require('chai').assert;

describe('ctor', function () {
    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = res._data;
        let expectedResult = JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');

        assert.deepEqual(actualResult, expectedResult)
    })

    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = res._log;
        let expectedResult = [];

        assert.deepEqual(actualResult, expectedResult)
    })

    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = res._addToLog;
        let expectedResult = res._addToLog;

        assert.deepEqual(actualResult, expectedResult)
    })
});

// describe('_addToLogInitial()', function () {
//     it('check if _addToLogInitial() works correctly', () => {
//         let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
//         let actualResult = res._addToLogInitial();
//         let expectedResult = "Added to log"

//         assert.deepEqual(actualResult, expectedResult)
//     })
// });
describe('print()', function () {
    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = res.print();
        let expectedResult = 'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR'

        assert.deepEqual(actualResult, expectedResult)
    })
});

describe('addEntries', function () {
    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = res.addEntries("Steven:tech-support Edd:administrator");
        let expectedResult = 'Entries added!'

        assert.deepEqual(actualResult, expectedResult)
    })
});

describe('removeEntry', function () {
    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = res.removeEntry("Kate");
        let expectedResult = 'Removed correctly!'

        assert.deepEqual(actualResult, expectedResult)
    })

    it('check if ctor works correctly', () => {
        let res = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
        let actualResult = () => res.removeEntry("asd");
        let expectedResult = "There is no such entry!"

        assert.throw(actualResult, expectedResult)
    })
});
