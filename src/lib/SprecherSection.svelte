<script>
	import AuerMayerAvif from '$lib/images/people/Auer-Mayer.avif';
	import AuerMayerWebp from '$lib/images/people/Auer-Mayer.webp';
	import AuerMayerJpg from '$lib/images/people/Auer-Mayer.jpg';

	import FuchsAvif from '$lib/images/people/Fuchs.avif';
	import FuchsWebp from '$lib/images/people/Fuchs.webp';
	import FuchsJpg from '$lib/images/people/Fuchs.jpg';

	import GiessweinAvif from '$lib/images/people/Giesswein.avif';
	import GiessweinWebp from '$lib/images/people/Giesswein.webp';
	import GiessweinJpg from '$lib/images/people/Giesswein.jpg';

	import GleißnerAvif from '$lib/images/people/Gleißner.avif';
	import GleißnerWebp from '$lib/images/people/Gleißner.webp';
	import GleißnerJpg from '$lib/images/people/Gleißner.jpg';

	import HackerAvif from '$lib/images/people/Hacker.avif';
	import HackerWebp from '$lib/images/people/Hacker.webp';
	import HackerJpg from '$lib/images/people/Hacker.jpg';

	import KietaiblAvif from '$lib/images/people/Kietaibl.avif';
	import KietaiblWebp from '$lib/images/people/Kietaibl.webp';
	import KietaiblJpg from '$lib/images/people/Kietaibl.jpg';

	import KlambauerAvif from '$lib/images/people/Klambauer.avif';
	import KlambauerWebp from '$lib/images/people/Klambauer.webp';
	import KlambauerJpg from '$lib/images/people/Klambauer.jpg';

	import MüllerAvif from '$lib/images/people/Müller.avif';
	import MüllerWebp from '$lib/images/people/Müller.webp';
	import MüllerJpg from '$lib/images/people/Müller.jpg';

	import TinhoferAvif from '$lib/images/people/Tinhofer.avif';
	import TinhoferWebp from '$lib/images/people/Tinhofer.webp';
	import TinhoferJpg from '$lib/images/people/Tinhofer.jpg';

	import WaasAvif from '$lib/images/people/Waas.avif';
	import WaasWebp from '$lib/images/people/Waas.webp';
	import WaasJpg from '$lib/images/people/Waas.jpg';

	import WendehorstAvif from '$lib/images/people/Wendehorst.avif';
	import WendehorstWebp from '$lib/images/people/Wendehorst.webp';
	import WendehorstJpg from '$lib/images/people/Wendehorst.jpg';


	import ExternalLink from '$lib/ExternalLink.svelte';
	import InternalLink from './InternalLink.svelte';
</script>

