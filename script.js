function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()           
    var h = data.getHours()
    var m = data.getMinutes()
    var s = data.getSeconds()
    msg.innerHTML = `Agora são ${h}:${m}:${s} horas!`
    var timer = setInterval(carregar, 1000)
    if (h >= 0 && h < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#8b94a2'
    } else if (h >= 12 && h <18) {
        img.src = 'tarde.png'
        document.body.style.background = '#d19e43'
    }  else {
        img.src = 'fotonoite.webp'
        document.body.style.background ='#35291f'
    }   
    
}