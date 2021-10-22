const linksSocialMedia = {
    github: "ArthurFernande",
    youtube: "channel/UCS5TgN5vKwYrSRTX1k50eSg/about",
    facebook: "arthur.fernandesdeandrade",
    instagram: "ArthurAndrade07",
    twitter: "ArthurAndrade75"
}

/*
pegando elementos do done (done é omapeamento dos objetos do html)com ele consigo interligar 
o java script com o html.
*/
function changeSocialMediaLinks(){
     for(let li of   socialLinks.children){
        const social = li.getAttribute("class")
         
        li.children[0].href =`https://${social}.com/${linksSocialMedia[social]}`

     }
}


changeSocialMediaLinks()

function getGiHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    /*fetch vai na url pegar o que ela vai responder e vou ficar com ela, para eu pegar a resposta
    tenho que usar a promisse( se deu certo pegar a resposta com fetch ele vai entrar no then)
    ai o retorno vai para dentro do then é assim que a promessa(promisse) funciona*/

    fetch(url)
    .then(response => response.json())
    //agora que transformei em json pego de novo ja em json  usando o then
    .then( data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
 
}
/*      arrow functions

1.    function nomefuncao() {

      }
2.    function nomefuncao(argumento1, argumento2) {

      }

é o mesmo que 

1.   () => {

     }
2.   (argumento1,argumento2) => {

     }

     OBS: lembrando que a função usando => é anonima e nao é chamada da mesma maneira da funcao com function.


*/
getGiHubProfileInfos()