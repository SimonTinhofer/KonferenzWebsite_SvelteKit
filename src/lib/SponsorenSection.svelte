<script>
    import AKWienSvg from '$lib/images/Logo_AK Wien.svg';
    import FacultasSvg from '$lib/images/Logo_Facultas.svg';
    import LexisNexisSvg from '$lib/images/Logo_LexisNexis.svg';
    import ManzSvg from '$lib/images/Logo_Manz.svg';
    import WKOSvg from '$lib/images/Logo_WKO.svg';

    var inlineContainer
    function openText (/**@type {MouseEvent}*/event){
        const clickedButton = event.currentTarget;
        console.log(clickedButton);
        if(clickedButton){
            // @ts-ignore
            const lastChild = clickedButton.lastElementChild;
            console.log(lastChild.classList)
            if(lastChild.classList.contains('hide')){
                lastChild.classList.remove('hide');
            }
            else{
                lastChild.classList.add('hide');
            }

        }
    }
</script>
<div class="inlineContainer">
    <button class="sponsorContainer" on:click={openText} id="ak">
        <img src={AKWienSvg} alt="Logo der Arbeiterkammer Wien">
        <p class="hide">
            Die <span>Arbeiterkammer (AK)</span> vertritt die Interessen von fast 4 Millionen arbeitenden Menschen in Österreich. Wir kämpfen für ihre Rechte in der Arbeit – und dafür, dass sie gehört, fair bezahlt und rechtlich abgesichert sind. Das Beste daran: Der AK muss man nicht extra beitreten – durch das Arbeiterkammergesetz sind alle Arbeitnehmer:innen automatisch AK Mitglieder. Das gilt auch für Lehrlinge, Arbeitslose und Menschen in Karenz – sie alle können die gesamten Leistungen der AK nutzen.
        </p>
    </button>
    <button class="sponsorContainer" on:click={openText} id="fa">
        <img src={FacultasSvg} alt="Logo des Verlages Facultas">
        <p class="hide">
            <span>facultas</span> unterstützt seit 40 Jahren Studierende, Lehrende und Praktiker:innen mit der Veröffentlichung und Bereitstellung von Studien- und Fachliteratur. Als Verlagshaus publiziert facultas pro Jahr rund 140 Neuerscheinungen, Neuauflagen und zahlreiche Fachzeitschriften. Mit den Filialen an großteils universitären Standorten in Wien, Niederösterreich und Salzburg gehört facultas zu den größten Fachbuchhändlern Österreichs mit einem breit aufgestellten Fachsortiment. Zuverlässige Bibliotheksbelieferung, Druckerei, Bindeservice und Kopierservice ergänzen das Angebot wissenschaftsnaher Dienstleistungen.
        </p>
    </button>
    <button class="sponsorContainer" on:click={openText} id="le">
        <img src={LexisNexisSvg} alt="Logo des Unternehmens LexisNexis">
        <p class="hide">
            <span>LexisNexis Österreich</span> ist ein führender Anbieter intelligenter Rechtsinformation. Als Pionier bei neuen Technologien kombiniert LexisNexis hochwertige Information aus Recht, Steuern & Wirtschaft mit zukunftsweisenden digitalen Lösungen, um seinen Kund:innen mit schnelleren und relevanteren Antworten, zu besseren Entscheidungen und damit zu Vorsprung in ihrem beruflichen Alltag zu verhelfen. Die Produktpalette umfasst die Recherchelösung Lexis 360®, Legal Tech Produkte wie Lexis SmartScan und Lexis ContractMaster, Lexis WhistleComplete, Closd, Caselex, Compliance Praxis, Fachzeitschriften, Fachliteratur, Skripten und KODEX.
        </p>
    </button>
    <button class="sponsorContainer" on:click={openText} id="ma">
        <img src={ManzSvg} alt="Logo des Verlages Manz">
        <p class="hide">
            Die <span>MANZ’sche Verlags und Universitätsbuchhandlung</span> mit Sitz in Wien ist Österreichs Marktführer für Rechtsinformation. MANZ-Rot steht bei Rechtsanwender:innen für Rechtssicherheit, Qualität und Innovation. „Der MANZ“ bietet – ob online, gedruckt oder als Seminar – das umfassendste Angebot an Informationsdienstleistungen für Rechts- und Steuerberufe. Die seit 1849 bestehende MANZ’sche Verlags und Universitätsbuchhandlung befindet sich seit fünf Generationen im Familienbesitz und ist Teil der als Medienunternehmen des 21. Jahrhunderts geführten MANZ-Gruppe.
        </p>
    </button>
    <button class="sponsorContainer" on:click={openText} id="wk">
        <img src={WKOSvg} alt="Logo der Wirtschaftskammer Österreichs">
        <p class="hide">Die <span>Wirtschaftskammern Österreichs</span> vertreten mehr als 540.000 Mitgliedsbetriebe. Als starke Stimme der Unternehmen setzen wir uns für eine zukunftsorientierte und wirtschaftsfreundliche Politik ein, z.B. für Steuerentlastung, Bürokratie-Abbau, Förderungen.</p>
    </button>
</div>
<style>
    .hide{
        display: none;
    }
    .inlineContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .sponsorContainer {
        background-color: white;
        padding: 1rem;
        width: 100%;
        height: fit-content;
        border: 0;
        z-index: 2;
    }
    .sponsorContainer:hover {
        transform: translateY(-5px);
        cursor: pointer;
    }
    @media (min-width: 30rem) {
        .sponsorContainer{
            max-width: calc(50% - 0.5rem);
        }
    }
    @media (min-width: 90rem) {
        .inlineContainer{
        gap: 1rem;
        }
        .sponsorContainer{
            max-width: calc(33.33% - 0.67rem);
            padding: 2rem;
        }
        #le{
            order: 1;
        }
        #ma{
            order: 2;
        }
        #wk{
            order: 3;
        }
        #ak{
            order: 4;
        }
        #fa{
            order: 5;
        }
    }
    img{
        width: 100%;
    }
    p {
       font-size: var(--fs-400);
       text-align: start;
       max-width: 45ch;
       margin-left: auto;
       margin-right: auto;

    }
    span {
        font-weight: 700;
    }
</style>