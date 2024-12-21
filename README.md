# Podcast Manager

## Descrição
Podcast Manager é uma aplicação inspirada no estilo Netflix, que centraliza diferentes episódios de podcasts em vídeo, organizados por categorias. Ideal para quem deseja navegar e consumir conteúdos de forma estruturada e intuitiva.

## Domínio
- Podcasts em vídeo.

## Funcionalidades
- **Listar episódios de podcasts por categorias**: Exibe episódios divididos em sessões baseadas em categorias, como saúde, bodybuilder, esporte, corrida.
- **Filtrar episódios por nome do podcast**: Permite buscar episódios específicos pelo nome do podcast.

## Como funciona
### Listar episódios por categorias
Método: `GET`

**Descrição:** Retorna uma lista de episódios organizados por categorias.

**Exemplo de Resposta:**
```json
[
    {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "Flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]
```

### Filtrar episódios pelo nome do podcast
Método: `GET`

**Descrição:** Retorna uma lista de episódios baseada em um parâmetro enviado pelo cliente com o nome do podcast.

## Estrutura do Projeto
### Arquivos principais:
- **`app.ts`**
  ```typescript
  import * as http from 'http';
  import { getListEpisodes, getFilterEpisodes } from './controllers/podcasts-controller';
  import { Routes } from './routes/routes';
  import { HttpMethod } from './utils/http-method';

  export const app = async (
      request: http.IncomingMessage,
      response: http.ServerResponse
  ) => {
      const baseUrl = request.url?.split("?")[0];

      if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {  
          await getListEpisodes(request, response);
      }

      if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
          await getFilterEpisodes(request, response);
      }
  };
  ```

### Estrutura de diretórios:
```
project-root/
├── controllers/
│   ├── podcasts-controller.ts
├── routes/
│   ├── routes.ts
├── utils/
│   ├── http-method.ts
├── app.ts
```

## Como executar o projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm start
   ```
4. Acesse a API via [http://localhost:3000](http://localhost:3000).

## Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adicionando minha nova feature"
   ```
4. Faça o push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença [MIT](LICENSE).
