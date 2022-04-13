var slide_div = document.querySelector("#slideshow")

// Slider
let images = [{
    "image": "https://info.umkc.edu/unews/wp-content/uploads/2016/12/MCU.jpg"
}, {
    "image": "https://wallpaperaccess.com/full/54053.jpg"
}, {
    "image": "https://wallpaperaccess.com/full/733942.jpg"
}, {
    "image": "https://images8.alphacoders.com/378/thumb-1920-378546.jpg"
}, {
    "image": "https://wallpaperaccess.com/full/645141.jpg"
}
]

let i = 0
let image = document.createElement("img")
setInterval(function () {
    if (i == images.length) {
        i = 0
    }
    image.src = images[i].image
    slide_div.append(image)
    i++
}, 2000);

// Movies List

var moviesList = [
    {
        image: "https://wallpaperaccess.com/full/733942.jpg",
        name1: "Spider-Man",
        date: "22-jan-2022",
        rating: 9
    },
    {
        image: "https://info.umkc.edu/unews/wp-content/uploads/2016/12/MCU.jpg",
        name1: "Dr.Stranger",
        date: "28-april-2022",
        rating: 8
    },
    {
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Raa.jpg?rMbfdeVefSSw._q6j6UHPZaYS4ThtXvR&size=1200:675",
        name1: "Jai Bhim",
        date: "2 November 2021",
        rating: 6.4
    },
    {
        image: "https://media-cache.cinematerial.com/p/500x/lal8wmxq/the-dark-knight-movie-poster.jpg?v=1456722176",
        name1: "The Dark Knight",
        date: " 18 July 2008",
        rating: 9.1
    },
    {
        image: "https://vikashblog.com/wp-content/uploads/2021/11/spider-man-no-way-home-runtime.jpg",
        name1: " Spider-Man: No Way Home",
        date: "16 December 2021",
        rating: 8.5
    },
    {
        image: "https://movie.webdeveloperdelhi.com/wp-content/uploads/2022/03/the-kashmir.jpg",
        name1: "The Kashmir Files ",
        date: "11 March 2022",
        rating: 8.3
    },
    {
        image: "https://static.toiimg.com/thumb/msid-72471016,width-800,height-600,resizemode-75,imgsize-122425,pt-32,y_pad-40/72471016.jpg",
        name1: "Paavan Khind",
        date: "18 February 2022",
        rating: 9.4
    },
    {
        image: "https://th.bing.com/th/id/OIP.DIBTNwett8DmmeBV1r0JzAHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7",
        name1: "83",
        date: "24 December 2021",
        rating: 7.4
    },
    {
        image: "https://wallpaperaccess.com/full/54053.jpg",
        name1: "Black-Panther",
        date: "02-March-2022",
        rating: 9.1
    },
    {
        image: "https://images8.alphacoders.com/378/thumb-1920-378546.jpg",
        name1: "Iron Man 3",
        date: "12-feb-2022",
        rating: 9.2
    },
    {
        image: "https://wallpaperaccess.com/full/645141.jpg",
        name1: "Thor",
        date: "08-dec-2020",
        rating: 9.8
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/926/592/962/superman-poster-movie-henry-cavill-wallpaper-preview.jpg",
        name1: "Superman",
        date: "14-sept-2022",
        rating: 8.4
    },
    {
        image: "https://images.thedirect.com/media/article_full/batman-robert-pattinson-zoe-kravitz-matt-reeves-dc-dceu.jpg",
        name1: "Batman",
        date: "31-jan-2021",
        rating: 7.9
    },
    {
        image: "https://wallpaperaccess.com/full/529912.jpg",
        name1: "Hulk",
        date: "25-july-2021",
        rating: 8.7
    },
    {
        image: "https://wallpapers-base.com/wp-content/uploads/2018/08/high_quality_wallpaper_HD_1080_IDS_1040887.jpg",
        name1: "DeadPool",
        date: "07-jan-2022",
        rating: 8
    },

]

DisplayData(moviesList)

function DisplayData(moviesList) {
    document.querySelector("#movies").innerText =""
    moviesList.map(function (ele) {
        let box = document.createElement("div")
        box.setAttribute("id", "box")
        let img = document.createElement("img")
        img.src = ele.image

        let det = document.createElement("div")
        det.setAttribute("class", "details")

        let name = document.createElement("p")
        name.innerText = ele.name1

        let date = document.createElement("p")
        date.innerText = ele.date

        let rating = document.createElement("p")
        rating.innerText = `Rating ${ele.rating}`

        det.append(name, date, rating)
        box.append(img, det)
        document.querySelector("#movies").append(box)
    })
}

function sortHL() {
    console.log("Inside High to low")
    moviesList.sort(function (a, b) {
        return Number(b.rating) - Number(a.rating);
    });
    DisplayData(moviesList)
}

function sortLH() {
    console.log("Inside low to high")
    moviesList.sort(function (a, b) {
        return Number(a.rating) - Number(b.rating);
    });
    DisplayData(moviesList)
}
