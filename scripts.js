document.getElementById("apply-button").addEventListener("click", function () {
  const businessType = document.getElementById("business-type").value;
  const designStyle = document.getElementById("design-style").value;

  if (businessType === "Select business type" || designStyle === "Select design style") {
    alert("Please select both business type and design style.");
  } else {
    alert(`Business Type: ${businessType}\nDesign Style: ${designStyle}`);
  }
});
