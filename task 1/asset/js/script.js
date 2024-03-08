// Element Toggle Function
const element_toggle_function = function (elem) { elem.classList.toggle("active"); }

// Sidebar Variables
const sidebar = document.querySelector("[data-sidebar]");
const side_bar_btn = document.querySelector("[data-sidebar-btn]");

// Sidebar Toggle Functionality for Mobile
side_bar_btn.addEventListener("click", function () { element_toggle_function(sidebar); });

// Custom Select Variables
const select = document.querySelector("[data-select]");
const select_items = document.querySelectorAll("[data-select-item]");
const select_value = document.querySelector("[data-select-value]");
const filter_btn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () { element_toggle_function(this); });

// Event Adder
for (let i = 0; i < select_items.length; i++) {
  select_items[i].addEventListener("click", function () {
    let selected_value = this.innerText.toLowerCase();
    select_value.innerText = this.innerText;
    element_toggle_function(select);
    filter_func(selected_value);
  });
}

// Filter Variables
const filter_items = document.querySelectorAll("[data-filter-item]");
const filter_func = function (selected_value) {
  for (let i = 0; i < filter_items.length; i++) {
    if (selected_value === "all") {
      filter_items[i].classList.add("active");
    } else if (selected_value === filter_items[i].dataset.category) {
      filter_items[i].classList.add("active");
    } else {
      filter_items[i].classList.remove("active");
    }
  }
}

// Event Adder in all Filter Button Items for Large Screen
let last_clicked_btn = filter_btn[0];
for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener("click", function () {
    let selected_value = this.innerText.toLowerCase();
    select_value.innerText = this.innerText;
    filter_func(selected_value);
    last_clicked_btn.classList.remove("active");
    this.classList.add("active");
    last_clicked_btn = this;
  });
}

// Contact Form Variables
const form = document.querySelector("[data-form]");
const form_inputs = document.querySelectorAll("[data-form-input]");
const form_btn = document.querySelector("[data-form-btn]");

// Event Adder form Input Field
for (let i = 0; i < form_inputs.length; i++) {
  form_inputs[i].addEventListener("input", function () {
    // Check Form Validation
    if (form.checkValidity()) {
      form_btn.removeAttribute("disabled");
    } else {
      form_btn.setAttribute("disabled", "");
    }
  });
}

// Page Navigation Variables
const navigation_links = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Event Adder for Nav Link
for (let i = 0; i < navigation_links.length; i++) {
  navigation_links[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigation_links[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigation_links[i].classList.remove("active");
      }
    }
  });
}

// Contact Form
const successNotification = document.getElementById("successNotification");
function send_email() {
  Email.send({
    SecureToken: "f607134d-204a-43f2-bea5-4535c6d6ea1b",
    To: 'devwork260802@gmail.com',
    From: 'devwork260802@gmail.com',
    Subject: "Enquiry",
    Body: "Name = " + document.getElementById('fullname').value
      + "<br> Email = " + document.getElementById('email').value
      + "<br> Message = " + document.getElementById('message').value
  }).then(() => {
    successNotification.style.display = "block";
    setTimeout(() => {
      successNotification.style.display = "none";
    }, 3000);
  }).catch(error => {
    console.error("Form submission error:", error);
  });
}