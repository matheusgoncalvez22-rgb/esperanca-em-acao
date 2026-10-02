"use strict";

window.AppNavigation = {

	/* ======================================
	   INICIALIZAÇÃO
	====================================== */

	iniciar() {

		this.carregarEstrutura();

		window.addEventListener(
			"hashchange",
			() => this.processarRota()
		);

		document.addEventListener(
			"click",
			evento => this.interceptarClique(evento)
		);

		this.processarRota();
	},


	/* ======================================
	   CARREGAR HEADER E FOOTER
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
	   INTERCEPTAR CLIQUES
	====================================== */

	interceptarClique(evento) {

		const botaoMenu =
			evento.target.closest(".menu-controle");

		if (botaoMenu) {

			this.alternarMenu();

			return;
		}


		const link =
			evento.target.closest("a[data-rota]");

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

		this.fecharMenu();
	},


	/* ======================================
	   MENU HAMBÚRGUER
	====================================== */

	alternarMenu() {

		const botao =
			document.querySelector(".menu-controle");

		const menu =
			document.getElementById("menuPrincipal");

		if (!botao || !menu) {
			return;
		}


		const aberto =
			botao.getAttribute("aria-expanded") === "true";


		if (aberto) {

			this.fecharMenu();

		} else {

			this.abrirMenu();
		}
	},


	abrirMenu() {

		const botao =
			document.querySelector(".menu-controle");

		const menu =
			document.getElementById("menuPrincipal");

		if (!botao || !menu) {
			return;
		}


		botao.setAttribute(
			"aria-expanded",
			"true"
		);

		botao.setAttribute(
			"aria-label",
			"Fechar menu"
		);


		menu.classList.add("menu-aberto");
	},


	fecharMenu() {

		const botao =
			document.querySelector(".menu-controle");

		const menu =
			document.getElementById("menuPrincipal");

		if (!botao || !menu) {
			return;
		}


		botao.setAttribute(
			"aria-expanded",
			"false"
		);

		botao.setAttribute(
			"aria-label",
			"Abrir menu"
		);


		menu.classList.remove("menu-aberto");
	},


	/* ======================================
	   IR PARA UMA ROTA
	====================================== */

	irPara(rota) {

		if (!rota) {
			rota = "inicio";
		}

		window.location.hash = rota;
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


		switch (rota) {

			case "inicio":

				app.innerHTML =
					AppTemplates.inicio();

				this.atualizarMenu("inicio");

				break;


			case "projetos":

				app.innerHTML =
					AppTemplates.paginaProjetos();

				this.atualizarMenu("projetos");

				break;


			case "cadastro":

				app.innerHTML =
					AppTemplates.cadastro();

				this.atualizarMenu("cadastro");


				if (
					window.AppForm &&
					typeof AppForm.iniciar === "function"
				) {

					AppForm.iniciar();
				}

				break;


			case "sobre":

				app.innerHTML =
					AppTemplates.paginaSobre();

				this.atualizarMenu("sobre");

				break;


			case "contato":

				app.innerHTML =
					AppTemplates.paginaContato();

				this.atualizarMenu("contato");

				break;


			default:

				app.innerHTML =
					AppTemplates.naoEncontrado();

				this.atualizarMenu("");

				break;
		}


		this.fecharMenu();

		this.irParaTopo();

		this.focarConteudo();
	},


	/* ======================================
	   ATUALIZAR MENU ATIVO
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
				link.dataset.rota ===
				rotaAtual
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
	   FOCAR CONTEÚDO PRINCIPAL
	====================================== */

	focarConteudo() {

		const app =
			document.getElementById("app");


		if (!app) {
			return;
		}


		app.setAttribute(
			"tabindex",
			"-1"
		);


		try {

			app.focus({
				preventScroll: true
			});

		} catch (erro) {

			app.focus();
		}
	},


	/* ======================================
	   VOLTAR PARA O TOPO
	====================================== */

	irParaTopo() {

		const prefereMenosMovimento =
			window.matchMedia &&
			window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;


		window.scrollTo({
			top: 0,
			behavior:
				prefereMenosMovimento
					? "auto"
					: "smooth"
		});
	},


	/* ======================================
	   TOAST
	====================================== */

	mostrarToast(mensagem) {

		let toast =
			document.getElementById("toast");


		if (!toast) {

			toast =
				document.createElement("div");

			toast.id = "toast";

			toast.className = "toast";

			toast.setAttribute(
				"role",
				"status"
			);

			toast.setAttribute(
				"aria-live",
				"polite"
			);

			toast.setAttribute(
				"aria-atomic",
				"true"
			);

			document.body.appendChild(toast);
		}


		toast.replaceChildren();


		const icone =
			document.createElement("span");

		icone.textContent = "✓";

		icone.setAttribute(
			"aria-hidden",
			"true"
		);


		const texto =
			document.createElement("span");

		texto.textContent =
			mensagem;


		toast.appendChild(icone);

		toast.appendChild(texto);


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
