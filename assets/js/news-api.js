const newsApi = {};

const apiKey = '1e35479029874b01b08bbdd1b9eef3d0';

const language = 'pt'

let dateFrom = new Date();

function convertNewsApi(newsDetail) {
    const news = new News();
    news.author = newsDetail.author;
    news.title = newsDetail.title;
    news.description = newsDetail.description;
    news.url = newsDetail.url;
    news.urlToImage = newsDetail.urlToImage;
    news.publishedDate = newsDetail.publishedDate;

    return news;
}

newsApi.getNews = (pageSize = 8, page = 1, qMain) => {
    const url = `https://newsapi.org/v2/everything?q=${qMain}&from=${dateFrom}&pageSize=${pageSize}&page=${page}&language=${language}&sortBy=relevancy&apiKey=${apiKey}`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.articles.map(convertNewsApi))
}

newsApi.getTrendingNews = (qMain) => {
    const url = `https://newsapi.org/v2/everything?q=${qMain}&from=${dateFrom}&pageSize=8&page=1&language=${language}&sortBy=popularity&apiKey=${apiKey}`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.articles.map(convertNewsApi))
}
