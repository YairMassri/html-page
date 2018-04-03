var signin = document.querySelector(`.boxright button`)
//console.log(signin)
signin.addEventListener("click",function(){
    //confirm.log("click")
    var form = document.querySelector(`boxright form`)
    form.addEventListener(`submit`, function(event){
        event.preventDefault()
    })
})