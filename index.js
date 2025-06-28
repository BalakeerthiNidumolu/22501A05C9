const url=require('url')
const app=require('express')
const validurl=req.params.url;
if(validurl)
{
    res.statusCode(400);
    console.log("requested url is valid and unique");
}
if(unique_url)
{
    console.log("Identified Url is Unique Url");
}
app.get((req,res)=>{
    console.log("Requested user correctly");
})
app.post((req,res)=>{
   res.stausCode(400);
   console.log("request accessed");
})
app.get((req,res)=>{
   res.statusCode(200);
    })