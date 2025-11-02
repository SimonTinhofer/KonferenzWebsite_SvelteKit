<script>
	// @ts-nocheck
	import kiIcon from '$lib/images/KIIcon.svg';
</script>

<div>
	<div class="heroLayer">
		<div class="heroContainer">
			<h1>Automatisierung der Arbeit</h1>
			<h3>3. Fachtagung am 9. März 2026</h3>
			<h2>Übernehmen bald die AI Agents?</h2>
			<img src={kiIcon} alt="" class="heroIcon" />
		</div>
	</div>
</div>

<style>
	.heroLayer {
		height: calc(100vh - var(--bigGap));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--cyan-dark);
	}
	.heroContainer {
		position: relative;
		max-width: 70%;
		display: flex;
		gap: 2em;
		flex-direction: column;
		color: #fff;
	}

	h1 {
		order: 1;
		padding: 0;
		margin-top: -0.1em;
		margin-bottom: -0.1em;
		font-weight: 700;
		font-size: clamp(2rem, 8.5vw, 40rem); /* 10vw / 16px */
		line-height: 1.2;
	}
	h2 {
		order: 3;
		padding: 0;
		margin: 0;

		font-weight: 400;
		font-size: clamp(1.25rem, 2.25vw, 17.25rem); /* 0.5px, 5vw, 3.25rem */
		word-wrap: break-word;

		max-width: 66%;
	}
	h3 {
		order: 2;
		padding: 0;
		margin: 0;
		font-weight: 500;
		font-size: clamp(1.5rem, 2.75vw, 20rem); /* 0.5px, 5vw, 3.25rem */
		word-wrap: break-word;
		max-width: 80%;
	}
	.heroIcon {
		position: absolute;
		bottom: 0rem;
		right: 0;
		height: 17.5vw;
	}

	@media (max-width: 45rem) {
		.heroContainer {
			align-items: left;
			text-align: left;
		}
		.heroIcon {
			align-self: center;
			position: inherit;
			width: max(50%, 15rem);
			height: max(50%, 15rem);
			order: 0;
		}
		h2 {
			max-width: 100%;
		}
		h3 {
			max-width: 100%;
		}
		.heroContainer {
			max-width: min(90%, 25rem);
		}
	}
</style>
