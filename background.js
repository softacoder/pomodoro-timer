chrome.alarms.create("pomodoroTimer", {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListner((alarm) => {
    if (alarm.name === "pomodoroTimer") {
    }

chrome.storage.local.get(["timer", "isRunning"], (res) => {
    chrome.storage.local.set({"timer" in res ? res.isRunning : false,
});

});