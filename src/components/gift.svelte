<script lang="ts">
import gift_bca from '../assets/gift-bca.jpeg';

let showGift = false

</script>
<div
  class="page-min-height flex flex-col items-center justify-evenly px-2 bg-yellow-100 md:w-[768px] mx-auto">
  <p class="text-center font-semibold text-4xl mt-10 ff-main">Gift</p>
  <p>
    We're so happy just to have you be present as part of our wedding ceremony. If you still wish to send us a gift,
    we are thankful and happily accept it as part of our joy!
  </p>
  <div>
    <button
      class="bg-yellow-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 my-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded w-64 h-24 text-lg animate-pulse"
      style={ showGift && `transition: all 0.5s; height: 0; margin: 0; padding: 0; opacity: 0;` }
      on:click={ () => showGift = true }>Send Gift</button>
  </div>
  <div
    style={ showGift && `transition: all 0.5s; opacity: 1; height: auto;` }
    class="mt-4 opacity-0 h-0">
    <img src={ gift_bca } alt="gift bca" class="w-80 mb-5 h-full" />
  </div>

</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
