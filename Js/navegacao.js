/* ==========================================
   NAVEGACAO.JS
   Lógica de navegação da SPA
   Esperança em Ação
========================================== */

window.AppNavigation = {

    /* ======================================
       INICIAR A SPA
    ====================================== */

    iniciar() {

        this.carregarEstrutura();

        window.addEventListener(
            "hashchange",
            () => this.processarRota()
        );

        document.addEventListener(
            "click",
            evento => this.interceptarLinks(evento)
        );

        this.processarRota();
    },


    /* ======================================
       CARREGAR CABEÇALHO E RODAPÉ
    ====================================== */

    carregarEstrutura() {

        const cabecalho =
            document.getElementById("cabecalho");

        const rodape =
            document.getElementById("rodape");


        if (cabecalho) {

            cabecalho.innerHTML =
                AppTemplates.cabecalho();
        }


        if (rodape) {

            rodape.innerHTML =
                AppTemplates.rodape();
        }
    },


    /* ======================================
       INTERCEPTAR LINKS
    ====================================== */

    interceptarLinks(evento) {

        const link =
            evento.target.closest(
                "a[data-rota]"
            );


        if (!link) {
            return;
        }


        const rota =
            link.dataset.rota;


        if (!rota) {
            return;
        }


        evento.preventDefault();

        this.irPara(rota);
    },


    /* ======================================
       MUDAR DE ROTA
    ====================================== */

    irPara(rota) {

        if (!rota) {
            rota = "inicio";
        }


        window.location.hash =
            rota;
    },


    /* ======================================
       PROCESSAR ROTA
    ====================================== */

    processarRota() {

        let rota =
            window.location.hash
                .replace("#", "")
                .trim();


        if (!rota) {
            rota = "inicio";
        }


        const app =
            document.getElementById("app");


        if (!app) {

            console.error(
                "Elemento #app não encontrado."
            );

            return;
        }


        /* ==================================
           INÍCIO
        ================================== */

        if (rota === "inicio") {

            app.innerHTML =
                AppTemplates.inicio();

            this.atualizarMenu("inicio");

            this.irParaTopo();

            return;
        }


        /* ==================================
           PROJETOS
        ================================== */

        if (rota === "projetos") {

            app.innerHTML =
                AppTemplates.paginaProjetos();

            this.atualizarMenu("projetos");

            this.irParaTopo();

            return;
        }


        /* ==================================
           CADASTRO
        ================================== */

        if (rota === "cadastro") {

            app.innerHTML =
                AppTemplates.cadastro();

            this.atualizarMenu("cadastro");

            if (
                window.AppForm &&
                typeof AppForm.iniciar === "function"
            ) {

                AppForm.iniciar();
            }

            this.irParaTopo();

            return;
        }


        /* ==================================
           SOBRE
        ================================== */

        if (rota === "sobre") {

            app.innerHTML =
                AppTemplates.paginaSobre();

            this.atualizarMenu("sobre");

            this.irParaTopo();

            return;
        }


        /* ==================================
           CONTATO
        ================================== */

        if (rota === "contato") {

            app.innerHTML =
                AppTemplates.paginaContato();

            this.atualizarMenu("contato");

            this.irParaTopo();

            return;
        }


        /* ==================================
           ROTA NÃO ENCONTRADA
        ================================== */

        app.innerHTML =
            AppTemplates.naoEncontrado();

        this.atualizarMenu("");

        this.irParaTopo();
    },


    /* ======================================
       ATUALIZAR MENU
    ====================================== */

    atualizarMenu(rotaAtual) {

        const links =
            document.querySelectorAll(
                "nav a[data-rota]"
            );


        links.forEach(link => {

            link.classList.remove(
                "menu-ativo"
            );

            link.removeAttribute(
                "aria-current"
            );


            if (
                link.dataset.rota === rotaAtual
            ) {

                link.classList.add(
                    "menu-ativo"
                );

                link.setAttribute(
                    "aria-current",
                    "page"
                );
            }

        });
    },


    /* ======================================
       IR PARA O TOPO
    ====================================== */

    irParaTopo() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },


    /* ======================================
       MOSTRAR TOAST
    ====================================== */

    mostrarToast(mensagem) {

        let toast =
            document.getElementById("toast");


        if (!toast) {

            toast =
                document.createElement("div");

            toast.id = "toast";

            toast.className =
                "toast";

            toast.setAttribute(
                "role",
                "status"
            );

            toast.setAttribute(
                "aria-live",
                "polite"
            );

            document.body.appendChild(
                toast
            );
        }


        toast.innerHTML = `
            <span>✓</span>
            ${mensagem}
        `;


        toast.classList.add(
            "mostrar"
        );


        clearTimeout(
            this.timerToast
        );


        this.timerToast =
            setTimeout(() => {

                toast.classList.remove(
                    "mostrar"
                );

            }, 4000);
    }

};
