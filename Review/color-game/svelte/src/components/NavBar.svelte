<script>
import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let newGame;
  export let result;
  
  function restartGame(){
    dispatch('restartGame', {
      restartGame: true
    });
  }

</script>

<div class="nav">
  <button on:click={ restartGame }>
    { newGame }
  </button>
  <span>{ result }</span>
</div>