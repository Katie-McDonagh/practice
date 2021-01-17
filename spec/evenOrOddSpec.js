describe("evenOrOdd", function(){

  it ("should return 'even' when given an even number", function(){
    expect(evenOrOdd(2)).toEqual('even');
  });

  it ("should return 'odd' when given an odd number", function(){
    expect(evenOrOdd(1)).toEqual('odd');
  })
});