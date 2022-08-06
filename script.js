function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique o ano digitado')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebeH.png')
            }else if(idade <= 25){
                //Jovem
                img.setAttribute('src', 'imagens/jovemH.png')
            }else if(idade <=50){
                //Adulto
                img.setAttribute('src', 'imagens/adultoH.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/vovoH.png')
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebeM.png')
            }else if(idade <= 25){
                //Jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            }else if(idade <=50){
                //Adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            }else{
                //Idoso                
                img.setAttribute('src', 'imagens/vovoM.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}