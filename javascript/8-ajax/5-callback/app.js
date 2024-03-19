

const posts = [
    {title:"post 1", body:"This is post one"},
    {title:"post 2", body:"This is post two"},
];


// SYNC

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000);
// }


// function getPosts(){
//     setTimeout(function(){
//         let output = "";

//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })

//         document.body.innerHTML = output;

//     }, 1000);
// }


// createPost({title:"post 3", body:"This is post three"});
// getPosts();

// Async


function createPost(post, callback, end){
    setTimeout(function(){
        posts.push(post);
        callback();
        end();
        console.log(1);
    }, 2000);
};

function getPosts(){
    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;

        console.log(2)

    }, 1000);
};

function end(){
    console.log(3);
}

createPost({title:"post 3", body:"This is post three"},getPosts, end);



