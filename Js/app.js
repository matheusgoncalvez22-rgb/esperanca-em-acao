/* ==========================================
   APP.JS
   Arquivo principal da aplicação
   Esperança em Ação
========================================== */

"use strict";


/* ==========================================
   INICIALIZAÇÃO DA APLICAÇÃO
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacao
);


/* ==========================================
   FUNÇÃO PRINCIPAL
========================================== */

function iniciarAplicacao() {

    console.log(
        "Iniciando Esperança em Ação..."
    );


    try {

        /* ==================================
           VERIFICAR ELEMENTO PRINCIPAL
        ================================== */

        const app =
            document.getElementById("app");


        if (!app) {

            throw new Error(
                "O elemento #app não foi encontrado no index.html."
            );
        }


        /* ==================================
           VERIFICAR STORAGE.JS
        ================================== */

        if (
            typeof window.AppStorage === "undefined"
        ) {

            throw new Error(
                "A dependência storage.js não foi carregada."
            );
        }


        /* ==================================
           VERIFICAR TEMPLATES.JS
        ================================== */

        if (
            typeof window.AppTemplates === "undefined"
        ) {

            throw new Error(
                "A dependência templates.js não foi carregada."
            );
        }


        /* ==================================
           VERIFICAR FORMULARIO.JS
        ================================== */

        if (
            typeof window.AppForm === "undefined"
        ) {

            throw new Error(
                "A dependência formulario.js não foi carregada."
            );
        }


        /* ==================================
           VERIFICAR NAVEGACAO.JS
        ================================== */

        if (
            typeof window.AppNavigation === "undefined"
        ) {

            throw new Error(
                "A dependência navegacao.js não foi carregada."
            );
        }


        /* ==================================
           VERIFICAR FUNÇÃO DE NAVEGAÇÃO
        ================================== */

        if (
            typeof window.AppNavigation.iniciar !== "function"
        ) {

            throw new Error(
                "A função AppNavigation.iniciar() não está disponível."
            );
        }


        /* ==================================
           INICIAR A SPA
        ================================== */

        window.AppNavigation.iniciar();


        console.log(
            "Esperança em Ação iniciada com sucesso."
        );

    }

    catch (erro) {

        tratarErroInicializacao(
            erro
        );
    }
}


/* ==========================================
   TRATAMENTO DE ERROS
========================================== */

function tratarErroInicializacao(erro) {

    console.error(
        "Erro ao iniciar a aplicação:",
        erro
    );


    const app =
        document.getElementById("app");


    if (!app) {
        return;
    }


    app.innerHTML = `

        <section class="erro-aplicacao">

            <h2>
                Não foi possível carregar a aplicação
            </h2>

            <p>
                Ocorreu um problema ao iniciar o sistema.
                Verifique se todos os arquivos JavaScript
                estão na pasta correta.
            </p>

            <p>
                Abra o console do navegador para ver
                mais detalhes sobre o erro.
            </p>

            <button
                type="button"
                class="botao"
                onclick="location.reload()"
            >
                Tentar novamente
            </button>

        </section>

    `;
}
