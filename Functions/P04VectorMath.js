let solution = (() => {
    let add = (vec1, vec2) => [vec1[0] + vec2[0], vec1[1] + vec2[1]];
    let multiply = (vec1, num) => [vec1[0] * num, vec1[1] * num];
    let length = (vec1) => Math.sqrt(vec1[0] ** 2 + vec1[1] ** 2);
    let dot = (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1];
    let cross = (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0];

    return { add, multiply, length, dot, cross };
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));