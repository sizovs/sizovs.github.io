const cheerio = require("cheerio")
const axios = require("axios")
const franc = require('franc')


String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase() })
};

const hasPrice = ($, it) => $(".lbl-price", it).text().match(/([0-9]+)/)
const eurPrice = ($, it) => {
    const [_, sek] = $(".lbl-price", it).text().replace(/\D/g, "").match(/([0-9]+)/)
    return Math.round(sek * 0.095)
}

const inEnglish = ($, it) => {
    const title = $("h3", it).text()
    const lang = franc(title, {only: ['swe', 'eng']})
    return lang !== 'swe';
}

const date = ($, it) => {
    const dayAndMonth = $(".course-first-dates span:nth-child(2)", it).text().replace(",", "")
    return dayAndMonth.capitalize() + " " + new Date().getFullYear()
}

const fetchAll = () => axios
    .get("https://informator.se/utbildningar/systemutveckling/java")
    .then(response => response.data)
    .then(cheerio.load)
    .then($ => Array.from($(".course"))
                    .filter(it => hasPrice($, it))
                    .filter(it => inEnglish($, it))
                    .map(it => ({
                        title: $("h3", it).text(),
                        link: "https://informator.se" + $("a", it).attr("href"),
                        date: date($, it),
                        duration: $(".lbl-length", it).text().match(/([0-9]+)/)[0],
                        price: eurPrice($, it),
                        info: $(".description p", it).text(),
                        city: "Stockholm",
                        country: "Sweden"
                    }))
    )

module.exports = () => fetchAll()