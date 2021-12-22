## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sitemap](#sitemap)

## General info

This is NODE.JS project- car advert dummy, containing both embeded and listed backends using MONGODB database. 
# DOES NOT CONTAIN .ENV FILE PLEASE FOLLOW THE STEPS WRITEN IN SETUP

## Technologies

Technologies used:
-  "colors": v.1.4.0
- "cors": v.2.8.5
-  "dotenv": v.10.0.0
-  "express": v.4.17.1
-  "mongoose": v.5.13.3
-  "nodemon": v.2.0.12

## Setup

For embeded:

1. Make sure listed server is killed if you started it before.
2. Navigate to /2_backend_embeded
3. Create .env file which will containt two variables: 
`PORT = 8000`
`MONGODB_URI = (write your mongodb collection port here, must be different than listed)`
4. Open integrated terminal
5. Write `npm i` and hit enter
6. Write `node seeder.js` to send initial data
7. Write `npm run nodemon`
8. go to /1_frontend/scripts/.my-account.js file, enable lines from 108 to 127 & disable lines 130 to 142
10. go to /1_frontend folder and open live server on index.html

For listed:
1. Make sure embeded server is killed if you started it before.
2.  Navigate to /2_backend_listed
3. Create .env file which will containt two variables: 
`PORT = 8000`
`MONGODB_URI = (write your mongodb collection port here, must be different than embeded)`
4. Open integrated terminal
5. Write `npm i` and hit enter
6. Write `node seeder.js` to send initial data
7. Write `npm run nodemon`
8. Restore /1_frontend/scripts/.my-account.js file to it's original state if you tried to employ embeded backend before
9. Go to /1_frontend folder and open live server on index.html

## Sitemap

-- Home page (all cars adverts page)  
--- Login/Register page (user login or register page)  
--- My Account page (user account page and user cars advert managment page)

DB Models: https://prnt.sc/1d1cxy6
 
