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
  let interval = 10;

  let style: string;
  let sansWidth: number;
  let font = "defaults";

  let matches: string[] = [];

  onMount(async () => {
    status = "Getting element...";
    await sleep(1000);
    const fingerprinter = document.getElementById("fingerprinter")!;

    status = "Computing default font widths...";

    style = "font-family: sans-serif;";
    await sleep(interval);
    sansWidth = fingerprinter.scrollWidth;

    status = "Fingerprinting...";

    let i = 0;
    let max = fontList.length - 1;
    let tick = setInterval(async () => {
      style = `font-family: '${fontList[i]}', sans-serif`;
      await sleep(interval);
      width = fingerprinter.scrollWidth;
      if (width !== sansWidth) {
        matches = [...matches, fontList[i]];
      }

      font = fontList[i];
      progress = i;

      i++;
      if (i >= max) clearInterval(tick);
    }, interval);
  });
</script>

<div>
  <p class="font-sans">Sans-serif width: {sansWidth}px</p>
  <br />
  <div class="flex justify-between items-center">
    <p>Comparing: {font}</p>
    <p>{width}px</p>
  </div>

  <span id="fingerprinter" class="left-0 text-9xl p-0 m-0 border-0" {style}>
    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmwwwwwwwwwwwwwwwwwwwllllllllllliiiiiiiiii??????!!!!!
  </span>

  <p>{status}</p>
  <progress class="w-full m-0" max={fontList.length} value={progress} />
  <p>{progress} of {fontList.length}</p>
  <p>
    {((interval * (fontList.length - progress)) / 1000).toFixed(0)} seconds...
  </p>
  <br />

  <details class="bg-gray-100 rounded-lg p-2">
    <summary class="cursor-pointer font-bold"
      >{matches.length} matches, click to show/hide</summary
    >
    <div class="m-4 bg-yellow-300 p-2 rounded-md">
      <p>
        psst! You may see fonts here that you aren't aware of. Your browser also
        usually comes with a few fonts, or it might substitute known fonts (eg
        Times New Roman) with a different installed font.
      </p>
      <br>
      <p>
        However, this is still enough to fingerprint you. More sophisticated
        fingerprinters might include the pixel shift in your fingerprint, to
        even guess what font your browser is replacing that font with!
      </p>
    </div>
    <ul class="ml-4">
      {#each matches as match}
        <li class="list-disc" style="font-family: '{match}', sans-serif">
          {match}
        </li>
      {/each}
    </ul>
  </details>
</div>
