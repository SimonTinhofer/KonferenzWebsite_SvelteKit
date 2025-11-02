<script>
	import SubPageLayout from '$lib/SubPageLayout.svelte';
	import TimelineSection from '$lib/TimelineSection.svelte';
	const heading = 'Agenda';
</script>

<svelte:head>
	<title>Tagung "Automatisierung der Arbeit": Agenda</title>
	<meta
		name="description"
		content="Hier findet man das Programm für die Tagung Automatisierung der Arbeit, in der Experten zu den Risiken und Chancen des Einsatzes von Künstlicher Intelligenz auf der Arbeitswelt sprechen."
	/>
</svelte:head>

<SubPageLayout Heading={heading}><TimelineSection /></SubPageLayout>
