# Report

## Summary of our decisions (1a)
We decided to build a web application with the basic calculator functions (add item, delete item, calculate with taxes, with discount) and user authentication. Our tech stack is React (frontend), Django (backend), PostgreSQL (database). For our frontend, we decided to use React. We use CSS and Bootstrap for styling. We use Axios to send requests to our backend API (Django). For our backend, we decided to use Python Django with REST framework to create a Django REST API. For user authentication with Django, we decided to use Django Rest Framework's Simple JSON Web Token Authentication. For our database, we decided to use PostgreSQL. We chose Heroku for our deployment of our frontend and backend, and Heroku Postgres again for our database.

# Frontend:

## Options:

Three options we had for our frontend were **React, Vue,** and **Angular**.

## Ease of development:

React and Vue use JavaScript, and for Angular we'd need to learn TypeScript. And React/Vue seemed to be the better choice for us because we are both familiar with working JavaScript. Angular is also much more difficult to learn than React and Vue due to its complex structures.

## Performance, scale, and speed:

In terms of performance and speed, Vue is the best performing of the three as it can handle 10 frames per second. However, React is best for complex projects and has better scalability by providing flexibility for us to write template code.

## Maturity:

Angular is more mature than both React and Vue, and has been around for the longest amount of time. React is also a mature framework with a large community of developers and support. Vue is newer than the other two, but is starting to become big as well.

## Popularity:

All three of these frameworks, however, are among the top 5 most loved frameworks on the Stack Overflow 2021 survey. thus are all extremely popular.But among them, React is the most popular frontend framework, as many job recruiters look for React experience/developers. And most people use React due to the ease of learning and its flexibility.

## Final decision:

We decided to go with React as it is the most popular frontend framework and React developers are widely sought. As well, it is easier to learn than Angular and have more flexibility than Angular and Vue. Due to its popularity, it has lots of great resources on the topic.

---

# Backend:

### Options:

Three options we had for our backend were **Django, NodeJS,** and **Flask**.

### Ease of development:

Django and Flask are Python web frameworks, and NodeJS is using JavaScript. As both of us have experience coding in Python and JavaScript, these three were our top choices to consider.

### Performance, Scability, and Deveopment speed:

In terms of development speed, among three frameworks, Flask is the fastest one while Node is the slowest one. This is due to Flask and Django provide built-in templates and modules and more dynamic while Node is for customization. But we can write less code in Flask compared to Django for the same functionality. All three are also scalable frameworks, but Django and Flask are more scalable than Node. In regards to performance, NodeJS usually has better performance than Django and Flask.

### Maturity:

All three are mature frameworks with a relatively large number of developers supporting them. NodeJS however, has a much larger developer community than the other two.

### Domains covered:

Python allows development with machine learning and has a large amount of libraries available. NodeJS also has a vast amount of libraries available.

### Popularity:

From the JetBrains Developer Ecosystem Report, for languages, JavaScript is the top language used among developers, and Python is the 3rd most popular language - thus, writing with Python or JavaScript was appealing to us. In regards to backend frameworks,on the Stack Overflow 2021 Survey for frameworks Django, Express and Flask are all among the top 6 most loved frameworks.

### Databases:

Django has great database support for relational databases, with its default being SQLite. Flask as well has great support for relational databases, however it's more complex to set up. NodeJS supports both relational and non-relational databases, with libraries that make them easy to set up, such as Mongoose for MongoDB.

### Final decision:

We decided to go with Django due to the popularity of the framework and language it uses. We chose it over NodeJS as we ended up deciding on using a relational database and Django works really well with PostgreSQL and has its own User models and authentication functions.

# Databases

### Options:

Three options we had for our database were **SQLite, PostgreSQL** and **MongoDB**.

### Ease of development:

As CSC343 focuses on relational databases and PostgreSQL, we have prior familiarity with PostgreSQL and relational databases, compared to NoSQL such as MongoDB.

### Performance, scale, and speed of NoSQL vs SQL:

Two of them are relational databases (SQLite, PostgreSQL) and MongoDB is a NoSQL database. Relational databases provide data consistency over flexibility, while Non-relational database gives flexibility and dynamic schema. On our application, we don't expect our model to change or to scale our application up in the future. A relational database therefore would fit our needs more, and SQL provides better data integrity. In regards to speed, NoSQL queries are often faster than SQL queries as SQL data is normalized, so we need to join multiple tables together for a query, and NoSQL queries are denormalized and optimized for queries.

### Maturity:

SQL is more mature as they have been around longer and are supported by large communities. NoSQL has not been around as long, thus it is not as mature, however its community is growing fast.

### Popularity:

According to the StackOverflow 2021 Survey, PostgreSQL and MongoDB are the 2nd and 3rd most popular databases, and SQLite is 8th. PostgreSQL and MongoDB are thus very popular choices. More recruiters also recruit for PostgreSQL and MongoDB.

Now that we have compared relational vs. non-relational databases, we will now compare the two relational database options we chose for Django as our backend.

## SQLite vs. PostgreSQL:

SQLite is typically used in development environments, as Django has a local SQLite database when the project is first initialized. However, PostgreSQL is typically used in production with Django, as recommended by the official documentation of Django. SQLite is also not very good for very large databases and with lots of write operations, as SQLite only allows one operation at a time. However, as we were to deploy on Heroku, Heroku has only ephemeral support for SQLite on Heroku, and has great support for PostgreSQL.

## Final decision:

As there were more advantages on using a relational database with our project than a non-relational one, we decided to use either SQLite or PostgreSQL. Then, we made a final decision for suing PostgreSQL as Heroku provides support for it and it is what is typically used in production with Django.

# References
- Daityari, Shaumik. “Angular vs React vs Vue: Which Framework to Choose in 2022.” CodeinWP, VertiStudio, 17 Aug. 2022, https://www.codeinwp.com/blog/angular-vs-vue-vs-react/. 
- “Django vs Node.js: Which One Is Best for Your next Project?” APPWRK IT Solutions, 7 Oct. 2022, https://appwrk.com/django-vs-node-js-which-one-is-best-for-your-next-project#:~:text=Django%20allows%20Python%20usage%20in,to%20develop%20the%20web%20servers. 
- “Documentation.” Django, https://docs.djangoproject.com/en/4.1/topics/install/#database-installation. 
- Espinel, Andrés. “Django vs Node.js: Which One Is Better for Web Development?” Medium, Dev Genius, 14 May 2022, https://blog.devgenius.io/django-vs-node-js-which-one-is-better-for-web-development-58b4c66c6dee. 
- Singh, Vijay. “Flask vs Django in 2022: Which Framework to Choose?” Hackr.io, https://hackr.io/blog/flask-vs-django. 
- “SQL VS NOSQL: Differences, Databases, and Decisions.” Talend, https://www.talend.com/resources/sql-vs-nosql/#:~:text=SQL%20is%20the%20programming%20language,generally%20do%20not%20use%20SQL. 
- “Stack Overflow Developer Survey 2021.” Stack Overflow, https://insights.stackoverflow.com/survey/2021. 
- “The State of Developer Ecosystem in 2021 Infographic.” JetBrains, https://www.jetbrains.com/lp/devecosystem-2021/. 
