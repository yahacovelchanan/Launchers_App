import jwt from 'jsonwebtoken'

export function checkToken(req,res,next){
    const authHeader=req.headers.authorization
    if(!authHeader){
        return res.status(401).json({msg:"authorization header missing"})
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }
  else{
    const decoded = jwt.verify(token, "mytoken");
    req.user = decoded;
    next();
}}

export function checkIsAdmin(req,res,next){
     if(req.user!="admin"){
            return res.status(403).json({ message: 'Access denied: admin role required' });
        }
        else{
            next()
        }
}

export function checkIsAvir(req,res,next){
     if(req.user!="avir"||req.user!="admin"){
            return res.status(403).json({ message: 'Access denied: admin role required' });
        }
        else{
            next()
        }
}

export function checkIsModiin(req,res,next){
     if(req.user!="modiin"||req.user!="admin"){
            return res.status(403).json({ message: 'Access denied: admin role required' });
        }
        else{
            next()
        }
}