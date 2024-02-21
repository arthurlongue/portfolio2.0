import { useEffect, useState } from "react";

type Repository = {
  name: string;
  html_url: string;
};

export default function ImgFetch() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const user = "arthurlongue";

  useEffect(() => {
    const fetchImageFromRepo = async (
      repoName: string
    ): Promise<string | null> => {
      const url = `https://raw.githubusercontent.com/${user}/${repoName}/main/design/desktop-preview.jpg`;
      const response = await fetch(url);
      if (response.ok) {
        /* console.log(url, response.status); */
        return url;
      }
      return null;
    };

    const fetchReposAndImages = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      if (response.ok) {
        const repos: Repository[] = await response.json();

        const validRepoNames: string[] = [];
        for (const repo of repos) {
          const imageUrl = await fetchImageFromRepo(repo.name);
          if (imageUrl) {
            validRepoNames.push(repo.name);
          }
        }

        const validRepos = repos.filter((repo) =>
          validRepoNames.includes(repo.name)
        );

        setRepositories(validRepos);

        const images: string[] = [];
        for (const repo of validRepos) {
          const imageUrl = await fetchImageFromRepo(repo.name);
          if (imageUrl) {
            images.push(imageUrl);
          }
        }
        setImageUrls(images);
      }
    };

    fetchReposAndImages();
  }, []);

  return (
    <>
      {imageUrls.length > 0 ? (
        imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-3xl bg-black opacity-90"
          >
            <p className="pt-2">{`${repositories[index].name}`}</p>
            <img
              src={url}
              alt={`Imagem do Repositório ${index + 1}`}
              className="rounded-3xl"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://arthurlongue.github.io/${repositories[index].name}`}
            >
              <p
                className=" bg-black pt-4 text-2xl
              font-bold text-white"
              >
                Abrir no navegador
              </p>
            </a>

            <a
              href={repositories[index].html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                className="rounded-full bg-black py-2 text-2xl
              font-bold text-white"
              >
                Repositório do GitHub <i className="fa-brands fa-github"></i>
              </p>
            </a>
          </div>
        ))
      ) : (
        <>
          {[...Array(6)].map((_, repetitionIndex) => (
            <div
              key={repetitionIndex}
              className="flex items-center justify-center pt-20"
            >
              <div className="spinner-wave">
                <div className="spinner-wave-dot bg-red-700"></div>
                <div className="spinner-wave-dot bg-red-700"></div>
                <div className="spinner-wave-dot bg-red-700"></div>
                <div className="spinner-wave-dot bg-red-700"></div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
