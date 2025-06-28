const url=require('url')
const app=require('express')
if(url)
{
    const unique_url=1;
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
 
    })