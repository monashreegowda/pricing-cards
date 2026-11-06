function changePrice() {
  // 1. Get the toggle switch and the text elements
  var isYearly = document.getElementById("toggleBtn").checked;
  
  var monthlyText = document.getElementById("monthlyText");
  var yearlyText = document.getElementById("yearlyText");

  // 2. Highlight the correct text based on toggle
  if (isYearly == true) {
    monthlyText.classList.remove("active-text");
    yearlyText.classList.add("active-text");
  } else {
    yearlyText.classList.remove("active-text");
    monthlyText.classList.add("active-text");
  }

  // 3. Update Basic Plan prices (Rupees)
  var basicPrice = document.getElementById("basicPrice");
  var basicNote = document.getElementById("basicNote");
  
  if (isYearly == true) {
    basicPrice.innerHTML = "399"; 
    basicNote.innerHTML = "Billed annually (₹4,788/year)";
  } else {
    basicPrice.innerHTML = "499"; 
    basicNote.innerHTML = "Billed monthly";
  }

  // 4. Update Pro Plan prices (Rupees)
  var proPrice = document.getElementById("proPrice");
  var proNote = document.getElementById("proNote");
  
  if (isYearly == true) {
    proPrice.innerHTML = "1199";
    proNote.innerHTML = "Billed annually (₹14,388/year)";
  } else {
    proPrice.innerHTML = "1499";
    proNote.innerHTML = "Billed monthly";
  }

  // 5. Update Enterprise Plan prices (Rupees)
  var entPrice = document.getElementById("entPrice");
  var entNote = document.getElementById("entNote");
  
  if (isYearly == true) {
    entPrice.innerHTML = "3999";
    entNote.innerHTML = "Billed annually (₹47,988/year)";
  } else {
    entPrice.innerHTML = "4999";
    entNote.innerHTML = "Billed monthly";
  }
}