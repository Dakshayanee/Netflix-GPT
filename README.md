# Netflix GPT
 -create react app
 -configure tailwindCSS 
 -install react-router-dom


 -create header
 -signin form
 -signup form
 -validate forms
 -useRef hook-to refer a value which does not need to be render
 -use Firebase for deployment(first create the project then goto web and register your app install firebase in ur project copy the initialise Firebase and begin using the SDKs for the products that you'd like to use. in your project  then goto firebase cosole then into your project build -> autentication -> getstarted -> it will give you sign in method -> npm install -g firebase-tools  -> firebase login  -> firebase init ->choose  Hosting: Configure files for Firebase Hosting and (optionally)  
set up GitHub Action deploys ->add exsiting project -> choose project -> give name build -> say no to all 
 ) 
 -npm run build(we r telling the firebase that we r deploying this project using build folder)
 -firebase deploy 

 -goto firebase docs ->search for authentication web and use the web modular apis for authentication
 -initialize auth once in firebase.js file and use it everywhere

     ### To store the login data use redux store ###
 -->install redux toolkit ->npm i -D @reduxjs/toolkit
                          ->npm i react-redux
       1.create appStore in utils 
       2.create userSlice in utils
       3.provide provider in app.js wrap the body in the provider.

  -->To update the user in store add onAuthStateChanged function from firebase into the body whenver user signin/signup this function will get called        

  -->add signOut function from firebase password authentication into head              

  -->add updateProfile function from firebase into the login form

  -->put all the string urls in one constant file "# Netflix-GPT" 

  ---> to fetch movie data use TMDB
       -first login
       -register your app init
       -settings -> api  ->now playing movie list ->copy get api and paste it in constants and fetch this api in browse using
         async await
         -then call the api using useEffect because it will be called only once

  ---->to add movie list to redux store
      -create movie slice 

------>create a custom hook to reduce code in the browse and add into the useNowPlayingMovies 

------>for backdround video goto tmdb ->doc->api ref->
movie -> videos -> put id of 1st video

--->add custom hook for videobackground as useMovieTrailer

--->build secondary component
  1.secondary component
  2.Movie list --contains no of movies
  3.Movie Card  
  4.create movie card with img
to get image url from TMDB  -->guide ->image ->basic  copy the img url in ur constant 

    ****GPT Search header****
    1.create a button(GPTSearch) in header show only when user logged in
    2.create GPTSearch component and import it in browse
    3.create a slice for store the info

    ****Multi-lang feature in our app ****
    1.create a const to store lang
    2.use it in GptSearchBar