# Scouting App for 293 SPIKE

This is a scouting app for the 293 SPIKE team. It is designed to be used on a laptop or tablet, with minimal internet connection. It is designed to be used in a competition environment, where internet connection is limited and/or unreliable.

### q5.js

q5.js is an alternative to p5.js that I found a few months ago. It uses the same syntax as p5.js, but it is much faster. It is also much smaller in terms of file size. Almost all functions are the same except for the fact that they must be prefixed by `q5.`. For example, `q5.createCanvas()` instead of `createCanvas()`. The only exception is the `preload()` function, which is not needed in q5.js.

Documentation for p5.js (and q5.js) can be found [here](https://p5js.org/reference/).

### PocketBase

The app uses the [Pocketbase](https://pocketbase.io/) database software to store data from scouting. The database can be accessed at [this URL](https://immense-scooter.pockethost.io/_). The database is password protected.
