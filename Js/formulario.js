/* ==========================================
   FORMULARIO.JS
   Validação e envio do formulário
   Esperança em Ação
========================================== */

"use strict";


window.AppForm = {

    /* ======================================
       INICIAR FORMULÁRIO
    ====================================== */

    iniciar() {

        const formulario =
            document.getElementById(
                "formularioCadastro"
            );


        if (!formulario) {

            console.warn(
                "Formulário de cadastro não encontrado."
            );

            return;
        }


        formulario.addEventListener(
            "submit",
            evento => this.enviar(evento)
        );


        this.configurarValidacaoEmTempoReal(
            formulario
        );
    },


    /* ======================================
       CONFIGURAR VALIDAÇÃO EM TEMPO REAL
    ====================================== */

    configurarValidacaoEmTempoReal(
        formulario
    ) {

        const campos =
            formulario.querySelectorAll(
                "input, select, textarea"
            );


        campos.forEach(campo => {

            campo.addEventListener(
                "blur",
                () => {

                    this.validarCampo(
                        campo
                    );

                }
            );


            campo.addEventListener(
                "input",
                () => {

                    if (
                        campo.classList.contains(
                            "campo-com-erro"
                        )
                    ) {

                        this.validarCampo(
                            campo
                        );
                    }

                }
            );


            campo.addEventListener(
                "change",
                () => {

                    this.validarCampo(
                        campo
                    );

                }
            );

        });
    },


    /* ======================================
       VALIDAR UM CAMPO
    ====================================== */

    validarCampo(campo) {

        const nome =
            campo.name;


        let mensagem = "";


        if (nome === "nome") {

            mensagem =
                this.validarNome(
                    campo.value
                );
        }


        else if (nome === "email") {

            mensagem =
                this.validarEmail(
                    campo.value
                );
        }


        else if (nome === "telefone") {

            mensagem =
                this.validarTelefone(
                    campo.value
                );
        }


        else if (nome === "area") {

            mensagem =
                this.validarArea(
                    campo.value
                );
        }


        else if (nome === "mensagem") {

            mensagem =
                this.validarMensagem(
                    campo.value
                );
        }


        this.mostrarErro(
            campo,
            mensagem
        );


        return mensagem === "";
    },


    /* ======================================
       VALIDAR NOME
    ====================================== */

    validarNome(valor) {

        const nome =
            valor.trim();


        if (!nome) {

            return "Informe seu nome completo.";
        }


        if (nome.length < 3) {

            return "Digite pelo menos 3 caracteres.";
        }


        if (!nome.includes(" ")) {

            return "Informe nome e sobrenome.";
        }


        return "";
    },


    /* ======================================
       VALIDAR E-MAIL
    ====================================== */

    validarEmail(valor) {

        const email =
            valor.trim();


        if (!email) {

            return "Informe seu e-mail.";
        }


        const formatoEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !formatoEmail.test(email)
        ) {

            return "Digite um e-mail válido.";
        }


        return "";
    },


    /* ======================================
       VALIDAR TELEFONE
    ====================================== */

    validarTelefone(valor) {

        const telefone =
            valor.trim();


        if (!telefone) {

            return "Informe seu telefone.";
        }


        const numeros =
            telefone.replace(
                /\D/g,
                ""
            );


        if (
            numeros.length < 10 ||
            numeros.length > 11
        ) {

            return "Digite um telefone válido.";
        }


        return "";
    },


    /* ======================================
       VALIDAR ÁREA
    ====================================== */

    validarArea(valor) {

        if (!valor) {

            return "Selecione uma área de interesse.";
        }


        return "";
    },


    /* ======================================
       VALIDAR MENSAGEM
    ====================================== */

    validarMensagem(valor) {

        const mensagem =
            valor.trim();


        if (
            mensagem.length > 0 &&
            mensagem.length < 10
        ) {

            return "Digite pelo menos 10 caracteres ou deixe o campo vazio.";
        }


        return "";
    },


    /* ======================================
       MOSTRAR ERRO DO CAMPO
    ====================================== */

    mostrarErro(
        campo,
        mensagem
    ) {

        const erro =
            document.getElementById(
                `erro-${campo.name}`
            );


        if (mensagem) {

            campo.classList.add(
                "campo-com-erro"
            );


            campo.classList.remove(
                "campo-valido"
            );


            campo.setAttribute(
                "aria-invalid",
                "true"
            );


            if (erro) {

                erro.textContent =
                    mensagem;
            }

        }

        else {

            campo.classList.remove(
                "campo-com-erro"
            );


            campo.classList.add(
                "campo-valido"
            );


            campo.setAttribute(
                "aria-invalid",
                "false"
            );


            if (erro) {

                erro.textContent =
                    "";
            }

        }
    },


    /* ======================================
       VALIDAR FORMULÁRIO COMPLETO
    ====================================== */

    validarFormulario(formulario) {

        const campos = [

            formulario.elements.nome,

            formulario.elements.email,

            formulario.elements.telefone,

            formulario.elements.area,

            formulario.elements.mensagem

        ];


        let formularioValido = true;


        campos.forEach(campo => {

            const campoValido =
                this.validarCampo(
                    campo
                );


            if (!campoValido) {

                formularioValido = false;
            }

        });


        return formularioValido;
    },


    /* ======================================
       ENVIAR FORMULÁRIO
    ====================================== */

    enviar(evento) {

        evento.preventDefault();


        const formulario =
            evento.currentTarget;


        const valido =
            this.validarFormulario(
                formulario
            );


        if (!valido) {

            this.mostrarFeedback(
                "Corrija os campos destacados antes de enviar o cadastro.",
                "erro"
            );


            const primeiroErro =
                formulario.querySelector(
                    ".campo-com-erro"
                );


            if (primeiroErro) {

                primeiroErro.focus();
            }


            return;
        }


        /* ================================
           VERIFICAR LOCALSTORAGE
        ================================= */

        if (
            !window.AppStorage ||
            !AppStorage.disponivel()
        ) {

            this.mostrarFeedback(
                "Não foi possível salvar o cadastro neste navegador.",
                "erro"
            );


            return;
        }


        /* ================================
           PEGAR DADOS DO FORMULÁRIO
        ================================= */

        const cadastro = {

            nome:
                formulario.elements.nome.value.trim(),

            email:
                formulario.elements.email.value.trim(),

            telefone:
                formulario.elements.telefone.value.trim(),

            area:
                formulario.elements.area.value,

            mensagem:
                formulario.elements.mensagem.value.trim()

        };


        /* ================================
           SALVAR
        ================================= */

        const salvo =
            AppStorage.salvarCadastro(
                cadastro
            );


        if (!salvo) {

            this.mostrarFeedback(
                "O cadastro não pôde ser salvo. Tente novamente.",
                "erro"
            );


            return;
        }


        /* ================================
           SUCESSO
        ================================= */

        this.mostrarFeedback(
            "Cadastro realizado com sucesso! Obrigado por querer fazer parte da Esperança em Ação.",
            "sucesso"
        );


        formulario.reset();


        const campos =
            formulario.querySelectorAll(
                "input, select, textarea"
            );


        campos.forEach(campo => {

            campo.classList.remove(
                "campo-valido",
                "campo-com-erro"
            );


            campo.removeAttribute(
                "aria-invalid"
            );

        });


        if (
            window.AppNavigation &&
            typeof AppNavigation.mostrarToast ===
            "function"
        ) {

            AppNavigation.mostrarToast(
                "Cadastro realizado com sucesso!"
            );
        }

    },


    /* ======================================
       MOSTRAR FEEDBACK DO FORMULÁRIO
    ====================================== */

    mostrarFeedback(
        mensagem,
        tipo
    ) {

        const feedback =
            document.getElementById(
                "feedbackFormulario"
            );


        if (!feedback) {
            return;
        }


        feedback.textContent =
            mensagem;


        feedback.className =
            "feedback-formulario";


        feedback.classList.add(
            tipo
        );


        feedback.setAttribute(
            "role",
            "alert"
        );


        feedback.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }

};
