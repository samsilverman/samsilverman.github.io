// Media icons for the header section
const MEDIA_HEADER_ICONS = {
    "email": "fas fa-envelope-square fa-2x",
    "scholar": "ai ai-google-scholar-square ai-2x",
    "blog": "fas fa-rss-square fa-2x",
    "twitter": "fab fa-twitter-square fa-2x",
    "facebook": "fab fa-facebook-square fa-2x",
    "linkedin": "fab fa-linkedin fa-2x",
    "instagram": "fab fa-instagram-square fa-2x",
    "youtube": "fab fa-youtube-square fa-2x",
    "github": "fab fa-github-square fa-2x"
}

// JSON configuration files
const SITE_JSON = "content/site.json"
const NEWS_JSON = "content/news.json"
const PUBLICATIONS_JSON = "content/publications.json"
const PROJECTS_JSON = "content/projects.json"
const MISC_JSON = "content/misc.json"
const AWARDS_JSON = "content/awards.json"
const TEACHING_JSON = "content/teaching.json"


function load_site_json() {
    fetch(SITE_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + SITE_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (json.site_title != undefined) {
                document.title = json.site_title
            }

            let name = document.getElementById("name")
            let copyright = document.getElementById("copyright")
            if (json.name != undefined) {
                name.innerHTML = json.name
                copyright.innerHTML = "&copy; " + json.name
            }
            if (json.year != undefined) {
                copyright.innerHTML += " " + json.year
            }

            let description = document.getElementById("description")
            if (json.description != undefined) {
                description.innerHTML = json.description
                if (json.cv) {
                    let cv = document.createElement("a")
                    cv.href = "resources/files/cv.pdf"
                    cv.target = "_blank"
                    cv.innerHTML = "Curriculum Vitae"
                    description.innerHTML += "<br><br>"
                    description.appendChild(cv)
                }
                if (json.resume) {
                    let resume = document.createElement("a")
                    resume.href = "resources/files/resume.pdf"
                    resume.target = "_blank"
                    resume.innerHTML = "Resume"
                    description.innerHTML += "<br><br>"
                    description.appendChild(resume)
                }
            }

            let media = document.getElementById("media")
            let separation = "&emsp;"
            for (let key in json.media) {
                if (MEDIA_HEADER_ICONS[key] == undefined) {
                    continue
                }

                let link = document.createElement("a")
                link.target = "_blank"
                link.href = json.media[key]
                link.className = "media-link"

                let icon = document.createElement("i")
                icon.className = MEDIA_HEADER_ICONS[key]
                icon.innerHTML = separation

                link.appendChild(icon)
                media.appendChild(link)
            }


        })
        .catch(error => {
            console.log(error)
        })
}

function load_news_json() {
    fetch(NEWS_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + NEWS_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (Object.keys(json).length == 0) {
                console.warn("'" + NEWS_JSON + "' contains no entries.")
                return
            }

            let body = document.getElementById("news")
            if (body == null) {
                return
            }

            let sectionName = document.createElement("h2")
            sectionName.innerHTML = "News"
            body.appendChild(sectionName)

            let section = document.createElement("ul")
            for (let key in json) {
                let entry = document.createElement('li')
                entry.innerHTML = "<b>" + key + "</b>: " + json[key]
                section.appendChild(entry)
            }
            body.appendChild(section)
        })
        .catch(error => {
            console.log(error)
        })
}

function load_publications_json() {
    fetch(PUBLICATIONS_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + PUBLICATIONS_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (Object.keys(json).length == 0) {
                console.warn("'" + PUBLICATIONS_JSON + "' contains no entries.")
                return
            }

            let body = document.getElementById("publications")
            if (body == null) {
                return
            }

            let sectionName = document.createElement("h2")
            sectionName.innerHTML = "Publications"
            body.appendChild(sectionName)

            let table = document.createElement("table")
            json.forEach(entry => {
                let publication = document.createElement('tr')
                let imageBlock = document.createElement('td')
                imageBlock.className = 'image-half'
                let contentBlock = document.createElement('td')
                contentBlock.className = 'text-half'

                if (entry.image != undefined) {
                    let image = document.createElement('img')
                    image.id = "body-image"
                    image.src = entry.image
                    imageBlock.appendChild(image)
                }

                if (entry.title != undefined) {
                    let title = document.createElement('h3')
                    if (entry.link == undefined) {
                        title.innerHTML = entry.title
                    }
                    else {
                        let link = document.createElement('a')
                        link.href = entry.link
                        link.target = "_blank"
                        link.innerHTML = entry.title
                        title.appendChild(link)
                    }
                    contentBlock.appendChild(title)
                }

                if (entry.authors != undefined) {
                    let authors = document.createElement('p')
                    authors.innerHTML = entry.authors
                    contentBlock.appendChild(authors)
                }

                if (entry.conference != undefined) {
                    let conference = document.createElement('p')
                    conference.innerHTML = entry.conference
                    if (entry.award != undefined) {
                        let award = document.createElement('span')
                        award.className = "award"
                        award.innerHTML = "<i class=\"fas fa-award\"></i>&ensp;" + entry.award
                        conference.innerHTML += "&ensp;|&ensp;"
                        conference.appendChild(award)
                    }
                    contentBlock.appendChild(conference)
                }

                let media = document.createElement("p")
                let separation = "&ensp;|&ensp;"
                let firstLink = true
                for (let key in entry.media) {
                    let link = document.createElement("a")
                    link.target = "_blank"
                    link.href = entry.media[key]
                    link.innerHTML = key

                    if (firstLink) {
                        firstLink = false
                    }
                    else if (!firstLink) {
                        media.innerHTML += separation
                    }

                    media.appendChild(link)
                }
                contentBlock.appendChild(media)

                if (entry.description != undefined) {
                    let description = document.createElement('p')
                    description.innerHTML = entry.description
                    contentBlock.appendChild(description)
                }

                publication.appendChild(imageBlock)
                publication.appendChild(contentBlock)
                table.appendChild(publication)
            })

            body.appendChild(table)
        })
        .catch(error => {
            console.log(error)
        })
}

