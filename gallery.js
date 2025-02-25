/* Name this external file gallery.js */

function upDate(previewPic) {
    // Log the event to check if it's triggering
    console.log("Mouse over detected!");
    console.log("Image source: " + previewPic.src);
    console.log("Alt text: " + previewPic.alt);

    // Get the div with id "image"
    let imageDiv = document.getElementById("image");

    // Update the background image to the preview image's src
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Update the text to the alt text of the image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Log the event to check if it's triggering
    console.log("Mouse out detected!");

    // Get the div with id "image"
    let imageDiv = document.getElementById("image");

    // Reset the background image to the original state
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
