const opposite = require('./oppozite');

describe (
  'Принимаем число и получаем его отрицательное число',
  () => {
    const testCase = [
      {
      before: -15,
      after: 15
      },
      {
        before: 100,
        after: -100
        },
        {
        before: 14,
        after: -14
        }
      ];
        testCase.forEach(test=> {
          it (`Входящее число: ${test.before} полученное число: ${test.after}`,
          ()=> {
            const res = opposite(test.before);
            expect(res).toBe(test.after);

   
  }
)
})



}
)
