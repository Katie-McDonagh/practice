describe("sumOfPositive", function(){
  it ("returns the sum of positive numbers when given an array of positive integers", function(){
    expect(sumOfPositive([1,1])).toEqual(2);
  });

  it ("ignores the negative numbers", function(){
    expect(sumOfPositive([1, -1, 1])).toEqual(2);
  })
})