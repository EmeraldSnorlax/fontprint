<script>
  import { text } from "svelte/internal";
</script>

<p>CSS allows you to set font fallbacks, like so:</p>
<pre
  class="code">
  <code>
p &lbrace;
  font-family: 'Chiller', monospace;
&rbrace;
  </code>
</pre>
<p style="font-family: Chiller, monospace;">
  If you have Chiller installed, this text will render using that. Otherwise,
  this text will appear monospaced. Try opening this page on a Windows computer
  (likely has Chiller installed) or your phone (likely doesn't)!
</p>
<br />
<p>
  This is all you need to create a fingerprint of a browser just from the fonts
  you have installed.
</p>
<br />
<p>
  You've probably noticed that the title text is changing in width -- that's how
  the script detects what fonts you have on your system.
</p>
<br />
<p>
  Render a piece of text in a certain typeface, and then test against each
  fallback font. If the width changes (detected via JavaScript), the font is
  probably installed. Cycle through thousands of fonts and you can come up with
  a pretty good profile of a browser, if you have installed and fonts that are
  unusual for your operating system.
</p>
<br />
<p>
  This can be prevented by:
</p>
<ul class="list-disc ml-8">
  <li>Not installing any fonts outside of your OS's defaults</li>
  <li>Using a browser extension to add noise to your fingerprint</li>
  <li>Disabling JavaScript</li>
</ul>
