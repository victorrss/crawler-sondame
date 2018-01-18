# Web Crawler for Sonda.me
### Tech
* [Node.js] 
    * npm
        * fs
        * request
        * cheerio

### Execution

crawler-sondame requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies
```sh
$ git clone https://github.com/victorrss/crawler-sondame.git
$ cd crawler-sondame
$ npm install
$ node crawler.js
```
[en]
It will generate the file "capture.json" with the information of the files found.
The file "JSONtoCSV.html" is a tool for viewing the extracted data in Excel.

In the file "crawler.js" has a variable with the name "begin" and "end" that determines the range of the crawler.
```sh
(...)
var begin = 77610; // initiates iteration in file id 77610.
var end = begin + 10; // search within 10 files.
(...)
```
[pt-br]
Irá gerar o arquivo "capture.json" com as informações dos arquivos encontrados.
O arquivo "JSONtoCSV.html" é uma ferramenta para visualizar os dados extraídos no Excel.

No arquivo "crawler.js" tem uma variavel com o nome "begin" e "end" que determina o range do crawler.
```sh
(...)
var begin = 77610; // inicia a iteração no id de arquivo 7641
var end = begin + 10; // busca no intervalo de 10 arquivos.
(...)
```
### Example file "capture.json"
```sh
[
  {
    "id": 77612,
    "status": true,
    "name": "Windows 7.rar",
    "type": "application/octet-stream",
    "size": "3.7 GB",
    "urlDownload": "http://www.sonda.me/download/77612",
    "password": false,
    "downloads": "0",
    "views": "30",
    "dateDownload": "17/01/2018",
    "dateValid": "24/01/2018"
  },
  {
    "id": 77615,
    "status": "not_found"
  }
]
  ```