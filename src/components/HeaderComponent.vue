<template>
<nav>
    <RouterLink class="link-item" to="/">Video</RouterLink>
    <RouterLink class="link-item" to="/cv">Curriculum Vitae</RouterLink>
</nav>
</template>

<script>

export default{

}

</script>

<style>
nav{
    display: flex;
    justify-content: space-around;
    background-color: rgb(36, 72, 5);
    height: 20vh;
    align-items: center;
}
.link-item{
    font-size: larger;
    font-weight: bolder;
    text-decoration: none;
    color: white;
}
.link-item:hover{
    color: rgb(255, 235, 206);
    transition: 0.3s;
}
</style>