<script>
  export let style = 'primary';
  export let type = 'button';
  export let disabled = false;
</script>

<div class="button">
  <button {type} {disabled} class={style}>
    <slot></slot>
  </button>
</div>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: #202142;
  }

  .secondary {
    background-color: #ff6a95;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled {
    background-color: #ccc;
    color: #333;
    cursor: auto;
  }
</style>