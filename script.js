let id = document.getElementById("id")
let Pin= document.getElementById("Pin")
let fullname = document.getElementById("fullname")
let email = document.getElementById("email")
let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")
let error4 = document.getElementById("error4")
let btn = document.getElementById ("btn")
let form = document.getElementById ("form")
let clean = document.getElementById ("clean")
let tableTbody = document.querySelector("table tbody")
let delet = document.querySelector("btndlt")


btn.addEventListener("click", addItem)

function addItem() {
            if(+id.value && fullname.value && email.value && Pin.value){
                list.push({id: id.value,
                    Pin: Pin.value,
                    fullname: fullname.value,
                    email: email.value,})
                    Pin.value = " "
                    id.value = " "
                    fullname.value = " "
                    email.value = " "
                  
                        add()
            }
         else if(!id.value && fullname.value && email.value && Pin.value){
           id.classList.add("alert" , "alert-danger")
           error1.innerHTML = "1-ci Xanani doldurun!"
         }else if(id.value && !fullname.value && email.value && Pin.value){
            fullname.classList.add("alert","alert-danger")
            error3.innerHTML = "3-cu Xanani doldurun!"
         }else if(id.value && fullname.value && !email.value && Pin.value){
            email.classList.add("alert","alert-danger")
            error4.innerHTML = " 4-cu Xanani doldurun!"
         }else if(id.value && fullname.value && email.value && !Pin.value){
            Pin.classList.add("alert","alert-danger")
            error2.innerHTML = "2-ci Xanani doldurun!"
         } 
}


let list = [{
    id:1,
    Pin:"7260AA5",
    fullname:"Nərgiz Kişiyeva",
    email:"nargiz19@gmail.com",

}]
function add(){
        tableTbody.innerHTML = ""
        list.forEach(item => {
            tableTbody.innerHTML += `<tr id="table">
            <th scope="row">${item.id}</th>   
                <td>${item.Pin}</td>
                <td>${item.fullname}</td>
                <td>${item.email}</td>
              <td><button type="submit" class="btn btn-primary" id="btndlt" class="button">Delete <i class="fa-solid fa-trash-can" style="color: #dc0404;"></i></button></td>
            </tr>`

            let tr = document.querySelectorAll("tr");
    for (const item of tr) {
      item.addEventListener("click", () => {
        tableTbody.lastElementChild.remove();
      });
    }
         })
    
    
}



clean.addEventListener("click" ,clickClean)
function clickClean(){
    Pin.value = " "
    id.value = " "
    fullname.value = " "
    email.value = " "
}

add() 

