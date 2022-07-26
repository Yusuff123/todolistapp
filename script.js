let nameDefault = document.querySelector('.name');
nameDefault.innerHTML = `Merhaba ${localStorage.getItem('name')}`

let accountDefault = document.querySelector('#acc');
accountDefault.innerHTML = `Giriş yapılan hesap: ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`

window.onload = startTime;
function startTime(){
 var today=new Date();

 
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('time').innerHTML=h+":"+m+":"+s;
 t=setTimeout('startTime()',1000);
}

function checkTime(i){
    if (i<10)
    {
    i="0" + i;
    }
    return i;
}

startTime()
checkTime()

let nameFORM = document.querySelector('#nameform');
nameFORM.addEventListener('submit', nameP);

function nameP(event){
    event.preventDefault();
    var usernameee = document.querySelector('#username').value;
    var surnameee = document.querySelector('#surname').value;
    if(usernameee == '' || surnameee == ''){
        alert("Lütfen geçerli bir değer giriniz.")
    }
    else {
         
        let nameİnput = document.querySelector('#username').value;
        localStorage.setItem('name', nameİnput);

        let surnameİnput = document.querySelector('#surname').value;
        localStorage.setItem('surname', surnameİnput)

        let userSurname = document.querySelector('.name');

        userSurname.innerHTML = `Merhaba ${nameİnput}`

        accountDefault = document.querySelector('#acc').innerHTML = `Giriş yapılan hesap: ${localStorage.getItem('name')} ${localStorage.getItem('surname')}`
    }
}

let activityForm = document.querySelector('#activity-form');
activityForm.addEventListener('submit', activP);


function activP(event) {
    event.preventDefault();
    
    let inputİnfo = document.querySelector('#activity').value;
    
    if(inputİnfo == ''){
        alert('Lütfen geçerli bir ifade giriniz.')
    }
    else {
        let liste = document.querySelector('#list')
        var newe = document.createElement('li')
      

        newe.innerHTML = `${inputİnfo}`

        newe.classList.add = 'lielement'

        liste.insertBefore(newe, liste.children[0]);
        
        inputİnfo = ''
        
    }
}


document.querySelector('#list').addEventListener('click', listClick)

function listClick(e){
    document.querySelector(e).classList.toggle("text-decoration-line-through")
    // e.target.innerHTML = `<li class="text-decoration-line-through" >${e.target.innerHTML}</li>`
}


today1 = new Date()
var today1 = today1.getDay()
console.log(today1)
if (today1 == 1){
    document.getElementById('day').innerHTML = `Bugün Pazartesi`
}
if (today1 == 2 ){
    document.getElementById('day').innerHTML = 'Bugün Salı'
}
if (today1 == 3) {
    document.getElementById('day').innerHTML = 'Bugün Çarşamba'
}
if (today1 == 4) {
    document.getElementById('day').innerHTML = 'Bugün Perşembe'
}
if (today1 == 5) {
    document.getElementById('day').innerHTML = 'Bugün Cuma'
}
if (today1 == 6){
    document.getElementById('day').innerHTML = 'Bugün Cumartesi'
}
if(today1 == 7){
    document.getElementById('day').innerHTML = 'Bugün Pazar'
}