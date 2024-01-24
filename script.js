const cpuMatch = document.querySelector(".cpuMatch img");
const selectImages = document.querySelectorAll(".selectImages div");
let userMatch = document.querySelector(".userMatch img");

let CpuImages = [
  "./images/Rock.png",
  "./images/Scisscor.png",
  "./images/paper.png",
];

selectImages.forEach((image, index) => {
  let randomNumber = Math.trunc(Math.random() * 3);
  image.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
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
        RS: "User",
        PP: "Draw",
        PR: "CPU",
        PS: "User",
        SS: "Draw",
        SR: "CPU",
        SP: "User",
      };

      let outComesValue = outcomes[userValue + cpuValue];
      console.log(userValue + cpuValue);

      console.log(outComesValue);
    },
    true
  );
});
