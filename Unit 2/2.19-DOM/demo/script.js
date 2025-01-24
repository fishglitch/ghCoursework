console.dir(document)

const username = "Jess"
const age = 7

const paragraph = document.querySelector("p")

if(username){
    paragraph.textContent = "Hello " + username;
}else{
    paragraph.textContent = "Hello Guest";
}

document.body.bgColor = "gray"
if(age < 18){
    const kidsMessage = document.createElement("h1");
    kidsMessage.textContent = "Go to bed!!"
    document.body.appendChild(kidsMessage)
}
