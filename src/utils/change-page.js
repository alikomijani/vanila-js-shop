export function changePage(page) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page());
}
