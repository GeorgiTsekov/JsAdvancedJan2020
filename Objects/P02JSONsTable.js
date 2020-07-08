// function htmlTable(data) {
//     let parsedData = data.map(x => JSON.parse(x))

//     let createTable = content => `<table>\n${content}</table>`;
//     let createTableRow = content => `\t<tr>\n${content}	</tr>\n`;
//     let createTableData = content => `\t\t<td>${content}</td>\n`;

//     let result = parsedData.reduce((accRows, row) => {
//         let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
//             return tdAcc + createTableData(td)
//         }, '');

//         return accRows + createTableRow(tdForPerson);
//     }, '')

//     return createTable(result);
// }

function htmlTable(json){
    let arr = json.map(x => JSON.parse(x))

    let createTable = content => `<table>\n${content}</table>`;
    let createTableRow = content => `\t<tr>\n${content}\t</tr>\n`;
    let createTableData = content => `\t\t<td>${content}</td>\n`;
    
    let result = '';

    arr.forEach(element => {
        result += createTableRow(Object.values(element).reduce((tdAcc, td) => {
            return tdAcc + createTableData(td)
        }, ''))
    });

    return createTable(result);
}

console.log(htmlTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));