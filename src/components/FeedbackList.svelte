<script>
  import { fade, scale } from 'svelte/transition';
  import {FeedbackStore} from '../store';
  import FeedbackItem from './FeedbackItem.svelte';

  const deleteFeedback = ({detail}) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(({id}) => id !== detail);
    });
  };
</script>

<div class="feedback--list">
  {#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
      <FeedbackItem item={fb} on:delete-feedback={deleteFeedback} />
    </div>
  {/each}
</div>