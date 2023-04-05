let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");
let predictGender = () => {
  let name = document.getElementById("name").value;
  let error = document.getElementById("error");
  let finalURL = url + name;
  console.log(name);
  console.log(finalURL);
  wrapper.innerHTML = "";

  if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
    fetch(finalURL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let copyName = document.getElementById("dataName");
        copyName.innerHTML = data.name;

        let gender = document.getElementById("dataGender");
        gender.innerHTML = data.gender;

        let probability = document.getElementById("probability");
        probability.innerHTML = data.probability;
        let img = document.getElementById("image");

        let container = document.getElementById("container");

        if (data.gender == "female") {
          img.src = "img/pngwing.com(1).png";
          img.style.background = "pink";
          container.style.background = "#AA336A";
        } else {
          img.src = "img/pngwing.com(2).png";
          container.style.background = "#3944BC";
        }
      });
  } else {
    setTimeout(() => {
        alert("Enter a valid name with no spaces");
    }, 500);
    
  }
};

document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);
