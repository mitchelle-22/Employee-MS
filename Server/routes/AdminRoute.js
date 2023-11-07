import express from "express"
import con from "../utils/db.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";



const router = express.Router()
//login with jwt 

router.post("/adminlogin", (req, res) => {
    const sql = "SELECT * from admin Where email = ? and password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
       if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        const email = result[0].email;
        const token = jwt.sign(
          { role: "admin", email: email, id: result[0].id },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.cookie('token', token)
        return res.json({ loginStatus: true });
      } else {
          return res.json({ loginStatus: false, Error:"wrong email or password" });
      }
    });
  });

//getting caegory from the sql
  router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


  //add category to the server
router.post('/add_category', (req, res) => {
  const sql = "INSERT INTO category (`category_name`) VALUES (?)"
  con.query(sql, [req.body.category], (err,result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true})
  })
})


//upload image 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'Public/Images')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  storage: storage
})
// end of image upload

//add employee to the database
router.post('/add_employee', upload.single('image'), (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.json({ Status: false, Error: "Password hashing error" });
    }

    const sql = `INSERT INTO employee (name, email, password, address, salary, image, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.salary,
      req.file.filename,
      req.body.category_id
    ];

    con.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Status: false, Error: err });
      }
      return res.json({ Status: true });
    });
  });
});

//get the employee added from the database
router.get('/employee', (req, res) => {
  const sql = "SELECT * FROM employee";
  con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})

//get employee by id
router.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE employee_id = ?";
  con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})
//update the employee infor 
router.put('/edit_employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee 
      set name = ?, email = ?, salary = ?, address = ?, category_id = ? 
      Where employee_id = ?`
  const values = [
      req.body.name,
      req.body.email,
      req.body.salary,
      req.body.address,
      req.body.category_id
  ]
  con.query(sql,[...values, id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error" +err})
      return res.json({Status: true, Result: result})
  })
})
//delete employee from the database
router.delete('/delete_employee/:id',(req,res)=>{
  const id = req.params.id;
  const sql = "DELETE FROM employee WHERE employee_id = ?";
  con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
    })
  
})

//count the number of admins in the database
router.get('/admin_count',(req,res)=>{
  const sql ="SELECT COUNT(admin_id) as admin FROM admin;";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
  })
})

//count the number of emplyees stored in the database
router.get('/employee_count',(req,res)=>{
  const sql ="SELECT COUNT(employee_id) as employee FROM employee;";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
  })
})

//count the sum of the salary recorded in the database
router.get('/salary_count',(req,res)=>{
  const sql ="SELECT SUM(salary) as salary FROM employee;";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
  })
})

router.get('/admin_records',(req,res)=>{
  const sql = "SELECT * FROM admin"
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
  })
})
router.get('/logout')

export {router as adminRouter}