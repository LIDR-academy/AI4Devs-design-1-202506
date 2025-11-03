import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationsController } from './interface/http/applications.controller';

@Module({
  imports: [CqrsModule],
  controllers: [ApplicationsController],
  providers: [],
  exports: [],
})
export class ApplicationsModule {}