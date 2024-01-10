import { STORAGE_KEY } from "./config";

export const createDate = function (dateString) {
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

export function safeToLocalStorage(entry) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
}

export function getListFromStorage(setNewEntry) {
  const storageList = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storageList) setNewEntry(storageList);
}
