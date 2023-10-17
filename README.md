# SGM Project

### Steps to install:

1. Clone the repo or download the code (extract it after):
```cmd
git clone https://github.com/ToniG22/sgm_v2.git
```

2. Enter the project's directory:
```node
cd ./sgm_v2
```

3. Install all dependencies:
```node
npm install
```

4. Execute the project:
```node
npm run dev
```

### IMPORTANT INFO:

The website does **NOT** use a database, so in order to see new events (arraiais ou festivais) you'll need to:
1. Go to the Admin page using the navbar.
2. Login to the admin account (Username: admin | Password: admin).
3. Fill in the details of an event.
4. Press the add button (The table below will update).
5. Now return to the desired page (festivals or arraiais) and have fun!

### IN CASE OF ERRORS:

If you're experiencing errors running the project execute the following command on your browser's console:
```javascript
localStorage.clear();
```

