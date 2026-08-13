export function hasPopupShown() {
  return sessionStorage.getItem("popupShown") === "true";
}

export function showPopupNow(setShow) {
  if (hasPopupShown()) return;          // guard against duplicate calls
  sessionStorage.setItem("popupShown", "true");
  setShow(true);
}