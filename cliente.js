function remove(indice) {
    const clientes = localStorage.getItem('clientes');
    const clientes_json = JSON.parse(clientes);
    document.getElementById('table').deleteRow(indice);
    let indice_flex = indice -1;
    clientes_json.splice(indice_flex, indice);
    localStorage.removeItem('clientes');
    localStorage.setItem('clientes', JSON.stringify(clientes_json));

}
class Cliente {
constructor() {
    this.clientes = localStorage.getItem('clientes') === null
    ? []
    : JSON.parse(localStorage.getItem('clientes'))
}

registra(cliente){
    this.clientes.push(cliente)
    localStorage.setItem('clientes', JSON.stringify(this.clientes))
    alert('Cliente salvo com sucesso!')
}
lista(){
    const listagem = this.clientes.map((cliente) => (
        `<tr id = 'row'>
        <td>${cliente.codigo}</td>
        <td>${cliente.nome}</td>
        <td>${cliente.rg}</td>
        <td>${cliente.endereco}</td>
        <td>${cliente.bairro}</td>
        <td>${cliente.cidade}</td>
        <td>${cliente.cep}</td>
        <td>${cliente.uf}</td>
        <td>${cliente.telefone}</td>
        <td>${cliente.celular}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.nome_fantasia}</td>
        <td>${cliente.contato}</td>
        <td>${cliente.email}</td>
        <td>${cliente.data}</td>
        <td>${cliente.contato}</td>
        <td><svg style = 'cursor: pointer;' onclick ='remove(this.parentNode.parentNode.rowIndex)' width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg></td>
        </tr>`
    )).join("")
    return (`<table id = "table" class='paleBlueRows'>
    <thead>
        <th>Código</th>  <th>Nome</th> <th>RG/IE</th> <th>Endereço</th> 
        <th>Bairro</th>  <th>Cidade</th> <th>CEP</th> <th>UF</th>  <th>Telefone</th> <th>Celular</th> 
        <th>CPF/CNPJ</th> <th>nome_fantasia</th> <th>Contato</th> <th>E-mail pessoal</th> 
        <th>Nascimento</th> <th>Observações</th>
    </thead>
    <tbody>${listagem}
    </tbody>      
    </table>
    `)
}

atualiza(){
    document.getElementById('listagem').innerHTML = cliente.lista()
}
}
const cliente = new Cliente()
document.getElementById('salvar').onclick = function ()  {
const registro = {
    codigo: document.getElementById('codigo').value,
    nome: document.getElementById('nome').value,
    rgie: document.getElementById('rgie').value,
    endereco: document.getElementById('endereco').value,
    bairro: document.getElementById('bairro').value,
    cidade: document.getElementById('cidade').value,
    cep: document.getElementById('cep').value,
    uf: document.getElementById('uf').value,
    telefone: document.getElementById('telefone').value,
    celular: document.getElementById('celular').value,
    cpf: document.getElementById('cpf').value,
    nome_fantasia: document.getElementById('nome_fantasia').value,
    contato: document.getElementById('contato').value,
    email: document.getElementById('email').value,
    data: document.getElementById('data').value,
    observacoes: document.getElementById('observacoes').value

} 
cliente.registra(registro)
window.location.reload()
}
window.onload = function(){
cliente.atualiza()
}




