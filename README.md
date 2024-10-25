# Docker-return-GIS
### Código para seguir la primera parte del vídeo nº4 de la [Serie sobre contenedores 📦🐳 return(GiS)](https://www.youtube.com/watch?v=SpMdQRGGwRE&list=PLO9JpmNAsqM6PxlmKj6kfX-a8WwZJnwD9)
 ✳️ [Todos los créditos y agradecimientos a Gisela Torres 💐](https://www.youtube.com/@returngis) 
##### 🔗 Enlace al vídeo: [4. Herramientas para generar Dockerfiles](https://www.youtube.com/watch?v=hZQA51uoHAU)
##### 🔗 Enlace al vídeo: [6. Persistir datos en Docker](https://www.youtube.com/watch?v=-PVExF6XRik)

#### Instrucciones:
#####  ⚠️ Raiz y carpeta public pertenecen al video 4 
  - Ejecutar en la terminal: `npm install`
  - Seguir las instrucciones del vídeo.
#####  ℹ️ Video 6: Carpeta 6-Persistencia-datos
  - ⛔️ Cuidado con el nombre que se le da a la carpeta del video Nº 6, si este nombre contiene espacios dará error cuando se quieras ejecutar el docker run.
  - Comando Dead-Pool: `docker run --name deadpool-nginx -p 8080:80 -d -v $(pwd)/deadpool-site:/user/share/nginx/html nginx`
  - Comando Wolverine: `docker run --name woverine-site -p 8083:80 --mount type=volume,source=wolverine-data,target=/user/share/nginx/html -d nginx`
