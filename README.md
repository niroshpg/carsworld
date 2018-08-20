# carsworld
Front-end React application written in TypeScript to demonstrate how to consume NodeJS backend service

How to run:
----------
For test this code in development environment where server and and the front-end
is served in different ports need to handle CORS at server side or disable it in
web browser.
- clone src and install dependencies:  
  git clone https://github.com/niroshpg/carsworld.git  
  cd carsworld  
  npm install  

- uncomment src/server/app.ts CORS function  
  npm run build

- open another terminal and change directory to same above src  
  npm start


How to remove running instances [Mac OS X]:
------------------------------------------
- find processors on any of 30xx  
netstat -vanp tcp | grep 30

- Use PID  from above  
kill -9 <PID>

Credits:
--------
This was based on boilerplates code provided by Matthew Rowles <matth****es@gmail.com>
