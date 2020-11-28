function media() {
    let preco_custo = Number(document.getElementById('custo').value);
    let lucro = Number(document.getElementById('lucro').value);
    let preco_final = preco_custo*lucro/100+preco_custo;
    document.getElementById('venda').value = preco_final;
}

function remove(indice) { 

    const produtos = localStorage.getItem('produtos');
    const produtos_json = JSON.parse(produtos);
    document.getElementById('table').deleteRow(indice);
    let indice_flex = indice -1;
    produtos_json.splice(indice_flex, indice);
    localStorage.removeItem('produtos');
    localStorage.setItem('produtos', JSON.stringify(produtos_json));
    location.reload();
            
        }
        class Produto {
        constructor() {
            this.produtos = localStorage.getItem('produtos') === null
            ? []
            : JSON.parse(localStorage.getItem('produtos'))
        }
    
        registra(produto){
            this.produtos.push(produto)
            localStorage.setItem('produtos', JSON.stringify(this.produtos))
            alert('Produto salvo com sucesso!')
        }
        lista(){
            const listagem = this.produtos.map((produto) => (
                `<tr id = 'row'>
                <td>${produto.codigo}</td>
                <td>${produto.nome}</td>
                <td>${produto.lucro}</td>
                <td>${produto.marca}</td>
                <td>${produto.categoria}</td>
                <td><svg style = 'cursor: pointer;' onclick ='remove(this.parentNode.parentNode.rowIndex, this.parentNode.parentNode)' width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg></td>
                </tr>`
            ))
            return (`<table id = 'table' class='paleBlueRows'>
            <caption>Produtos</caption>
            <thead>
                <th>Código</th>  <th>Nome</th> <th>Lucro</th> <th>Marca</th> <th>Categoria</th>
            </thead>
            <tbody>${listagem}
            </tbody>      
            </table>
            `)
        }
    
        atualiza(){
            document.getElementById('listagem').innerHTML = produto.lista()
        }
    }
    const produto = new Produto()
    document.getElementById('salvar').onclick = function ()  {
        const registro = {
            codigo: document.getElementById('codigo').value,
            nome: document.getElementById('nome').value,
            lucro: document.getElementById('lucro').value,
            marca: document.getElementById('marca').value,
            categoria: document.getElementById('categoria').value
        } 
        produto.registra(registro)
        window.location.reload()
    }
window.onload = function(){
    produto.atualiza()
}
