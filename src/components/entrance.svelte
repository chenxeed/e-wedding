<script lang="ts">
import { fly } from 'svelte/transition';
import { createEventDispatcher, onMount } from 'svelte';
import photo1 from '../assets/photo-1.jpg';
import flowerFrameTop from '../assets/flower-frame-top.png';
import flowerFrameBottom from '../assets/flower-frame-bottom.png';
import kelvinRitaEntrance from '../assets/kelvin-rita-entrance.jpg';

const dispatch = createEventDispatcher();

let invitationName = ''

let open = false
let entrance: HTMLElement;

onMount(async () => {
  invitationName = await new Promise((resolve) => {
    resolve('Mr. Albert and Family')
  })
})

function entranceDone(ev: TransitionEvent) {
  if (ev.target === entrance) {
    dispatch('done')
  }
}

</script>
<div class="entrance h-screen flex items-center" class:open>
  <div
    bind:this={entrance}
    class="entrance-container"
		on:transitionend={entranceDone}>
    <img src={flowerFrameTop} alt="flower-frame-top" class="absolute top-0 right-0"/>
    <img src={flowerFrameBottom} alt="flower-frame-bottom" class="absolute bottom-0 left-0"/>
    <div class="p-8 h-full w-3/4">
      <img src={kelvinRitaEntrance} alt="flower-frame-bottom" class="h-full object-cover object-center"/>
    </div>
    {#if invitationName}
      <div class="absolute top-4 left-0 bg-yellow-300 p-4" transition:fly>
        <p>Special Invitation for</p>
        <p class="text-2xl font-bold">{ invitationName }</p>
      </div>
      <div class="absolute right-4 top-0 h-full w-60">
        <p class="mt-56 text-right" in:fly={{ duration: 2000, delay: 1000 }}>
          <span class="text-5xl text-yellow-700">Save</span>
          <br/>
          <span class="text-3xl">the</span>
          <br/>
          <span class="text-5xl text-yellow-700">Date</span>
        </p>
        <p class="mt-5 text-right" in:fly={{ duration: 2000, delay: 2000 }}>for the wedding of</p>
        <p class="mt-5 text-right" in:fly={{ duration: 2000, delay: 3000 }}>
          <span class="text-4xl text-yellow-700">Kelvin</span>
          <br/>
          <span class="text-2xl">&</span>
          <br/>
          <span class="text-4xl text-yellow-700">Rita</span>
        </p>
        <div class="mt-5">
          <button
            class="bg-yellow-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded w-full transition-all animate-pulse"
            on:click={ () => open = true }
            in:fly={{ duration: 2000, delay: 4000 }}>
            Open Invitation
          </button>
        </div>
      </div>
    {/if}
  </div>
  <!-- Preload here so it's already loaded after the entrance-->
  <img src={photo1} class="w-0 h-0" alt="invitation-background-hidden"/>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.entrance-container {
  @apply relative items-center h-screen max-w-xl m-auto sm:border-2 sm:border-yellow-300 lg:h-[700px];
}

/* OPEN ANIMATION */
.entrance.open {
  @apply overflow-hidden;
}

.entrance.open .entrance-container {
  @apply
    transition-all ease-in opacity-0;
  transition-duration: 1s;
  transform: scale(1.5);
}

</style>
