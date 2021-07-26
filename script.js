const mainForm = document.getElementById('main-form');

mainForm.addEventListener('submit', function(e) {
    e.preventDefault();

    //Adicionando linhas na tabela

    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('name').value;
    let marcaCPF = document.getElementById('marca-cpf').value;
    let qtdeTEL = document.getElementById('qtde-tel').value;
    let obsEND = document.getElementById('obs-end').value;

    let dadosForm = {
        codigo,
        nome,
        marcaCPF,
        qtdeTEL,
        obsEND
    };

    let valoresDadosForm = Object.values(dadosForm);

    let tbody = document.getElementById('tabela-items');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valoresDadosForm.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });

    //Local Storage

    let info = JSON.parse(localStorage.getItem('informacao')) ?? [];

    info.push(dadosForm);

    let infoConvertida = JSON.stringify(info);

    localStorage.setItem('informacao', infoConvertida);
});