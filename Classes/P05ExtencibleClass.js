class Extensible {
    id

    constructor() {
        if (Extensible.prototype.id === undefined) {
            Extensible.prototype.id = 0;
        } else {
            Extensible.prototype.id++;
        }

        this.id = Extensible.prototype.id;
    }

    extend(template){
        Object.entries(template).forEach(([key, value], i) => {
            if (typeof value === 'function') {
                Extensible.prototype[key] = value;
            } else {
                this[key] = value;
            }
        });
    }
}

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

obj1.extend(
    {
        extensionData: 5,
        extensionMethod: function (value) {
            return value + 1;
        }
    })
