"use strict";

const appTemplates = {

    cabecalho() {
        return `
            <header>

                <a class="link-pular" href="#app">
                    Pular para o conteúdo principal
                </a>

                <div class="cabecalho-conteudo">

                    <h1>Esperança em Ação</h1>

                    <button
                        type="button"
                        class="menu-controle"
                        aria-expanded="false"
                        aria-controls="menuPrincipal"
                        aria-label="Abrir menu"
                    >
                        <span class="menu-icone" aria-hidden="true">☰</span>
                    </button>

                    <nav aria-label="Navegação principal">

                        <ul id="menuPrincipal">

                            <li>
                                <a href="#inicio" data-rota="inicio">
                                    Início
                                </a>
                            </li>

                            <li>
                                <a href="#projetos" data-rota="projetos">
                                    Projetos
                                </a>
                            </li>

                            <li>
                                <a href="#cadastro" data-rota="cadastro">
                                    Cadastro
                                </a>
                            </li>

                            <li>
                                <a href="#sobre" data-rota="sobre">
                                    Sobre nós
                                </a>
                            </li>

                            <li>
                                <a href="#contato" data-rota="contato">
                                    Contato
                                </a>
                            </li>

                        </ul>

                    </nav>

                </div>

            </header>
        `;
    },


    rodape() {
        return `
            <footer>

                <h2>Entre em contato</h2>

                <address>

                    <p>
                        E-mail:
                        <a href="mailto:contato@esperancaemacao.org">
                            contato@esperancaemacao.org
                        </a>
                    </p>

                    <p>
                        Telefone:
                        <a href="tel:+5511999999999">
                            (11) 99999-9999
                        </a>
                    </p>

                </address>

                <p>
                    &copy; 2026 Esperança em Ação -
                    Todos os direitos reservados.
                </p>

            </footer>
        `;
    },


    projetos: [

        {
            id: "alimentando-esperanca",
            nome: "Alimentando Esperança",
            descricao: "Campanha de arrecadação de alimentos para famílias em situação de vulnerabilidade.",
            categoria: "Doação"
        },

        {
            id: "educacao-para-todos",
            nome: "Educação para Todos",
            descricao: "Projeto voltado para apoiar crianças e jovens por meio da educação e do acesso ao conhecimento.",
            categoria: "Educação"
        },

        {
            id: "maos-que-ajudam",
            nome: "Mãos que Ajudam",
            descricao: "Programa que conecta voluntários a ações sociais realizadas em diferentes comunidades.",
            categoria: "Voluntariado"
        },

        {
            id: "acao-comunitaria",
            nome: "Ação Comunitária",
            descricao: "Ações de apoio às comunidades, oferecendo atividades e recursos para pessoas que precisam de ajuda.",
            categoria: "Ação social"
        },

        {
            id: "campanha-do-agasalho",
            nome: "Campanha do Agasalho",
            descricao: "Arrecadação de roupas e cobertores para pessoas em situação de vulnerabilidade.",
            categoria: "Doação"
        },

        {
            id: "voluntariado-em-acao",
            nome: "Voluntariado em Ação",
            descricao: "Programa que conecta pessoas interessadas em ajudar com atividades e campanhas sociais.",
            categoria: "Voluntariado"
        }

    ],


    cardProjeto(projeto = {}) {
        const projetoId = projeto.id || "projeto";
        const nome = projeto.nome || "Projeto";
        const descricao = projeto.descricao || "Descrição em breve.";
        const categoria = projeto.categoria || "Geral";

        return `
            <article class="card-projeto" id="${projetoId}">

                <span
                    class="badge"
                    aria-label="Status do projeto: ativo"
                >
                    Ativo
                </span>

                <h3>${nome}</h3>

                <p>
                    ${descricao}
                </p>

                <p>
                    <strong>Área:</strong>
                    ${categoria}
                </p>

                <a
                    class="botao"
                    href="#projetos"
                    data-rota="projetos"
                    aria-label="Saiba mais sobre o projeto ${nome}"
                >
                    Saiba mais
                </a>

            </article>
        `;
    },


    inicio() {

        const listaProjetos = Array.isArray(this.projetos) ? this.projetos : [];
        const projetosDestaque = listaProjetos
            .slice(0, 3)
            .map(projeto => this.cardProjeto(projeto))
            .join("");

        return `

            <section
                id="inicio"
                class="hero"
                aria-labelledby="titulo-principal"
            >

                <div class="hero-conteudo">

                    <h2 id="titulo-principal">
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
                    width="1200"
                    height="800"
                    loading="eager"
                    decoding="async"
                >

            </section>


            <section class="feedback" aria-label="Informação">

                <div
                    class="alerta sucesso"
                    role="status"
                >
                    <strong>✓ Sucesso!</strong>

                    <span>
                        Os projetos estão disponíveis para consulta.
                    </span>
                </div>

            </section>


            <section
                class="impacto"
                aria-labelledby="titulo-impacto"
            >

                <h2 id="titulo-impacto">
                    Nosso impacto
                </h2>

                <div class="impacto-cards">

                    <div class="card-impacto">
                        <h3>500+</h3>
                        <p>Pessoas ajudadas</p>
                    </div>

                    <div class="card-impacto">
                        <h3>20+</h3>
                        <p>Projetos realizados</p>
                    </div>

                    <div class="card-impacto">
                        <h3>100+</h3>
                        <p>Voluntários</p>
                    </div>

                </div>

            </section>


            <section
                id="projetos"
                aria-labelledby="titulo-projetos"
            >

                <h2 id="titulo-projetos">
                    Conheça nossos projetos
                </h2>

                <div class="projetos-cards">
                    ${projetosDestaque}
                </div>

            </section>


            ${this.sobre()}


            <section
                id="ajuda"
                aria-labelledby="titulo-ajuda"
            >

                <h2 id="titulo-ajuda">
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


    sobre() {

        return `

            <section
                id="sobre"
                aria-labelledby="titulo-sobre"
            >

                <h2 id="titulo-sobre">
                    Sobre nós
                </h2>

                <p>
                    A ONG Esperança em Ação trabalha para aproximar
                    pessoas que querem ajudar de comunidades que
                    precisam de apoio.
                </p>

                <h3>Nossa missão</h3>

                <p>
                    Promover ações sociais que contribuam para melhorar
                    a qualidade de vida das pessoas e fortalecer
                    a solidariedade.
                </p>

                <h3>Como atuamos</h3>

                <p>
                    Desenvolvemos projetos sociais, campanhas de
                    arrecadação e atividades de voluntariado com
                    a participação da comunidade.
                </p>

            </section>
        `;
    },


    paginaProjetos() {

        const listaProjetos = Array.isArray(this.projetos) ? this.projetos : [];
        const cards = listaProjetos
            .map(projeto => this.cardProjeto(projeto))
            .join("");

        return `

            <section aria-labelledby="titulo-projetos">

                <h2 id="titulo-projetos">
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


            <section
                id="voluntariado"
                aria-labelledby="titulo-voluntariado"
            >

                <h2 id="titulo-voluntariado">
                    Voluntariado
                </h2>

                <p>
                    Quem deseja colaborar pode participar das
                    atividades como voluntário.
                </p>

                <h3>Como participar</h3>

                <p>
                    Para se tornar um voluntário, basta preencher
                    o formulário de cadastro.
                </p>

                <ol>

                    <li>Escolha uma atividade de interesse.</li>

                    <li>Entre em contato com a ONG.</li>

                    <li>Faça seu cadastro como voluntário.</li>

                    <li>Participe das ações.</li>

                </ol>

                <a
                    class="botao"
                    href="#cadastro"
                    data-rota="cadastro"
                >
                    Fazer cadastro
                </a>

            </section>


            <section
                id="doacoes"
                aria-labelledby="titulo-doacoes"
            >

                <h2 id="titulo-doacoes">
                    Campanhas de doação
                </h2>

                <p>
                    As doações ajudam a manter nossos projetos
                    e permitem que mais pessoas sejam atendidas.
                </p>

                <h3>O que pode ser doado?</h3>

                <ul>
                    <li>Alimentos não perecíveis</li>
                    <li>Roupas e cobertores</li>
                    <li>Materiais escolares</li>
                    <li>Contribuições financeiras</li>
                </ul>

                <h3>Como doar</h3>

                <p>
                    Para saber como realizar uma doação,
                    entre em contato conosco pelo e-mail
                    <a href="mailto:contato@esperancaemacao.org">
                        contato@esperancaemacao.org
                    </a>.
                </p>

            </section>
        `;
    },


    cadastro() {

        return `

            <section aria-labelledby="titulo-cadastro">

                <h2 id="titulo-cadastro">
                    Cadastro de voluntário
                </h2>

                <p id="descricao-formulario">
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
                            <span aria-hidden="true">*</span>
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autocomplete="name"
                            required
                            minlength="3"
                            aria-required="true"
                            aria-describedby="erro-nome"
                        >

                        <small
                            class="mensagem-erro"
                            id="erro-nome"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="email">
                            E-mail:
                            <span aria-hidden="true">*</span>
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            autocomplete="email"
                            required
                            aria-required="true"
                            aria-describedby="erro-email"
                        >

                        <small
                            class="mensagem-erro"
                            id="erro-email"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="telefone">
                            Telefone:
                            <span aria-hidden="true">*</span>
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            autocomplete="tel"
                            placeholder="(11) 99999-9999"
                            inputmode="tel"
                            required
                            aria-required="true"
                            aria-describedby="erro-telefone"
                        >

                        <small
                            class="mensagem-erro"
                            id="erro-telefone"
                        ></small>

                    </div>


                    <div class="campo">

                        <label for="area">
                            Área de interesse:
                            <span aria-hidden="true">*</span>
                        </label>

                        <select
                            id="area"
                            name="area"
                            required
                            aria-required="true"
                            aria-describedby="erro-area"
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


                    <div class="campo campo-largo">

                        <label for="mensagem">
                            Por que deseja ser voluntário?
                        </label>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder="Conte um pouco sobre seu interesse..."
                            minlength="10"
                            aria-describedby="erro-mensagem"
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
                        aria-atomic="true"
                    ></div>

                </form>

            </section>
        `;
    },


    paginaSobre() {

        return `

            <section aria-labelledby="titulo-sobre-pagina">

                <h2 id="titulo-sobre-pagina">
                    Sobre nós
                </h2>

                <p>
                    A ONG Esperança em Ação trabalha para aproximar
                    pessoas que querem ajudar de comunidades que
                    precisam de apoio.
                </p>

                <h3>Nossa missão</h3>

                <p>
                    Promover ações sociais que contribuam para melhorar
                    a qualidade de vida das pessoas e fortalecer
                    a solidariedade.
                </p>

                <h3>Como atuamos</h3>

                <p>
                    Desenvolvemos projetos sociais, campanhas de
                    arrecadação e atividades de voluntariado com
                    a participação da comunidade.
                </p>

                <h3>Nosso objetivo</h3>

                <p>
                    Criar oportunidades para que pessoas possam
                    colaborar com ações sociais e ajudar a transformar
                    diferentes comunidades.
                </p>

            </section>


            <section aria-labelledby="titulo-ajuda-sobre">

                <h2 id="titulo-ajuda-sobre">
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


    paginaContato() {

        return `

            <section aria-labelledby="titulo-contato">

                <h2 id="titulo-contato">
                    Entre em contato
                </h2>

                <p>
                    Ficou interessado em conhecer melhor nosso
                    trabalho ou participar de alguma ação?
                    Entre em contato conosco.
                </p>

                <h3>E-mail</h3>

                <p>
                    <a href="mailto:contato@esperancaemacao.org">
                        contato@esperancaemacao.org
                    </a>
                </p>

                <h3>Telefone</h3>

                <p>
                    <a href="tel:+5511999999999">
                        (11) 99999-9999
                    </a>
                </p>

                <h3>Atendimento</h3>

                <p>
                    Nossa equipe está disponível para tirar dúvidas
                    sobre projetos, voluntariado e campanhas
                    de doação.
                </p>

            </section>


            <section aria-labelledby="titulo-participar">

                <h2 id="titulo-participar">
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


    naoEncontrado() {

        return `

            <section
                class="feedback-formulario erro"
                aria-labelledby="titulo-nao-encontrado"
                role="alert"
            >

                <h2 id="titulo-nao-encontrado">
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

Object.keys(appTemplates).forEach((chave) => {
    if (typeof appTemplates[chave] === "function") {
        appTemplates[chave] = appTemplates[chave].bind(appTemplates);
    }
});

window.AppTemplates = appTemplates;
