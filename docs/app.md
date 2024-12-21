# PodCast Menager

### Descrição 

Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria

### Domínio 

Podcasts feito em vídeo

### Features 

- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilder, esporte, corrida]
- Filtrar episódios por nome do podcast

## Como

#### Feature 

Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: Retorna lista de episódios

O método GET solicita dados de um servidor.

response:

```js
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuilder"],
},
{
    podcastName: "Flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
}
]
```

GET: Retorna lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast

