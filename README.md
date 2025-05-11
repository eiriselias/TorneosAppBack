### Instalacion de arranque

para iniciar la base de datos primero ingresamos sus variables de entorno 

  - DATABASE_URL  -obligatoria
  - CORS    -opcional
  - PORT    -opcional

luego instalamos las dependencia con el comando

  - npm install

despues de instalar las dependecia debemos generar el cliente 

 - npx prisma generate

luego de haber generado el cliente generamos las tablas

  - npx prisma migrate deploy

y para finalizar se corre el servidor con el comando

  - npm run start:dev

------------------------------------------------------