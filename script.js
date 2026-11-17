(function(){
  // Event start: 5 December 2026, 2:00 PM Uganda time (UTC+3)
  var target = new Date("2026-12-05T14:00:00+03:00").getTime();
  var timer = document.getElementById("timer");
  var status = document.getElementById("status");
  var sub = document.getElementById("sub");
  var els = {d:document.getElementById("d"),h:document.getElementById("h"),m:document.getElementById("m"),s:document.getElementById("s")};

  function pad(n){ return n < 10 ? "0" + n : String(n); }

  function tick(){
    var diff = target - Date.now();
    if (diff <= 0){
      timer.style.display = "none";
      status.style.display = "block";
      // Treat the event as "now" for 12 hours after the start
      if (-diff < 12*3600*1000){
        status.textContent = "It’s happening now! Come play with clay 🏺";
        sub.textContent = "Kyaliwajala GC8";
      } else {
        status.textContent = "Thanks for the memories! See you next time 💛";
        sub.textContent = "The event has ended";
      }
      return;
    }
    var s = Math.floor(diff/1000);
    els.d.textContent = pad(Math.floor(s/86400));
    els.h.textContent = pad(Math.floor(s%86400/3600));
    els.m.textContent = pad(Math.floor(s%3600/60));
    els.s.textContent = pad(s%60);
    setTimeout(tick, 1000 - (Date.now() % 1000));
  }
  tick();
})();
