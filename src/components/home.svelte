<script lang="ts">
import { slide } from 'svelte/transition';
import confetti from 'canvas-confetti';
import photo1 from '../assets/photo-1.jpg';
import photo2 from '../assets/photo-2.jpg';

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
  class="relative page-min-height flex flex-col items-center justify-evenly">
  <div
    class="absolute z-0 w-full h-full opacity-60 shadow-2xl bg-no-repeat bg-left-top bg-auto sm:w-[600px] lg:self-start"
    style="background-image: url('{photo1}')"/>
  <div
    class="hidden absolute z-0 w-full h-full opacity-60 shadow-2xl bg-no-repeat bg-left-top bg-auto sm:w-[600px] sm:self-end lg:block"
    style="background-image: url('{photo2}')"/>
  <p
    class="relative z-10 text-lg font-semibold text-center text-shadow"
    transition:slide="{{ duration: 2000, delay: 1000 }}"
    on:introend={e => showConfetti(e)}>You are cordially invited to attend the wedding of</p>
  <p
    class="relative z-10 text-3xl font-extrabold text-center ff-parisienne"
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
    class="relative z-10 text-base italic text-right self-end sm:self-center bg-gray-50 bg-opacity-50 p-4"
    transition:slide="{{ duration: 2000, delay: 9000 }}">
    <span>"True love is the joy of life."</span>
    <br>- John Clarke
  </p>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
