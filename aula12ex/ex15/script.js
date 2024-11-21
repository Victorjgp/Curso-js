function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
            }else if(idade < 21){
                // Jovem
            }else if(idade < 50){
                //Adulto
            }else{
                // Idoso
            }
        } else if(fsex.checked[1]) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
            }else if(idade < 21){
                // Jovem
            }else if(idade < 50){
                //Adulto
            }else{
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}