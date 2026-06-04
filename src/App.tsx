import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filtro, setFiltro] = useState("todos");

  const funcionalidades = [
    {
      titulo: "Ativação",
      categoria: "pedagogico",
      descricao: "Mobilização dos conhecimentos prévios."
    },
    {
      titulo: "Conteúdo Objetivo",
      categoria: "pedagogico",
      descricao: "Apresentação do conteúdo em pequenas unidades."
    },
    {
      titulo: "Multimídia",
      categoria: "multimidia",
      descricao: "Complementação do aprendizado com uso de vídeo ou áudio para reforço."
    },
    {
      titulo: "Fixação",
      categoria: "multimidia",
      descricao: "Utilização de flashcards para recuperação ativa."
    },
    {
      titulo: "Aplicação",
      categoria: "avaliacao",
      descricao: "Aplicação prática e feedback imediato por meio realização de atividades ou quizzes."
    },
    {
      titulo: "Revisão (Opcional)",
      categoria: "pedagogico",
      descricao: "Retomada dos principais conceitos."
    }
  ];

  const cardsFiltrados =
    filtro === "todos"
      ? funcionalidades
      : funcionalidades.filter(
          item => item.categoria === filtro
        );

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">

          <a className="navbar-brand fw-bold" href="#">
            <img
              src="/images/oie_transparent.png" width="80" height="69"
              alt="TMI"
              className="img-fluid rounded shadow"
            />
          </a>

          <div>

            <button
              className="btn btn-light"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Claro" : "🌙 Escuro"}
            </button>

          </div>

        </div>
      </nav>

      <section className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="display-4 fw-bold">
              Trilha Multimodal Inclusiva
            </h1>

            <h3 className="text-primary">
              Mobile Learning com foco na inclusão
            </h3>

            <p className="lead mt-3">
              Modelo de aprendizagem estruturado
              para integrar leitura, áudio, vídeo,
              flashcards e quizzes em uma sequência
              pedagógica inclusiva.
            </p>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="/images/tmi.png"
              alt="TMI"
              className="img-fluid rounded shadow"
            />

          </div>

        </div>

      </section>

      <section className="container py-5">

        <h2 className="text-center mb-4">
          Sobre o Projeto
        </h2>

        <p className="text-center">
          A Trilha Multimodal Inclusiva (TMI)
          foi proposta para superar limitações
          encontradas em plataformas educacionais
          atuais, oferecendo um percurso organizado,
          acessível e adaptável às necessidades de
          estudantes com diferentes perfis cognitivos,
          incluindo TEA e TDAH.
        </p>

      </section>

      <section className="container py-5">

        <h2 className="text-center mb-4">
          Funcionalidades
        </h2>

        <div className="text-center mb-4">

          <button
            className="btn btn-outline-primary m-1"
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>

          <button
            className="btn btn-outline-primary m-1"
            onClick={() => setFiltro("pedagogico")}
          >
            Pedagógico
          </button>

          <button
            className="btn btn-outline-primary m-1"
            onClick={() => setFiltro("multimidia")}
          >
            Multimídia
          </button>

          <button
            className="btn btn-outline-primary m-1"
            onClick={() => setFiltro("avaliacao")}
          >
            Avaliação
          </button>

        </div>

        <div className="row">

          {cardsFiltrados.map((card, index) => (

            <div
              key={index}
              className="col-md-4 mb-4"
            >

              <div className="card h-100 shadow">

                <div className="card-body">

                  <h5>{card.titulo}</h5>

                  <p>{card.descricao}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="container py-5">

        <h2 className="text-center mb-4">
          Comparação com Plataformas Existentes
        </h2>

        <div className="table-responsive">

          <table className="table table-bordered">

            <thead className="table-primary">

              <tr>
                <th>Critério</th>
                <th>TMI</th>
                <th>Quizlet</th>
                <th>Kahoot!</th>
                <th>Khan Academy</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Trilha Estruturada</td>
                <td>Completa (etapas organizadas)</td>
                <td>Focado em flashcards</td>
                <td>Sessões isoladas</td>
                <td>Parcial (cursos, mas pouco flexível</td>
              </tr>

              <tr className="table-info">
                <td>Foco em inclusão (TDAH/TEA)</td>
                <td>Estruturado para isso</td>
                <td>Parcial (Indireto)</td>
                <td>Não é foco</td>
                <td>Parcial</td>
              </tr>

              <tr>
                <td>Multimodalidade (texto + áudio + vídeo + prática)</td>
                <td>Integrada por design</td>
                <td>Suporta mídia, mas não integrada em fluxo</td>
                <td>Foco em quiz</td>
                <td>Forte em vídeo + exercícios</td>
              </tr>

              <tr className="table-info">
                <td>Aprendizagem ativa (flashcards + quiz)</td>
                <td>Completa</td>
                <td>Forte em memorização</td>
                <td>Forte em revisão rápida</td>
                <td>Mais passivo (vídeo + exercícios)</td>
              </tr>

              <tr>
                <td>Personalização da aprendizagem</td>
                <td>Alta (trilha adaptável)</td>
                <td>Moderada (estudo individual)</td>
                <td>Baixa (mesma atividade para todos)</td>
                <td>Limitada ao curso</td>
              </tr>

              <tr className="table-info">
                <td>Aprendizagem no ritmo do aluno</td>
                <td>Flexível</td>
                <td>Flexível</td>
                <td>Não (tempo real)</td>
                <td>Flexível</td>
              </tr>

              <tr>
                <td>Organização pedagógica (início → meio → fim)</td>
                <td>Clara e progressiva</td>
                <td>Fragmentada</td>
                <td>Pontual</td>
                <td>Estruturada em cursos</td>
              </tr>

              <tr className="table-info">
                <td>Engajamento</td>
                <td>Equilibrado (Não gameficado)</td>
                <td>Moderado</td>
                <td>Alto (Gameficado)</td>
                <td>Moderado</td>
              </tr>

              <tr>
                <td>Retenção de longo prazo</td>
                <td>Alta (multimodal + revisão)</td>
                <td>Boa (repetição espaçada)</td>
                <td>Baixa (sem repetição estruturada)</td>
                <td>Moderada</td>
              </tr>

              <tr className="table-info">
                <td>Flexibilidade para professores</td>
                <td>Muito alta (cria trilhas completas))</td>
                <td>Alta (cria flashcards)</td>
                <td>Alta (cria quizzes)</td>
                <td>Baixa (conteúdo fechado)</td>
              </tr>
            </tbody>

          </table>

        </div>

      </section>

      <section className="container py-5">

        <h2 className="text-center mb-4">
          Benefícios
        </h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                Inclusão de estudantes com TEA e TDAH
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                Redução da sobrecarga cognitiva
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body">
                Aprendizagem multimodal e ubíqua
              </div>
            </div>
          </div>

        </div>

      </section>

      <footer className="bg-primary text-white text-center p-4">

        <h5>
          Cristiano César dos Santos Andrade
        </h5>

        <p>
          Pós-graduação em Desenvolvimento Web e Mobile
        </p>

        <p>
          cristianocesar32@gmail.com
        </p>

        <p>
          <a href="https://github.com/cristiano-cesar" target="blank"> GitHub </a> | <a href="https://www.linkedin.com/in/cristiano-c%C3%A9sar-d-ba22754a/" target="blank">LinkedIn</a>
        </p>

      </footer>

    </div>
  );
}

export default App;