<script lang="ts">
import { viewport } from '../helper/useViewport'
import { fly } from 'svelte/transition';

let showTitle = false

</script>
<div class="page-min-height flex flex-col items-center justify-evenly px-2">
  <div
    use:viewport
    on:enterViewport={() => showTitle = true}>
    {#if showTitle}
      <p
        class="text-lg font-semibold text-center"
        transition:fly="{{ duration: 2000 }}">
        Our Story put here...
      </p>
    {/if}
  </div>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
