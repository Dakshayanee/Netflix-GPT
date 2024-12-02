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
