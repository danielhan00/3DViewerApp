# ModelViewApp - Simacro Interview

Thanks for checking this project out! This project was built in 5 days for a a Simacro technical interview.

At the highest level, the ModelViewApp is a web app that allows a user to upload one or more .glb 3D model files and then view and manipulate the rendered model.

# Table of Contents
- [How to Run the App](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#how-to-run-the-app)
- [User Guide](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#user-guide)
- [Code Design Choices](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#code-design-choices)
- [Project Checklist](https://github.com/danielhan00/3DViewerApp/blob/main/README.md#project-checklist)

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
- Once finished, users should remove their images in the All Files dropdown menu.



# Code Design Choices
- The front end is built with react three fiber, a jsx extension of Three.js.
    - I did this so that building the react components would be more logical.
- A node backend does exist (pre-existing code is left in the backend section of the repo). After consideration of the extra feature criterion, however, I ended up hooking the front end up to Firebase database and Google Cloud storage services.
    - Firebase cloud storage and firestore database are used.
    - Performance suffers due to the get/fetch time of the sometimes quite large file sizes. 
- Other larger choices were made with the project criteria in mind.

# Project Checklist
1. COMPLETE: The web application should have a landing page with a brief introduction and a "Start" button.
2. COMPLETE:  Upon clicking the "Start" button, users should be taken to a page where they can upload a GLB 3D model file.
3. COMPLETE:  The uploaded 3D model should be displayed in a Three.js canvas on the page.
4. COMPLETE:  Users should be able to rotate, pan, and zoom in/out to interact with the 3D model.
5. COMPLETE:  Implement basic lighting and shading effects to enhance the 3D model's appearance.
6. COMPLETE:  Add a sidebar or menu that allows users to toggle different lighting settings (e.g., ambient, directional, point light).
7. COMPLETE:  Implement a feature that allows users to change the background color of the 3D model's environment.
8. COMPLETE:  Create a simple Node.js backend to handle file uploads and serve the React.js frontend.
9. COMPLETE:  Ensure the code is well-documented and organized following best practices.
    
Optional Enhancements
- (Bug) Implement animations for the 3D model.
- COMPLETE:  Allow users to switch between different GLB 3D models.
- COMPLETE:  Add the ability to take screenshots or save the current view of the 3D model.
- (Not implemented) Implement user authentication to save and retrieve user-specific settings.
- COMPLETE:  Deploy the application to a cloud platform (e.g., AWS, Heroku).

Small Note:
https://github.com/danielhan00/simacro-app is where I did most of the frontend work, I needed to migrate the React app to this repo to be able to hook up the back and front end together!
