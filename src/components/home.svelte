<script lang="ts">
import { slide } from 'svelte/transition';
import confetti from 'canvas-confetti';
import photo1 from '../assets/photo-1.jpg'

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
<div
  class="relative page-min-height flex flex-col items-center justify-evenly px-2">
  <div
    class="absolute z-0 w-full h-full bg-no-repeat opacity-60 shadow-2xl bg-zoom sm:w-[640px]"
    style="background-image: url('{photo1}')"/>
  <p
    class="relative z-10 text-lg font-semibold text-center"
    transition:slide="{{ duration: 2000, delay: 1000 }}"
    on:introend={e => showConfetti(e)}>You are cordially invited to attend the wedding of</p>
  <p
    class="relative z-10 text-3xl font-extrabold text-center"
    transition:slide="{{ duration: 2000, delay: 3000 }}"
    on:introend={e => showConfetti(e)}>
      Kelvin
      <br>&
      <br>Rita
  </p>
  <p
    class="relative z-10 text-xl font-extrabold text-center"
    transition:slide="{{ duration: 2000, delay: 5000 }}"
    on:introend={e => showConfetti(e)}>Sunday, 12th Sept '21<br/>7 - 9PM
  </p>
  <p
    class="relative z-10 text-xl font-extrabold text-center"
    transition:slide="{{ duration: 2000, delay: 7000 }}"
    on:introend={e => showConfetti(e)}>Puri Tower 12th Floor<br/>
    <span class="text-lg">Jl. Martha Tilaar Block 69, Jakarta Pusat</span>
  </p>
  <p
    class="relative z-10 text-base italic text-right self-end"
    transition:slide="{{ duration: 2000, delay: 9000 }}">
    <span>"True love is the joy of life."</span>
    <br>- John Clarke
  </p>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.bg-zoom {
  animation: bg-zoom 10s ease-in-out infinite;
}

@keyframes bg-zoom {
  0%, 100% {
    background-position: 50% 50%;
    background-size: 120%;
  }
  33% {
    background-position: 65% 40%;
    background-size: 150%;
  }
  66% {
    background-position: 25% 45%;
    background-size: 150%;
  }
}
</style>
