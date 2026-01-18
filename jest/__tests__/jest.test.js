function add(a,b){
    return a +b;
}


describe("addfunction",()=>{
    test('should add positive numbers',()=>{
        expect(add(2,3)).toBe(5)
    })
})