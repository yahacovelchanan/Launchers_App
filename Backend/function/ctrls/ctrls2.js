import jwt from 'jsonwebtoken'
import {insertUser ,deleteOne ,findMe,findAll, update} from '../services/services2.js'


export const createUser = async(req,res) => {
    const {username,password,email,user_type} =req.body
    const newUser=await insertUser(username,password,email,user_type)
    return res.json(newUser)
}

export const updateUser = async(req,res) => {
    const {username,password,email,user_type} =req.body
    const changeUser=update(req.user.id,username,password,email,user_type)
    return res.json(changeUser)
}


export const deleteUser = async(req,res) => {
    const idForDelete=req.params.id
    await deleteOne(idForDelete)
    return res.json({msg:"The user was successfully deleted."})
}


export const loginUser = async(req,res) => {
    const allUsers=await findAll()
   const { username, password } = req.body;
   const user = allUsers.find(u => u.username === username && u.password === password);
   if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
    const payload = {
    id: user._id,
    username: user.username,
    password: user.password,
    user_type:user.user_type,
    last_login:new Date()
  };
  const token = jwt.sign(payload, "mytoken", { expiresIn: '1h' });
  return res.json({ message: 'Login successful', token });
}

export const getUser = async(req,res) => {
    const userById=await findMe(req.user.id)
    return res.json(userById)
}






