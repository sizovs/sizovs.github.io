const cheerio = require("cheerio")
const axios = require("axios")

const fetchLinks = () => axios
    .get("https://skillsmatter.com/courses/categories/9-java")
    .then(response => response.data)
    .then(cheerio.load)
    .then($ => 
        Array.from($(".card a"))
            .map(it => $(it).attr("href"))
            .filter(it => !it.includes("categories"))
            .map(it => "https://skillsmatter.com/" + it))



const price = $ => Array.from($("button"))
    .map(it => $(it).text())
    .filter(it => it.includes("VAT"))
    .map(it => it.match(/£([0-9]+)/))
    .map(([_, it]) => it)

const duration = $ => {
    const [from, to] = $(".keydetails__datesdrawertrigger").text().match(/([0-9]{1,2})/g)
    return to ? (to - from) + 1 : 1
}

const date = $ => {
    const [match, from, to, month, year] = $(".keydetails__datesdrawertrigger").text().match(/([0-9]{1,2})[a-zA-Z]{2}\s-\s([0-9]{1,2})[a-zA-Z]{2}\s([a-zA-Z]+)\s([0-9]+)/)
    return `${from} ${month.substring(0, 3)} ${year}`
}

const fetchInfo = link => axios
    .get(link)
    .then(response => response.data)
    .then(cheerio.load)
    .then($ => ({
        link: link,
        title: $("h1.primary-header__wrapbar__title").text(),
        date: date($),
        duration: duration($),
        price: Math.round(price($)[0]),
        info: $(".module--course-overview .module__inner p").first().text(),
        city: "London",
        country: "UK"
    }))

module.exports = () => fetchLinks()
    .then(links => Promise.all(links.map(fetchInfo)))