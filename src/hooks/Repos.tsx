/* async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/arthurlongue/repos"
  );
  const repos = await response.json();
  for (var i = 0; i < 5; i++) {
    console.log(repos[i]);
    console.log(repos[i].html_url);
    console.log(repos[i].homepage);
    console.log(
      `teste de url para img: ${repos[i].html_url}/blob/main/design/desktop-preview.jpg`
    );
  }
} */
