const billingFields = document.querySelectorAll(".form .field input[required]");
const creditCardForm = document.querySelector(".credit-card-form");

function checkBillingFields() {
  let allFilled = true;
  billingFields.forEach((field) => {
    if (field.value.trim() === "") {
      allFilled = false;
    }
  });
  return allFilled;
}

billingFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (checkBillingFields()) {
      creditCardForm.style.display = "block";
    } else {
      creditCardForm.style.display = "none";
    }
  });
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCreditCard(cardNumber) {
  const re = new RegExp("^[0-9]{16}$");
  if (!re.test(cardNumber)) {
    return false;
  }
  return luhnCheck(cardNumber);
}

function luhnCheck(cardNumber) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

function validatePhoneNumber(phoneNumber) {
  const re = /[2-9]{1}\d{2}/;
  return re.test(phoneNumber);
}

document.getElementById("email").addEventListener("blur", () => {
  const email = this.value;
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  }
});

document.getElementById("phone").addEventListener("blur", () => {
  const phone = this.value;
  if (!validatePhoneNumber(phone)) {
    alert("Please enter a valid phone number.");
  }
});

document.getElementById("card-number").addEventListener("blur", () => {
  const cardNumber = this.value;
  if (!validateCreditCard(cardNumber)) {
    alert("Please enter a valid card number.");
  }
});

function creditCardFormFilled() {
  const form = document.querySelector(".credit-card-form");
  const input = document.querySelectorAll(".input");

  forEach((input) => {
    if (input[input].required && input[i].value.trim() === "") {
      return false;
    }
  });

  return true;
}

document.getElementById("submitButton").addEventListener("click", () => {
  document.querySelector(".form-div").style.display = "none";
  document.querySelector(".credit-card-form").style.display = "none";
  document.querySelector(".payment-summary").style.display = "block";
  document.getElementById("receipt").style.display = "block";
  document.getElementById("redirect").addEventListener("click", () => {
    window.location.href = "../cart.html";
  });
});
