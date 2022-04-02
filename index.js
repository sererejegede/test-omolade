document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.getElementById("my_love");
  const tableBody = document.querySelector('table tbody');

  if (!formElement) return
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(formElement));
    if (!data || !data.name || !data.date) return

    const tr = `<tr><td>${data.name}</td><td>${data.date}</td><td>${data.color}</td></tr>`;

    tableBody.insertAdjacentHTML('beforeend', tr);

    formElement.reset();
  });
});
