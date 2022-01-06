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
  <div
    style={ showGift && `transition: all 0.5s; opacity: 1; height: auto;` }
    class="my-4 opacity-0 h-0 text-center border-2 bg-gray-50 p-2">
    <p class="font-bold flex justify-center items-center">
      Gift Address
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift ml-1" viewBox="0 0 16 16">
        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
      </svg>
    </p>
    <p>
      Apartemen City Resort, Tower Marigold Lt.12 No 17, Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730
    </p>
  </div>

</div>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
