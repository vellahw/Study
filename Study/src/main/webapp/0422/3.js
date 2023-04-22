window.onload = () => {
    let header = document.getElementById('header');

    header.addEventListener('click', function () {
       this.innerHTML += '+'; 
    });
}