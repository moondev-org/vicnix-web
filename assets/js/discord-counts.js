fetch('https://discordapp.com/api/servers/735636328951316602/widget.json')
    .then(response => response.json())
    .then(data => {
        const usuariosConectados = data.presence_count;
        const titulo = document.getElementById('discordNumero');
        titulo.innerText += usuariosConectados;
    })
    .catch(error => {
        console.error('Error:', error);
    });