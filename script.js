async function generateQuotes() {
  const result = document.getElementById("result");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const screenshoot = document.getElementById("screenshoot");

  const url = "https://api.quotable.io/random";
  const response = await fetch(url);
  const api = await response.json();

  quote.textContent = api.content;
  author.textContent = api.author;

  author.style.display = "block";

  let count = 0;

  screenshoot.addEventListener("click", () => {
    count++ && location.reload();
    html2canvas(result).then((callback) => {
      screenshoot.setAttribute("href", callback.toDataURL("image/png"));
      screenshoot.textContent = "Download";
    });
  });
}
