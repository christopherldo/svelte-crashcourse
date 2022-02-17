<script>
  import {FeedbackStore} from '../store';

  $: count = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((acc, cur) => acc + cur.rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average || 0}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>