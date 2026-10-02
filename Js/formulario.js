
"use strict";

window.AppForm = {

	iniciar() {

		const formulario =
			document.getElementById("formularioCadastro");

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

		this.configurarValidacaoEmTempoReal(formulario);
	},


	configurarValidacaoEmTempoReal(formulario) {

		const campos =
			formulario.querySelectorAll(
				"input, select, textarea"
			);

		campos.forEach(campo => {

			campo.addEventListener(
				"blur",
				() => this.validarCampo(campo)
			);

			campo.addEventListener(
				"input",
				() => {

					if (
						campo.classList.contains(
							"campo-com-erro"
						)
					) {
						this.validarCampo(campo);
					}
				}
			);

			campo.addEventListener(
				"change",
				() => this.validarCampo(campo)
			);
		});
	},


	validarCampo(campo) {

		const nome = campo.name;
		let mensagem = "";

		if (nome === "nome") {
			mensagem = this.validarNome(campo.value);
		}

		else if (nome === "email") {
			mensagem = this.validarEmail(campo.value);
		}

		else if (nome === "telefone") {
			mensagem = this.validarTelefone(campo.value);
		}

		else if (nome === "area") {
			mensagem = this.validarArea(campo.value);
		}

		else if (nome === "mensagem") {
			mensagem = this.validarMensagem(campo.value);
		}

		this.mostrarErro(campo, mensagem);

		return mensagem === "";
	},


	validarNome(valor) {

		const nome = valor.trim();

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


	validarEmail(valor) {

		const email = valor.trim();

		if (!email) {
			return "Informe seu e-mail.";
		}

		const formatoEmail =
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formatoEmail.test(email)) {
			return "Digite um e-mail válido.";
		}

		return "";
	},


	validarTelefone(valor) {

		const telefone = valor.trim();

		if (!telefone) {
			return "Informe seu telefone.";
		}

		const numeros =
			telefone.replace(/\D/g, "");

		if (
			numeros.length < 10 ||
			numeros.length > 11
		) {
			return "Digite um telefone válido.";
		}

		return "";
	},


	validarArea(valor) {

		if (!valor) {
			return "Selecione uma área de interesse.";
		}

		return "";
	},


	validarMensagem(valor) {

		const mensagem = valor.trim();

		if (
			mensagem.length > 0 &&
			mensagem.length < 10
		) {
			return "Digite pelo menos 10 caracteres ou deixe o campo vazio.";
		}

		return "";
	},


	mostrarErro(campo, mensagem) {

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
				erro.textContent = mensagem;
			}

		} else {

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
				erro.textContent = "";
			}
		}
	},


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
				this.validarCampo(campo);

			if (!campoValido) {
				formularioValido = false;
			}
		});

		return formularioValido;
	},


	enviar(evento) {

		evento.preventDefault();

		const formulario =
			evento.currentTarget;

		const valido =
			this.validarFormulario(formulario);

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


		const salvo =
			AppStorage.salvarCadastro(cadastro);


		if (!salvo) {

			this.mostrarFeedback(
				"O cadastro não pôde ser salvo. Tente novamente.",
				"erro"
			);

			return;
		}


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


	mostrarFeedback(mensagem, tipo) {

		const feedback =
			document.getElementById(
				"feedbackFormulario"
			);

		if (!feedback) {
			return;
		}

		feedback.textContent = mensagem;

		feedback.className =
			"feedback-formulario";

		feedback.classList.add(tipo);

		feedback.setAttribute(
			"role",
			"alert"
		);

		const reduzirMovimento =
			window.matchMedia &&
			window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;

		feedback.scrollIntoView({
			behavior: reduzirMovimento
				? "auto"
				: "smooth",
			block: "nearest"
		});
	}
};
