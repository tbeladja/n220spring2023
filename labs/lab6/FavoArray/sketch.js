<div id="favThings"></div>

<script>
  let favThings = ["Pizza", "Music", "Travel", "Coffee", "Books"];
  for (let i = 0; i < favThings.length; i++) {
    document.getElementById("favThings").innerHTML += favThings[i] + ", is one of my favorite things." + "<br>";
  }
</script>
