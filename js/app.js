if(navigator.serviceWorker)
{
    navigator.serviceWorker.register("/sw.js")
    .then((registerationObj)=>{console.log(registerationObj)})
    .catch((err)=>{console.log(err)});
}