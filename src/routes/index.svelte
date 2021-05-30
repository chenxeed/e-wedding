<script lang="ts">
  import Entrance from '../components/entrance.svelte'

  function onEntranceDone () {
    alert('lets go')
  }
</script>
<div>
  <Entrance
    on:done={onEntranceDone}/>
</div>
<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
