# Prueba tecnica double v partners

## Front End

### Objetivos
- [x] Crear una aplicación que incluya un campo de entrada texto y un botón, para que se pueda capturar el usuario y recuperar la información utilizando el API anteriormente indicado.
- [x] Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario ('user.login') y el id ('user.id') de cada registro.
- [ ] Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad 'user.login' como
parámetro.
- [x] Crear un componente independiente en el que se lea el parámetro de la URL y a continuación, obtenga los datos de dicho usuario mediante la siguiente API: https://api.github.com/users/YOUR_NAME
- [x] Incluir la imagen del usuario ('avatar_url') y alguna otra información (de su elección) en el componente.
- [x] Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la palabra “doublevpartners”.
- [ ] Integrar cualquier librería de gráficos que pueda encontrar y crear un gráfico de barras simple para mostrar el número de seguidores de los 10 primeros usuarios.
- [ ] Incluir un componente para mostrar mensajes de error en toda la aplicación.
- [ ] Generar un APK de la aplicación.

### Ejecucion en local

#### Requisitos

- [React Native](https://reactnative.dev/docs/environment-setup).
- [Expo](https://docs.expo.io/get-started/installation/).
- [Node.js](https://nodejs.org/es/download/).

#### Pasos

1. Asegurarse de tener instalado los requisitos antes mencionados y contar con un dispositivo android virtual o fisico.
2. Abrir una terminal y dirigirse a la carpeta de la aplicacion `users-app` dentro del frontend del repo (verificar que el `package.json` se encuentre en el directorio).
3. Ejecutar el siguiente comando para complicar la aplicacion:

```bash
npm run start 
```
4. Visualizacion de la aplicacion:
    - Si se cuenta con un dispositivo virtual asociado a Android Studio, inicializarlo y seguir los pasos descritos por expo en la consola y ejecutar la aplicacion.
    - Si se cuenta con un dispositivo fisico, descargar la aplicacion de Expo en el dispositivo y escanear el codigo QR que aparece en la terminal.

## Back End

### Objetivos
- [X] API CRUD de tickets con paginación. Que se pueda recuperar todos o filtrar por uno específico.

- [X] Estructurar los tickets segun: de la siguiente forma :
```json
{
    "id": 1,
    "user": "user1",
    "created_at": "2020-01-01 00:00:00",
    "updated_at": "2020-01-01 00:00:00",
    "status": true // true = open, false = closed
}
```

- [x] Exponer el servicio mediante GraphQL. Debes
realizar la prueba en NodeJS.

- [x] Base de datos en Postgres dockerizada (opcional)

### Ejecucion en local

#### Requisitos

- [Docker desktop](https://www.docker.com/products/docker-desktop).
- [nodejs](https://nodejs.org/es/download/).
- [Nest.js](https://docs.nestjs.com/first-steps).

#### Pasos

1. Ejecutar Docker Desktop.
2. Abrir una terminal y dirigirse a la carpeta backend del repo (verificar que el `docker-compose.yml` se encuentre en el directorio).
3. Ejecutar el siguiente comando para iniciar la base de datos:

```bash
docker compose up --build
```

4. Abrir otra terminal en la misma carpeta e ingresar al projecto ticket-api (verificar que el `package.json` se encuentre en el directorio).
5. Ejecutar el siguiente comando para montar el microservicio:

```bash
npm run start
```
6. Abrir el navegador y dirigirse a `http://localhost:3000/graphql` para acceder al playground de GraphQL.
7. Si se desea, abrir otra pestaña en el navegador y dirigirse a `http://localhost:8080/` para acceder a adminer y verificar la base de datos.
8. Ingresar los siguientes datos para acceder a la base de datos y loguearse:

```bash
System=skilltest
Server=db
Username=skilltest
Password=skilltest
Database=ticketsdb
```
9. Ejecutar las siguientes consultas en el playground de GraphQL para verificar el funcionamiento del microservicio:

##### Crear ticket

```graphql
mutation Mutation($createTicketInput: CreateTicketInput!) {
  createTicket(createTicketInput: $createTicketInput) {
    id
    user
    dateCreate
    dateUpdate
    status
  }
}
```

variables:

```graphql
{
  "createTicketInput": {
    "status": true,
    "user": "user0"
  }
}
```

##### Obtener ticket(s) por fecha de creacion teniendo paginación

```graphql
query Query($ticketSearchInput: TicketSearchInput!) {
  getTickets(ticketSearchInput: $ticketSearchInput) {
    count
    tickets {
      id
      user
      dateCreate
      dateUpdate
      status
    }
  }
}
```

variables:

```graphql
{
  "ticketSearchInput": {
    "page": 0,
    "limit": 5,
    "dateCreate": "2024-01-17",
    "dateCreateMode": "GT"
  }
}
```

##### Actualizar estado de un ticket

```graphql
mutation Mutation($ticketUpdateInput: TicketUpdateInput!) {
  updateTicket(ticketUpdateInput: $ticketUpdateInput) {
    id
    user
    dateCreate
    dateUpdate
    status
  }
}
```

variables:

```graphql
{
  "ticketUpdateInput": {
    "id": 1,
    "status": false
  }
}
```

##### Eliminar un ticket

```graphql
mutation Mutation($removeTicketId: Int!) {
  removeTicket(id: $removeTicketId)
}
```

variables:

```graphql
{
  "removeTicketId": 1
}
```

## Feedback

Quiero empezar agradeciendo la oportunidad de tenerme en cuenta para este proceso de contratación. Quedo atento a cualquier comentario o sugerencia que pueda tener sobre la prueba y espero poder hacer parte del equipo de trabajo de Double V Partners.
