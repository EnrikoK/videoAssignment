<template>
    <div>
        <div class="list-element">
            <label>Haridus ja koolitused:</label>
            <ul>
                <li>Tartu Ülikool, Informaatika BSc 2022 - ... </li>
                <li>Alustava Veebiarendaja koolitus, BCS Koolitused 2022</li>
                <li>Eesti Kunstiakadeemia, 2020 - 2021 </li> 
            </ul>            
        </div>
        <div class="list-element">
            <label>Programmeerimisega seotud oskused:</label>
            <ul>
                <li>JavaScript (Vue3, Express)</li>
                <li>Java (Spring)</li>
                <li>Python</li>
                <li>SQL / PostgreSQL</li>
                <li> HTML / CSS</li>
            </ul>            
        </div>
        <div class="list-element">
            <label>Keeled:</label>
            <ul>
                <li>Eesti keel - Emakeel</li>
                <li>Inglise keel - B2</li>
                <li>Saksa keel - B2</li>
            </ul>
        </div>
        <div class="list-element">
            <label>Kontakt:</label>
            <ul>
                <li>Email: enrikokroon12@gmail.com</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    
}
</script>

<style scoped>
li{
    text-align: start;
    text-decoration: none;
    list-style: none;
}

.list-element{
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    width: 50vw;
    margin: 0.5em;
    padding: 0.5em;

}
label{
    text-decoration: underline;
    margin: 0.75em;
}
</style>