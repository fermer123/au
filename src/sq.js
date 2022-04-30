const fs = require('fs');

export var arr = fs.writeFile('sq.json', 'Hello asd мир!', function (error) {
  if (error) throw error; // если возникла ошибка
  console.log('Асинхронная запись файла завершена. Содержимое файла:');
  let data = fs.readFileSync('sq.json', 'utf8');
  console.log(data); // выводим считанные данные
});
//npm install file-saver --save
//var FileSaver = require('file-saver');
//var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
//FileSaver.saveAs(blob, "hello world.txt");
