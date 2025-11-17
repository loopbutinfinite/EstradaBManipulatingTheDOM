const pageTitle = document.getElementById("page-title");
const subTitle = document.getElementById("subtitle");
const changeTitleButton = document.getElementById("change-title-button");
const backgroundColorButton = document.getElementById("color-button");
const backgroundWhiteButton = document.getElementById("back-to-white-button");
const changeFontSize = document.getElementById("change-font-size");
const addImageButton = document.getElementById("add-image");
const imageCSSButton = document.getElementById("add-css-to-image");
const changeFontButton = document.getElementById("change-font");
const chagneFontWeight = document.getElementById("change-font-weight");
const changeTextColorButton = document.getElementById("change-text-color");
const italicizeTextButton = document.getElementById("italicize-text");
const boldTextButton = document.getElementById("bold-text");
const underlineText = document.getElementById("underline-text");
const addCardButton = document.getElementById("add-card-button");
const addShadowButton = document.getElementById("add-shadow-button");
const imageContainer = document.getElementById("image-container");

//Button 1: Change Title and Subtitle text
changeTitleButton.addEventListener("click", () => {
    if(pageTitle.innerText === "Let's Play with JavaScript!")
    {
        pageTitle.innerText = "Congrats! You changed the text.";
        subTitle.innerText = "JavaScript is being used, play with the other buttons!";
    } else {
        pageTitle.innerText = "Let's Play with JavaScript!";
        subTitle.innerText = "Click the buttons to alter the page.";
    }
});

//Button 2: Change background color of the page
backgroundColorButton.addEventListener("click", () => {
    document.body.style.background = "#800080";
});

//Button 3: Change background color back to white
backgroundWhiteButton.addEventListener("click", () => {
    document.body.style.background = "#ffffffff";
});

//Button 4: Change the font size button  COME BACK TO THIS TO ADD A REVERT BACK TO NORMAL FONT SIZE
changeFontSize.addEventListener("click", () => {
    if(pageTitle.fontSize === "32px")
    {
        document.body.style.fontSize = "60px";
    }
});

//Button 5: Add an image button
function insertImage(){
    const image = document.createElement("img");
    image.src = "../assets/doxie1.jpg";
    image.alt = "image of skittles";
    imageContainer.appendChild(image);
}
addImageButton.addEventListener("click", () => {
    insertImage();
});

//Button 6: Change the font button
changeFontButton.addEventListener("click", () => {
    document.body.style.fontFamily = "fantasy";
});

//Button 7: Change the color of the text button
changeTextColorButton.addEventListener("click", () => {
    document.body.style.color = "#FF0000";
});

//Button 8: Italicize the text button
italicizeTextButton.addEventListener("click", () => {
    document.body.style.fontStyle = "italic";
});

//Button 9: Bold the text Button 
boldTextButton.addEventListener("click", () => {
    document.body.style.fontWeight = "bold"
});

//Button 10: Underline the text button
underlineText.addEventListener("click", () => {
    document.body.style.textDecoration = "underline"
});

//Button 11: Add Shadow to text button
addShadowButton.addEventListener("click", () => {
    document.body.style.textShadow = "2px 2px 4px #FF00DF"
});

//Button 12: Apply CSS to image button
function applyCSSImage(){
    image.className = "imgResizing";
};
imageCSSButton.addEventListener("click", () => {
    applyCSSImage();
});