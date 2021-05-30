<script lang="ts">
  let open = false

  function openGateDoor() {
    open = !open
  }
</script>
<div class="flex flex-col items-center">
  <div class="text-base">Welcome to our wedding</div>
  <div class="pt-8">
    <h1 class="text-3xl font-bold">Rita & Kelvin</h1>
  </div>
  <div class="pt-8">
    <button class="gate" class:open on:click={openGateDoor}>
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
</div>
<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.gate {
  @apply w-80 h-96 flex flex-row;
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
    transition-transform ease-linear duration-500;
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
  @apply w-20 h-20 bg-yellow-600 border-8 border-double border-yellow-500;
}

.gate.open .gate-door.door-left {
  transform: perspective(1000px) rotateY(-100deg);
}
.gate.open .gate-door.door-right {
  transform: perspective(1000px) rotateY(100deg);
}
</style>
