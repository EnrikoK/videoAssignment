<template>
    <div>
        <div id="video-container">
            <p>Tere! Ma olen Enriko. Siit videost saate mind natukene rohkem tundma õppida.
                 Kui eelistate videotele konkreetseid loetelusid, siis tasub vaadata ka 
                 Curriculum Vitae linki...
            </p>
            <video controls>
                <source src="..\assets\tutvustus2.mp4" type="video/mp4">
            </video>        
        </div>        
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
video{
    width: 320px;
    height: 240px;
}
p{
    font-size: small;
}
#video-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    padding: 0.5em;
    text-align: center;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin-top: 1em;
}
</style>
