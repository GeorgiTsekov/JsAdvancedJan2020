
    class VeterinaryClinic {
        constructor(clinicName, capacity) {
            this.clinicName = clinicName;
            this.capacity = capacity;
            this.clients = [];
            this.totalClientBill = 0;
        }

        newCustomer(ownerName, petName, kind, procedures) {
            let client = { ownerName, petName, kind, procedures };
            if (this.clients.length >= this.capacity) {
                throw new Error('Sorry, we are not able to accept more patients!');
            }

            this.clients.find(c => c.ownerName == ownerName)

            if (this.clients.find(c => c.ownerName == ownerName && c.petName == petName) !== undefined) {
                let result = `This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for `;
                let count = 0;
                this.clients[ownerName][procedures].forEach(p => {
                    if (count === 0) {
                        result += p
                    } else {
                        result += `, ${p}`;
                    }
                });
                
                throw new Error(result);
            }
            
            this.clients.push(client);

            return `Welcome ${ petName }!`
        }

        onLeaving (ownerName, petName) {
            if (this.clients.find(c => c.ownerName == ownerName) === undefined) {
                throw new Error('Sorry, there is no such client!');
            }

            if (this.clients.find(c => c.ownerName == ownerName && c.petName == petName) === undefined) {
                throw new Error(`Sorry, there are no procedures for ${ petName }!`);
            }

            this.totalClientBill += 500.00;
            return `Goodbye ${ petName }. Stay safe!`
        }

        toString() {
            
            
        }
    }


let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());
