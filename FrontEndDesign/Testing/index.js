const data = [{
        name: "Renga",
        age: 27
    },
    {
        name: "kesav",
        age: 25
    }, {
        name: "suresh",
        age: 30
    }, {
        name: "dhiva",
        age: 20
    }
];

function sortingAge(){
    const result = data.sort((a, b) => a.age - b.age)
    return result;
}

console.log(sortingAge());

module.exports = sortingAge;