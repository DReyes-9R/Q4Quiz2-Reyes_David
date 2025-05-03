function calculateAverage() {
  const sci = parseFloat(document.getElementById('science').value);
  const math = parseFloat(document.getElementById('math').value);
  const socialStudies = parseFloat(document.getElementById('socialStudies').value);

  if (isNaN(sci) || isNaN(math) || isNaN(socialStudies)) {
    alert("Please enter all grades.");
    return;
  }

  const avg = (sci + math + socialStudies) / 3;
  let rating = "";

  if (avg >= 94 && avg <= 100) {
    rating = "Excellent";
  } else if (avg >= 87 && avg < 94) {
    rating = "Above Satisfactory";
  } else if (avg >= 80 && avg < 87) {
    rating = "Satisfactory";
  } else if (avg >= 75 && avg < 80) {
    rating = "Needs Improvement";
  } else if (avg >= 70 && avg < 75) {
    rating = "Poor";
  } else {
    rating = "Invalid input.";
  }

  alert(`Your average is ${avg.toFixed(2)} - ${rating}`);
}

function reloadPage() {
  const confirmRefresh = confirm("Are you sure you want to refresh?");
  if (confirmRefresh) {
    // Reset values
    document.getElementById('science').value = "";
    document.getElementById('math').value = "";
    document.getElementById('socialStudies').value = "";
  }
}
