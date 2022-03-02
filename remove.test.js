const removeChar = require('./remove_first_and_last');

describe ("Вернуть строку без первого и последнего символа", ()=>{

  const testCases = [
    {
    before: 'eloquent',
    after: 'loquen'
    },
    {
      before: 'country',
      after: 'ountr'
    },
  
    {
      before: 'Test Suites',
      after: 'est Suite'
    }]

testCases.forEach(test=> {
  it (`Входящая строка: ${test.before} полученная строка: ${test.after}`,
  ()=> {
    const result = removeChar(test.before);
    expect(result).toBe(test.after);
  }
  )
})


})
