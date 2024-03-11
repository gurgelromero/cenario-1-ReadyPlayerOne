class Grafo {
    constructor() {
        this.vertices = [];
    }

    adicionarVertice(vertice) {
        this.vertices.push(vertice);
    }

    mostrarGrafo() {
        for (const vertice of this.vertices) {
            console.log(`Vertice ${vertice.nome} -> Vizinhos: ${vertice.vizinhos.map(vizinho => vizinho.nome).join(' ')}`);
        }
    }
}



module.exports = Grafo;