import {createElement, render} from "./libreria.js"

const MySection = createElement("section", {
  id: "mySection",
  class: "my-section"
})

render(MySection, document.getElementById("root"))