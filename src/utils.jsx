export const createDate = function (dateString) {
  // const currentDate = new Date();
  const currentDate = new Date(dateString);

  const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  const day = formatNumber(currentDate.getDate(), 2);
  const month = formatNumber(currentDate.getMonth() + 1, 2);
  const year = currentDate.getFullYear();
  const hour = formatNumber(currentDate.getHours(), 2);
  const minutes = formatNumber(currentDate.getMinutes(), 2);

  const weekday = days[currentDate.getDay()];

  function formatNumber(number, position) {
    return number.toString().padStart(position, "0");
  }
  return `${weekday}: ${day}.${month}.${year} - ${hour}:${minutes}`;
};

function displayAlert(text) {
  alert.innerHTML =
    text === "title"
      ? "Gib einen gültigen Titel ein!"
      : "Gib eine gültige Notiz ein!";

  alert.style.opacity = "1";
  setTimeout(() => {
    alert.style.opacity = "0";
  }, 2500);
}
