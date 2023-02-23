import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Body() body: AuthDto){
        console.log({
            body,
        });
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
        return this.authService.signin();
    }

    
}