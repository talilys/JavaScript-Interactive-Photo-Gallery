function upDate(previewPic) {
    let imageDiv = document.getElementById("image");

    // Debugging: Log event triggers
    console.log("Hover event triggered!");

    // Debugging: Log previewPic properties
    console.log("Image Source:", previewPic.src);
    console.log("Image Alt Text:", previewPic.alt);

    // Update background image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";

    // Update text to image alt
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let imageDiv = document.getElementById("image");

    // Debugging: Log reset event
    console.log("Mouseout event triggered - Resetting image.");

    // Reset background image
    imageDiv.style.backgroundImage = "none";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
