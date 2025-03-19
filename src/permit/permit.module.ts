import { Module } from '@nestjs/common';
import { PermitService } from './permit.service';
import { PermitController } from './permit.controller';

@Module({
  controllers: [PermitController],
  providers: [PermitService],
})
export class PermitModule {}
