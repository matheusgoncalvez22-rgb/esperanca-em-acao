/* ==========================================
    TEMPLATES.JS
    Conteúdo HTML das páginas da SPA
    Esperança em Ação
========================================== */

window.AppTemplates = {

    /* ======================================
       CABEÇALHO
    ====================================== */

    cabecalho() {

        return `
            <header>

                <h1>Esperança em Ação</h1>

                <nav aria-label="Navegação principal">

                    <ul>

                        <li>
                            <a
                                href="#inicio"
                                data-rota="inicio"
                            >
                                Início
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projetos"
                                data-rota="projetos"
                            >
                                Projetos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#cadastro"
                                data-rota="cadastro"
                            >
                                Cadastro
                            </a>
                        </li>

                        <li>
                            <a
                                href="#sobre"
                                data-rota="sobre"
                            >
                                Sobre nós
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                data-rota="contato"
                            >
                                Contato
                            </a>
                        </li>

                    </ul>

                </nav>

            </header>
        `;
    },


    /* ======================================
       RODAPÉ
    ====================================== */

    rodape() {

        return `
            <footer>

                <h2>
                    Entre em contato
                </h2>

                <p>
                    E-mail: contato@esperancaemacao.org
                </p>

                <p>
                    Telefone: (11) 99999-9999
                </p>

                <p>
                    &copy; 2026 Esperança em Ação -
                    Todos os direitos reservados.
                </p>

            </footer>
        `;
    },


    /* ======================================
       DADOS DOS PROJETOS
    ====================================== */

    projetos: [

        {
            nome: "Alimentando Esperança",
            descricao:
                "Campanha de arrecadação de alimentos para famílias em situação de vulnerabilidade.",
            categoria: "Doação"
        },

        {
            nome: "Educação para Todos",
            descricao:
                "Projeto voltado para apoiar crianças e jovens por meio da educação e do acesso ao conhecimento.",
            categoria: "Educação"
        },

        {
            nome: "Mãos que Ajudam",
            descricao:
                "Programa que conecta voluntários a ações sociais realizadas em diferentes comunidades.",
            categoria: "Voluntariado"
        },

        {
            nome: "Ação Comunitária",
            descricao:
                "Ações de apoio às comunidades, oferecendo atividades e recursos para pessoas que precisam de ajuda.",
            categoria: "Ação social"
        },

        {
            nome: "Campanha do Agasalho",
            descricao:
                "Arrecadação de roupas e cobertores para pessoas em situação de vulnerabilidade.",
            categoria: "Doação"
        },

        {
            nome: "Voluntariado em Ação",
            descricao:
                "Programa que conecta pessoas interessadas em ajudar com atividades e campanhas sociais.",
            categoria: "Voluntariado"
        }

    ],


    /* ======================================
       CARD DE PROJETO
    ====================================== */

    cardProjeto(projeto) {

        return `
            <article class="card-projeto">

                <span class="badge">
                    Ativo
                </span>

                <h3>
                    ${projeto.nome}
                </h3>

                <p>
                    ${projeto.descricao}
                </p>

                <p>
                    <strong>
                        Área:
                    </strong>

                    ${projeto.categoria}
                </p>

                <a
                    class="botao"
                    href="#projetos"
                    data-rota="projetos"
                >
                    Saiba mais
                </a>

            </article>
        `;
    },


    /* ======================================
       PÁGINA INICIAL
    ====================================== */

    inicio() {

        const projetosDestaque =
            this.projetos
                .slice(0, 3)
                .map(
                    projeto =>
                        this.cardProjeto(projeto)
                )
                .join("");


        return `

            <section
                id="inicio"
                class="hero"
            >

                <div class="hero-conteudo">

                    <h2>
                        Transformando vidas através da solidariedade
                    </h2>

                    <p>
                        Juntos podemos fazer a diferença.
                        A Esperança em Ação conecta pessoas,
                        voluntários e organizações para transformar
                        comunidades e criar oportunidades para todos.
                    </p>

                    <a
                        class="botao"
                        href="#projetos"
                        data-rota="projetos"
                    >
                        Conheça nossos projetos
                    </a>

                </div>

                <img
                    class="imagem-principal"
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
                    alt="Grupo de pessoas reunidas participando de uma ação voluntária"
                >

            </section>


            <section class="feedback">

                <div class="alerta sucesso">

                    <strong>
                        ✓ Sucesso!
                    </strong>

                    <span>
                        Os projetos estão disponíveis para consulta.
                    </span>

                </div>

            </section>


            <section class="impacto">

                <h2>
                    Nosso impacto
                </h2>

                <div class="impacto-cards">

                    <div class="card-impacto">

                        <h3>
                            500+
                        </h3>

                        <p>
                            Pessoas ajudadas
                        </p>

                    </div>


                    <div class="card-impacto">

                        <h3>
                            20+
                        </h3>

                        <p>
                            Projetos realizados
                        </p>

                    </div>


                    <div class="card-impacto">

                        <h3>
                            100+
                        </h3>

                        <p>
                            Voluntários
                        </p>

                    </div>

                </div>

            </section>


            <section id="projetos">

                <h2>
                    Conheça nossos projetos
                </h2>

                <div class="projetos-cards">

                    ${projetosDestaque}

                </div>

            </section>


            ${this.sobre()}


            <section id="ajuda">

                <h2>
                    Como você pode ajudar
                </h2>

                <p>
                    Existem várias formas de contribuir com o nosso
                    trabalho. Você pode participar como voluntário,
                    fazer uma doação ou ajudar divulgando nossas campanhas.
                </p>

                <a
                    class="botao"
                    href="#cadastro"
                    data-rota="cadastro"
                >
                    Quero ser voluntário
                </a>

            </section>
        `;
    },


    /* ======================================
       SOBRE
    ====================================== */

    sobre() {

        return `

            <section id="sobre">

                <h2>
                    Sobre nós
                </h2>

                <p>
                    A ONG Esperança em Ação trabalha para aproximar
                    pessoas que querem ajudar de comunidades que
                    precisam de apoio.
                </p>

                <h3>
                    Nossa missão
                </h3>

                <p>
                    Promover ações sociais que contribuam para melhorar
                    a qualidade de vida das pessoas e fortalecer
                    a solidariedade.
                </p>

                <h3>
                    Como atuamos
                </h3>

                <p>
                    Desenvolvemos projetos sociais, campanhas de
                    arrecadação e atividades de voluntariado com
                    a participação da comunidade.
                </p>

            </section>
        `;
    },


    /* ======================================
       PÁGINA DE PROJETOS
    ====================================== */

    paginaProjetos() {

        const cards =
            this.projetos
                .map(
                    projeto =>
                        this.cardProjeto(projeto)
                )
                .join("");


        return `

            <section>

                <h2>
                    Nossos projetos
                </h2>

                <p>
                    Conheça as iniciativas desenvolvidas
                    pela Esperança em Ação.
                </p>

                <div class="projetos-cards">

                    ${cards}

                </div>

            </section>


            <section id="voluntariado">

                <h2>
                    Voluntariado
                </h2>

                <p>
                    Quem deseja colaborar pode participar das
                    atividades como voluntário.
                </p>

                <h3>
                    Como participar
                </h3>

                <p>
                    Para se tornar um voluntário, basta preencher
                    o formulário de cadastro.
                </p>

                <ol>

                    <li>
                        Escolha uma atividade de interesse.
                    </li>

                    <li>
                        Entre em contato com a ONG.
                    </li>

                    <li>
                        Faça seu cadastro como voluntário.
                    </li>

                    <li>
                        Participe das ações.
                    </li>

                </ol>

                <a
                    class="botao"
                    href="#cadastro"
                    data-rota="cadastro"
                >
                    Fazer cadastro
                </a>

            </section>


            <section id="doacoes">

                <h2>
                    Campanhas de doação
                </h2>

                <p>
                    As doações ajudam a manter nossos projetos
                    e permitem que mais pessoas sejam atendidas.
                </p>

                <h3>
                    O que pode ser doado?
                </h3>

                <ul>

                    <li>
                        Alimentos não perecíveis
                    </li>

                    <li>
                        Roupas e cobertores
                    </li>

                    <li>
                        Materiais escolares
                    </li>

                    <li>
                        Contribuições financeiras
                    </li>

                </ul>

                <h3>
                    Como doar
                </h3>

                <p>
                    Para saber como realizar uma doação,
                    entre em contato conosco pelo e-mail
                    contato@esperancaemacao.org.
                </p>

            </section>
        `;
    },


    /* ======================================
       PÁGINA DE CADASTRO
    ====================================== */

    cadastro() {

        return `

            <section>

                <h2>
                    Cadastro de voluntário
                </h2>

                <p>
                    Preencha o formulário abaixo para demonstrar
                    seu interesse em participar das ações voluntárias
                    da Esperança em Ação.
                </p>

                <form
                    id="formularioCadastro"
                    class="formulario"
                    novalidate
                >

                    <div class="campo">

                        <label for="nome">
                            Nome completo:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autocomplete="name"
                            required
                        >

                        <small
                            class="mensagem-erro"
                            id="erro-nome"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            autocomplete="email"
                            required
                        >

                        <small
                            class="mensagem-erro"
                            id="erro-email"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            autocomplete="tel"
                            placeholder="(11) 99999-9999"
                            required
                        >

                        <small
                            class="mensagem-erro"
                            id="erro-telefone"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="area">
                            Área de interesse:
                        </label>

                        <select
                            id="area"
                            name="area"
                            required
                        >

                            <option value="">
                                Selecione uma opção
                            </option>

                            <option value="acao-comunitaria">
                                Ação Comunitária
                            </option>

                            <option value="educacao">
                                Educação para Todos
                            </option>

                            <option value="campanha">
                                Campanha do Agasalho
                            </option>

                            <option value="voluntariado">
                                Voluntariado em Ação
                            </option>

                        </select>

                        <small
                            class="mensagem-erro"
                            id="erro-area"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="mensagem">
                            Por que deseja ser voluntário?
                        </label>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder="Conte um pouco sobre seu interesse..."
                        ></textarea>

                        <small
                            class="mensagem-erro"
                            id="erro-mensagem"
                        ></small>

                    </div>


                    <button
                        type="submit"
                        class="botao"
                    >
                        Enviar cadastro
                    </button>


                    <div
                        id="feedbackFormulario"
                        class="feedback-formulario"
                        role="alert"
                        aria-live="polite"
                    ></div>

                </form>

            </section>
        `;
    },


    /* ======================================
       PÁGINA SOBRE NÓS
    ====================================== */

    paginaSobre() {

        return `

            <section>

                <h2>
                    Sobre nós
                </h2>

                <p>
                    A ONG Esperança em Ação trabalha para aproximar
                    pessoas que querem ajudar de comunidades que
                    precisam de apoio.
                </p>

                <h3>
                    Nossa missão
                </h3>

                <p>
                    Promover ações sociais que contribuam para melhorar
                    a qualidade de vida das pessoas e fortalecer
                    a solidariedade.
                </p>

                <h3>
                    Como atuamos
                </h3>

                <p>
                    Desenvolvemos projetos sociais, campanhas de
                    arrecadação e atividades de voluntariado com
                    a participação da comunidade.
                </p>

                <h3>
                    Nosso objetivo
                </h3>

                <p>
                    Criar oportunidades para que pessoas possam
                    colaborar com ações sociais e ajudar a transformar
                    diferentes comunidades.
                </p>

            </section>


            <section>

                <h2>
                    Como você pode ajudar
                </h2>

                <p>
                    Você pode participar como voluntário, fazer uma
                    doação ou ajudar divulgando nossas campanhas.
                </p>

                <a
                    class="botao"
                    href="#cadastro"
                    data-rota="cadastro"
                >
                    Quero ser voluntário
                </a>

            </section>

        `;
    },


    /* ======================================
       PÁGINA DE CONTATO
    ====================================== */

    paginaContato() {

        return `

            <section>

                <h2>
                    Entre em contato
                </h2>

                <p>
                    Ficou interessado em conhecer melhor nosso
                    trabalho ou participar de alguma ação?
                    Entre em contato conosco.
                </p>

                <h3>
                    E-mail
                </h3>

                <p>
                    contato@esperancaemacao.org
                </p>

                <h3>
                    Telefone
                </h3>

                <p>
                    (11) 99999-9999
                </p>

                <h3>
                    Atendimento
                </h3>

                <p>
                    Nossa equipe está disponível para tirar dúvidas
                    sobre projetos, voluntariado e campanhas
                    de doação.
                </p>

            </section>


            <section>

                <h2>
                    Quer participar?
                </h2>

                <p>
                    Faça seu cadastro como voluntário e participe
                    das ações da Esperança em Ação.
                </p>

                <a
                    class="botao"
                    href="#cadastro"
                    data-rota="cadastro"
                >
                    Fazer cadastro
                </a>

            </section>

        `;
    },


    /* ======================================
       PÁGINA NÃO ENCONTRADA
    ====================================== */

    naoEncontrado() {

        return `

            <section>

                <h2>
                    Página não encontrada
                </h2>

                <p>
                    A página que você tentou acessar
                    não existe.
                </p>

                <a
                    class="botao"
                    href="#inicio"
                    data-rota="inicio"
                >
                    Voltar para o início
                </a>

            </section>

        `;
    }

};
