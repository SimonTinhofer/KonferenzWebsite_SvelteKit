<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import logoPng from '$lib/images/Logo.svg';
	import gsap from 'gsap';
	import { navbarAnimation, navbarSetup } from './AnimationStore';
	export var isBurgerActivated = false;
	/**@type {HTMLDivElement}*/
	let navBar;
	/**@type {HTMLDivElement}*/
	let burgerMenu;
	/**@type {HTMLButtonElement}*/
	let openButton;
	/**@type {HTMLButtonElement}*/
	let closeButton;

	$: $page.url.pathname, updateActive();
	let isMounted = false;
	onMount(() => {
		isMounted = true;
		updateActive();
	});

	function updateActive() {
		if (isMounted) {
			const pathname = $page.url.pathname;

			for (let i = 0; i < navBar.children.length; i++) {
				const link = navBar.children[i];
				const burgerA = burgerMenu.children[i];
				if (pathname === link.getAttribute('href')) {
					link.classList.add('active');
					burgerA.classList.add('activeBurger');
				} else {
					link.classList.remove('active');
					burgerA.classList.remove('activeBurger');
				}
			}
		}
	}

	function toggleBurgerBool() {
		isBurgerActivated = !isBurgerActivated;
		checkisBurgerActivated();
	}
	function checkisBurgerActivated() {
		if (isBurgerActivated) {
			burgerMenu.classList.remove('hide');
			openButton.classList.add('hide');
			closeButton.classList.remove('hide');
		} else {
			burgerMenu.classList.add('hide');
			openButton.classList.remove('hide');
			closeButton.classList.add('hide');
		}
	}

	let header;

	function setupNavbar() {
		gsap.set(header, { opacity: 0 });
	}
	function animateNavbar() {
		gsap.to(header, { opacity: 1, duration: 1, ease: 'power2.in' });
	}

	navbarAnimation.set(animateNavbar);
	navbarSetup.set(setupNavbar);
</script>

<header bind:this={header}>
	<span class="logoContainer">
		<img
			src={logoPng}
			alt="Das Logo des Anwaltes Dr. Andreas Tinhofer und der Wirtschaftsuniversität Wien"
		/>
		<a class="kanzleiLink" href="https://www.labourlaw.at/" , target="_blank"> </a>
		<a class="wuLink" href="https://www.wu.ac.at/ars/home" target="_blank"> </a>
	</span>
	<button
		on:click={toggleBurgerBool}
		name="Burger-Menü öffnen"
		class="headerButton"
		bind:this={openButton}
	>
		<svg id="burgerMenuEnter" class="burgerMenuSvg" viewBox="0 0 10 8">
			<path d="M1 1h8M1 4h 8M1 7h8" stroke-width="1.5" stroke-linecap="round" />
		</svg>
	</button>

	<button
		on:click={toggleBurgerBool}
		name="Burger-Menü öffnen"
		class=" headerButton hide"
		bind:this={closeButton}
	>
		<svg
			class="burgerMenuSvg"
			width="40"
			viewBox="0 0 56 53"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width="65.5145"
				height="11.1251"
				rx="4"
				transform="matrix(0.72233 0.691549 -0.72233 0.691549 8.03589 0)"
				fill="#FFF"
			/>
			<rect
				width="65.5145"
				height="11.1251"
				rx="4"
				transform="matrix(0.72233 -0.691549 0.72233 0.691549 0 45.3065)"
				fill="#FFF"
			/>
		</svg>
	</button>

	<div class="navBar headerContentsContainer" bind:this={navBar}>
		<a class="hyperLink" href="/">Home</a>
		<a class="hyperLink" href="/programme">Programme</a>
		<a class="hyperLink" href="/people">People</a>
		<a class="hyperLink" href="/sponsoring">Sponsoring</a>
		<a class="hyperLink" href="/slides">Slides</a>
		<a class="hyperLink" href="/blog">Blog</a>
	</div>
</header>
<div class="burgerNavigation unselectable-text hide" bind:this={burgerMenu}>
	<a class="burgerRow" href="/" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Home</span></a
	>
	<a class="burgerRow" href="/programme" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Programme</span></a
	>
	<a class="burgerRow" href="/people" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">People</span></a
	>
	<a class="burgerRow" href="/sponsoring" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Sponsoring</span></a
	>
	<a class="burgerRow" href="/slides" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Slides</span></a
	>
	<a class="burgerRow" href="/blog" on:click={toggleBurgerBool}
		><span class="burgerHyperlink">Blog</span></a
	>
</div>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		width: 100%;
		height: var(--bigGap);
		background: var(--cyan);
		z-index: 3;
		filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 3px 3px);
	}
	button {
		border: none;
		background: none;
		padding: 0;
		width: fit-content;
		height: fit-content;
	}
	.navBar {
		display: none;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1.5625rem; /* 25px / 16px */

		padding-top: 0.0625rem; /* 1px / 16px */
		padding-bottom: 0.0625rem; /* 1px / 16px */
		margin-left: auto;
	}
	.hyperLink {
		color: var(--white);
		font-size: clamp(1rem, 1.7vw, 1.5rem); /* 24px / 16px */
		font-weight: 400;
		text-decoration: none;
		word-wrap: break-word;
		cursor: pointer;
	}

	.hyperLink:hover {
		transform: translateY(-0.125rem);
	}
	@media (min-width: 60rem) {
		.navBar {
			display: inline-flex;
		}
		.burgerMenuSvg {
			display: none;
		}
	}
	img {
		height: 3rem;
	}
	.headerButton {
		margin-right: 1rem;
	}
	.headerContentsContainer {
		margin: var(--midGap);
	}
	.logoContainer {
		max-width: min(18rem, 65%);
		margin: 1rem;
		position: relative;
	}
	.logoContainer:hover {
		transform: translateY(-0.125rem);
	}
	.kanzleiLink {
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0;
		width: 60%;
		height: 100%;
	}
	.wuLink {
		position: absolute;
		display: inline-block;
		right: 0;
		top: 0;
		width: 40%;
		height: 100%;
	}
</style>
