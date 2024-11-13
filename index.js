
// console.log("hello")
async function fetcher()
{
    let res = await fetch("data.json")
    let file =   await res.json();

    // console.log(file.apprenants[0].age)
// let ages =  file.apprenants.age

let newage;
let count = 0;

    file.apprenants.forEach(element => {
    

    if(element.age >= 18)
    {
       count++;
       newage = element.age

       }
    });
   let filter = file.apprenants.filter(element => {
        return element.age

   })
    let divtext = document.getElementById("text")

    divtext.innerHTML = ` <div id ="text" class ="text">
        <h1>${newage}</h1>
    </div> `

    
}

fetcher();