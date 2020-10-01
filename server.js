const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let height = Number(request.body.height);
    let weight = Number(request.body.weight);
    height = height/100;
    let result = weight/(height*height);
    
    let kmi = result.toFixed(2);
  /*  console.log(`${weight}/(${height}* ${height})= ${result}`);
    response.send(`${weight}/(${height}* ${height})= ${result}`);*/

    if (result < 16)
                {
                    response.send(`Kehamassiindeks on ${kmi}. Tervisele ohtlik alakaal`);
                }
                else if (result > 16 && result < 18.5)

                {
                    response.send(`Kehamassiindeks on ${kmi}.Alakaal`);
                }
                else if (result > 18.6 && result < 25)
                {
                    response.send(`Kehamassiindeks on ${kmi}.Normaalkaal`);
                }
                else if (result > 25.1 && result < 30)
                {
                    response.send(`Kehamassiindeks on ${kmi}. Ülekaal`);

                }
                else if (result > 30.1 && result < 35)
                {
                    response.send(`Kehamassiindeks on ${kmi}. Rasvumine`);
                }

                else if (result > 35.1 && result < 40)
                {
                    response.send(`Kehamassiindeks on ${kmi}. Tugev rasvumine`);
                }
                else
                {
                    response.send(`Kehamassiindeks on ${kmi}. Tervisele ohtlik rasvumine`);
                }
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});