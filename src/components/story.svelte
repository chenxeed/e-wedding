<script lang="ts">
import { fade } from 'svelte/transition';
import { viewport } from '../helper/useViewport'
import kelvin1 from '../assets/kelvin-1.jpeg';
import kelvin2 from '../assets/kelvin-2.jpeg';
import kelvin3 from '../assets/kelvin-3.jpeg';
import rita1 from '../assets/rita-1.jpeg';
import rita2 from '../assets/rita-2.jpeg';
import rita3 from '../assets/rita-3.jpeg';
import kelvinrita1 from '../assets/kelvin-rita-1.jpeg';
import kelvinrita2 from '../assets/kelvin-rita-2.jpeg';
import kelvinrita3 from '../assets/kelvin-rita-3.jpeg';
import kelvinrita4 from '../assets/kelvin-rita-4.jpeg';
import kelvinritasayyes1 from '../assets/kelvin-rita-say-yes-1.jpeg';
import kelvinritasayyes2 from '../assets/kelvin-rita-say-yes-2.jpeg';
import kelvinritasayyes3 from '../assets/kelvin-rita-say-yes-3.jpeg';

let showTitle = false

function blurSelf(e: MouseEvent) {
  if (document.activeElement === e.currentTarget) {
    e.preventDefault()
    const target = e.currentTarget as HTMLElement
    setTimeout(() => {
      target.blur()
    })
  }
}

</script>
<div class="page-min-height flex flex-col px-2">
  <div
    use:viewport
    on:enterViewport={() => showTitle = true}
    class="w-full">
    {#if showTitle}
      <p
        transition:fade="{{ duration: 2000, delay: 1000 }}"
        class="text-center text-4xl mt-10">Our Story</p>
      <div class="flex w-full mt-10" transition:fade="{{ duration: 2000, delay: 1000 }}">
        <div class="flex-grow w-full">
          <div class="relative max-w-xs h-40 m-auto">
            <div class="transition-all absolute top-16 transform -rotate-12 skew-y-6 overflow-hidden w-20 h-20 border-4 border-white focus:w-40 focus:h-40 focus:-top-10 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
              <img src={kelvin1} alt="kelvin-1" class="w-full h-full object-cover object-bottom" />
            </div>
            <div class="transition-all absolute top-0 left-1/2 transform skew-y-6 -translate-x-1/2 overflow-hidden w-20 h-20 border-4 border-white focus:w-40 focus:h-40 focus:-top-10 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
              <img src={kelvin2} alt="kelvin-2" class="w-full h-full object-cover object-center" />
            </div>
            <div class="transition-all absolute top-16 right-0 transform rotate-12 skew-y-6 overflow-hidden w-20 h-20 border-4 border-white focus:w-40 focus:h-40 focus:-top-10 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
              <img src={kelvin3} alt="kelvin-3" class="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
        <div class="flex-grow w-full">
          <div class="relative max-w-xs h-40 m-auto">
            <div class="transition-all absolute top-16 transform -rotate-6 skew-y-6 overflow-hidden w-20 h-20 border-4 border-white focus:w-40 focus:h-40 focus:-top-10 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
              <img src={rita1} alt="rita1-1" class="w-full h-full object-cover object-bottom" />
            </div>
            <div class="transition-all absolute top-0 left-1/2 transform skew-y-6 -translate-x-1/2 overflow-hidden w-20 h-20 border-4 border-white focus:w-40 focus:h-40 focus:-top-10 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
              <img src={rita2} alt="rita-2" class="w-full h-full object-cover object-left" />
            </div>
            <div class="transition-all absolute top-16 right-0 transform overflow-hidden w-20 h-20 border-4 border-white focus:w-40 focus:h-40 focus:-top-10 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
              <img src={rita3} alt="rita-3" class="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
      <p class="w-full mt-10 text-center" transition:fade="{{ duration: 2000, delay: 2000 }}">
        Hari-hari sebelum bertemu, Kelvin dan Rita menjalani masa kecil dan remajanya hingga bertumbuh dewasa 👦👧
      </p>
      <p class="w-full mt-5 text-center" transition:fade="{{ duration: 2000, delay: 4000 }}">
        Hingga suatu hari mereka dipertemukan di tempat kerja mereka... 👨‍💼👩‍💼
      </p>
      <div class="w-full mt-5" transition:fade="{{ duration: 2000, delay: 4000 }}">
        <div class="m-auto transition-all transform -rotate-6 overflow-hidden w-60 h-40 border-4 border-white focus:scale-125 focus:rotate-12 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
          <img src={kelvinrita1} alt="kelvin-rita-1" class="w-full h-full object-cover object-bottom" />
        </div>
      </div>
      <p class="w-full mt-10 text-center" transition:fade="{{ duration: 2000, delay: 6000 }}">
        Menikmati waktu kencan bersama 💑
      </p>
      <div class="w-full mt-5" transition:fade="{{ duration: 2000, delay: 6000 }}">
        <div class="relative max-w-xs h-60 m-auto">
          <div class="transition-all absolute top-24 left-1/2 transform skew-y-6 -translate-x-1/2 overflow-hidden w-40 h-40 border-4 border-white focus:scale-125 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
            <img src={kelvinrita3} alt="kelvin-rita-2" class="w-full h-full object-cover object-left" />
          </div>
          <div class="transition-all absolute top-0 right-0 transform rotate-3 skew-y-6 overflow-hidden w-40 h-40 border-4 border-white focus:scale-125 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
            <img src={kelvinrita4} alt="kelvin-rita-3" class="w-full h-full object-cover object-center" />
          </div>
          <div class="transition-all absolute top-0 transform -rotate-6 skew-y-6 overflow-hidden w-40 h-40 border-4 border-white focus:scale-125 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
            <img src={kelvinrita2} alt="kelvin-rita-1" class="w-full h-full object-cover object-bottom" />
          </div>
        </div>
      </div>
      <p class="w-full mt-10 text-center" transition:fade="{{ duration: 2000, delay: 8000 }}">
        Dan dihari kejutan itu, she says "Yes!" 💍
      </p>
      <div class="w-full mt-5" transition:fade="{{ duration: 2000, delay: 8000 }}">
        <div class="relative max-w-xs h-80 m-auto">
          <div class="transition-all absolute top-40 transform skew-y-6 overflow-hidden w-40 h-40 border-4 border-white focus:scale-125 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
            <img src={kelvinritasayyes1} alt="kelvin-rita-say-yes-1" class="w-full h-full object-cover object-bottom" />
          </div>
          <div class="transition-all absolute top-40 right-0 transform -skew-y-6 overflow-hidden w-40 h-40 border-4 border-white focus:scale-125 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
            <img src={kelvinritasayyes3} alt="kelvin-rita-say-yes-3" class="w-full h-full object-cover object-center" />
          </div>
          <div class="transition-all absolute top-0 left-1/2 transform -translate-x-1/2 overflow-hidden w-60 h-40 border-4 border-white focus:scale-125 focus:z-10 cursor-pointer" tabindex="0" on:mousedown={blurSelf}>
            <img src={kelvinritasayyes2} alt="kelvin-rita-say-yes-2" class="w-full h-full object-cover object-left" />
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
