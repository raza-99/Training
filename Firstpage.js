const arr=[
    {
        
        img:"https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid_16x9.jpg?w=1200",
name:"Spain",
price: 2500,
temp:27,
       
    },
    {
        
        img:"https://clarivate.com/wp-content/uploads/2022/03/news-card-russia-1024x768-1.jpg",
name:"Russia",
price: 3000,
temp:-14,
       
    },
    {
        
        img:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/11/can-i-travel-to-germany-from-the-us.jpeg",
name:"Germany",
price: 2000,
temp:13
       
    }
    , {
        
        img:"https://visitgreenland.com/wp-content/uploads/2017/05/northern-lights-by-mads-pihl-13-1400x933.jpg",
name:"GreenLand",
price: 1000,
temp:23,
       
    }, {
        
        img:"https://ychef.files.bbci.co.uk/976x549/p0blm65q.jpg",
name:"Newzealand",
price: 4000,
temp:33,
       
    }, {
        
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=700&h=500&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
name:"Dubai",
price: 5500,
temp:42
       
    }, {
        
        img:"https://tourscanner.com/blog/wp-content/uploads/2022/01/fun-things-to-do-in-New-York-City-at-night.jpg",
name:"Newyork",
price: 5000,
temp:36
       
    }, {
        
        img:"https://static3.depositphotos.com/1005507/237/i/950/depositphotos_2371302-stock-photo-lake-in-brienz-berne-switzerlan.jpg",
name:"Switzerland",
price: 7000,
temp:-20
       
    }
]

var temparr=[];

const container=document.getElementById('CS');
for(i=0;i<arr.length;i++){
    const card=document.createElement('div');
    card.style="position:relative";

    var xyz=`      
    <a href="Secondpage.html"> <img class="imgc" src="${arr[i].img}">
    <div style="position: absolute; top: 0;bottom: 0;left:0;right: 0;z-index:95;display: flex;justify-content: center;align-items: center;flex-direction: column;">
        <h3 style="color:#FFD700"> ${arr[i].name} </h3>
        <h4 style="color:#FFD700">Temp :${arr[i].temp}C</h4>   
        <h4 style="color:#FFD700">Price: $ ${arr[i].price}</h4>
    </div> </a>`;
    card.innerHTML=xyz;
container.appendChild(card);



    
}

function search(val){
temparr=[];
    for(i=0;i<8;i++){
        if(arr[i].name.toLowerCase().includes(val.toLowerCase())){
            console.log(arr[i]);
            temparr.push(arr[i]);
        }
    }
console.log(temparr);
container.textContent='';
for(i=0;i<temparr.length;i++){
    const card=document.createElement('div');
    card.style="position:relative";

    var xyz=`      
    <a href="Secondpage.html"> <img class="imgc" src="${temparr[i].img}">
    <div style="position: absolute; top: 0;bottom: 0;left:0;right: 0;z-index:95;display: flex;justify-content: center;align-items: center;flex-direction: column;">
        <h3 style="color:#FFD700"> ${temparr[i].name} </h3>
        <h4 style="color:#FFD700">Temp :${temparr[i].temp}C</h4>   
        <h4 style="color:#FFD700">Price: $ ${temparr[i].price}</h4>
    </div> </a>`;
    card.innerHTML=xyz;
container.appendChild(card);
}
}


function Filterbyprice(val){
console.log(val);

temparr=[];
for(i=0;i<8;i++){
  if(arr[i].price>=1000&&arr[i].price<=2000&&val=="1000-2000"){
      temparr.push(arr[i]);
  }else if(arr[i].price>=2001&&arr[i].price<=4000&&val=="2001-4000"){
    temparr.push(arr[i]);
}else if(arr[i].price>=4001&&arr[i].price<=6000&&val=="4000-6000"){
    temparr.push(arr[i]);
}else if(arr[i].price>=6001&&arr[i].price<=8000&&val=="6001-8000"){
    temparr.push(arr[i]);
}
}
console.log(temparr);
if(val=="All"){
    temparr=arr;
}

container.textContent='';
for(i=0;i<temparr.length;i++){
    const card=document.createElement('div');
    card.style="position:relative";

    var xyz=`      
    <a href="Secondpage.html"> <img class="imgc" src="${temparr[i].img}">
    <div style="position: absolute; top: 0;bottom: 0;left:0;right: 0;z-index:95;display: flex;justify-content: center;align-items: center;flex-direction: column;">
        <h3 style="color:#FFD700"> ${temparr[i].name} </h3>
        <h4 style="color:#FFD700">Temp :${temparr[i].temp}C</h4>   
        <h4 style="color:#FFD700">Price: $ ${temparr[i].price}</h4>
    </div> </a>`;
    card.innerHTML=xyz;
container.appendChild(card);
}

}
function FilterbyTemp(val){
    console.log(val);
    temparr=[];
    for(i=0;i<8;i++){
        if(arr[i].temp<0&&val =="below 0"){
            temparr.push(arr[i]);
        }else if(arr[i].temp>0&& arr[i].temp<=10 &&val.trim()=="0-10"){
            temparr.push(arr[i]);
        }else  if(arr[i].temp>10&& arr[i].temp<=20 &&val.trim()=="11-20"){
            temparr.push(arr[i]);
        }else  if(arr[i].temp>20&& arr[i].temp<=30 &&val.trim()=="20-30"){
            temparr.push(arr[i]);}
            else  if(arr[i].temp>30&& arr[i].temp<=40 &&val.trim()=="30-40"){
                temparr.push(arr[i]);}
                else if(arr[i].temp>40 &&val.trim()=="41-50"){
                    temparr.push(arr[i]);}
                
                
    }

    container.textContent='';
    if(val=="All"){
        temparr=arr;
    }
for(i=0;i<temparr.length;i++){
    const card=document.createElement('div');
    card.style="position:relative";

    var xyz=`      
    <a href="Secondpage.html"> <img class="imgc" src="${temparr[i].img}">
    <div style="position: absolute; top: 0;bottom: 0;left:0;right: 0;z-index:95;display: flex;justify-content: center;align-items: center;flex-direction: column;">
        <h3 style="color:#FFD700"> ${temparr[i].name} </h3>
        <h4 style="color:#FFD700">Temp :${temparr[i].temp}C</h4>   
        <h4 style="color:#FFD700">Price: $ ${temparr[i].price}</h4>
    </div> </a>`;
    card.innerHTML=xyz;
container.appendChild(card);

}
       

}

