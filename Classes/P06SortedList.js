class List {
    expectedArray = [];

    add(number) {
        if (number >= 0) {
            this.expectedArray.push(number);
            this.expectedArray.sort((a, b) => (a - b));
        }
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            let numb = this.expectedArray[index];
            this.expectedArray.splice(index, 1);
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.expectedArray[index];
        }
    }

    get size() {
        return this.expectedArray.length;
    }
}

let list = new List();
list.add(2);
list.add(1);
list.add(5);
console.log(list.get(1)); 
console.log(list.get(1)); 
console.log(list.get(1)); 
console.log(list.remove(1));
list.remove(1);
list.remove(1);
console.log(list.get(1)); 

console.log(list.get(0));