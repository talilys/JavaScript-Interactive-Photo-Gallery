/* Name this external file gallery.js */

function upDate(previewPic) {
    // Log to check if the function is being called
    console.log("upDate function called");
    console.log("Image Source:", previewPic.src);
    console.log("Image Alt:", previewPic.alt);

    // Change the background image and text of the div with id="image"
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Log to check if the function is being called
    console.log("unDo function called");

    // Reset the background image and text of the div with id="image"
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
