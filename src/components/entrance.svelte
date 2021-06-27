<script lang="ts">
import { createEventDispatcher } from 'svelte';
import wood from '../assets/wood-pattern.jpg';
import photo1 from '../assets/photo-1.jpg';
import flowerFrameTop from '../assets/flower-frame-top.png';
import flowerFrameBottom from '../assets/flower-frame-bottom.png';
import entranceFrame from '../assets/kelvin-rita-entrance-frame.png';

const dispatch = createEventDispatcher();

let open = false
let gate: HTMLElement;
let styleVar = [`--img-wood: url(${wood})`].join(';')

function openGateDoor() {
  open = true
}

function entranceDone(ev: TransitionEvent) {
  if (ev.target === gate) {
    dispatch('done')
  }
}

setTimeout(() => {
  openGateDoor()
}, 4000)
</script>
<div class="entrance overflow-hidden" class:open style={styleVar}>
  <div
    class="entrance-container h-screen flex flex-col items-center"
		on:transitionend={entranceDone}>
    <div class="wall relative w-full flex-grow flex flex-col">
      <div>
        <div class="mt-2 text-center">
          <div class="font-bold ff-parisienne bg-white p-5 inner-shadow mx-2">
            <p class="text-base">Special Invitation For</p>
            <p class="text-xl">Mrs Liana and Family</p>
          </div>
        </div>
      </div>
      <div class="mt-2 flex-grow flex align-middle">
        <!-- Background image source: https://pngtree.com/so/floral-clipart floral clipart png from pngtree.com-->
        <img src={entranceFrame} alt="kelvin rita entrance frame" class="m-auto h-full max-h-28 sm:max-h-64 filter drop-shadow-lg"/>
      </div>
      <h1 class="text-3xl font-bold justify-self-end text-center mx-auto mt-5 px-8 py-3 bg-gray-50 rounded-md relative inner-shadow">
        <span class="ff-parisienne">Kelvin & Rita</span>
        <br/><span class="text-xl">Wedding Invitation</span>
        <!-- Frame image source: https://super--anime.blogspot.com/2020/09/images-of-border-picture-frame-anime.html-->
        <img src={flowerFrameTop} alt="frame-flower" class="absolute -right-2 -top-4 w-24"/>
        <img src={flowerFrameBottom} alt="frame-flower" class="absolute -left-2 -bottom-4 w-24"/>
      </h1>
      <button bind:this={gate} class="gate mt-8 mx-auto justify-self-end filter drop-shadow-lg" on:click={openGateDoor}>
        <div class="gate-door door-left">
          <div class="box"/>
          <div class="knob"/>
          <div class="box"/>
        </div>
        <div class="gate-door door-right">
          <div class="box"/>
          <div class="knob"/>
          <div class="box"/>
        </div>
      </button>
    </div>
  </div>
  <!-- Preload here so it's already loaded after the entrance-->
  <img src={photo1} class="w-0 h-0" alt="invitation-background-hidden"/>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.wall {
  @apply relative bg-gradient-to-b backdrop-filter backdrop-brightness-150;
  --tw-gradient-from: #ffffff;
  --tw-gradient-to: #dbdbdb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(254, 243, 199, 0));
}

.gate {
  @apply
    w-64 h-80
    flex flex-row
    relative z-20
}

.gate:focus {
  outline: 0;
}

.gate-door {
  @apply
    relative overflow-hidden
    w-1/2 h-full
    bg-gray-200
    flex flex-col justify-around items-center
    border border-gray-800
    transition-transform ease-in-out duration-1000;
  box-shadow: inset 0 0 5px #000000;
}
.gate-door::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: var(--img-wood);
  opacity: .3;
  pointer-events: none;
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
  @apply w-16 h-16 border-2 border-gray-200;
  box-shadow: inset 0 0 5px #000000;
  background-image: var(--img-wood);
}

.gate-door .knob {
  @apply w-5 h-5 rounded-full bg-gray-300 border border-black;
}

.gate-door.door-left .knob {
  @apply self-end mr-5;
}
.gate-door.door-right .knob {
  @apply self-start ml-5;
}

/* OPEN ANIMATION */
.entrance.open .entrance-container {
  @apply
    transition-transform ease-in;
  transform-origin: center bottom;
  transition-duration: 3s;
  transform: scale(5);
  transform-origin: bottom 250px;
}
.entrance.open .gate {
  @apply bg-gray-50;
  transition-duration: 3s;
}
.entrance.open .gate-door.door-left {
  transform: perspective(300px) rotateY(90deg);
}
.entrance.open .gate-door.door-right {
  transform: perspective(300px) rotateY(-90deg);
}

.inner-shadow {
  box-shadow: inset 0 0 5px #000;
}
</style>
