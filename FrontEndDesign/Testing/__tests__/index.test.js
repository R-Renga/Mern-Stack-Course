
const sortingAge = require('../index')

test("testing the sorting function",()=>{
    const sortResult = sortingAge();
    expect(sortResult[0].name).toBe("dhiva");
});

test("testing if the sorting data has length 4",()=>{
    const sortingData = sortingAge();
    expect(sortingData.length).toBe(4)
})


test("testing if the sorting data not to be undefined",()=>{
    const sortingData = sortingAge();
    expect(sortingData).not.toBe(undefined)
})