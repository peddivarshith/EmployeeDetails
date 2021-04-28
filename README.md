# EmployeeDetails

### This is an application which performs CRUD operations on EmployeeDetails through GUI.
#### Description:
'''
When the user send's a request to the server through **localhost:5000**,the sever renders an ejs file to the client and user can see the list of employee details.
Here user can perform Add | Delete | Update an employee by going to the respective section. Employee details are stored in MongoDB and they are fetched by server.
'''

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

