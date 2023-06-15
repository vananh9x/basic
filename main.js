const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/thumbnail-1.webp") {
    myImage.setAttribute("src", "thumbnail-2.webp");
  } else {
    myImage.setAttribute("src", "images/thumbnail-1.webp");
  }
};
