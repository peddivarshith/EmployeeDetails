# EmployeeDetails

### This is an application which performs CRUD operations on EmployeeDetails through GUI.
#### Description:
**When the user send's a request to the server by typing localhost:portNumber,the sever renders an ejs file to the client and user can see the list of employee details.
Employee details are stored in MongoDB and they are fetched by server. User can perform (Add | Delete | Update) operation on an employee. The main idea of the application is 
to provide a user with a user-friendly interface to interact with the data.**

#### Technical requirements
- NodeJS
- EJS
- AdminLTE(bootstrap)
- MongoDB

#### Package requirements
- npm install ejs [ejs-ref](https://www.npmjs.com/package/ejs)
- npm install express [express-ref](https://www.npmjs.com/package/express)
- npm install mongodb [mongodb-ref](https://www.npmjs.com/package/mongodb)
- npm install nodemon [nodemon-ref](https://www.npmjs.com/package/nodemon)

#### Images of the application
- **EmployeeDetails**
  > This is the starting page when you request the server.
  > It shows the list of employeedetails.
  ![](tutorial/step1.png)
- **AddEmployeeDetails**
  > You can add new Employee by going to Add Employee Section.
  > Here it shows a form with different field to be filled.
  ![](tutorial/step2.png)
- **UpdateEmployeeDetails**
  > Even you can update the exisiting employee by entering the EmpId. 
  ![](tutorial/step3.png)
- **DeleteAnEmployee**
  > You can delete the exisiting employee by providing the EmpId.
  ![](tutorial/step4.png)
- **VisualizeEmployeeDetails**
  > You can see the employee Details on a Pie-Chart.
  ![](tutorial/step5.png)  

