# ModelViewApp - Simacro Interview

Thanks for checking this project out! This project was built in 5 days for a a Simacro technical interview.

At the highest level, the ModelViewApp is a web app that allows a user to upload one or more .glb 3D model files and then view and manipulate the rendered model.

# Table of Contents
- [How to Run the App](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#how-to-run-the-app)
- [User Guide](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#user-guide)
- [Code Design Choices](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#code-design-choices)

# How to Run the App:

1. Head to this link: https://3-d-viewer-app.vercel.app/
- No need to run or set anything up on your system! This app lives on Vercel for the frontend and Google Cloud services (firebase) for the backend.
2. Only one user should use the app at a time (want to add a user authentication feature eventually)
  
# User Guide:

1. Start page (landing page) takes the user to a create page.
2. Create page:
- Upload and submit a .glb file.
- That file will render as a 3D model.
- Pan, tilt, zoom, and move around the 3D model.
- Change the model's background color and basic lighting settings.
- Save the current render frame as a jpg file by clicking the save as image button.
- Users can choose to upload more files.
    - Currently, duplicate file uploads are supported but DELETIONS are not.
- Users can click the "All Files" button to select another file they wish to render. 
    - On each file option, users have the ability to delete the model from the site.


# Code Design Choices
- The front end is built with react three fiber, a jsx extension of Three.js.
    - I did this so that building the react components would be more logical.
- A node backend does exist (pre-existing code is left in the backend section of the repo). After consideration of the extra feature criterion, however, I ended up hooking the front end up to Firebase and Google Cloud services.
    - Firebase cloud storage and firestore database are used.
    - Performance suffers due to the get/fetch time of the sometimes quite large file sizes. 
- Other larger choices were made with the project criteria in mind.



Small Note:
https://github.com/danielhan00/simacro-app is where I did most of the frontend work, I needed to migrate the React app to this repo to be able to hook up the back and front end together!
