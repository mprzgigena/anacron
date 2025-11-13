// ==================================================================================
// ANACRON - PUNTO DE ENTRADA PRINCIPAL (MAIN.TS) - BOOTSTRAP DE LA APLICACIÓN
// ==================================================================================
//
// 📋 DESCRIPCIÓN:
// Este archivo es el punto de entrada de toda la aplicación ANACRON. Es el primer
// código que se ejecuta cuando se inicia el servidor. Su función principal es
// inicializar y configurar la aplicación NestJS.
//
// 🚀 FUNCIÓN PRINCIPAL:
// - Crear una instancia de la aplicación NestJS
// - Configurar el servidor HTTP
// - Establecer el puerto de escucha
// - Iniciar el servidor para recibir requests
//
// ==================================================================================
// 🔄 FLUJO DE EJECUCIÓN COMPLETO:
// ==================================================================================
//
// 1. 📦 IMPORTACIÓN DE DEPENDENCIAS:
//    - NestFactory: Fábrica para crear aplicaciones NestJS
//    - AppModule: Módulo raíz que contiene toda la configuración
//
// 2. 🏗️ FUNCIÓN BOOTSTRAP:
//    - Función asíncrona que inicializa la aplicación
//    - Se ejecuta automáticamente al final del archivo
//
// 3. 🎯 CREACIÓN DE LA APLICACIÓN:
//    - NestFactory.create(AppModule) crea la instancia principal
//    - Registra todos los módulos definidos en AppModule
//    - Configura la inyección de dependencias
//    - Mapea todas las rutas y controladores
//
// 4. 🌐 CONFIGURACIÓN DEL SERVIDOR:
//    - Configura el servidor HTTP interno
//    - Establece middlewares por defecto
//    - Prepara el manejo de requests REST
//
// 5. 👂 INICIO DE ESCUCHA:
//    - app.listen() inicia el servidor
//    - Puerto: process.env.PORT ?? 3000 (variable de entorno o 3000)
//    - El servidor queda listo para recibir peticiones HTTP
//
// 6. ✅ APLICACIÓN LISTA:
//    - Servidor corriendo en http://localhost:3000
//    - Todos los endpoints disponibles
//    - Conexión a base de datos establecida
//
// ==================================================================================
// 🌐 CONFIGURACIÓN DEL SERVIDOR:
// ==================================================================================
//
// 🔌 PUERTO DE ESCUCHA:
// - Variable de entorno: process.env.PORT
// - Puerto por defecto: 3000
// - URL resultante: http://localhost:3000
//
// 📡 PROTOCOLO HTTP:
// - Acepta requests: GET, POST, PATCH, DELETE
// - Content-Type: application/json
// - Respuestas: JSON format
//
// 🔗 ENDPOINTS DISPONIBLES TRAS INICIALIZACIÓN:
// - http://localhost:3000/ ← AppController (health check)
// - http://localhost:3000/pacientes ← PacientesController
// - http://localhost:3000/establecimientos ← EstablecimientosController  
// - http://localhost:3000/profesionales ← ProfesionalesController
// - http://localhost:3000/especialidades ← EspecialidadesController
// - http://localhost:3000/turnos ← TurnosController (principal)
// - http://localhost:3000/obras-sociales ← ObrasSocialesController
// - http://localhost:3000/historial-consultas ← HistorialConsultasController
//
// ==================================================================================
// 🏗️ PROCESO DE INICIALIZACIÓN INTERNA:
// ==================================================================================
//
// Cuando se ejecuta NestFactory.create(AppModule), internamente sucede:
//
// 1. 📋 ANÁLISIS DE MÓDULOS:
//    - Lee AppModule y sus imports
//    - Registra los 7 módulos funcionales
//    - Analiza dependencias entre módulos
//
// 2. 🎯 REGISTRO DE CONTROLLERS:
//    - Encuentra todos los @Controller decorados
//    - Mapea rutas automáticamente
//    - Configura métodos HTTP (GET, POST, etc.)
//
// 3. 💉 INYECCIÓN DE DEPENDENCIAS:
//    - Registra todos los @Injectable services
//    - Configura el contenedor de dependencias
//    - Resuelve dependencias automáticamente
//
// 4. 🔗 CONFIGURACIÓN DE PRISMA:
//    - Cada service instancia PrismaClient
//    - Se establece conexión con MySQL
//    - DATABASE_URL leída desde variables de entorno
//
// 5. 🛡️ MIDDLEWARES Y GUARDS:
//    - Configura middlewares por defecto de NestJS
//    - Manejo de errores automático
//    - Validación de requests
//
// 6. 📊 LOGGING DE INICIALIZACIÓN:
//    - NestJS muestra en consola:
//      * [NestFactory] Starting Nest application...
//      * [InstanceLoader] Módulos dependencies initialized
//      * [RoutesResolver] Controladores registrados
//      * [RouterExplorer] Rutas mapeadas
//      * [NestApplication] Nest application successfully started
//

