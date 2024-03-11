function bfs(grafo, inicio, destino) {
    const fila = [inicio]; //Iniciar uma fila com o vertice de inicio
    const visitados = new Set(); //Conjunto para rastrear vertives visitados
    const caminho = {}; //Objeto para armazenar o caminho pecorrido

    while (fila.length > 0) {
        const verticeAtual = fila.shift(); //Remove o primeiro vertice da fila 

        if (verticeAtual === destino) {
            return reconstruirCaminho(inicio, destino, caminho); //Se alcançou o destino, reconstrói e retorna o caminho mínimo
        }

        for (const vizinho of grafo.vertices.find(v => v.nome === verticeAtual).vizinhos) {
            if (!visitados.has(vizinho.nome)) {
                fila.push(vizinho.nome);
                visitados.add(vizinho.nome);
                caminho[vizinho.nome] = verticeAtual;
            } // Se o vizinho não foi visitado, adiciona à fila, marca como visitado e armazeena o caminho.
        }
    }

    return null; // Caso não haja caminho entre o início e o destino
}

function reconstruirCaminho(inicio, destino, caminho) {
    const resultado = [destino]; // Inicializa um array com o vertice de destino.
    let atual = destino; //Inicializa a variavel para percorrer o caminho de trás para frente.

    while (atual !== inicio) {
        atual = caminho[atual]; // Move para o vertice anterior no caminho
        resultado.unshift(atual); // Adiciona o vertice atual no inicio do array (inverte a ordem)
    }

    return resultado; // Retorna o caminho minimo reconstruido
}

module.exports = { bfs };