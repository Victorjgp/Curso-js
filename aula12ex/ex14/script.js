function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`


    if(hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'manhab.png'
        document.body.style.background = '#ede0c9'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'tardeb.png'
        document.body.style.background = '#af7961'
    } else{
        // BOA NOITE!
        img.src = 'noiteb.png'
        document.body.style.background = '#323f46'
    }
}