<div class="outerContainer">
	<div class="inlineContainer">
		<div class="sprecherContainer" id="Auer-Mayer">
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Susanne Auer-Mayer</h1>
				<p>
					ist Vorständin des Instituts für Österreichisches und Europäisches Arbeitsrecht und
					Sozialrecht an der Wirtschaftsuniversität Wien. Sie hat zahlreiche Publikationen zu
					verschiedenen Bereichen des Arbeits- und Sozialrechts verfasst und hält regelmäßig
					Vorträge und Seminare zu arbeits- und sozialrechtlichen Themen. Ihr Forschungsschwerpunkt
					liegt unter anderem auf den rechtlichen Auswirkungen der Digitalisierung auf die
					Arbeitswelt.
				</p>
			</div>
			<picture>
				<source srcset={AuerMayerAvif} type="image/avif" />
				<source srcset={AuerMayerWebp} type="image/webp" />
				<img
					src={AuerMayerJpg}
					alt="Portrait von Univ.-Prof. Dr. Susanne Auer-Mayer"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Fuchs">
			<div class="textContainer">
				<h1>Mag.a Monika Fuchs MSc.</h1>
				<p>
					ist HR-Managerin, Beraterin und Spezialistin für Künstliche Intelligenz im
					Personalmanagement. Sie verfügt über langjährige Erfahrung in internationalen
					HR-Leitungsfunktionen und leitet derzeit auch den HR-Bereich eines österreichischen
					Versicherungsunternehmens. Mit ihrem Beratungsunternehmen unterstützt sie Organisationen
					in den Bereichen HR-Management, Leadership und digitale Transformation mit starkem Fokus
					auf AI.
				</p>
			</div>
			<picture>
				<source srcset={FuchsAvif} type="image/avif" />
				<source srcset={FuchsWebp} type="image/webp" />
				<img
					src={FuchsJpg}
					alt="Portrait von Mag. (FH) Monika Fuchs MSc."
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Giesswein">
			<picture>
				<source srcset={GiessweinAvif} type="image/avif" />
				<source srcset={GiessweinWebp} type="image/webp" />
				<img
					src={GiessweinJpg}
					alt="Portrait von Martin Giesswein"
					loading="lazy"
					decoding="async"
				/>
			</picture>
			<div class="textContainer">
				<h1>Martin Giesswein</h1>
				<p>
					lehrt Digitalökonomie an der WU Executive Academy und ist AI Ethics Advisor des
					europäischen Draigon Projekts. Der Preisträger des Awards "Digitaler Humanismus in der
					Praxis" verfolgt als Autor, Speaker und Sparringspartner seine Berufung,
					Digitalkompetenzen bei Führungskräften zu stärken. Zuvor war er CEO und General Manager in
					der IT-Branche. www.martingiesswein.com
				</p>
			</div>
		</div>

		<div class="sprecherContainer" id="Gleißner">
			<div class="textContainer">
				<h1>Mag. Dr. Rolf Gleißner</h1>
				<p>
					leitet die Abteilung Sozial- und Gesundheitspolitik in der Wirtschaftskammer Österreich.
					Der Jurist und Politikwissenschafter wirkt seit vielen Jahren bei den wesentlichen
					Gesetzesänderungen in den Bereichen Arbeitsrecht, Sozialpolitik, Arbeitsmarkt mit und
					publiziert dazu. Seit 2007 Laienrichter am Obersten Gerichtshof und Mitglied in den
					Verwaltungsräten des Arbeitsmarktservice (AMS) sowie der Sozialversicherungsanstalt der
					Selbständigen (SVS).
				</p>
			</div>
			<picture>
				<source srcset={GleißnerAvif} type="image/avif" />
				<source srcset={GleißnerWebp} type="image/webp" />
				<img
					src={GleißnerJpg}
					alt="Portrait von Mag. Dr. Rolf Gleißner"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Hacker">
			<div class="textContainer">
				<h1>Prof. Dr. Philipp Hacker, LL.M. (Yale)</h1>
				<p>
					ist Inhaber des Lehrstuhls für Recht und Ethik der digitalen Gesellschaft an der European
					New School of Digital Studies (ENS) der Europa-Universität Viadrina Frankfurt (Oder).
					Derzeit konzentriert sich seine Forschung auf die Regulierung digitaler Technologien,
					insbesondere im Bereich der künstlichen Intelligenz. Philipp arbeitet häufig mit
					Informatikern und Mathematikern zusammen, insbesondere zu Fragen der erklärbaren KI, der
					algorithmischen Fairness und den Klimafolgen von KI. Für seine Arbeit erhielt er mehrere
					akademische Preise, darunter 2020 den Wissenschaftspreis der Deutschen Stiftung für Recht
					und Informatik. Er berät regelmäßig nationale und EU-Gesetzgeber, Regulierungsbehörden und
					die Industrie. Philipp ist Mitbegründer und Co-Leiter des International Expert Consortium
					on the Regulation, Economics and Computer Science of AI (RECSAI). Kürzlich wurde er zum
					General Editor der neuen, 11-bändigen Reihe AI and Society ernannt, die von 2025-2027 von
					Oxford University Press veröffentlicht wird. Er ist Mitglied der Task Force KI-Governance
					und des Expertenbeirats AI and Sustainability, beides jeweils bei der deutschen
					Bundesregierung, und hatte 2024/25 den Co-Vorsitz der Arbeitsgruppe „KI-Haftung“ für das
					Europäische Parlament inne.
				</p>
			</div>
			<picture>
				<source srcset={HackerAvif} type="image/avif" />
				<source srcset={HackerWebp} type="image/webp" />
				<img
					src={HackerJpg}
					alt="Portrait von Prof. Dr. Philipp Hacker, LL.M. (Yale)"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Kietaibl">
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Christoph Kietaibl</h1>
				<p>
					ist seit 2023 Professor für Arbeits- und Sozialrecht an der WU Wien. Vor seiner Berufung
					an die WU war er Professor für Privatrecht an der Universität Klagenfurt sowie
					assoziierter Professor an der Universität Wien, wo er sich auch habilitierte. Er hält
					regelmäßig Vorträge für Wissenschaft und Praxis und berät laufend zu allen Fragen des
					Arbeits-, Sozial- und Dienstrechts.
				</p>
			</div>
			<picture>
				<source srcset={KietaiblAvif} type="image/avif" />
				<source srcset={KietaiblWebp} type="image/webp" />
				<img
					src={KietaiblJpg}
					alt="Portrait von Univ.-Prof. Dr. Christoph Kietaibl"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Klambauer">
			<div class="textContainer">
				<h1>Günter Klambauer</h1>
				<p>
					ist Professor für "AI in Life Sciences" am LIT AI Lab und am Institut für Machine Learning
					an der Johannes Kepler Universität Linz. Er war maßgeblich an der Einführung des Studiums
					"Artificial Intelligence" an der JKU beteiligt, hält darin die zentralen Vorlesungen "Deep
					Learning and Neural Networks" und leitet den "Artificial Intelligence in Life Sciences"
					Studienzweig.
				</p>
			</div>
			<picture>
				<source srcset={KlambauerAvif} type="image/avif" />
				<source srcset={KlambauerWebp} type="image/webp" />
				<img
					src={KlambauerJpg}
					alt="Portrait von Günter Klambauer"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Müller">
			<div class="textContainer">
				<h1>Dr. Madeleine Müller, BA, MU</h1>
				<p>
					ist Senior Researcher und Senior Consultant am Research Institute – Digital Human Rights
					Center. Sie hat Rechtswissenschaften und Philosophie an der Universität Wien und an der
					Université Paris 1 Panthéon-Sorbonne studiert sowie einen Master in Politischer
					Philosophie an der Universitat Pompeu Fabra Barcelona abgeschlossen. Am Research Institute
					forscht, berät und lehrt sie an der Schnittstelle zwischen Recht und Geisteswissenschaften
					zu digitalen Menschenrechten mit besonderem Fokus auf Datenschutz, Künstliche Intelligenz,
					automatisierte Entscheidungsfindungen, Plattformregulierung und Betroffenenrechte.
				</p>
			</div>
			<picture>
				<source srcset={MüllerAvif} type="image/avif" />
				<source srcset={MüllerWebp} type="image/webp" />
				<img
					src={MüllerJpg}
					alt="Portrait von Dr. Madeleine Müller, BA, MU"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Tinhofer">
			<picture>
				<source srcset={TinhoferAvif} type="image/avif" />
				<source srcset={TinhoferWebp} type="image/webp" />
				<img
					src={TinhoferJpg}
					alt="Portrait von Dr. Andreas Tinhofer, LL.M."
					loading="lazy"
					decoding="async"
				/>
			</picture>
			<div class="textContainer">
				<h1>Dr. Andreas Tinhofer, LL.M.</h1>
				<p>
					ist Rechtsanwalt in Wien und Lektor an der Universität Wien und der FH des BFI Wien. Er
					berät seit über 20 Jahren Unternehmen und Führungskräfte in allen arbeitsrechtlichen
					Angelegenheiten, einschließlich Arbeitnehmerdatenschutz. Sein besonderes Interesse gilt
					dem Einsatz von KI in der Arbeitswelt.
				</p>
			</div>
		</div>

		<div class="sprecherContainer" id="Waas">
			<div class="textContainer">
				<h1>Univ.-Prof. Dr. Bernd Waas</h1>
				<p>
					ist Inhaber des Lehrstuhls für Arbeitsrecht und Bürgerliches Recht an der Goethe
					Universität in Frankfurt. Er ist Koordinator des arbeitsrechtlichen Expertennetzwerk der
					Europäischen Kommission und Mitglied des ILO-Sachverständigenausschusses. Zu Fragen der
					Digitalisierung der Arbeitswelt hat er zuletzt zwei Monographien vorgelegt.
				</p>
			</div>
			<picture>
				<source srcset={WaasAvif} type="image/avif" />
				<source srcset={WaasWebp} type="image/webp" />
				<img
					src={WaasJpg}
					alt="Portrait von Univ.-Prof. Dr. Bernd Waas"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<div class="sprecherContainer" id="Wendehorst">
			<div class="textContainer">
				<h1>Christiane Wendehorst</h1>
				<p>
					ist seit 2008 Professorin für Zivilrecht an der Universität Wien und stellvertretende
					Institutsvorständin des Instituts für Innovation und Digitalisierung im Recht. Sie ist
					u.a. auch Gründungsmitglied, ehemalige Präsidentin (2017-2021) und seit 2021 Scientific
					Director des European Law Institute (ELI), sowie Präsidentin der
					philosophisch-historischen Klasse der Österreichischen Akademie der Wissenschaften (ÖAW)
					und Vizepräsidentin des Österreichischen Juristentages (ÖJT). Wendehorst ist gewähltes
					Mitglied u.a. der Academia Europea (AE), der International Academy for Comparative Law
					(IACL) und des American Law Institute (ALI). Im Jahr 2024 wurde ihr die Ehrendoktorwürde
					der Universität Bern verliehen und seit 2025 ist sie Trägerin des Österreichischen
					Ehrenzeichens für Wissenschaft und Kunst. Gegenwärtig konzentriert sich ihre Arbeit auf
					die rechtlichen Herausforderungen der Digitalisierung.
				</p>
			</div>
			<picture>
				<source srcset={WendehorstAvif} type="image/avif" />
				<source srcset={WendehorstWebp} type="image/webp" />
				<img
					src={WendehorstJpg}
					alt="Portrait von Christiane Wendehorst"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>
	</div>
