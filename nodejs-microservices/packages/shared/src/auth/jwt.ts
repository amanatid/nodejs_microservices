import  jwt from 'jsonwebtoken'
import { JwtPayload } from './types'

function  extractjwtSecret(): string {
    const secret = "dev-strong-secret" //process.env.JWT_SECRET
    
    if( !secret){
        throw  new Error("JWT_SECRET is nto set")
    }
   
    return secret
}


export  function signToken(payload : JwtPayload): string{
    const expiresIn= "7d" //process.env.JWT_EXPIRES_IN;
    
    return  jwt.sign(payload,extractjwtSecret(),{
        expiresIn:expiresIn  as jwt.SignOptions["expiresIn"],
    })
}

export function verifyToken(token:string) : JwtPayload{
    const decodeToken = jwt.verify(token,  extractjwtSecret())
    if( typeof decodeToken  !== 'object' || decodeToken === null ||
        typeof decodeToken.userId !== 'string'
         || ( decodeToken.role !== 'USER'  && decodeToken.role !== "ADMIN"  )
     ){
        throw new Error("Invalid token payload");
     }

     return {
        userId:decodeToken.userId,
        role:decodeToken.role,
     }
}