<script lang="typescript">
  import { fade } from "svelte/transition";
  import Explanation from "./Explanation.svelte";
  import Fingerprinter from "./Fingerprinter.svelte";

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

<div class="md:max-w-2xl max-w-screen-sm p-2">
  <h1 class="text-center text-4xl h-16 align-baseline">
    <span style={font}>Fontprint</span>
  </h1>
  <p class="text-center text-xl">
    See how your installed fonts can be used to track you
  </p>
  <hr class="mt-4" />
  <p class="my-4">
    Typography is everywhere on the web. It's something that you probably don't
    even think about, unless it's pointed out. But it's also something that can
    be used to uniquely identify your browser.
  </p>
  <p>
    This site demonstrates how it can be used to fingerprint you by checking
    against 3000~ fonts. It'll be slower than a real fingerprinting script, as
    it provides visual feedback.
  </p>
  <div class="warning">
    <p>psst! testing shows rapidly changing text.</p>
    <p class="text-red-500 font-bold">please proceed with caution!</p>
    {#if !Boolean(agree)}
      <div class="mt-4" transition:fade={{ duration: 400 }}>
        <input class="mr-2" id="agree" type="checkbox" bind:value={agree} />
        <label for="agree">I understand, let's go!</label>
      </div>
    {/if}
  </div>

  {#if Boolean(agree)}
    <Fingerprinter />
  {/if}
  <br />
  <Explanation />
  <br />
  <footer class="text-center">
    <p>No data is sent to any servers, everything here is done client side.</p>
    <a
      class="text-blue-600 hover:underline hover:text-blue-400 transition-all"
      href="https://github.com/EmeraldSnorlax/fontprint/tree/main"
      target="_blank"
      >Source Code (GNU AGPL-3.0)</a
    >
  </footer>
  <br>
</div>
