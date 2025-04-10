# TorneosApp
________________________________________
🧱 Estructura básica del contenido (en Sanity)

•	Campeonato:
o	nombre
o	fecha_inicio
o	fecha_fin
o	estado (en juego, terminado)
o	tipo (fultbol 11, futbol 9, futbol sala)
o	equipos (array de referencias a Equipo)
o	partidos (array de referencias a Partido)

•	Equipo:
o	nombre
o	escudo (imagen)
o	jugadores (array de Jugador)
o	campeonato_ref
o	•  PJ (partidos jugados)
o	•  PG (ganados)
o	•  PE (empatados)
o	•  PP (perdidos)
o	•  GF (goles a favor)
o	•  GC (goles en contra)
o	•  PTS (puntos)

•	Jugador:
o	nombre
o	número
o	posición
o	goles_ref

•	Partido:
o	equipo_local (ref)
o	equipo_visitante (ref)
o	fecha
o	resultado (opcional hasta que se juegue)
o	campeonato_ref
o	etapa (grupos, semifinal, etc.)
o	goles
	jugador_ref
	equipo_ref
	autogol (boolean)
________________________________________
✅ Funcionalidades por rol
🧑‍💼 Organizador
•	Crear campeonatos
•	Agregar equipos y jugadores
•	Programar partidos
•	Ingresar resultados
•	Disparar notificaciones
👤 Usuario
•	Ver campeonatos activos
•	Ver calendario de partidos
•	Ver resultados
•	Recibir notificaciones
________________________________________
📆 Pasos para organizar tu desarrollo
1.	Diseño y prototipado UI
o	Define vistas: login, lista de campeonatos, detalle de campeonato, calendario, tabla de posiciones, etc.
o	Usa Figma o papel/lápiz.
2.	Configura Sanity
o	Define los esquemas (Campeonato, Equipo, etc.).
o	Prepara el Studio para que el organizador gestione todo.
3.	React Native
o	Usa Expo para simplificar.
o	Configura autenticación.
o	Conéctate a Sanity usando @sanity/client.
o	Agrega navegación con react-navigation.
4.	Notificaciones
o	Usa Expo push notifications.
o	Crea un endpoint en Sanity o backend para enviarlas cuando se actualicen los resultados.
5.	Roles
o	Filtra vistas según el rol desde el frontend (autenticación te da el tipo de usuario).
o	Si usas Sanity para login, puedes usar un sistema externo como Firebase Auth para identificar el usuario.