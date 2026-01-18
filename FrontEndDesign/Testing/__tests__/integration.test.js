const { filterUsersByAge, sortUsersByAge, getFilteredAndSortedUsers } = require('../integration');

describe("Integration Testing - User Filtering and Sorting", () => {
    
    test("should filter users above age 25 and sort them", () => {
        const users = [
            { name: "A", age: 35 },
            { name: "B", age: 20 },
            { name: "C", age: 40 },
            { name: "D", age: 25 }
        ];

        const result = getFilteredAndSortedUsers(users, 25);

        expect(result).toEqual([
            { name: "A", age: 35 },
            { name: "C", age: 40 }
        ]);
    });

    test("should return an empty array if no users match the filter", () => {
        const users = [
            { name: "X", age: 18 },
            { name: "Y", age: 19 },
            { name: "Z", age: 20 }
        ];

        expect(getFilteredAndSortedUsers(users, 25)).toEqual([]);
    });

    test("should return all users if minAge is 0", () => {
        const users = [
            { name: "A", age: 35 },
            { name: "B", age: 20 },
            { name: "C", age: 40 }
        ];

        expect(getFilteredAndSortedUsers(users, 0)).toEqual([
            { name: "B", age: 20 },
            { name: "A", age: 35 },
            { name: "C", age: 40 }
        ]);
    });

});
