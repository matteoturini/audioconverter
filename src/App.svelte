<script lang="ts">
  import { writable } from "svelte/store";
  import { tweened } from 'svelte/motion';
  import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
  const ffmpeg = createFFmpeg({ log: true });

  // 0 is hidden
  // 1-100 progress
  const conversion = tweened(0);

  ffmpeg.setProgress((prog) => conversion.set(Math.max(Math.min(prog.ratio, 100), 0.1)));

  if (!ffmpeg.isLoaded()) ffmpeg.load();

  interface FileType {
    format: string;
    mime: string;
    type: "audio" | "video";
  }

  const fileTypes: FileType[] = [
    {
      format: "mp3",
      mime: "audio/mpeg3",
      type: "audio",
    },
    {
      format: "opus",
      mime: "audio/opus",
      type: "audio",
    },
    {
      format: "m4a",
      mime: "audio/mp4",
      type: "audio",
    },
  ];

  function download(path: string, filename?: string) {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename || path;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
}; 

  document.body.addEventListener("drop", (ev) => {});

  let selectedValue = writable("mp3");

  let input: HTMLInputElement;

  async function onConversion() {
    if (input) {
      input.click();
    }
  }

  async function onFilePicked() {
    if (input.files[0].size > 512_000_000) {
      alert("File too big");
    }
    const { name } = input.files[0];
    const ouputFilename = 'output.' + $selectedValue;
    while (!ffmpeg.isLoaded()) {}
    ffmpeg.FS('writeFile', name, await fetchFile(input.files[0]));
    await ffmpeg.run('-i', name, ouputFilename);
    const data = ffmpeg.FS('readFile', ouputFilename);
    download(URL.createObjectURL(new Blob([data.buffer])), name + '.' + $selectedValue);
  }

</script>

<main>
  <h1>Audio conversion</h1>
  <label for="filetype">Convert your file to:</label>
  <select on:change={(ev) => selectedValue.set(ev.currentTarget.value)} value={$selectedValue} name="filetype" id="filetype">
    {#each fileTypes as type}
      <option value={type.format}>
        {type.format}
      </option>
    {/each}
  </select>
  <button on:click={onConversion}>Open file...</button>
  <input on:change={onFilePicked} type="file" name="input" id="input" style="display: none;" bind:this={input}>
  <progress value={$conversion} id="conversion" hidden={$conversion === 0} />
</main>

<style lang="scss">
  main {
    display: grid;
    place-items: center;
  }

  select {
    margin-bottom: 2rem;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: hsl(0, 0%, 10%);
    cursor: pointer;
    transition: background-color 0.25s;
    &:hover {
      background-color: hsl(0, 0%, 11%);
    }
    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
</style>
