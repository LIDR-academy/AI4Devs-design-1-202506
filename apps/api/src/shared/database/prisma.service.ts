import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);
  private isConnected = false;

  async onModuleInit() {
    try {
      await this.$connect();
      this.isConnected = true;
      this.logger.log('✅ Database connected successfully');
    } catch (error) {
      this.logger.warn('⚠️  Database connection failed, running in offline mode');
      this.logger.warn(`Error: ${error.message}`);
      this.isConnected = false;
    }
  }

  async onModuleDestroy() {
    if (this.isConnected) {
      await this.$disconnect();
    }
  }

  isDBConnected(): boolean {
    return this.isConnected;
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') return;
    
    // Delete in reverse order of dependencies
    const modelNames = [
      'auditLog',
      'analytics', 
      'notification',
      'offer',
      'interview',
      'screening',
      'application',
      'job',
      'company',
      'person'
    ];

    for (const modelName of modelNames) {
      const model = this[modelName as keyof PrismaService] as any;
      if (model && typeof model.deleteMany === 'function') {
        await model.deleteMany();
      }
    }
  }
}