</div>

<style>
	.outerContainer {
		width: 100%;
		background-color: var(--white-dark);
		min-height: var(--min-height-sub);
	}
	.inlineContainer {
		box-sizing: border-box; /* Ensure padding doesn't cause overflow */
		padding: var(--largerGap);
		display: flex;
		flex-wrap: wrap;
		max-width: 1600px;
		gap: 1rem;
		margin: auto;
	}
	.sprecherContainer {
		display: flex;
		flex-direction: column;
		background-color: white;
		width: calc((100% / 3) - 3rem);
		padding: 1rem;
	}
	img {
		aspect-ratio: 1/1;
		width: 100%;
		order: 1;
	}
	.textContainer {
		order: 2;
	}
	@media (max-width: 900px) {
		.sprecherContainer {
			width: calc((96% / 2) - 2rem);
		}
	}
	@media (max-width: 480px) {
		.sprecherContainer {
			width: 100%;
			margin: auto;
		}
		.inlineContainer {
			padding: 2rem;
			gap: 1rem;
		}
	}
	@media (max-width: 350px) {
		.sprecherContainer {
			width: 100%;
			margin: auto;
		}
		.inlineContainer {
			padding: 0rem;
			gap: 0rem;
		}
	}
	a {
		white-space: nowrap;
		color: var(--cyan);
		text-decoration: none;
	}
	a:hover {
		background-image: linear-gradient(to bottom, currentcolor, 75%, transparent 75%);
		background-position: 0 1.1em;
		background-repeat: repeat-x;
		background-size: 5em 0.15em;
	}
</style>
