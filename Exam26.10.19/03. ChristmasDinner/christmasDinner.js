class ChristmasDinner {
    constructor(budget) {
        if (Number(budget) < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let type = product[0]
        let price = Number(product[1]);

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {

        let recipeName = recipe['recipeName'];
        let productList = recipe['productsList'];

        productList.map(p => {
            if (!this.products.find(x => x === p)) {
                throw new Error('We do not have this product');
            }
        })

        this.dishes.push(recipe)
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(d => d.recipeName === dish)) {
            throw new Error('We do not have this dish')
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = '';
        for (const guestName in this.guests) {
            debugger
            let dish = this.dishes.find(d => d.recipeName === this.guests[guestName])
            
            let counter = 1;
            let arr
            for (const key in dish) {
                if (counter === 2) {
                    arr = dish[key]
                }
                counter++;
            }
            
            result += `${guestName} will eat ${this.guests[guestName]}, which consists of ${arr.join(', ')}\n`
        }

        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

 console.log(dinner.showAttendance());
