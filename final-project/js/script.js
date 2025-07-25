let switcherLis = document.querySelectorAll(".switcher li");
let cards = Array.from(document.querySelectorAll(".cards .card"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageCart);
});

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
    });
    this.classList.add("active");
}

function manageCart() {
    cards.forEach((card) => {
        card.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}
if (document.querySelector('.owl-carousel')) {
    $(document).ready(function () {
        // document.querySelector('.owl-carousel')
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            },
            navText: ['<div class="d-flex justify-content-center fs-1  ms-5 ps-5"> <i class="fa-solid fa-arrow-left text-primary"></i> <i class="fa-solid fa-arrow-right text-primary"></i></div>']
        });
    });
}
let myForm = document.getElementById('myForm');

let handleError = (element, msg = "") => {
  element.nextElementSibling.innerText = msg;
};

let nameValidation = (element) => {
  let inputValue = element.value.trim();
  inputValue.length < 3
    ? handleError(element, "Enter at least 3 characters")
    : handleError(element);
};

let emailValidation = (element) => {
  let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  !regExp.test(element.value)
    ? handleError(element, "Please enter a valid email")
    : handleError(element);
};

let passwordValidation = (element) => {
  var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  !strongRegex.test(element.value)
    ? handleError(element, "Must contain uppercase, lowercase, number, symbol, and be at least 8 chars")
    : handleError(element);
};

myForm.addEventListener('input', function (e) {
  switch (e.target.id) {
    case "userName":
      nameValidation(e.target);
      break;
    case "userEmail":
      emailValidation(e.target);
      break;
    case "userPassword":
      passwordValidation(e.target);
      break;
  }
});


myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  nameValidation(userName);
  emailValidation(userEmail);
  passwordValidation(userPassword);

  let errors = document.querySelectorAll("small.text-danger");
  let hasError = Array.from(errors).some(s => s.innerText !== "");
  if (!hasError) {
    alert("Form submitted successfully!");
    
  }
});

