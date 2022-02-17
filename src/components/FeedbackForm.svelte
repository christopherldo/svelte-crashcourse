<script>
  import Card from './Card.svelte';
  import Button from './Button.svelte';

  let text = '';
  let min = 10;

  $: btnDisabled = text.trim().length < min;
  $: errorMessage = text.trim().length < min && text.trim().length != 0 ? `Text must be at least ${min} characters long` : '';
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form>
    <!-- Rating Select -->
    <div class="input-group">
      <input type="text" bind:value={text} placeholder="Tell us something that keeps you coming back">
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
    {#if errorMessage}
      <div class="message">{errorMessage}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>