function changeStyle(element) {
    element.style.backgroundColor = "blue";
    element.style.width = `${element.offsetHeight}px`;
  }
  
  function handleClick1() {
    const box1 = document.getElementById("box1");
    changeStyle(box1);
  }
  
  function handleClick2() {
    const box2 = document.getElementById("box2");
    changeStyle(box2);
  }
  
  function handleClick3() {
    const box3 = document.getElementById("box3");
    changeStyle(box3);
  }
  
  document.getElementById("button1").addEventListener("click", handleClick1);
  document.getElementById("button2").addEventListener("click", handleClick2);
  document.getElementById("button3").addEventListener("click", handleClick3);
  