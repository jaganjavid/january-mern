

const posts = [
    {title:"Post One", body:"This is a post One"},
    {title:"Post Two", body:"This is a post Two"},
    {title:"Post Three", body:"This is a post Three"}
];


function createPost(post){
 
    return new Promise(function(resolve, reject){


        setTimeout(function(){
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            } else {
                reject("Error: some thing went worng");
            }

        }, 2000)

    })

}

function getPost(){
    setTimeout(function(){
      
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;

    }, 1000);
}


createPost({title:"Post Four", body:"This is a post Four"})
.then(getPost)
.catch(function(err){
    console.log(err);
})