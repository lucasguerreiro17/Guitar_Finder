function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa) {
  section.innerHTML = "Você não pesquisou um modelo ou um guitarrista válido. Tente novamente. "
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
let resultados = "";
let descricao = "";
let modelo = "";
let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      descricao = dado.descricao.toLowerCase() 
      modelo = dado.modelo.toLowerCase() 
      tags = dado.tags.toLowerCase()
      if (modelo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.modelo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }
  
  if(!resultados){
    resultados = "digite um modelo válido"
  }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}

