function clockStart()
{
    let date=new Date()
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(hours>12)
    {
    hours=hours - 12; //conversion of railway time to watch time
    let am=document.getElementById("am");
    am.innerHTML="PM";
    }
    else
    {
    let am=document.getElementById("am");
    am.innerText="AM";
    }
    if(hours > 10)
    {
        let a=document.getElementById("writing");
        a.innerText="CLOSE YOUR EYES AND SLEEP!!!";
        let b=document.getElementById("leftbox");
        b.innerText="GOOD NIGHT !! SLEEP!!";
        b.style.fontSize="40px";
        b.style.color="white";
        b.style.fontFamily="italic";
        b.style.position="fixed";
        
    }
    if(hours > 3)
    {
        let a=document.getElementById("writing");
        a.innerText="Get Some Tea Good Evening!!!";
        let b=document.getElementById("leftbox");
        b.innerText="Good Evening!!!";
        b.style.fontSize="40px";
        b.style.color="white";
        b.style.fontFamily="italic";
        b.style.position="fixed";
        
    }
    if(hours == 12)
    {
        let a=document.getElementById("writing");
        a.innerText="Have Healthy Food!!!";
        let b=document.getElementById("leftbox");
        b.innerText="Good Afternoon!!!";
        b.style.fontSize="40px";
        b.style.color="white";
        b.style.fontFamily="italic";
        b.style.position="fixed";
        
    }
    let hrs=document.getElementById("hrss");
    hrs.innerText=hours;
    let ms=document.getElementById("minss");
    ms.innerText=minutes;
    let ses=document.getElementById("secss");
    ses.innerText=seconds;
}
setInterval(()=>
{
 clockStart()
},1000);
function executE()
{
    // let taken=document.getElementById("basetable");
    // taken.style.h5="Wake Up Time:10AM - 11AM";
    let temp=document.getElementById("firstdropdown");
    // console.log("Wake Up Time",temp.value);
    let wake=document.getElementById("wake");
    wake.innerText="Wake Up Time"+temp.value;
    // let lunc=document.getElementById("lunc");
    // lunc.innerText="Lunch Time "+temp.value;
}