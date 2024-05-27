export function renderFooter() {
  let date = new Date().getFullYear();
  return `
      <footer>
        <p id="p-footer"> &copy; ${date} EcoNexa Solutions </p>
      </footer>
    `;
}
