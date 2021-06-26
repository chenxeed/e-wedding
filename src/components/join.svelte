<script lang="ts">
import { viewport } from '../helper/useViewport'
import { fly, slide } from 'svelte/transition';

let showQuestion = false
</script>
<div
  use:viewport
  on:enterViewport={() => showQuestion = true}
  class="page-min-height flex flex-col items-center justify-evenly px-2">
  {#if showQuestion}
    <p
      class="text-4xl font-semibold text-center ff-parisienne"
      transition:fly="{{ duration: 2000, delay: 1000 }}">
      Are you coming?
    </p>
    <button
      class="px-2 py-1 ring-4 ring-green-800 bg-green-300 hover:bg-green-100 transition-colors rounded-md text-xl w-48 h-20"
      transition:slide="{{ duration: 2000, delay: 2000 }}">
      Yes, I'll be there</button>
    <button
      class="px-2 py-1 ring-4 ring-gray-800 bg-gray-300 rounded-md text-lg w-36 h-16"
      transition:slide="{{ duration: 2000, delay: 2500 }}">
      No, Sorry
    </button>
  {/if}
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
