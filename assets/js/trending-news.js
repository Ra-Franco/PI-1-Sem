const trendingCards = document.getElementById('trending-cards');

function loadTredingNews(qMain) {
    newsApi.getTrendingNews(qMain).then((tredingsPromise = []) => {
        const newsPromiseFilter = tredingsPromise.filter((news) => news.author !== null || news.title !== "[Removed]" || news.urlToImage !== null)
        const newHTML = newsPromiseFilter.map((news) =>
            `
            <a
                href="${news.url}">
                <div class="trending-cards-news">
                    <div class="trending-cards-news-items">
                        <div class="trending-cards-news-content">
                            <h2>${news.title}</h2>
                            <p>${news.description}</p>
                        </div>
                    </div>
                </div>
            </a>
            `
        ).join('');
        trendingCards.innerHTML += newHTML;
    })
}
loadTredingNews()
console.log();