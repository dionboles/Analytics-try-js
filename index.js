var user = { 
    platform: navigator.appVersion,
    deviceMem: navigator.deviceMemory + "GB",
    userBattery: navigator.getBattery().then(function(Data){ return Data.level}) 
}