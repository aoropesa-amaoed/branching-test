// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log(position)
//     })

// }

async function getMovies() {
    const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<your api key>',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getMovieByTitle() {
    const url = 'https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt10240638';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<your api key>',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getMovies()
getMovieByTitle()