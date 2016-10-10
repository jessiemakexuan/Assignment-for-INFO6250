# Goal: 
	Collected user details in a JSON object and written the JSON object to screen. (Code must follow MVC)


# Steps:
## Deploy the signuppage application on VM:
	1. Switch to root: sudo su – 
	2. Enter command for update and install:
		apt-get update
		apt-get install apache2
		apt-get install php
	3. Go to external IP in browser to check whether apache works
		http://external IP
	4. Enter apache2 default DocumentRoot:  cd /var/www/html
	5. Create signuppage.html and controller.js using the command: 
		vi signuppage.html 
		vi controller.js

## Search http://external IP/hw3signuppage.html for result and test.