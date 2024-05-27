# Cocotton !

Welcome to Cocotton, an app where you can see, search and post recipes!


## Getting Started

### Prerequisites

* npm
    ```sh
    npm install npm@latest -g
    ```
* node
    ```sh
    nvm install v20
    ```
* clone the repo
    ```sh
    git clone git@github.com:Caro0507/recipe.git
    cd Cocotton
     ```
* backend
    ```sh
    cd backend
    nvm install
    nvm start
     ```
* frontend
    ```sh
    cd frontend
    nvm install
    nvm start
    ```

## What can you do ?
   You can login with the name **admin** and the password **admin**.
   Then you can
* click on the recipe to see details
* edit it
* create new recipe (with the manually apload version of picture in to the folder : /frontend/src/assets, better put a square image)
* search for a recipe by title (need to wait a little bit each time you type a letter if you want your result)


## What cant you do ?
 Basically you can't connect the front with the back... Sorry..
 The back and the front work but can't seem to find how to convert a Observable to the data fetched by the front...

 You can still try by commenting the line ~~ HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,  { dataEncapsulation: false })~~ 24 of the /frontend/src/app/app-module.ts

Thank you for your time.   

## Credit
Thanks to Simon Dieny - Code Senior and it youtube video : https://www.youtube.com/watch?v=DTIYVffhJuU
