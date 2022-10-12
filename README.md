# Deployment
The deployed application can be found here: INSERT LINK WHEN DEPLOYED

# Work
All code can be found in our repository and is live on the deployed server (link above).

# Running the application locally and testing locally
In order to run the app locally, you should have Python, Git, and Node.js installed.

Python installation: https://www.python.org/downloads/

Git installation: https://git-scm.com/downloads

Node.js installation: https://nodejs.org/en/download/

Open a terminal and clone the repository into your desired directory with
<pre><code>git clone https://github.com/csc301-fall-2022/assignment-2-5-rebplane-eun-chae-s.git</code></pre>

cd into the project folder with
<pre><code>cd assignment-2-5-rebplane-eun-chae-s</code></pre>

TODO: NEED TO REARRANGE THE FILES BECAUSE HEROKU LIKES THEM IN THE ROOT DIRECTORY

Add the Django dependencies: (NOT SURE ABOUT THE FULL LIST, WILL CHECK LATER AND EDIT)
<pre><code>pip install django djangorestframework django-cors-headers</code></pre>
Then, run the server:
<pre><code>python manage.py runserver</code></pre>

Open a new terminal window (keep the old one running in the background):
Run the frontend with:
<pre><code>npm install</code></pre>
<pre><code>npm start</code></pre>

You should be able to access the app at http://localhost:3000 
