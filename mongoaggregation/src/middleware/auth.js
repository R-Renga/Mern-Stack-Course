import User from "../models/user";

export async function auth(req,res,next){
    const {token} = req.cookies;
    const passVerify = await jwt.verify(token, "Renga@123");
    const {id} = passVerify;
    const user = User.findById(id);
    if(user){
        req.user = user;
        next()
    }
}

