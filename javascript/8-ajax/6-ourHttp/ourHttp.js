
function OurHttp(){
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET REQUEST

OurHttp.prototype.get = function(url, callback){
   
    this.http.open("GET", url, true);

    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
             callback(self.http.responseText);
        }else {
            callback(self.http.status);
        }
    }

    this.http.send();
    
}


