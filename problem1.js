const fs = require('fs');
const path = require('path');
const testFile = "lipsum.txt";
   

const fileCreateDelete = () => {

        fs.mkdir(path.join(__dirname, 'testFile'), (err) => {
            if (err) {  
                return console.error(err);
            }
            console.log('Directory created successfully!');
        });
    
       let count = 1;
       
        const fileCreate = setInterval(() => {
            let fileName = "test"+count+".json";
            fs.writeFile(`testFile/${fileName}`, 'This is my text', function (err) {
                if (err) throw err;
                console.log('New File Created');
              })
              if(count === 6){
                clearInterval(fileCreate);
              }
        }, 2000);
    
        const delFile = setInterval(() => {
            let fileName = "test"+count+".json";
            fs.unlink(`testFile/${fileName}`, function (err) {
                if (err) throw err;
                console.log('file deleted');
              })
              count++;
              if(count === 6){
                clearInterval(delFile);
              }
        }, 4000);
}

fileCreateDelete();