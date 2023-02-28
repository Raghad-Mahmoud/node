const axios = require("axios");
const path = require("path");
const express = require("express");
let res1,res2,res3;
async function makeRequest() {
  // Configure request
  const endpoints = [
    "https://pokeapi.co/api/v2/pokemon/3",
    "https://pokeapi.co/api/v2/pokemon/33",
    "https://pokeapi.co/api/v2/pokemon/333"
  ];
  res1 = await axios(endpoints[0]);
   res2 = await axios(endpoints[1]);
   res3 = await axios(endpoints[2]);

    
 
}

makeRequest();
  const app = express();
  // EJS
  app.set("view engine","ejs")
  app.set('views',path.join(__dirname,'/pages'))
  app.use( express.static( "public" ) );
  //Routes
  app.get("/", (req, res) => {
    res.render("home", {
      poke: [
        {
          name: res1.data.name,
          order: res1.data.order,
        },
        {
          name: res2.data.name,
          order:res1.data.order,
        },
        {
          name: res3.data.name,
          order: res3.data.order,
        },
      ],
     
    });
  });
  
  app.listen(3000)

  
