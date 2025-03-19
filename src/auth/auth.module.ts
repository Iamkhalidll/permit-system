import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import { JWTAuthGuard } from './auth-guard/auth.guard';
import { JwtStrategy } from './auth-strategies/jwt.strategy';
dotenv.config();

@Module({
  imports:[PassportModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{ expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
  providers:[AuthService,JWTAuthGuard,JwtStrategy]
})
export class AuthModule {}
