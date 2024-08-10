const modal = document.getElementById("modal");
const container_backlinks = document.getElementById("container-backlinks")

const web_name = document.getElementById("web-name");
const web_url = document.getElementById("web-URL");
const backlink_form = document.getElementById("backlink-add-form");

let backlinks = [];

// * addEventListener
backlink_form.addEventListener("submit", get_form)


// * function
function open_modal(){
  modal.classList.replace("hide-modal", "show-modal")
  modal.classList.remove("close-modal")
  web_name.focus();
}

function close_modal(){
  modal.classList.add("close-modal");

  modal.addEventListener("animationend", () => {
    if (modal.classList.contains("close-modal")) {
      modal.classList.replace("show-modal", "hide-modal");
    }
  }, { once: true }); 

  backlink_form.reset();
}

function get_form(e){
  e.preventDefault();

  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(expression);

  const web_name_value = web_name.value;
  let web_url_value = web_url.value;

  if(!web_name_value.trim() || !web_url_value.trim()){
    alert("lütfen tüm alanları doldurun");
    return;
  }

  if(!web_url_value.match(regex)){
    alert("lütfen geçerli bir URL yazın")
    return;
  }

  if(!web_url_value.includes("https://" || "http://")){
    web_url_value = "http://" + web_url_value;
  }  

  const backlink = {
    name: web_name_value,
    url: web_url_value
  }

  backlinks.push(backlink)

  console.log(backlinks)
  localStorage.setItem("backlinks", JSON.stringify(backlinks))
  fetch_backlinks();

  close_modal();
}

function fetch_backlinks(){
  if(localStorage.getItem("backlinks")){
    backlinks = JSON.parse(localStorage.getItem("backlinks"))
    fill_backlinks();
  }
}

function fill_backlinks(){
  container_backlinks.innerHTML = '';
  backlinks.forEach((backlink, index) => {
    const item = document.createElement("div")

    item.innerHTML = `
      <div class="item">
        <a href="${backlink.url}" target="_blank">${backlink.name}</a>
        <i class="fa fa-times" onclick="remove_backlink(${index})"></i>
      </div>
    `
    container_backlinks.append(item)
  })
}

function remove_backlink(index){
  console.log("silindi", index)
  backlinks.splice(index, 1)
  fill_backlinks();
}

fetch_backlinks();