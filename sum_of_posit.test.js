const positiveSum = require('./sum_of_positive');

describe ("Получить сумму положительных чисел в массиве", ()=>{

  const testCases = [
    {
    before: [1,2,3,4,5,-1,-2,-3,-4,0],
    after: 15
    },
    {
      before: [11,20,30,40,50,-11,-12,-3,-54,0],
      after: 151
      }
  ];
testCases.forEach(test=> {
  it (`Входящий массив: ${test.before} полученное число: ${test.after}`,
  ()=> {
    const result = positiveSum(test.before);
    expect(result).toEqual(test.after);
  }
  )
})



}
)
