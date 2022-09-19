function carregar() {
  var msg = window.document.getElementById("msg")
  var imagem = window.document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  msg.innerHTML = `São ${hora} horas e ${min} minutos. `


  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `São ${hora} horas e ${min} minutos. <strong>Bom Dia!</strong>`
    imagem.src = 'manha.jpg'
    document.body.style.background = '#f4c89e'
  }
  else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `São ${hora} horas e ${min} minutos. <strong> Boa Tarde!</strong>`
    imagem.src = 'tarde.jpg'
    document.body.style.background = '#db8a6c'
  }

  else {
    msg.innerHTML = `São ${hora} horas e ${min} minutos. <strong> Boa Noite!</strong>`
    imagem.src = 'noite.jpg'
    document.body.style.background = '#a19995'
  }

}
