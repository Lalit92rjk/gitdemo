//const { reject } = require("async");

console.log('person1: shows tikcet');

console.log('person2: shows ticket');

const premovie =  async()=>{
    const promisewifebringticket = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    })

    const getpopcorn = new Promise((resolve,reject)=> resolve('popcorn'));

    const addbutter = new Promise((resolve,reject)=> resolve('butter'));

    const getColdDrinks =  new Promise((resolve,reject)=>resolve('ColdDrinks'))

    let ticket = await promisewifebringticket;
    
    console.log(`wife: i have ${ticket}`);
    console.log(('husband:we should go in'));
    console.log('wife:no i want popcorn')

    let popcorn  = await getpopcorn;

    console.log(`husband: i have some ${popcorn}`);
    console.log(('husband:we should go in'));
    console.log('wife:no i want butter on my popcorn')

    let butter  = await addbutter

    console.log(`husband: i have some ${butter}`);

    let ColdDrinks = await getColdDrinks

    console.log(`husband : i have some ${ColdDrinks}`)


    return ticket;
}
premovie().then((m) =>console.log(`person3:shows${m}`))
console.log('person4:shows ticket')