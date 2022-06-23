const posts=[
    {title:'Post one',body:'This is post one', },
    { title:'Post two',body:'This is post two'}
 
];

function getPosts(){
    setTimeout(()=>{
        let output = ''
        for(let i=0;i<posts.length;i++){
            output +=`<li>${posts[i].title}</li>`
        }
        document.body.innerHTML = output
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);

            const error = false;
            if (!error){
                resolve()

            }else{
                reject('Error: Something went wrong')
            }
            
        },2000)

    })
    
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.values!=0){
                resolve(posts.pop())
            }else{
                reject('array is empty')
            }
        },1000)
    })
}
//promise.all

const promise1 = Promise.resolve('hello world')
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,'goodbye'));

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

createPost({title:'Post Three',body:'This is post three'})
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts();
    })
})
.catch(err=>console.log(err))
//.then(deletePost)
//.catch(err=>console.log(err));



const user ={
    username:'lalit',
    lastactivitytime: '13 of jun'
}

function updatelastactivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime =  new Date().getTime();
            resolve(user.lastactivitytime)
        },1000)
    })
    
}
console.log(updatelastactivitytime);
function userupdatespost(){
    Promise.all([createPost,updatelastactivitytime])
    .then(([createPostresolves,updatelastactivitytimeresolves])=>{
        console.log(updatelastactivitytimeresolves)
    })
    .catch(err=>console.log(err));
}