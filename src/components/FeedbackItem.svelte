<script>
  import Card from './Card.svelte';

  export let item = {};
</script>

<div class="feedback--item">
  <Card>
    <div class="num-display">
      {item.rating}
    </div>
    <div class="close">X</div>
    <p class="text-display">
      {item.text}
    </p>
  </Card>
</div>