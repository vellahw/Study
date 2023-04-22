window.onload = () => {
    var header = document.getElementById('header');

    header.onclick = () => {
        alert('하염하염');

        header.onclick = null;
    }
}