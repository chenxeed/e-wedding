<script lang="ts">
import { slide } from 'svelte/transition';

</script>
<div class="page-min-height flex flex-col items-center justify-evenly px-2">
  <p
    class="text-lg font-semibold text-center"
    transition:slide="{{ duration: 2000, delay: 1000 }}">
    Our Story put here...
  </p>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
