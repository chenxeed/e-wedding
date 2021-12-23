<script lang="ts">
import { viewport } from '../helper/useViewport'
import { fly, slide, fade } from 'svelte/transition';
import { getInvitedGuest, getInvitationList, updateResponse, updateTestimonial } from '../module/sheet';

const guest = getInvitedGuest()
const invitations = getInvitationList()
let testimonials = invitations.filter(i => i.testimonial.trim())
let showQuestion = false
let showTestimonialForm = Boolean(guest.testimonial.trim()) === false
let message = ""

async function onClickYes () {
  updateResponse('Yes')
  showQuestion = false
}

function onClickNo () {
  updateResponse('No')
  showQuestion = false
}

async function onSubmitTestimonial () {
  await updateTestimonial(encodeHTML(message));
  testimonials = [
    { ...guest, testimonial: message },
    ...testimonials
  ]
  showTestimonialForm = false
}

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

</script>
<div
  use:viewport
  on:enterViewport={() => showQuestion = guest.response === ""}
  class="page-min-height flex flex-col items-center justify-evenly px-2 bg-yellow-50">
  {#if showQuestion}
    <p
      class="text-4xl font-semibold text-center ff-parisienne"
      in:fly="{{ duration: 2000, delay: 1000 }}" out:fade>
      Are you coming?
    </p>
    <button
      class="px-2 py-1 ring-4 ring-green-800 bg-green-300 hover:bg-green-100 transition-colors rounded-md text-xl w-48 h-20"
      in:slide="{{ duration: 2000, delay: 2000 }}" out:fade
      on:click={ onClickYes }>
      Yes, I'll be there</button>
    <button
      class="px-2 py-1 ring-4 ring-gray-800 bg-gray-300 rounded-md text-lg w-36 h-16"
      in:slide="{{ duration: 2000, delay: 2500 }}" out:fade
      on:click={ onClickNo }>
      No, Sorry
    </button>
  {:else}
    <p
      in:fade="{{ duration: 2000, delay: 1000 }}" out:fade
      class="text-4xl font-semibold text-center ff-parisienne">
      Thank you for your response!
    </p>
    {#if showTestimonialForm}
    <p
      in:fade="{{ duration: 2000, delay: 1000 }}" out:fade
      class="text-lg font-semibold text-center ff-amatic">
      You can send a message to wish Kelvin & Rita:
    </p>
    <textarea
      in:fade="{{ duration: 2000, delay: 1000 }}" out:fade
      bind:value={message}
      style="height: 200px;" class="shadow-sm mt-1 p-2 block w-full sm:text-sm border-gray-600 rounded-md"></textarea>
      <button
        in:fade="{{ duration: 2000, delay: 1000 }}" out:fade
        class="bg-yellow-600 hover:bg-yellow-400 text-white text-xs font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
        on:click={ onSubmitTestimonial }>Send</button>
    {/if}
    <p
      in:fade="{{ duration: 2000, delay: 1000 }}" out:fade
      class="relative z-10 text-4xl font-extrabold text-center ff-parisienne text-yellow-600">
      Testimonial
    </p>
    <div class="ff-amatic overflow-auto w-full" style={ `height: ${showTestimonialForm ? '200px' : '70vh'}` }>
      {#each testimonials as testi}
        <p class="border-b-2">
          <span class="font-bold">{ testi.name }</span>:<br>
          <span>"{@html testi.testimonial.replace(/(?:\r\n|\r|\n)/g, '<br>') }"</span>
        </p>
      {/each}
    </div>
  {/if}
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
