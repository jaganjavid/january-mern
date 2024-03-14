


document.getElementById("btn").addEventListener("click", loadData);


function loadData(){
    

    // Create an XHR Object

    const xhr = new XMLHttpRequest();

    // console.log(xhr)


    // OPEN
    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){

       if(this.status === 200){
          document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
       } 

       if(this.status === 404){
        document.getElementById("output").innerHTML = `<h1>Not Found</h1>`;
       }

    }



    xhr.send();


}