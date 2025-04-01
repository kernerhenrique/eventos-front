const apiUrl = "http://127.0.0.1:5000";

document.getElementById("eventoForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;
    const descricao = document.getElementById("descricao").value;

    try {
        const response = await fetch(`${apiUrl}/cadastrar_evento`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, data, local, descricao })
        });

        const result = await response.json();
        alert(result.mensagem);
        listarEventos();
    } catch (error) {
        console.error("Erro ao cadastrar evento:", error);
        alert("Erro ao cadastrar evento.");
    }
});

async function listarEventos(eventos = null) {
    try {
        if (!eventos) {
            const response = await fetch(`${apiUrl}/buscar_evento`);
            eventos = await response.json();
        }

        const eventosDiv = document.getElementById("eventos");
        eventosDiv.innerHTML = "";

        if (eventos.length === 0) {
            eventosDiv.innerHTML = "<p>Nenhum evento cadastrado.</p>";
            return;
        }

        eventos.forEach(evento => {
            const eventoElement = document.createElement("div");
            eventoElement.classList.add("evento-card");

            eventoElement.innerHTML = `
                <h3>${evento.nome}</h3>
                <p>📅 <strong>Data:</strong> ${evento.data}</p>
                <p>📍 <strong>Local:</strong> ${evento.local}</p>
                <p>📋 ${evento.descricao}</p>
                <button onclick="deletarEvento(${evento.id})">Excluir</button>
            `;
            eventosDiv.appendChild(eventoElement);
        });
    } catch (error) {
        console.error("Erro ao listar eventos:", error);
        alert("Erro ao listar eventos.");
    }
}

async function filtrarEventos() {
    const termoPesquisa = document.getElementById("search").value.toLowerCase().trim();

    if (!termoPesquisa) {
        alert("Digite um termo para buscar.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/buscar_evento`);
        const eventos = await response.json();

        if (!Array.isArray(eventos)) {
            throw new Error("Dados recebidos não são um array.");
        }

        const eventosFiltrados = eventos.filter(evento =>
            evento.nome.toLowerCase().includes(termoPesquisa) ||
            evento.local.toLowerCase().includes(termoPesquisa) ||
            evento.descricao.toLowerCase().includes(termoPesquisa)
        );

        if (eventosFiltrados.length === 0) {
            alert("Nenhum evento encontrado!");
        }

        listarEventos(eventosFiltrados);
    } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        alert("Erro ao buscar eventos. Tente novamente.");
    }
}

async function deletarEvento(id) {
    try {
        await fetch(`${apiUrl}/deletar_evento/${id}`, { method: "DELETE" });
        listarEventos();
    } catch (error) {
        console.error("Erro ao deletar evento:", error);
        alert("Erro ao deletar evento.");
    }
}

listarEventos();
