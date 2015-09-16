'use strict';

// Use the Alarms API https://developer.chrome.com/extensions/alarms
chrome.alarms.create('remind', {
  delayInMinutes: 0.1,  // when to display the first notification
  periodInMinutes: 0
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  // https://developer.chrome.com/extensions/notifications
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'IDR_128x128-transparent.png',
    title: 'chrome.notification at second ' + (new Date()).getSeconds(),
    message: 'Notifications with a zero period hang Chrome',
  });
  
});
