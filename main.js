function startClassification()
{navigator.mediaDevices.getUserMedia({ audio: true});//cÓDIGO PARA ACESSAR O MICROFONE
  classifier=ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/KPEGjW4Kc/model.json',modelReady);
}

function modelReady(){
  classifier.classify(gotResults) 
}

function gotResults(error, results) {
  if (error) { 
    console.error(error)
   
  } else {
console.log(results);
//CRIANDO CORES ALEATORIAS
randomNumbers_r=Math.floor(Math.random()*255)+1
randomNumbers_g=Math.floor(Math.random()*255)+1
randomNumbers_b=Math.floor(Math.random()*255)+1
document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;
document.getElementById("result_confidence").innerHTML='ACURACY - '+ (results[0].label.confidence*100);
//APLICANDO CORES ALEATÓRIAS
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img=document.getElementById("alien1")
img1=document.getElementById("alien2")
img2=document.getElementById("alien3")
img3=document.getElementById("alien4")


    if (results[0].label == "Palmas") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Sino") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Estalos") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}
