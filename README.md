# node-red-contrib-iiot-systime

[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
![NPM version](https://badge.fury.io/js/node-red-contrib-iiot-systime.svg)
![NPM](https://img.shields.io/npm/l/node-red-contrib-iiot-systime)

A Node-Red node for read system time<br>

## Node Features
- Reads system time and sends as number array.<br>
- Update on cycle time interval.<br>

## Install

Install with Node-Red Palette Manager or npm command:
```
cd ~/.node-red

npm install node-red-contrib-iiot-systime
```

### Time/Date Array Elements:
|Element|Value|Array-Index|
|---|---|---|
|Seconds|0 .. 59|0|
|Minutes|0 .. 59|1|
|Hours|0 .. 12/23|2|
|AM/PM|0=AM, 1=PM|3|
|Weekday|0 .. 7, 0=Sunday|4|
|Day|1 .. 31|5|
|Month|1 .. 12|6|
|Year|YYYY|7|