// ==================================================================================
// 🚀 COMANDOS DE EJECUCIÓN:
// ==================================================================================
//
// 🔨 DESARROLLO:
// npm run start:dev
//   ├── Compila TypeScript en tiempo real
//   ├── Reinicia automáticamente al cambiar archivos
//   ├── Hot reload activado
//   └── Logs detallados en consola
//
// 🏭 PRODUCCIÓN:
// npm run build && npm run start:prod
//   ├── Compila TypeScript a JavaScript
//   ├── Optimizaciones de producción
//   ├── Sin hot reload
//   └── Logs minimizados
//
// 🧪 DEBUGGING:
// npm run start:debug
//   ├── Modo debug activado
//   ├── Breakpoints disponibles
//   └── Inspector de Node.js habilitado
//
// ==================================================================================
// ⚡ VARIABLES DE ENTORNO RELACIONADAS:
// ==================================================================================
//
// 🔌 PORT:
// - Descripción: Puerto donde se ejecuta el servidor
// - Valor por defecto: 3000
// - Ejemplo: PORT=8080 (servidor en puerto 8080)
//
// 🗃️ DATABASE_URL:
// - Descripción: String de conexión a MySQL
// - Requerida: Sí (crítica para funcionamiento)
// - Ejemplo: mysql://root:password@localhost:3306/anacron
//
// 🌍 NODE_ENV:
// - Descripción: Entorno de ejecución
// - Valores: development | production | test
// - Efecto: Cambia comportamiento de logs y optimizaciones
//

// ⏱️ TIEMPO DE INICIALIZACIÓN:
// - Típico: 2-5 segundos en desarrollo
// - Factores: Cantidad de módulos, conexión BD, hardware
//
// 💾 MEMORIA INICIAL:
// - Base NestJS: ~50MB
// - Con Prisma: ~80-120MB  
// - Con datos cargados: ~150-200MB
//
// 🔄 REQUESTS POR SEGUNDO:
// - Desarrollo: ~1000-2000 RPS
// - Producción optimizada: ~3000-5000 RPS
// - Depende de: Hardware, queries BD, lógica de negocio
//
// ==================================================================================
// 🎓 CONCEPTOS EDUCATIVOS DEMOSTRADOS:
// ==================================================================================
//
// 💡 PATRÓN BOOTSTRAP:
// - Inicialización centralizada de la aplicación
// - Configuración en un solo punto
// - Separación entre configuración y lógica de negocio
//
// 🔧 PROGRAMACIÓN ASÍNCRONA:
// - Uso de async/await para operaciones no bloqueantes
// - Manejo de promesas para inicialización
//
// 🏭 FACTORY PATTERN:
// - NestFactory como fábrica de aplicaciones
// - Abstracción de la complejidad de creación
//
// 📦 DEPENDENCY INJECTION:
// - Resolución automática de dependencias
// - Inversión de control
// - Acoplamiento débil entre componentes
//

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS para permitir conexiones del frontend
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Configurar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  console.log(` ANACRON Backend corriendo en: http://localhost:${port}`);
  
}
bootstrap();
