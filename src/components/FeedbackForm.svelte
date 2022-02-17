<script>
  import {FeedbackStore} from '../store';
  import {v4 as uuid} from 'uuid';
  import Card from './Card.svelte';
  import Button from './Button.svelte';
  import RatingSelect from './RatingSelect.svelte';
  
  const min = 10;

  let text = '';
  let rating = '10';

  const handleSelect = ({detail}) => {
    rating = detail;
  };

  const handleSubmit = () => {
    if(text.trim().length >= min) {
      const newFeedback = {
        id: uuid(),
        text,
        rating: +rating,
      }

      addFeedback(newFeedback);
      text = '';
    }
  };

  const addFeedback = (newFeedback) => {
    FeedbackStore.update(state => {
      return [
        newFeedback,
        ...state,
      ];
    });
  };

  $: btnDisabled = text.trim().length < min;
  $: errorMessage = text.trim().length < min && text.trim().length != 0 ? `Text must be at least ${min} characters long` : '';
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
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