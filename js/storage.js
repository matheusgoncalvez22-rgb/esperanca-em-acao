/* ==========================================
   STORAGE.JS
   Gerenciamento do localStorage
   Esperança em Ação
========================================== */

"use strict";

window.AppStorage = {

    /* ======================================
       CHAVE UTILIZADA NO LOCALSTORAGE
    ====================================== */

    chave: "esperancaEmAcao_voluntarios",


    /* ======================================
       BUSCAR TODOS OS CADASTROS
    ====================================== */

    obterCadastros() {

        try {

            const dados =
                localStorage.getItem(this.chave);


            if (!dados) {
                return [];
            }


            const cadastros =
                JSON.parse(dados);


            if (!Array.isArray(cadastros)) {
                return [];
            }


            return cadastros;

        }

        catch (erro) {

            console.error(
                "Erro ao buscar cadastros:",
                erro
            );

            return [];
        }
    },


    /* ======================================
       SALVAR UM NOVO CADASTRO
    ====================================== */

    salvarCadastro(cadastro) {

        try {

            const cadastros =
                this.obterCadastros();


            const novoCadastro = {

                id: Date.now(),

                nome: cadastro.nome,

                email: cadastro.email,

                telefone: cadastro.telefone,

                area: cadastro.area,

                mensagem: cadastro.mensagem,

                dataCadastro:
                    new Date().toLocaleString("pt-BR")
            };


            cadastros.push(
                novoCadastro
            );


            localStorage.setItem(
                this.chave,
                JSON.stringify(cadastros)
            );


            return true;

        }

        catch (erro) {

            console.error(
                "Erro ao salvar cadastro:",
                erro
            );

            return false;
        }
    },


    /* ======================================
       LIMPAR TODOS OS CADASTROS
    ====================================== */

    limparCadastros() {

        try {

            localStorage.removeItem(
                this.chave
            );

            return true;

        }

        catch (erro) {

            console.error(
                "Erro ao limpar cadastros:",
                erro
            );

            return false;
        }
    },


    /* ======================================
       VERIFICAR SE O STORAGE ESTÁ DISPONÍVEL
    ====================================== */

    disponivel() {

        try {

            const teste =
                "__teste_storage__";


            localStorage.setItem(
                teste,
                "ok"
            );


            localStorage.removeItem(
                teste
            );


            return true;

        }

        catch (erro) {

            console.error(
                "localStorage indisponível:",
                erro
            );

            return false;
        }
    }

};
