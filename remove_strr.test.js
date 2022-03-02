const repeatStr = require('./repeate_str');

describe ("Повторить строку",
 ()=>{

  test ('Повторить строку',
  ()=>{
expect(repeatStr(5,'Sasha')).toBe('SashaSashaSashaSashaSasha');
expect(repeatStr(2,'#')).toBe('##');
expect(repeatStr(3,'ha ')).toBe('ha ha ha ')
  })
  }


  )



