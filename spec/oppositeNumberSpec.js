describe("oppositeNumber", function(){
  it ("returns a negative number when given a positive one", function(){
    expect(oppositeNumber(1)).toEqual(-1);
  });

  it ("returns a positive number when given a negative one", function(){
    expect(oppositeNumber(-1)).toEqual(1);
  });
});