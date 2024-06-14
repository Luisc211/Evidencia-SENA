document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('busqueda-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('Buscando pasajes...');
        form.submit(); 
    });
});