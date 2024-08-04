const picture_container = document.getElementById("picture-container");
const loader = document.getElementById("loader");

const count = 10;
const apiKey = "you_API_unsplash";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let image_array = [];

get_images();

async function get_images() {
  loader.classList.add("active"); 
  try {
    const response = await fetch(apiURL);
    image_array = await response.json();
    await display_images();
  } catch (err) {
    console.error(err);
  } finally {
    loader.classList.remove("active"); 
  }
}

async function display_images() {
  image_array.forEach((image) => {
    const link = document.createElement("a");
    set_attributes(link, { href: image.urls.regular, target: "_blank" });

    const img = document.createElement("img");
    set_attributes(img, {
      src: image.urls.regular,
      alt: image.alt_description, 
    });

    link.appendChild(img);
    picture_container.appendChild(link);
  });
}

function set_attributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
