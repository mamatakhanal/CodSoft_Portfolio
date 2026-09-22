// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  } else if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    isValid = false;
  } else if (/\d/.test(name)) {
    nameError.textContent = "Name cannot contain numbers.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Subject validation
  if (subject === "") {
    subjectError.textContent = "Please enter a subject.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  } else if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // Success
  if (isValid) {
    formSuccess.textContent =
      "Thank you! Your message has been submitted successfully.";

    contactForm.reset();
  }
});
