<template>
    <div class="home">
        <form class="search-form">
            <div class="search-block">
                <img src="../assets/search.png" width="30" height="30" />
                <input class="search" type="text" placeholder="Search movies">
            </div>
            <button class="search-button">Find</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.search-form {
    display: flex;
}
.search-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 18px;
    color: white;
    background-color: #3d4adc;
    border-radius: 10px;
}
input.search {
    color: white;
    font-size: 1.5rem;
    background: transparent;
    margin-left: 10px;
    font-family: 'Montserrat', sans-serif;

    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
}
input.search:focus {
    outline: none;
}
input.search::-webkit-input-placeholder {
    color: #aaa;
}
input.search:-ms-input-placeholder {
    color: #aaa;
}
input.search::placeholder {
    color: #aaa;
}
.search-button {
    color: white;
    font-size: 1.5rem;
    padding: 10px 15px;
    background-color: transparent;
    border: 2px solid #48A9A6;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    margin-left: 10px;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
}
.search-button:hover {
    background-color: #48A9A6;
}
</style>
