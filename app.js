const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const MongoClient = require('mongodb').MongoClient
const fileUpload = require('express-fileupload');






app.use(fileUpload());

  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })

MongoClient.connect('mongodb://localhost:27017/region',{connectTimeoutMS: 50000}, (err, database) => {
  if (err) return console.log(err)
  	const dbName = database.db("region");
  regionDB = dbName
console.log(dbName)
})


MongoClient.connect('mongodb://localhost:27017/site',{connectTimeoutMS: 50000}, (err, database) => {
  if (err) return console.log(err)
    const dbName = database.db("site");
  siteDB = dbName
console.log(dbName)
})

MongoClient.connect('mongodb://localhost:27017/refinery',{connectTimeoutMS: 50000}, (err, database) => {
  if (err) return console.log(err)
    const dbName = database.db("refinery");
  refineryDB = dbName
console.log(dbName)
})


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('view.ejs')
})


app.get('/UploadLink', (req, res) => {
  res.render('popup.ejs',{result: "",message:""});
})

app.get('/Analyze', (req, res) => {
   request.get({ url: "http://localhost:8080/runModal"},      function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
console.log(response.statusCode)
                res.setHeader('Content-Type', 'application/json');
                  res.send({results: body}); console.log(body)
                 } 
             }); 
})

app.get('/Region', (req, res) => {

  var regionList =  new Array();
  regionDB.collection('region').find().toArray((err, result) => {
    if (err) return console.log(err)

    res.setHeader('Content-Type', 'application/json');
    res.send({results: result});
            
    console.log(result);
  })

})

app.get('/Site', (req, res) => {
    console.log(req.query.point)
  siteDB.collection('site').find({"Region" : req.query.point}).toArray((err, result) => {
    if (err) return console.log(err)
      res.setHeader('Content-Type', 'application/json');
    console.log(result);
    res.send({results: result});
  })
})


app.get('/Refinery', (req, res) => {
    
     console.log(req.query.point)
  refineryDB.collection('refinery').find({"SiteName" : req.query.point}).toArray((err, result) => {
   
    if (err) return console.log(err)
      res.setHeader('Content-Type', 'application/json');
    res.send({results: result});
  })
})


 
app.post('/upload', function(req, res) {

  let RegionPastFile = req.files.RegionPast;
  let RegionFile = req.files.Region;
 let SitePastFile = req.files.SitePast; 
 let SiteFile = req.files.Site;
 let RefineryPastFile = req.files.RefineryPast; 
 let RefineryFile = req.files.Refinery;
 const isError = 'N'
  // Use the mv() method to place the file somewhere on your server

  if(RegionPastFile != undefined){
  RegionPastFile.mv('C:/Users/aprasoon/Desktop/Abhinav Docs/Firm/AI with Bayesian Networks/Input to Bayesian/regionPast.csv', 
    function(err) {
    if (err)
      isError = 'Y'
    
  });
}



  if(RegionFile != undefined){
  RegionFile.mv('C:/Users/aprasoon/Desktop/Abhinav Docs/Firm/AI with Bayesian Networks/Input to Bayesian/region.csv', 
    function(err) {
    if (err)
      isError = 'Y'
    
  });
}



  
    if(SitePastFile != undefined){
    SitePastFile.mv('C:/Users/aprasoon/Desktop/Abhinav Docs/Firm/AI with Bayesian Networks/Input to Bayesian/sitePast.csv', 
      function(err) {
    if (err)
       isError = 'Y'
  });
  }

      if(SiteFile != undefined){
    SiteFile.mv('C:/Users/aprasoon/Desktop/Abhinav Docs/Firm/AI with Bayesian Networks/Input to Bayesian/site.csv', 
      function(err) {
    if (err)
       isError = 'Y'
  });
  }

      if(RefineryPastFile != undefined){
       RefineryPastFile.mv('C:/Users/aprasoon/Desktop/Abhinav Docs/Firm/AI with Bayesian Networks/Input to Bayesian/oilRefinaryData.csv', 
       function(err) {
    if (err)
     isError = 'Y';
  });
    }

          if(RefineryFile != undefined){
       RefineryFile.mv('C:/Users/aprasoon/Desktop/Abhinav Docs/Firm/AI with Bayesian Networks/Input to Bayesian/actualOilRefinaryPrediction.csv', 
       function(err) {
    if (err)
     isError = 'Y';
  });
    }

    if( isError == 'N')
    res.render('popup.ejs',{result: "success", message: "File has been uploaded successfully."});
else
  res.render('popup.ejs',{result: "failure", message: "Error occured. Try again."});
    
});