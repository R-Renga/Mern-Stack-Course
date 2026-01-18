const users = [
    { name: "Renga", age: 27 },
    { name: "Kesav", age: 25 },
    { name: "Suresh", age: 30 },
    { name: "Dhiva", age: 20 }
];


function filterUsersByAge(users, minAge) {
    return users.filter(users => users.age >= minAge)
}


function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}


function getFilteredAndSortedUsers(users, minAge) {
    const filteredUsers = filterUsersByAge(users, minAge);
    return sortUsersByAge(filteredUsers);
}

module.exports = { filterUsersByAge, sortUsersByAge, getFilteredAndSortedUsers };
