// function fetchPokemon(){
//     
//fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(risultato=>risultato.json())
//     .then( 
//         (responseText)=>{
//         responseText.results.forEach((pokemon) => {
//                 fetchData(pokemon);
//             })
//         }
//         )
// }


function visualizeCarachetersDisney(){

    let disenyWorld = fetch('https://api.disneyapi.dev/characters')
    .then( (risultato)=>{
        //  console.log(risultato)
         risultato.json() // .jason e una promise e quindi bisogna fare una then
        .then(  (ResponseText) =>{ 
            // console.log(ResponseText) qui abbiamo il risultato del json() ossia del json.parse
                    let personaggi = ResponseText
                    document.getElementById('container').innerHTML="";
                    for(let personaggio of personaggi.data){
                    let container=document.getElementById('container');
                    container.innerHTML+=
                    `<div class="card">
                    <img src=${personaggio.imageUrl} class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">
                    ${personaggio.name}
                    </h5>
                    <p> ${personaggio.tvShows}</p>
                    </div>
                    </div>`
                   }
                }    
            ).catch(
                (errore)=>{
            console.log("fine della richiesta")
            console.log(errore)
        })

    })
}

    onload=()=>{
        visualizeCarachetersDisney()
        }