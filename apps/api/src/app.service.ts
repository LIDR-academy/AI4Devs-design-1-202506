import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): object {
    return {
      message: 'ATS LTI-AF API is running successfully! 🚀',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      status: 'healthy'
    };
  }

  getInfo(): object {
    return {
      name: 'ATS LTI-AF API',
      version: '1.0.0',
      description: 'API para el sistema de seguimiento de candidatos de próxima generación',
      environment: process.env.NODE_ENV || 'development',
      features: [
        'Gestión de ofertas de trabajo',
        'Seguimiento de aplicaciones',
        'Sistema de screening con IA',
        'Programación de entrevistas',
        'Gestión de ofertas y contratación',
        'Analytics y reportes'
      ]
    };
  }
}