function createWordListAnimation(animNode, delay){
  // Fetch the DOM elements.
  var animWindow = animNode.querySelector(".animation-window");
  var ul = animWindow.querySelector("ul");
  var lis = ul.querySelectorAll("li");

  // Copy the animation's window to create the gray list.
  var grayList = animWindow.cloneNode(true);
  var grayUl = grayList.querySelector("ul");
  grayList.classList.remove("animation-window");
  grayList.classList.add("animation-gray-list");
  animNode.insertBefore(grayList, animWindow);

  // This function shows the li number `liNum`.
  function goTo(liNum){
    var li = lis[liNum];
    var liTop = li.getBoundingClientRect().top;
    var ulTop = ul.getBoundingClientRect().top;
    var liOffset = liTop - ulTop;
    ul.style.top = -liOffset + "px";
    grayUl.style.top = -liOffset + "px";
  }

  // Set up an interval that changes the current li every `delay` ms.
  var current = 0;
  // We need a boolean to know if the animation is going up or down.
  var ascending = true;
  // Create the interval.
  return setInterval(function(){
    ascending = ascending && current + 1 < lis.length || current === 0;
    current = ascending ? current + 1: current - 1;
    goTo(current);
  }, delay);
}

createWordListAnimation(document.querySelector(".animation"), 1000 /* (ms) */);

      // Detect Device Type
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // When ready, auto-scroll 1px to hide URL bar
        window.addEventListener("load", function () {
          // Set a timeout...
          setTimeout(function () {
            // Hide the address bar!
            window.scrollTo(0, 1);
          }, 0);
        });
      }
