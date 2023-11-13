document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById("btn").addEventListener("click", ()=>{
        fetch("superheroes.php")
        .then(response => response.text())
        .then(data => alert(data))
        
    });

});