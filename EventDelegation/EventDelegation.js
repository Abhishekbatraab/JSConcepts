// document.querySelector('#products').addEventListener("click", (event)=>{
//     console.log(event);
//     if(event.target.tagName === 'LI'){
//         window.location.href = "#" + event.target.id;
//     }
// })

//Creata a modal which closes by clicking in the negative space

const modalContainer = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", function(){
    toggleModal(true);
});

function toggleModal(toggle){
    modalContainer.style.display = toggle?"flex":"none";
    console.log(modalContainer);
}

modalContainer.addEventListener("click", function(event){
    if(event.target.className==='modalContainer')
    toggleModal(false)
    else
    toggleModal(true)
})