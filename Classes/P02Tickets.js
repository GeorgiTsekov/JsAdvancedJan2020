function solve(arrayOfTickets = [], str =''){
    let tickets = [];

    arrayOfTickets.forEach(ticketData => {
        let ticketArgs = ticketData.split('|');

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
        let ticket = new Ticket(ticketArgs[0], Number(ticketArgs[1]), ticketArgs[2]);
        
        tickets.push(ticket)
    });

    if (str === 'price') {
        let sortedTickets = tickets.sort((a, b) => a[str] - (b[str]));
        return sortedTickets;
    } else {
        let sortedTickets = tickets.sort((a, b) => a[str].localeCompare(b[str]));
        return sortedTickets;
    }
    
    return sortedTickets;
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')