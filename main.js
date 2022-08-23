function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nCcB6eWh2/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('doog') 
    img1 = document.getElementById('catmeow')
    img2 = document.getElementById('leo')
    img3 = document.getElementById('moo')

    if (results[0].label == "barking") {
      img.src = 'barking.gif';
      img1.src = 'catmeow.png';
      img2.src = 'leo.jpeg';
      img3.src = 'moo.png';
    } else if (results[0].label == "meowing") {
      img.src = 'doog.png';
      img1.src = 'Meow.gif';
      img2.src = 'leo.jpeg';
      img3.src = 'moo.png';
    } else if (results[0].label == "roaring") {
      img.src = 'doog.png';
      img1.src = 'catmeow.png';
      img2.src = 'roar.gif';
      img3.src = 'moo.png';
    }else{
      img.src = 'doog.png';
      img1.src = 'catmeow.png';
      img2.src = 'leo.jpeg';
      img3.src = 'moo.gif';
    }
  }
}
