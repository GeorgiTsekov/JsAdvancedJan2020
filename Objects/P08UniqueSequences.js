function solve(data) {
    let arrs = data.reduce((a, b) => {
        let arr = JSON.parse(b).sort((x, y) => y - x);        
        a.set(`[${arr.join(', ')}]`, arr.length);
        return a;
    }, new Map());
 
    let sorted = [...arrs].sort((a, b) => a[1] - b[1])
        .map(a => a[0])
        .join("\n");
    console.log(sorted);
}
 
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);