

const http = new OurHttp();

// Get post
http.get("https://jsonplaceholder.typicode.com/users", function(posts){
    console.log(posts);
})