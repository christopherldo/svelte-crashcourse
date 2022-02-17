<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let selected = '10';

  const onChange = (e) => {
    selected = e.target.value;
    dispatch('rating-select', selected);
  };
</script>

<ul class="rating">
  {#each ratings as rating}
    <li>
      <input type="radio" value={rating.toString()} id={`num${rating.toString()}`} on:change={onChange} checked={selected === rating.toString()}>
      <label for={`num${rating.toString()}`}>{rating.toString()}</label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px solid #eee;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  [type='radio'] {
    opacity: 0;
  }

  [type='radio']:checked + label {
    background: #ff6a95;
    color: #fff;
  }
</style>