import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PermitModule } from './permit/permit.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [AuthModule, PermitModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
