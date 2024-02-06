<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
</script>


<CommonPage {title}>
	<div class="resume">
		{#if item}
			<a href={item}>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
			<embed src={item} type="application/pdf" width="100%" height="1100px" />
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
    .resume {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; // Add this line
        margin-top: 20px;

        & > a {
            color: inherit;
            margin-bottom: 20px; // Add this line
        }
    }
</style>
