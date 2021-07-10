<script lang="ts">
import { slide, fade } from 'svelte/transition';
import photo1 from '../assets/photo-1.jpg';
import photo2 from '../assets/photo-2.jpg';

</script>
<div
  class="relative page-min-height flex flex-col max-w-lg m-auto lg:max-w-none overflow-hidden lg:justify-evenly">
  <div
    transition:fade="{{ duration: 3000, delay: 500 }}"
    class="absolute z-0 w-full h-full shadow-2xl bg-no-repeat bg-left-top bg-auto sm:w-[600px] lg:self-start"
    style="background-image: url('{photo1}')"/>
  <div
    transition:fade="{{ duration: 3000, delay: 500 }}"
    class="hidden absolute z-0 w-full h-full shadow-2xl bg-no-repeat bg-left-top bg-auto sm:w-[600px] sm:self-end lg:block"
    style="background-image: url('{photo2}'); transform: scaleX(-1)"/>
  <p
    class="relative z-10 text-lg font-semibold text-center text-shadow mt-8 lg:mt-0"
    transition:slide="{{ duration: 2000, delay: 1000 }}">You are cordially invited to attend the wedding of</p>
  <p
    class="relative z-10 text-4xl font-extrabold text-center ff-parisienne mt-12 lg:mt-0 text-yellow-600"
    transition:slide="{{ duration: 2000, delay: 3000 }}">
      Kelvin & Rita
  </p>
  <p
    class="relative z-10 text-xl font-extrabold px-4 self-start lg:self-center lg:text-center bg-gray-50 bg-opacity-50 p-4 mt-16 lg:mt-0"
    transition:slide="{{ duration: 2000, delay: 5000 }}">Sunday, 12th Sept '21, 7 - 9PM
    <br/>
    <span class="text-lg">Jl. Martha Tilaar Block 69, Jakarta Pusat</span>
  </p>
  <p
    class="relative z-10 text-base italic text-right self-start lg:self-center bg-gray-50 bg-opacity-50 p-4 mt-10 lg:mt-0"
    transition:slide="{{ duration: 2000, delay: 7000 }}">
    <span>"True love is the joy of life."</span>
    <br>- John Clarke
  </p>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
