<script>
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './FeedbackItem.svelte';

  export let feedback = [];
</script>

<div class="feedback--list">
  {#each feedback as fb (fb.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
      <FeedbackItem item={fb} on:delete-feedback />
    </div>
  {/each}
</div>