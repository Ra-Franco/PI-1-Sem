let pageSize = 10;

const newsList = document.getElementById('news-cards')
const viewMoreButton = document.getElementById('viewMoreButton')

function loadNewsItems(pageSize) {
    newsApi.getNews(pageSize).then((newsPromise = []) => {
        const newHtml = newsPromise.map((news) =>

            `
                <a style="padding: 0;" href="${news.url}">
                    <li class="news-cards-items" style="background-image
            :url(${news.urlToImage});
                background-size: 100% 100%;
                background-repeat: no-repeat;">
                        <div class="news-cards-items-container">
                            <div class="news-cards-items-content">
                                <p>${news.title}</p>
                            </div>
                            <div class="news-cards-items-date">
                                <p>By ${news.author}</p>
                                <span></span>
                                <p>${news.publisedDate}</p>
                            </div>
                        </div>
                    </li>
                </a>
                `

        ).join('')

        newsList.innerHTML += newHtml
    })
}
loadNewsItems(pageSize);

viewMoreButton.addEventListener('click', () => {
    pageSize += 8
    console.log(pageSize)
    loadNewsItems(pageSize);
})