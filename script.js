const cpuMatch = document.querySelector(".cpuMatch img");
const selectImages = document.querySelectorAll(".selectImages div");
let userMatch = document.querySelector(".userMatch img");
let result = document.querySelector(".result");
let CpuImages = [
  "./images/Rock.png",
  "./images/paper.png",
  "./images/Scisscor.png",
];
console.log(selectImages);

selectImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    let randomNumber = Math.trunc(Math.random() * 3);
    image.classList.add("active");
    selectImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    let imgSrc = e.target.src;
    userMatch.src = imgSrc;
    cpuMatch.src = CpuImages[randomNumber];

    let cpuValue = ["R", "P", "S"][randomNumber];
    let userValue = ["R", "P", "S"][index];

    let outcomes = {
      RR: "Draw",
      RP: "CPU",
      RS: "You",
      PP: "Draw",
      PR: "You",
      PS: "CPU",
      SS: "Draw",
      SR: "CPU",
      SP: "You",
    };

    let outComesValue = outcomes[userValue + cpuValue];

    result.innerText =
      cpuValue === userValue
        ? `Match ${outComesValue}....`
        : `${outComesValue} Win.....`;
  });
});
