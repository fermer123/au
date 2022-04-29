const fs = require('fs');

export var arr = fs.writeFile('sq.json', 'Hello asd мир!', function (error) {
  if (error) throw error; // если возникла ошибка
  console.log('Асинхронная запись файла завершена. Содержимое файла:');
  let data = fs.readFileSync('sq.json', 'utf8');
  console.log(data); // выводим считанные данные
});
