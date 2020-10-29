<template>
    <div class="results">
        <div v-if="loading">
            <div class="loader">Loading...</div>
        </div>
        <div v-else>
            <p v-if="noResult">No results!</p>
            <div v-else>
                <splide :options="sliderOptions" @splide:move="move">
                    <splide-slide v-for="movie in movies" :key="movie.Title">
                        <div class="slide">
                            <div>
                                <h1>{{ movie.Title }}</h1>
                                <p>{{ movie.Year }}</p>
                                <p v-if="currentMovieData.Director">Director: {{ currentMovieData.Director }}</p>
                            </div>
                            <img :src="movie.Poster" width="300" height="445">
                        </div>
                    </splide-slide>
                </splide>
                <div class="navigation">
                    <p>Page:</p>
                    <div class="arrows">
                        <span class="page-left" @click="currentPage > 1 ? currentPage-- : ''"></span>
                        <span>{{ currentPage }} of {{ allPages }}</span>
                        <span class="page-right" @click="currentPage < allPages ? currentPage++ : ''"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Results',
    data() {
        return {
            query: '',
            movies: [],
            loading: true,
            noResult: false,
            sliderOptions: {
                rewind : true,
                width  : 800,
            },
            currentMovieData: {},
            currentPage: 1,
            allPages: 1
        }
    },
    mounted() {
        this.query = this.$route.params.query
        this.fetchMovies()
    },
    methods: {
        move(e, idx) {
            this.currentMovieData = {}
            axios.get(`https://www.omdbapi.com/?i=${this.movies[idx].imdbID}&apikey=c9c6179b`)
                .then(response => {
                    if (response.data.Response == 'True') this.currentMovieData = response.data
                })
        },
        fetchMovies() {
            this.loading = true
            axios.get(`https://www.omdbapi.com/?s=${this.query}&page=${this.currentPage}&apikey=c9c6179b`)
                .then(response => {
                    this.loading = false
                    if (response.data.Response == 'False') this.noResult = true
                    else {
                        this.movies = response.data.Search
                        this.allPages = Math.ceil(response.data.totalResults / 10)
                        axios.get(`https://www.omdbapi.com/?i=${this.movies[0].imdbID}&apikey=c9c6179b`)
                            .then(response => {
                                if (response.data.Response == 'True') this.currentMovieData = response.data
                            })
                    }
                })
        }
    },
    watch: {
        currentPage() {
            this.fetchMovies()
        }
    }
}
</script>

<style scoped>

.slide {
    display: flex;
    justify-content: space-around;
    padding: 40px;
    
}
.slide h1,
.slide p {
    max-width: 300px;
}

.navigation {
    margin-top: 30px;
}
.arrows {
    display: flex;
    justify-content: center;
}

.page-left {
    display: block;
    width: 10px;
    height: 10px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    transform: rotate(-45deg);
    margin: 3px 10px 0 0;
    cursor: pointer;
}

.page-right {
    display: block;
    width: 10px;
    height: 10px;
    border-top: 1px solid white;
    border-right: 1px solid white;
    transform: rotate(45deg);
    margin: 3px 0 0 10px;
    cursor: pointer;
}

.loader {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #0b172d;
    background: -moz-linear-gradient(left, #0b172d 10%, rgba(255, 255, 255, 0) 42%);
    background: -webkit-linear-gradient(left, #0b172d 10%, rgba(255, 255, 255, 0) 42%);
    background: -o-linear-gradient(left, #0b172d 10%, rgba(255, 255, 255, 0) 42%);
    background: -ms-linear-gradient(left, #0b172d 10%, rgba(255, 255, 255, 0) 42%);
    background: linear-gradient(to right, #0b172d 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.loader:before {
    width: 50%;
    height: 50%;
    background: #0b172d;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
}
.loader:after {
    background: #303cba;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
@-webkit-keyframes load3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes load3 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>