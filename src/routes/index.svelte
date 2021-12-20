<script lang="ts">
import { fade } from 'svelte/transition'
import confetti from 'canvas-confetti';
import Entrance from '../components/entrance.svelte'
import Home from '../components/home.svelte'
import Story from '../components/story.svelte'
import Join from '../components/join.svelte'

let showEntrance = true

function scrollTo (targetId: string) {
  const target = document.getElementById(targetId)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function runConfetti () {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;

  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  }());
}

</script>
<div class="ff-amatic text-xl">
  {#if showEntrance}
    <section>
      <Entrance on:done={() => showEntrance = false}/>
    </section>
  {:else}
    <div in:fade
      on:introend={ runConfetti }>
      <div class="h-screen">
        <main class="overflow-auto page-height">
          <div class="divide-y-8 divide-yellow-200">
            <div id="home">
              <Home/>
            </div>
            <div id="story">
              <Story/>
            </div>
            <div id="join">
              <Join/>
            </div>
          </div>
        </main>
        <nav class="flex-grow-0 flex justify-around items-center border-t-2 border-gray-700 fixed bottom-0 w-full bg-red-50">
          <a class="flex flex-col items-center" href="#home" on:click|preventDefault={() => scrollTo('home')}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </a>
          <a class="flex flex-col items-center" href="#story" on:click|preventDefault={() => scrollTo('story')}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            Our Story
          </a>
          <a class="flex flex-col items-center" href="#join" on:click|preventDefault={() => scrollTo('join')}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
            </svg>
            Join Us
          </a>
        </nav>
      </div>
    </div>
  {/if}
</div>
<style global lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @responsive {
    .ff-parisienne {
      font-family: 'Parisienne', cursive;
    }

    .ff-amatic {
      font-family: 'Amatic SC', cursive;
    }

    .text-shadow {
      text-shadow: 0 2px 4px rgba(0,0,0,0.10);
    }

    .text-shadow-md {
      text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
    }

    .text-shadow-lg {
      text-shadow: 0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08);
    }

    .text-shadow-none {
      text-shadow: none;
    }
  }
}

html {
  scroll-behavior: smooth;
}

nav {
  height: 70px;
}

.page-height {
  height: calc(100vh - 70px);
}

.page-min-height {
  min-height: calc(100vh - 70px);
}

</style>
