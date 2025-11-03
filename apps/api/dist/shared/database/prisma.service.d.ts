import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    private readonly logger;
    private isConnected;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    isDBConnected(): boolean;
    cleanDatabase(): Promise<void>;
}
