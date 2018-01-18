var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var urlFile = 'http://www.sonda.me/file/';
var files = [];
var begin = 77610;
var end = begin + 20;

for (let i = begin; i <= end; i++) {
    request(urlFile + i, function (error, response, html) {
        console.log('Access url of id ' + i);
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            if (response.request.uri.query == 'not_found')
                files.push({ id: i, status: 'not_found' });
            else {
                var file = {};
                file.id = i;
                file.status = true;
                file.name = $(html).find('.file-name').text();
                file.type = $(html).find('.file-type').text();
                file.size = $(html).find('.file-zila').text();
                file.urlDownload = $(html).find('a.download-file').attr('href');
                $('.details ul li').each(function (ix, elem) {
                    switch (ix) {
                        case 0: // exists password
                            file.password = $(this).find('span').text() == 'Sim' ? true : false;
                            break;
                        case 1: // download
                            file.downloads = $(this).find('span').text();
                            break;
                        case 2: // views
                            file.views = $(this).find('span').text();
                            break;
                        case 3: // download date
                            file.dateDownload = $(this).find('span').text();
                            break;
                        case 4: // expiration date
                            file.dateValid = $(this).find('span').text();
                            break;
                        default:
                            break;
                    }
                });
                files.push(file);
            }
        }
        else files.push({ id: i, status: 'error: ' + error });

        // write file
        if (i == end)
            write(files);
    });
}

function write(txt) {
    fs.writeFile('capture.json', JSON.stringify(files, null, 2));
}