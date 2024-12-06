function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to validate Indian phone number
  function validateIndianPhoneNumber(phoneNumber) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  }

  // Form validation logic
  document.getElementById("validationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Error elements
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    // Reset error messages
    emailError.textContent = "";
    phoneError.textContent = "";

    // Validation
    let isValid = true;

    if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (!validateIndianPhoneNumber(phone)) {
      phoneError.textContent = "Please enter a valid 10-digit Indian phone number.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });