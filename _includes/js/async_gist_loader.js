<script>
(function() {
  function asyncLoad() {
    var script = document.createElement("script");
    script.src = "/assets/js/async-gist.js";
    script.async = true

    var entry = document.getElementsByTagName("script")[0];
    entry.parentNode.insertBefore(script, entry);
  }

  if (window.attachEvent)
    window.attachEvent("onload", asyncLoad);
  else
    window.addEventListener("load", asyncLoad, false);
})();
</script>
