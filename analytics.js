// Google Analytics. Runs only on the live site, so local previews aren't counted.
if (location.hostname === "yangkeunyun.github.io") {
  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=G-D54BS9DFQ6";
  document.head.appendChild(tag);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", "G-D54BS9DFQ6");
}
