<script lang="typescript">
  import { fade } from "svelte/transition";
  import Button from "./components/Button.svelte";

  let font = "font-family: sans-serif;";
  let i = 1;
  let styles = [
    "font-family: sans-serif;",
    "font-family: monospace;",
    "font-family: cursive;",
    "font-family: serif;",
  ];

  setInterval(() => {
    font = styles[i];
    i = (i + 1) % styles.length;
  }, 500);

  let agree: any = false;
</script>

<div class="w-full">
  <h1 class="text-center text-4xl h-16 align-baseline">
    <span style={font}>Fontprint</span>
  </h1>
  <h2 class="text-center text-xl">
    See how your installed fonts can be used to track you
  </h2>
  <div class="warning">
    <p>
      psst! this site contains flashing text, similar to the one above, but at a
      much higher speed.
    </p>
    <p class="text-red-500 text-center mt-4">please proceed with caution!</p>
    {#if !Boolean(agree)}
      <div
        class="flex items-center justify-center mt-4"
        transition:fade={{ duration: 400 }}
      >
        <input class="mr-2" id="agree" type="checkbox" bind:value={agree} />
        <label for="agree">I understand</label>
      </div>
    {/if}
  </div>

  {#if Boolean(agree)}
    <div transition:fade={{ duration: 400, delay: 400 }}>
      <Button text="Go!" />
    </div>
  {/if}
</div>
