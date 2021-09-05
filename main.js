function carregar(){
        var name=document.getElementById("nome")
        var age=document.getElementById("idade")
        var password=document.getElementById("palavra passe")
        var res1=document.getElementById("res1")
        var res2=document.getElementById("res2") 
        var span = document.getElementsByClassName("close")[0]
        res1.innerHTML ="Ola "+name.value+" sua conta foi criada e guardada"
        if(age.value < 7){
                res2.innerHTML = "Você é menor de idade"
                res1.innerHTML ="null"
        }
        if(age.value > 7){
                res2.innerHTML ="idade aceite"
        }
if(name.value,age.value,password.value == ""){
        res1.innerHTML = "verifique os dados"
        return Bg.html;
}
}
