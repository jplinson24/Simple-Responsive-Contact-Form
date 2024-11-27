document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const contactMethod = document.querySelectorAll('input[name="contact-method"]');
  const successPrompt = document.getElementById("successPrompt");
  const closeButton = document.getElementById("closeButton");
  let valid = true;

  // Reset Errors
  [name, email, message].forEach((input) => input.classList.remove("error"));

  // Validate Name
  if (name.value.trim() === "") {
    alert("Please enter your name.");
    valid = false;
  }

  // Validate Email with a regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    alert("Please enter a valid email.");
    valid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    alert("Message cannot be empty.");
    valid = false;
  }

  // Validate Contact Method
  let radioSelected = Array.from(contactMethod).some((radio) => radio.checked);
  if (!radioSelected) {
    alert("Please select a preferred contact method.");
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // Prevent form submission if validation fails
    return;
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submission for demonstration
  
    // Show the popup
    const successPopup = document.getElementById("successPopup");
    successPopup.classList.remove("hidden");
  
    // Close the popup on button click
    const closePopup = document.getElementById("closePopup");
    closePopup.addEventListener("click", function () {
      successPopup.classList.add("hidden");
    });
  });
  
});
