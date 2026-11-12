import type { Request, Response,NextFunction } from "express";
import { AppError } from "../errors/AppError";

//read GATE_WAYSECRET  from env
//compare  to incoming  x-gateway-secret
//match ->next();  missing/mismatch ->403
export function requireGatewaySecret(
    req: Request,
    _res:Response,
    next:NextFunction
){
    const expected ="gateway-secret" //process.env.GATEWAY_SECRET //gateway-secret

    if (!expected){
       return next(new  AppError(500, "GATEWAY_SECRET is not  configure"))
    }

    const incoming  =req.header("x-gateway-secret")
     
    if(!incoming  || incoming !==  expected){
        return next(new  AppError(402, "forbiden"))
    }

    next();
}