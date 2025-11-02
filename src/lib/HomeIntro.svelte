<div class="section intro">
	<div class="introContainer">
		<div class="textContainer">
			<div class="heading introHeading">
								Von ChatGPT zu AI Agents: Was kommt auf Betriebe zu?
			</div>
			<div class="content introContent">
				Während generative KI bereits im Arbeitsalltag angekommen ist, steht der nächste Schritt in der Automatisierung der Arbeit unmittelbar bevor. KI-Agenten können Beschäftigte nicht nur unterstützen, sondern immer komplexere Aufgaben eigenständig ausführen. Expert:innen aus Recht, Technik und Praxis diskutieren konkrete Anwendungsszenarien und rechtliche Anforderungen.
			</div>
		</div>
		<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
			<!-- Circle -->
			<circle cx="50" cy="50" r="50" stroke-width="2"/>

			<!-- Text in three lines -->
			<text x="50" y="35" text-anchor="middle" font-size="8" dominant-baseline="middle">
				KI-Agent der, -en:
			</text>
			<text x="50" y="50" text-anchor="middle" font-size="8" dominant-baseline="middle">
				arbeitet autonom
			</text>
			<text x="50" y="65" text-anchor="middle" font-size="8" dominant-baseline="middle">
				24/7, ohne Pause
			</text>
		</svg>
	</div>
</div>

<style>
	circle{
		fill: var(--cyan);
	}
	.heading {
		font-size: var(--fs-h);
		font-weight: 500;
	}
	.content {
		font-weight: 400;
	}

	.intro {
		background-color: var(--white-dark);
		color: var(--cyan);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.introContainer {
		padding: var(--largerGap);
		min-height: var(--min-height);
		max-width: var(--max-width);
		gap: 4rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.textContainer {
		flex-grow: 1;
		text-align: left;
		max-width: 50ch;
		font-size: var(--fs-p);
	}
	.introHeading {
		align-self: flex-start;
	}
	.introContent {
		margin-top: var(--midGap);
		align-self: flex-end;
	}
	svg {
		border: none;
		fill: var(--white);
		width: max(33%, 12rem);
		flex-shrink: 0;
	}
	@media (max-width: 45rem) {
		.introContainer {
			flex-direction: column;
		}
		svg {
			width: min(80%, 25rem);
		}
	}
</style>
