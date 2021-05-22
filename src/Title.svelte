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

<div class="w-full max-w-2xl p-6">
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
    <p>psst! testing may show rapidly moving text and coloured lines.</p>
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
</div>
