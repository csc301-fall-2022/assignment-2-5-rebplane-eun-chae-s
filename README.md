# Deployment
The deployed application can be found here: 
https://assignment2-calculator.herokuapp.com/

# Work
All code can be found in our repository and is live on the deployed server (link above).

# Running the application locally
In order to run the app locally, you should have Python, Git, and Node.js installed.

Python installation: https://www.python.org/downloads/

Git installation: https://git-scm.com/downloads

Node.js installation: https://nodejs.org/en/download/

Open a terminal and clone the repository into your desired directory with
<pre><code>git clone https://github.com/csc301-fall-2022/assignment-2-5-rebplane-eun-chae-s.git</code></pre>

cd into the project folder with
<pre><code>cd assignment-2-5-rebplane-eun-chae-s</code></pre>

Add the Django dependencies: 
<pre><code>pip install django djangorestframework django-cors-headers djangorestframework-simplejwt django-on-heroku</code></pre>
Then, run the server:
<pre><code>python manage.py runserver</code></pre>

Open a new terminal window (keep the old one running in the background). Run the frontend from the folder assignment-2-5-rebplane-eun-chae-s with:
<pre><code>npm install</code></pre>
<pre><code>npm start</code></pre>

You should be able to access the app at http://localhost:3000 

# Running our tests locally:
In order to run the tests locally, you should have Python, Git, and Node.js installed.

Python installation: https://www.python.org/downloads/

Git installation: https://git-scm.com/downloads

Node.js installation: https://nodejs.org/en/download/

Open a terminal and clone the repository into your desired directory with
<pre><code>git clone https://github.com/csc301-fall-2022/assignment-2-5-rebplane-eun-chae-s.git</code></pre>

cd into the project folder with
<pre><code>cd assignment-2-5-rebplane-eun-chae-s</code></pre>

Add the Django dependencies: 
<pre><code>pip install django djangorestframework django-cors-headers djangorestframework-simplejwt django-on-heroku</code></pre>
Then, run the tests:
<pre><code>python manage.py test</code></pre>


In case you cannot run the test, try the following commands:

- Install virtual environment:
  <pre><code>pip install pipenv</code></pre>
- Run virtual environment:
  - Option 1: <pre><code>pipenv shell</code></pre>
  - Option 2: <pre><code>python -m pipenv shell</code></pre>
- Add Django dependencies (use command above)
- Run the test: <pre><code>python manage.py test</code></pre>

# Citation of code
For **User authentication** in backend and frontend:
- Kamble, Sushil. “Django Rest Framework + REACT -  Authentication Workflow 2022 (Part 1).” Medium, Medium, 13 Mar. 2022, https://sushil-kamble.medium.com/django-rest-framework-react-authentication-workflow-2022-part-1-a21f22b3f358. 
- Kamble, Sushil. “Django Rest Framework + REACT - Authentication Workflow 2022 (Part 2).” Medium, Dev Genius, 1 Mar. 2022, https://blog.devgenius.io/django-rest-framework-react-authentication-workflow-2022-part-2-d299b7fef875. 
- https://github.com/sushil-kamble/django-react-auth

For writing test cases:
- Ivanov, Ximiz, et al. “How Can I Use JWT Token in DRF Tests?” Stack Overflow, 1 Oct. 1967, https://stackoverflow.com/questions/62709479/how-can-i-use-jwt-token-in-drf-tests. 
