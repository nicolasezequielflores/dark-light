function darkMode() {
    var button = document.getElementById('button');
    var container = document.getElementsByClassName('container')[0]; 
    var imagenDark = button.querySelector('.dark');
    var imagenLight = button.querySelector('.light');
    
    if (container.classList.contains('dark-mode')) {
        container.classList.remove('dark-mode');
        button.classList.remove('dark');
        imagenDark.style.display = 'block';
        imagenLight.style.display = 'none';
        button.style.background = "linear-gradient(145deg, #f0f0f0, #cacaca)";
        button.style.boxShadow = "20px 20px 60px #1a1a1a, -20px -20px 60px #242424;";
        
    } else {
        container.classList.add('dark-mode');
        button.classList.add('dark');
        imagenDark.style.display = 'none';
        imagenLight.style.display = 'block';
        button.style.background = "linear-gradient(145deg, #212121, #1c1c1c)";
    }
}