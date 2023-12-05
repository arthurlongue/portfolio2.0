import { useEffect, useState } from "react";

type Repository = {
  name: string;
};

export default function ImgFetch() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const user = "arthurlongue";

  useEffect(() => {
    const fetchImageFromRepo = async (
      repoName: string
    ): Promise<string | null> => {
      const paths = ["design/desktop-preview.jpg", "preview.png"];
      for (const path of paths) {
        const url = `https://raw.githubusercontent.com/${user}/${repoName}/main/${path}`;
        try {
          const response = await fetch(url);
          if (response.ok) {
            // Verifica se a resposta é OK (status 200-299)
            return url; // Retorna a URL da imagem encontrada
          }
        } catch (error) {
          console.error(
            "Erro ao buscar a imagem no repositório",
            repoName,
            ":",
            error
          );
        }
      }
      return null; // Retorna null se nenhuma imagem for encontrada
    };

    // Função para buscar repositórios do usuário e suas imagens
    const fetchReposAndImages = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${user}/repos`
        );
        const repos: Repository[] = await response.json();
        const imageFetchPromises: Promise<string | null>[] = repos.map(
          async (repo) => {
            const imageUrl = await fetchImageFromRepo(repo.name);
            return imageUrl; // Pode retornar null ou a URL da imagem
          }
        );

        // Resolve todas as promessas de busca de imagem
        const images = await Promise.all(imageFetchPromises);
        // Filtra quaisquer valores nulos que possam ter vindo de repositórios sem as imagens especificadas
        setImageUrls(images.filter((url): url is string => url !== null));
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchReposAndImages();
  }, []); // useEffect sem dependências, roda apenas uma vez

  return (
    <>
      {imageUrls.length > 0 ? (
        imageUrls.map((url, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              key={index}
              src={url}
              alt={`Imagem do Repositório ${index + 1}`}
              className="min-h-full w-full rounded-3xl"
            />
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
