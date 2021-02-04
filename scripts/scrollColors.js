

const callbackFunc = function(entries) {
    entries.forEach(entry => {
      document.querySelector('body').classList.toggle("dark-blue");
    });
  };
  
  const obs = new IntersectionObserver(callbackFunc);
  
  const evens = document.querySelectorAll(".odd-sections");
  evens.forEach(function(target) {
    obs.observe(target);
  });