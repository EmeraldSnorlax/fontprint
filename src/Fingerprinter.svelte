<script lang="typescript">
  import { onMount } from "svelte";
  import fontList from "./detector/fontList";

  function sleep(ms: number) {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  let width = 0;
  let status = "";
  let progress = 0;
  let interval = 20;

  let style: string;
  let sansWidth: number;
  let serifWidth: number;
  let monoWidth: number;
  let font = "defaults";

  onMount(async () => {
    status = "Getting element...";
    await sleep(1000);
    const fingerprinter = document.getElementById("fingerprinter")!;

    status = "Computing default font widths...";

    style = "font-family: sans-serif;";
    await sleep(interval);
    sansWidth = fingerprinter.scrollWidth;

    style = "font-family: serif;";
    await sleep(interval);
    serifWidth = fingerprinter.scrollWidth;

    style = "font-family: monospace";
    await sleep(interval);
    monoWidth = fingerprinter.scrollWidth;

    status = "Fingerprinting...";
    fontList.forEach(async (f, i) => {
      await sleep(interval * i);
      font = f;
      progress = i;
    });
  });
</script>

<div>
  <p class="font-sans">Sans-serif width: {sansWidth}px</p>
  <p class="font-serif">Serif width: {serifWidth}px</p>
  <p class="font-mono">Mono width: {monoWidth}px</p>
  <br />
  <div class="flex justify-between items-center">
    <p>Comparing: {font}</p>
    <p>{width}px</p>
  </div>
  <p>{progress} of {fontList.length}</p>
  <p>
    {((interval * (fontList.length - progress)) / 1000).toFixed(0)} seconds...
  </p>

  <span id="fingerprinter" class="left-0 text-9xl p-0 m-0 border-0" {style}>
    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmwwwwwwwwwwwwwwwwwwwllllllllllliiiiiiiiii??????!!!!!
  </span>
  <p>{status}</p>
</div>

<progress
  class="absolute top-0 left-0 w-screen m-0"
  max={fontList.length}
  value={progress}
/>
