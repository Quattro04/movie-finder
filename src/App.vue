<template>
    <div>
        <nav>
            <router-link to="/">movie finder</router-link>
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}
nav {
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #0b172d;
    font-family: 'Henny Penny', cursive;
    padding: 0 20px;
}
nav a {
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
    margin-top: 10px;
}
main {
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #303cba;
}
</style>
