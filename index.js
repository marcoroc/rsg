const pescato=2;
const next=document.getElementById("next");
const b2=document.getElementById("b2");
let lista=[];
//questi non servono
//const sLeft1=document.getElementById("sLeft1"); //testo degli studenti rimandenti
//const s1=document.getElementById("s1");     //testo del numero usciti

next.addEventListener("click",function(){
    if (lista.length==0){
        document.getElementById("s1").innerHTML="NO MORE";
        console.log("la lista è vuota")
    } else{

    
    console.log(" la lista ha lunghezza: "+lista.length+" ed è composta dall'array: "+lista);
    let random=Math.floor(Math.random()*lista.length);
    
    console.log("l'elemento in posizione "+ random);
    let listElem=lista[random];
    console.log("l'elemento uscito è:" +listElem);
    lista.splice(random,1);
    console.log(lista);
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML=listElem;
}
})
b2.addEventListener("click",function(){
    lista=["1","2"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"
})
// nota che capisce che fai riferimento al pulsante definito in HTML, anche senza averlo inserito come variabile in index.js :O
b3.addEventListener("click",function(){
    lista=["1","2","3"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b4.addEventListener("click",function(){
    lista=["1","2","3","4"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b5.addEventListener("click",function(){
    lista=["1","2","3","4","5"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b6.addEventListener("click",function(){
    lista=["1","2","3","4","5","6"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b7.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b8.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b9.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b10.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b11.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b12.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b13.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b14.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14",]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b15.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})

b16.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})

b17.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b18.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b19.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b20.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b21.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b22.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b23.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b24.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b25.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b26.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b27.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b28.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b29.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b30.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b31.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b32.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b33.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"

})
b34.addEventListener("click",function(){
    lista=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34"]
    document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
    document.getElementById("s1").innerHTML="RANDOM #"
})

customB.addEventListener("click",function(){
    let numero=prompt("Insert a custom number: ")
    
    if(numero>0 && numero<10000){
        lista=[];
        for(let i=1;i<=numero;i++){
            lista.push(i);
        }
        console.log(lista);
        document.getElementById("sLeft1").innerHTML=`STUDENTS LEFT: ${lista.length}`;
        document.getElementById("s1").innerHTML="RANDOM #"       
    }else{
        alert("please insert a positive integer smaller than 10000 ")
    }
    
})