
import { imageSlider } from "./Data/imageSlider.js"
import { coursedataData } from "./Data/coursedata.js"
let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_searchEl = document.querySelector(".recent_search")
let recentArray = ["DSA"]
form_search.addEventListener("submit", (e) => {
  e.preventDefault()
  recentArray.unshift(input_search.value)
  console.log(recentArray)
  renderRecent()
})

function renderRecent() {
  let recent_search_html = ''
  recentArray.forEach(el => {
    recent_search_html += `
        <div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>
        `
  })
  recent_searchEl.innerHTML = recent_search_html;
}
renderRecent()

/*************image slider*************/
let imageSliderListEl = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''
// console.log(imageSlider)


imageSlider.forEach(el => {
  imageSliderListHTML += `
    <div class="imageSliderItem">
    <img src="${el.img}" />
        <a href="${el.link}">
        </a>
    </div>
    `
})
imageSliderListEl.innerHTML = imageSliderListHTML;

// let imageSliderListElAll = document.querySelectorAll(".imageSliderList")
let prev_imgBtnEl = document.getElementById("prev_imgBtn")
let next_imgBtnEl = document.getElementById("next_imgBtn")
let start = 0;
let end = -400;

prev_imgBtnEl.addEventListener("click", handlePrevImg)
next_imgBtnEl.addEventListener("click", handleNextImg)

function handlePrevImg() {
  let imageallList = document.querySelectorAll(".imageSliderItem")
  console.log(imageallList)
  if (start < 0)
    start += 100
  imageallList.forEach(el => {
    el.style.transform = `translateX(${start}%)`
  })
}

function handleNextImg() {
  let imageallList = document.querySelectorAll(".imageSliderItem")
  console.log(imageallList)
  if (start > end)
    start -= 100
  imageallList.forEach(el => {
    el.style.transform = `translateX(${start}%)`
  })

}

function renderimageSlider() {
  if (start > end) {
    handleNextImg()
  }
  else {
    start = 100
  }
}
setInterval(renderimageSlider, 3000)

/********************coursedata_item**********************/
let coursedata_product_itemEl = document.querySelector(".coursedata_product_item")
let coursedata_product_item_html = ""



console.log(coursedataData)
coursedataData.forEach(el => {
  coursedata_product_item_html += `
  <div class="coursedata_buy">
            <div class="coursedata_image_Product">
              <img
                src="${el.img}"
              />
            </div>
            <div class="coursedata_moreOpt">
              <p class="coursedata_name">${el.name}</p>
              <p class="coursedata_price>${el.price}</p>
              <p class="coursedata_tutor">${el.tutor}</p>
            </div>
            
          </div>
  `
})

coursedata_product_itemEl.innerHTML = coursedata_product_item_html