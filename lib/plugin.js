module.exports = [{
    id: 'autologout-labextension',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension autologout-labextension is activated!');

      var timeoutInMiliseconds = 600000;  // 10'
      var timeoutId;

      function startTimer() { 
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);
      }

      function resetTimer() { 
        console.log('reset autologout timer')
        window.clearTimeout(timeoutId)
        startTimer();
      }

      function doInactive() {
        window.location.href = "/hub/logout";
      }

      function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
         
        startTimer();
      }

      setupTimers();

    }
}];
