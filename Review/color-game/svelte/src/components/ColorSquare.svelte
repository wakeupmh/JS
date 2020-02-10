<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let color;
  
  function clickedColor(event){
    dispatch('clickedColor', {
      clickedColor: event.srcElement.style.backgroundColor
    });
  }

</script>

<div
  class="colorSquare"
  style="background-color:{color}"
  on:click={clickedColor}>
</div>

