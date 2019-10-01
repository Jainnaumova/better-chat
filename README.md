# Chat user interface
## Technologies used
* Node.js
* Express
* React
* Javascript
* HTML5
* CSS3
* SVG
* Flexbox
* 3D transition
* Shortid library
* Moment library
* Material Icons
* Responsive design
* Mobile version
* ```media@```

## App’s architecture
* Page render server side using Node.js Express with markup containing the initial state of the chat based on initial data.json
* UI supports adding new chat messages by current user
* Application provides server side endpoint that on GET returns the initial data.json
* Application provides server side endpoint that on POST accepts a single new post
* New message displays on the screen and sent payload to the server's API endpoint
* Implemented validation of input message

## Setup
To use this site locally, you’ll need to take the following steps:

* Clone the repo

    ```git clone https://github.com/Jainnaumova/better-chat.git```

* Install all the dependencies for both server(in the project root) and client side (inside the ```client``` folder)

    ```npm install```

* Start a server side application(in the project ```root```)

    ```npm run server```

* Start a client side application(in the project ```root```)

    ```npm run client```

* Go to `http://localhost:3000/` in the browser.

* Go to `http://localhost:5000/api/posts` in the browser to check posts data on the server

* Go to `http://localhost:5000/api/users` in the browser to check users data on the server
