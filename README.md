# Proyecto Nexus - Frontend

Este proyecto es el frontend de **Project Nexus**, una aplicación dedicada a la gestión y optimización de recursos tecnológicos. Utiliza React y Vite para ofrecer una experiencia de usuario interactiva y moderna.

## Descripción General

El frontend de **Project Nexus** se encarga de la visualización y gestión de productos tecnológicos. Los usuarios pueden:

- **Visualizar productos**: Acceder a una lista de productos tecnológicos disponibles.
- **Ver detalles de los productos**: Al hacer clic en un producto, se abre un modal que muestra más información.
- **Registrar y autenticar usuarios**: Los usuarios pueden registrarse y acceder a sus cuentas.
- **Editar sus datos**: Los usuarios logueados pueden actualizar su información personal.

### Estructura del Proyecto

- **`src`**: Contiene todos los componentes y lógica de la aplicación.
  - **`components`**: Aquí se encuentran todos los componentes reutilizables como `Header`, `Footer`, `ProductList`, etc.
  - **`userContext`**: Manejo del contexto del usuario, incluyendo autenticación y estado del usuario.

## Dependencias

El proyecto utiliza varias dependencias para facilitar el desarrollo y mejorar la funcionalidad:

- **Axios**: `axios`: "^1.7.7"  
  Librería para hacer peticiones HTTP de manera sencilla y eficiente.

- **Bootstrap**: `bootstrap`: "^5.3.3"  
  Framework CSS para el diseño y la creación de interfaces responsivas.

- **CORS**: `cors`: "^2.8.5"  
  Middleware para habilitar CORS en las peticiones.

- **dotenv**: `dotenv`: "^16.4.5"  
  Carga variables de entorno desde un archivo `.env` a `process.env`.

- **Express**: `express`: "^4.19.2"  
  Framework para construir aplicaciones web en Node.js.

- **Nodemon**: `nodemon`: "^3.1.4"  
  Herramienta que ayuda en el desarrollo al reiniciar automáticamente la aplicación cuando se detectan cambios.

- **PostgreSQL**:  
  - **pg**: `pg`: "^8.12.0"  
    Cliente para PostgreSQL.
  - **pg-hstore**: `pg-hstore`: "^2.3.4"  
    Utilidad para manejar datos JSON en PostgreSQL.

- **React**:  
  - **react**: "^18.3.1"  
    Biblioteca para construir interfaces de usuario.
  - **react-bootstrap**: `react-bootstrap`: "^2.10.4"  
    Componentes de Bootstrap para React.
  - **react-dom**: `react-dom`: "^18.3.1"  
    Paquete que proporciona métodos específicos del DOM para React.

- **Sequelize**: `sequelize`: "^6.37.3"  
  ORM para Node.js que facilita la interacción con bases de datos SQL.

## Instalación

Para instalar las dependencias, usa el siguiente comando:

```bash
npm install
```
## Uso

Para iniciar la aplicación, ejecuta:

```bash
npm run dev
```
