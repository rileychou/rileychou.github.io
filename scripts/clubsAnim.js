const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const left = document.querySelectorAll(".left");
  const right = document.querySelectorAll(".right");
  left.forEach(function(target) {
    observer.observe(target);
  });
  right.forEach(function(target) {
    observer.observe(target);
  });
