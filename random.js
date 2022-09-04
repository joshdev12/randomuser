// let result = "";
let icons = document.getElementById("icons")
var details = "";

fetch('https://randomuser.me/api/?results=20')
.then((response) => response.json())
.then((data) =>{
    console.log(data)
    for (let i =0; i < data.results.length; i++){
        details += 
        `<div class="info-content col-12 col-sm-12 col-md-6 col-xl-3">                   
            <div  style="width: 150px; height: 150px;">
            <img class="border rounded-circle" src="${data.results[i].picture.large}" alt="">      
            </div>
            <div class="mx-3">     
                <p> Name: ${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</p>
                <p> Gender: ${data.results[i].gender}</p>
                <p>Email: ${data.results[i].email}</p>
                <p>Age: ${data.results[i].dob.age}</p>
                <p>Address: ${data.results[i].location.street.number} ${data.results[i].location.street.name} </p> 
                <p>Contact: ${data.results[i].phone}</p>              
            </div>            
        
      
    </div>` 
          
    }   

 document.getElementById("icons").innerHTML = details;
}

)
