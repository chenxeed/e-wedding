<script lang="ts">
import { fade } from 'svelte/transition';
import { getInvitedGuest, getInvitationList, updateTestimonial } from '../module/sheet';
import rsvp from '../assets/rsvp.png';

const guest = getInvitedGuest()
const invitations = getInvitationList()
let testimonials = invitations.filter(i => i.testimonial.trim())
let showTestimonialForm = Boolean(guest.testimonial.trim()) === false
let message = ""

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
  class="page-min-height flex flex-col items-center justify-evenly px-2 bg-yellow-100">
  <a href="https://forms.gle/K9f4uH3mMPLmiLZc6" target="_blank">
    <img src={ rsvp } alt="rsvp" class="w-32"/>
  </a>
  {#if showTestimonialForm}
  <p
    in:fade="{{ duration: 2000, delay: 1000 }}" out:fade
    class="text-lg font-semibold text-center ff-oswald">
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
  <div class="ff-oswald overflow-auto w-full" style={ `height: ${showTestimonialForm ? '200px' : '70vh'}` }>
    {#each testimonials as testi}
      <p class="border-b-2">
        <span class="font-bold">{ testi.name }</span>:<br>
        <span>"{@html testi.testimonial.replace(/(?:\r\n|\r|\n)/g, '<br>') }"</span>
      </p>
    {/each}
  </div>
</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
