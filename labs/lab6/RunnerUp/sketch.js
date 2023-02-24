<div id="runnerUp"></div>

<script>
  let times = [54, 32, 47];
  times.sort((a, b) => a - b);
  document.getElementById("runnerUp").innerHTML = "Second Place: " + times[1] + "<br>" + "Third Place: " + times[2];
</script>
