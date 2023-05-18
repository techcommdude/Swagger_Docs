
# Some of the commands necessary to set it up:

**Test it on local first found here:**

 http://127.0.0.1:5000/

**Run this command.  Will likely need to run the collectstatic command before this one to have the latest css files:**

heroku local

**To shut down the local:**

sudo fuser -k 5000/tcp

* **Note:** Will likely need to run "heroku login" in order to connect to Heroku.  Log in to Heroku before you do this.

**Connect to the remote repository:**

Do this command in Linux Ubuntu: heroku login

heroku git:remote -a swagger-docs

**Commit the files**

git add .

git commit -am "make it better"

**Push the changes to the remote repository on Heroku:**

heroku login

git push heroku master

Note: the branch could also be called "main" in Git.