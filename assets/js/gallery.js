function generateGallery(folderName) {
  const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];
  const cont = document.getElementById("gallery-container");
  images.forEach(f => {
    const d = document.createElement("div");
    d.className = "col-4";
    d.innerHTML = `
      <a href="gallery/${folderName}/${f}" data-lightbox="${folderName}">
        <span class="image fit"><img src="gallery/${folderName}/${f}" alt="" loading="lazy" /></span>
      </a>`;
    cont.appendChild(d);
  });
}
