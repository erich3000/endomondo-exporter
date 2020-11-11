# endomondo-exporter
Exports your endomono workouts grouped by month and year

## Why i wrote this 

The Endomondo Tracking App will be sundowned at the end of 2020. So i needed a way to export my workouts. Endomono itself only lets you export single workouts, but i wanted my whole workout history. Luckily i found the 
[fabulator/endomondo-api-handler](https://github.com/fabulator/endomondo-api-handler) by Michal Ozogán, so all the credit for the really hard work goes to him. I only use his work here.

As most Endomondo alternatives only can handle bulk gpx imports up to 25 files, i needed a way to seperate the exported files into smaller clusters. So I had the idea to name the files after their workout date an group the files by month and year. Doing so i can import them month by month now easily.

## Getting started

* fork or download this repository
* make sure your have node 9.x installed
* perform ```npm install```
* type in your endomondo credententials into ```credentials_template.json``` and rename the file to ```credentials.json```
* call ```npm run export```
* all your workouts will now be written into a folder called ```./gpx```. there you will find folders for the years and months of your workout.
