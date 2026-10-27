document.addEventListener("DOMContentLoaded", function () {
  const locationElement = document.getElementById("page-location");
  const modifiedElement = document.getElementById("last-modified");
  const yearElement = document.getElementById("year");

  if (locationElement) {
    locationElement.textContent = "Page location: " + window.location.href;
  }

  if (modifiedElement) {
    const date = new Date(document.lastModified);
    modifiedElement.textContent = "Last modified: " + date.toLocaleString();
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});