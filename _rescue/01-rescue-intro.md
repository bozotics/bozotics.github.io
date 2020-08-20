---
title: Introduction
permalink: /rescue/intro/
redirect_from:
  - /rescue/
---

## COMING SOON

<details id="3dButton" markdown=1><summary>3d Model (≈30mb)</summary>
<div style="position:relative;padding-bottom:100%;margin:15px auto!important;">
<iframe
src="about:blank"
data-src="https://myhub.autodesk360.com/ue2a284a0/shares/public/SH56a43QTfd62c1cd968ffcc4549b3abbefe?mode=embed"
style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
allowfullscreen="true"
webkitallowfullscreen="true"
mozallowfullscreen="true"
frameborder="0"
id="3dModel"
></iframe></div>
Controls: Left click + drag to orbit, Middle click + drag to pan, Scroll to zoom
</details>

<script>
var model = document.getElementById('3dModel');
var details = document.getElementById('3dButton');
var toggled = false;
details.addEventListener('toggle', function() {
  if (!toggled) {
    model.setAttribute('src', model.getAttribute('data-src'));
    toggled = true;
  }
});
</script>
