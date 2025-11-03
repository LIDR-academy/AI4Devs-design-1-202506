import { CommandBus, QueryBus } from '@nestjs/cqrs';
export declare class ApplicationsController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createApplication(createApplicationDto: any): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    getApplications(query: any): Promise<{
        success: boolean;
        message: string;
        data: {
            applications: any[];
            total: number;
            page: number;
            limit: number;
        };
    }>;
    getApplication(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
        };
    }>;
    updateApplicationStatus(id: string, statusDto: any): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    startScreening(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            screening: string;
        };
    }>;
    scheduleInterview(id: string, interviewDto: any): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
}
