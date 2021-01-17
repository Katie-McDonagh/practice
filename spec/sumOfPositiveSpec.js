describe("sumOfPositive", function(){
  it ("returns the sum of positive numbers when given an array of positive integers", function(){
    expect(sumOfPositive([1,1])).toEqual(2);
  });

  it ("ignores the negative numbers", function(){
    expect(sumOfPositive([1, -1, 1])).toEqual(2);
  });

  it ("returns 0 when given all negative integers", function(){
    expect(sumOfPositive([-1, -1])).toEqual(0);
  });

  it ("returns 0 when given an empty array", function(){
    expect(sumOfPositive([])).toEqual(0);
  });
});