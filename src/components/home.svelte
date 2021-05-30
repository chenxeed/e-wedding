<script lang="ts">
import { slide } from 'svelte/transition';
import confetti from 'canvas-confetti';

function showConfetti (event: Event) {
  const element = event.target as HTMLElement
  const bound = element.getBoundingClientRect()
  const x = ((bound.left + bound.right) / 2) / window.innerWidth
  const y = ((bound.top + bound.bottom) / 2) / window.innerHeight
  confetti({
    origin: {
      x,
      y
    }
  })
}

</script>
<div class="flex flex-col items-center justify-evenly h-full">
  <p
    class="text-lg font-semibold text-center"
    transition:slide="{{ duration: 2000, delay: 1000 }}"
    on:introend={e => showConfetti(e)}>You are cordially invited to attend the wedding of</p>
  <p
    class="text-3xl font-extrabold text-center"
    transition:slide="{{ duration: 2000, delay: 3000 }}"
    on:introend={e => showConfetti(e)}>
      Kelvin
      <br>&
      <br>Rita
  </p>
  <p
    class="text-xl font-extrabold text-center"
    transition:slide="{{ duration: 2000, delay: 5000 }}"
    on:introend={e => showConfetti(e)}>Sunday, 12th Sept '21<br/>7 - 9PM
  </p>
  <p
    class="text-xl font-extrabold text-center"
    transition:slide="{{ duration: 2000, delay: 7000 }}"
    on:introend={e => showConfetti(e)}>Puri Tower 12th Floor<br/>
    <span class="text-lg">Jl. Martha Tilaar Block 69, Jakarta Pusat</span>
  </p>
</div>
<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  </style>
