## Please make sure to make the necessary changes before starting.
### Basic:
```
ng new public --routing
cd public
ng build
```
```
npm init -y
npm install express ejs body-parser mongoose --save
```
### Basic Angular Modules to import inside app.module.ts:
```javascript
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
```
### Launching:

#### Terminal 1
```
cd public
ng build -w
```
#### Terminal 2
```
cd ..
nodemon server.js
```

### Check if you need these node modules.
```
npm install express-session --save
npm install socket.io --save
npm install moment --save
npm install bcrypt --save
```
### Workflow
Update this readme file as you go along.

Check required modules on server.js

Comment and uncomment code as needed.

Change models as needed
