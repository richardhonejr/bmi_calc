//make sure that the text box can only allow numeric entry
function isNumberKey(evt) {
     var charCode = (evt.which) ? evt.which : evt.keyCode;
     if (charCode != 46 && charCode > 31
          && (charCode < 48 || charCode > 57))
          return false;

     return true;
}

//calculate the bmi when the button is pressed & assign it to the results paragraph
function calcBMI() {
     document.getElementById('imgBMI').class = "img-fluid rounded mx-auto d-block img-thumbnail";
     var weight = document.getElementById('kgWeight').value;
     // console.log(weight);
     var height = document.getElementById('mHeight').value;
     // console.log(height);
     bmi = weight / height ** 2;
     // console.log(bmi);
     document.getElementById("testing").innerHTML = bmi + ' kg/m2';
     
     if (bmi >= 30) {
          document.getElementById("testing").innerHTML = 'Your BMI is ' + bmi + ' kg/m2 ' + ' and your body type is Obese.';
          document.getElementById("testing").style.backgroundColor = '#F36D28';
          document.getElementById("testing").style.color = 'white';
          document.getElementById('imgBMI').src = "./assets/obese.png";
          document.getElementById('imgBMI2').src = "./assets/bmi.png";
     } else if (bmi <= 18.5) {
          document.getElementById("testing").innerHTML = 'Your BMI is ' + bmi + ' kg/m2 ' + ' and your body type is Underweight.';
          document.getElementById("testing").style.backgroundColor = '#59C2AD';
          document.getElementById("testing").style.color = 'white';
          document.getElementById('imgBMI').src = "./assets/underweight.png";
     } else if (bmi <= 24.9) {
          document.getElementById("testing").innerHTML = 'Your BMI is ' + bmi + ' kg/m2 ' + ' and your body type is Normal weight.';
          document.getElementById("testing").style.backgroundColor = '#64BA46';
          document.getElementById("testing").style.color = 'white';
          document.getElementById('imgBMI').src = "./assets/normalweight.png";
     } else if (bmi <30){
          document.getElementById("testing").innerHTML = 'Your BMI is ' + bmi + ' kg/m2 ' + ' and your body type is Overweight.';
          document.getElementById("testing").style.backgroundColor = '#FBAD35';
          document.getElementById("testing").style.color = 'white';
          document.getElementById('imgBMI').src = "./assets/overweight.png";
     } else {
          document.getElementById("testing").innerHTML = 'Your BMI cannot be determined. Please click Reset below.';
     };
};


function resetBMI() {
     document.getElementById('testing').innerHTML = "Results will be displayed here.";
     document.getElementById("testing").style.backgroundColor = '';
     document.getElementById("testing").style.color = 'black';
     document.getElementById('imgBMI').src = "./assets/bmi.png";
     document.getElementById('imgBMI').class = "img-fluid rounded mx-auto d-block img-thumbnail";
     document.getElementById('imgBMI2').src = "";
};

function addImg() {
     var img1 = document.createElement('img1');
            img.src = './assets/bmi.img';
            document.getElementById('body').appendChild(img1);
};