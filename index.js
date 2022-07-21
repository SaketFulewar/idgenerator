let club = $(".input-club");
let email = $(".input-email");
let contactNum = $(".input-number");
let telOffice = $(".input-tel-office");
let telRes = $(".input-tel-res");
let qualification = $(".input-qualification");
let joined = $(".input-joined");
let birthday = $(".input-birthday");
let wife = $(".inputs-spous");
let wifeDob = $(".inputs-wife-dob");
let anniversary = $(".inputs-anni");
let address = $(".inputs-add");


let button = document.querySelector("button");

button.addEventListener('click',()=>{
    let fName = document.querySelector(".fName");
    document.querySelector(".nT").innerText = fName.value;

    let pos = document.querySelector(".pos");
    document.querySelector(".position").innerText = pos.value;

    let club = document.querySelector(".club");
    document.querySelector(".input-club").innerText = club.value;

    let em = document.querySelector(".e-m");
    document.querySelector(".input-email").innerText = em.value;

    let mob = document.querySelector(".mob");
    document.querySelector(".input-number").innerText = mob.value;

    let telOffice = document.querySelector(".tel-off");
    document.querySelector(".input-tel-office").innerText = telOffice.value;

    let telRes = document.querySelector(".tel-res");
    document.querySelector(".input-tel-res").innerText = telRes.value;

    let classification = document.querySelector(".class");
    document.querySelector(".input-qualification").innerText = classification.value;

    let dob = document.querySelector(".dob");
    document.querySelector(".input-birthday").innerText = dob.value;

    let partner = document.querySelector(".partner");
    document.querySelector(".inputs-spous").innerText = partner.value;

    let partnerdob = document.querySelector(".partnerdob");
    document.querySelector(".inputs-wife-dob").innerText = partnerdob.value;

    let ani = document.querySelector(".ani");
    document.querySelector(".inputs-anni").innerText = ani.value;
    
    let add = document.querySelector(".add");
    document.querySelector(".inputs-add").innerText = add.value;
})

// $("button").click(function(e){
//     window.open("result.html")
// })
