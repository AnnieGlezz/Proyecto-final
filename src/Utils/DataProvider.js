const headers = {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDkyNGE5ZDM5M2RiNjE5MWIxZTk5YTc5NTI3ZDAzYiIsInN1YiI6IjY1ZWY5ZGY1MTdiNWVmMDE2MmI3MWFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZBknLsd3xihRuEhSOd_XqBZ5EDqO11BFML_bMl3Gh5M`
}


export const DataProvider = {
    getNowPlayingMovies: async (page = 1) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('Hubo un error al obtener las películas');
            console.log(error)
        }
    },

    getPopularMovies: async (page = 1) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('Hubo un error al obtener las películas');
            console.log(error)
        }
    },

    getTopMovies: async (page = 1) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('Hubo un error al obtener las películas');
            console.log(error)
        }
    },

    getUpcomingMovies: async (page = 1) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('Hubo un error al obtener las películas');
            console.log(error)
        }
    },

    
    getMoviesByName: async (page = 1, name) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('Hubo un error al obtener las películas');
            console.log(error)
        }
    }
    //https://api.themoviedb.org/3/search/movie?query=kung&include_adult=false&language=es&page=1
} 