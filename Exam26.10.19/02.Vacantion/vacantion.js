class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (this.budget > Number(budget)) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (this.kids[grade]) {
            if (this.kids[grade].find(x => x.split('-')[0] === name)) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }

            this.kids[grade].push(`${name}-${budget}`);

            return this.kids[grade];
        } else {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);

            return this.kids[grade];
        }
    }

    removeChild(name, grade) {
        if (this.kids[grade] && this.kids[grade].find(x => x.split('-')[0] === name)) {
            let index = this.kids[grade].findIndex(x => x.split('-')[0] === name);
            this.kids[grade].splice(index, 1);
            return this.kids[grade];
        } else {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }

        let result = '';
        
        result += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`

        for (const key in this.kids) {
            result += `\nGrade: ${key}`
            let counter = 1;
            this.kids[key].map(k => {
                result += `\n${counter}. ${k}`
                counter++;
            })
        }
        result += `\n`;

        return result;
    }

    get numberOfChildren() {
        let sum = 0;

        for (const key in this.kids) {
            sum += key.length;
        }

        return sum;
    }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

console.log(vacation.toString())