function load_projects_json() {
    fetch(PROJECTS_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + PROJECTS_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (Object.keys(json).length == 0) {
                console.warn("'" + PROJECTS_JSON + "' contains no entries.")
                return
            }

            let body = document.getElementById("projects")
            if (body == null) {
                return
            }

            let sectionName = document.createElement("h2")
            sectionName.innerHTML = "Projects"
            body.appendChild(sectionName)

            let table = document.createElement("table")
            json.forEach(entry => {
                let project = document.createElement('tr')
                let imageBlock = document.createElement('td')
                imageBlock.className = 'image-half'
                let contentBlock = document.createElement('td')
                contentBlock.className = 'text-half'

                if (entry.image != undefined) {
                    let image = document.createElement('img')
                    image.id = "body-image"
                    image.src = entry.image
                    imageBlock.appendChild(image)
                }

                if (entry.title != undefined) {
                    let title = document.createElement('h3')
                    if (entry.link == undefined) {
                        title.innerHTML = entry.title
                    }
                    else {
                        let link = document.createElement('a')
                        link.href = entry.link
                        link.target = "_blank"
                        link.innerHTML = entry.title
                        title.appendChild(link)
                    }
                    contentBlock.appendChild(title)
                }

                if (entry.description != undefined) {
                    let description = document.createElement('p')
                    description.innerHTML = entry.description
                    contentBlock.appendChild(description)
                }

                project.appendChild(imageBlock)
                project.appendChild(contentBlock)
                table.appendChild(project)
            })

            body.appendChild(table)
        })
        .catch(error => {
            console.log(error)
        })
}

function load_misc_json() {
    fetch(MISC_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + MISC_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (Object.keys(json).length == 0) {
                console.warn("'" + MISC_JSON + "' contains no entries.")
                return
            }

            let body = document.getElementById("misc")
            if (body == null) {
                return
            }

            let sectionName = document.createElement("h2")
            sectionName.innerHTML = "Misc"
            body.appendChild(sectionName)

            let section = document.createElement("ul")

            json.forEach(text => {
                let entry = document.createElement('li')
                entry.innerHTML = text
                section.appendChild(entry)
            })
            body.appendChild(section)
        })
        .catch(error => {
            console.log(error)
        })
}

function load_awards_json() {
    fetch(AWARDS_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + AWARDS_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (Object.keys(json).length == 0) {
                console.warn("'" + AWARDS_JSON + "' contains no entries.")
                return
            }

            let body = document.getElementById("awards")
            if (body == null) {
                return
            }

            let sectionName = document.createElement("h2")
            sectionName.innerHTML = "Awards"
            body.appendChild(sectionName)

            let section = document.createElement("ul")

            json.forEach(text => {
                let entry = document.createElement('li')
                entry.innerHTML = text
                section.appendChild(entry)
            })
            body.appendChild(section)
        })
        .catch(error => {
            console.log(error)
        })
}

function load_teaching_json() {
    fetch(TEACHING_JSON)
        .then(response => {
            if (!response.ok) {
                throw Error("'" + TEACHING_JSON + "' does not exist.")
            }
            return response.json()
        })
        .then(json => {
            if (Object.keys(json).length == 0) {
                console.warn("'" + TEACHING_JSON + "' contains no entries.")
                return
            }

            let body = document.getElementById("teaching")
            if (body == null) {
                return
            }

            let sectionName = document.createElement("h2")
            sectionName.innerHTML = "Teaching"
            body.appendChild(sectionName)

            let section = document.createElement("ul")

            json.forEach(course => {
                let entry = document.createElement('li')
                entry.innerHTML = "<b>" + course.course + "</b>"

                if (course.university != undefined) {
                    entry.innerHTML += ", " + course.university
                }

                if (course.semester != undefined) {
                    entry.innerHTML += ", " + course.semester
                }

                if (course.position != undefined) {
                    entry.innerHTML += "<br>" + course.position
                }

                section.appendChild(entry)

                // if (course.)
            })
            body.appendChild(section)
        })
        .catch(error => {
            console.log(error)
        })
}

function main() {
    load_site_json()
    load_news_json()
    load_publications_json()
    load_projects_json()
    load_awards_json()
    load_misc_json()
    load_teaching_json()
}

main()
