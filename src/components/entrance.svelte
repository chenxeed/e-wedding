<script lang="ts">
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

let open = false
let gate: HTMLElement;

function openGateDoor() {
  open = !open
}

function entranceDone(ev: TransitionEvent) {
  if (ev.target === gate) {
    dispatch('done')
  }
}
</script>
<div class="entrance overflow-hidden" class:open>
  <div
    class="entrance-container h-screen flex flex-col items-center"
		on:transitionend={entranceDone}>
    <div class="wall relative w-full">
      <div class="mt-8 text-center">
        <h1 class="text-3xl font-bold">Kelvin & Rita</h1>
      </div>
      <button bind:this={gate} class="gate mt-8 m-auto" on:click={openGateDoor}>
        <div class="gate-door door-left">
          <div class="box"/>
          <div class="box"/>
        </div>
        <div class="gate-door door-right">
          <div class="box"/>
          <div class="box"/>
        </div>
      </button>
    </div>
    <div class="floor relative w-full">
      <div class="carpet m-auto"></div>
    </div>
  </div>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.wall {
  @apply bg-gradient-to-b from-red-100 to-red-400;

}

.gate {
  @apply
    w-40 h-80
    flex flex-row
    relative z-20
    bg-gray-800;
}

.gate:focus {
  outline: 0;
}

.gate-door {
  @apply
    w-1/2 h-full
    bg-yellow-700
    flex flex-col justify-around items-center
    border-8 border-double border-yellow-500 box-border
    transition-transform ease-in-out duration-1000;
}

.gate-door.door-left {
  @apply
    origin-left;
}

.gate-door.door-right {
  @apply
    origin-right;
}

.gate-door .box {
  @apply w-10 h-10 bg-yellow-600 border-8 border-double border-yellow-500;
}

.floor {
  @apply bg-gray-200;
}

.carpet {
  @apply
    w-40 relative z-10 bg-red-500;
  height: 1000px;
  transform: perspective(700px) rotateX(76deg);
  transform-origin: center top;
}

/* OPEN ANIMATION */
.entrance.open .entrance-container {
  @apply
    transition-transform ease-in;
  transition-duration: 3s;
  transform: scale(5);
  transform-origin: center 250px;
}
.entrance.open .gate {
  @apply transition-colors bg-gray-50;
  transition-duration: 3s;
}
.entrance.open .gate-door.door-left {
  transform: perspective(300px) rotateY(-180deg);
}
.entrance.open .gate-door.door-right {
  transform: perspective(300px) rotateY(180deg);
}
</style>
