module.exports = [{
    id: 'autologout-labextension',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension autologout-labextension is activated!');

      var timeoutInMiliseconds = 1800 * 1000;  // 30'
      var timeoutId;
      var lastTrigeredTime = 0;

      function startTimer() { 
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);
      }

      function resetTimer() {
        // Timer reset every 10 seconds on event trigered
        if (Date.now() - lastTrigeredTime > 10000) {
          console.log("[autologout] logout timer reset");
          lastTrigeredTime = Date.now();
          window.clearTimeout(timeoutId);
          startTimer();
        }
      }

      function doInactive() {
        console.log("[autologout] logout trigered due to user inactivity");
        window.location.href = "/hub/logout";
      }

      function setupTimers () {
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("mousedown", resetTimer);
        document.addEventListener("keypress", resetTimer);
        document.addEventListener("touchmove", resetTimer);
         
        startTimer();
      }

      setupTimers();

    }
}];
