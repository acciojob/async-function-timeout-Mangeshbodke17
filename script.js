let txt=document.querySelector("#text");
let delay=document.querySelector("#delay");
let btn=document.querySelector("#btn");
let op=document.querySelector("#output");



function abc(a){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            op.innerHTML=txt.value;
            resolve("resolved");
     
        }, a);
    })
}



btn.addEventListener("click",async function(){

    let a=Number(delay.value);

     try{

        await abc(a);
        
        
    }
    catch(err){
        console.log(err);
    }


})