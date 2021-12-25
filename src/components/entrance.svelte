<script lang="ts">
import { fly } from 'svelte/transition';
import { createEventDispatcher, onMount } from 'svelte';
import photo1 from '../assets/photo-1.jpg';
import flowerFrameTop from '../assets/flower-frame-top.png';
import flowerFrameBottom from '../assets/flower-frame-bottom.png';
import kelvinRitaEntrance from '../assets/kelvin-rita-entrance.jpg';
import saveTheDate from '../assets/save-the-date.png';
import { authenticate, getInvitedGuest } from '../module/sheet';

const dispatch = createEventDispatcher();

let invitationName = ''
let invited = true

let open = false
let entrance: HTMLElement;

onMount(async () => {
  const URLParam = new URLSearchParams(window.location.search);
  const pass = URLParam.get('pass');
  invited = await authenticate(pass);
  if (invited) {
    const guest = getInvitedGuest();
    invitationName = guest.name;
  }
})

function entranceDone(ev: TransitionEvent) {
  if (ev.target === entrance) {
    dispatch('done')
  }
}

</script>
<div class="entrance flex items-center" class:open>
  <div
    bind:this={entrance}
    class="entrance-container"
		on:transitionend={entranceDone}>
    <img src={flowerFrameTop} alt="flower-frame-top" class="absolute top-0 right-0"/>
    <img src={flowerFrameBottom} alt="flower-frame-bottom" class="absolute bottom-0 left-0"/>
    <div class="p-8 h-full w-3/4">
      <img src={kelvinRitaEntrance} alt="flower-frame-bottom" class="h-full object-cover" style="object-position: 65% 0"/>
    </div>
    {#if invitationName}
      <div class="absolute top-4 left-0 bg-yellow-300 p-4 transition-all" transition:fly>
        <p>Special Invitation for</p>
        <p class="text-2xl font-bold">{ invitationName }</p>
      </div>
      <div class="absolute right-4 top-0 h-full w-60">
        <div
          class="mt-56 flex justify-end"
          in:fly={{ duration: 2000, delay: 2000 }}>
          <img src={saveTheDate} alt="save the date" class="w-28 h-28">
        </div>
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
    {:else if invited === false}
      <div class="absolute top-4 left-0 bg-yellow-300 p-4" transition:fly>
        Sorry, please contact Kelvin & Rita to get the correct invitation URL
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

.entrance {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}

.entrance-container {
  @apply relative items-center h-screen max-w-xl m-auto sm:border-2 sm:border-yellow-300 lg:h-[700px] lg:rounded-tr-3xl lg:rounded-bl-3xl;
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
