# Grupo 41.6: Festival Pulse Width Modulation

### Miembros del grupo
- Luis Martín Pérez
- Dylan Castrillón Suárez
- Tycho Quintana Santana

### Descripción del proyecto
El proyecto consiste en la página web de un festival imaginario
llamado PWM o “Pulse Width Modulation”. Este nombre hace referencia
a la modulación de onda del sonido de la música electrónica. En la
página se podrá consultar los artistas que asisten, tendrá un punto
de venta online y premitirá iniciar sesión para la compra y consulta
de entradas.

### Requisitos Funcionales
> Para mas informacion dirijirse a el documento ***REQUISITOS PAGINA WEB PWM.pdf*** localizado en la raiz del directorio.
- **Registrarse:** los usuarios nuevos podrán registrarse para tener una cuenta.
- **Iniciar sesión:** los usuarios registrados podrán iniciar sesión para consultar las entradas.
- **Recuperar cuenta:** se podrá recuperar la cuenta en caso de pérdida.
- **Comprar entradas:** los usuarios registrados podrán comprar entradas.
- **Contactar con la organización:** cualquier usuario podrá contactar con el evento de diversas formas.

### Localización de mockups y storyboard
- Los mockups se encuentran en el directorio ```mockups/```.
- Los storyboards se encuentran en el directorio ```mockups/storyboard/```.
- Adicionalmente las capturas del progreso de trello se encuentran en ```trello/```, el nombre del archivo corresponde con la fecha de la captura.

## Listado de páginas HTML

La página de inicio ```index.html``` se encuentra en el directorio ```web/pages/index.html``` y las demás páginas en ```web/pages/```.

| Mockup                                                             | HTML |
|--------------------------------------------------------------------| ---  |
| [Mockup Main Page.png](mockups/Mockup-Main-Page.png)               | [index.html](web/pages/index.html)|
| [Mockup artistas.png](mockups/Mockup-artistas.png)                 | [artists.html](web/pages/artists.html)|
| [Mockup login.png](mockups/Mockup-login.png)                       | [login.html](web/pages/login.html) |
| [Mockup recuperar cuenta.png](mockups/Mockup-recuperar-cuenta.png) | [recovery.html](web/pages/recovery.html)|
| [Mockup register.png](mockups/Mockup-register.png)                 | [register.html](web/pages/register.html)|
| [Mockup tickets.png](mockups/Mockup-Tickets.png)                   | [tickets.html](web/pages/tickets.html)|
| [Mockup usuario.png](mockups/Mockup-usuario.png)                   | [user-page.html](web/pages/user-page.html)|

### Listado de templates

Los templates se encuentran en el directorio ```web/templates/```.

| Nombre de template | HTML |
| ---    | ---  |
| Artist Banner | [artist-banner.html](web/templates/artist-banner.html)|
| Header A | [header.html](web/templates/header.html)|
| Header B | [second-header.html](web/templates/second-header.html)|
| Footer | [footer.html](web/templates/footer.html)|
| Main Button | [main-button.html](web/templates/main-button.html)|
| Return Button | [return-button.html](web/templates/return-button.html)|
| Dropdown selector | [dropdown.html](web/templates/dropdown.html)|
| Ticket Table | [ticket-table.html](web/templates/ticket-table.html)|
| User Icon | [user-icon.html](web/templates/user-icon.html)|
| Login Form | [login-form.html](web/templates/login-form.html)|
| Register Form | [register-form.html](web/templates/register-form.html)|
| Account Recovery Form | [account-recovery.html](web/templates/account-recovery.html)|
| Accordion | [accordion.html](web/templates/accordion.html)|

### Otros aspectos
#### Respecto a la hojas de estilo.
Las hojas de estilo se encuentran en ```web/styles/``` y siguen la siguiente filosofía para separarlas:
- Todos los estilos comunes en toda la web se especifican en ```web/styles/global.css```.
- Todos los botones quedan definidos en ```web/styles/buttons.css```.
- Las hojas de estilo específcas a las páginas son:
	- ```index.css``` para ```index.html```.
	- ```forms.css``` para todos los formularios, que son: ```login.html```, ```register.html```, ```recovery.html``` y ```user-page.html```.
	- ```tickets-table.css``` para ```tickets.html```.
	- ```banners.css``` para ```artists.html```.

#### Respecto a tareas implementadas con JavaScript
- Los scripts de JavaScript se encuentran en el directorio ```web/scripts/``` 
- En este primer sprint se han implementado dos tareas con JavaScript:
  - Cargar los templates mediante el uso del script ```xlu-include-file.js``` proporcionado en el material de la asginatura.
  - Para navegar cuando se presiona sobre un botón mediante el evento ```onclick``` en las etíquetas ```<button>```.

#### Aspectos de Look and Feel
La paleta de colores elegida para la página web ha sido diseñada teniendo en cuenta 
la temática de la misma, que es un festival de música techno. Es por ello que hemos
elegido el usar un fondo negro con unos colores turquesa y violeta vivos para que 
resalten como si de un neón se tratase, transmitiendo la estética de este tipo de 
eventos en donde predominan muchas luces, que resaltan aún más cuando hay menos luz
solar.

### Enlaces de interés
- Link al repositorio de github: [Github](https://github.com/TheTatsujin/proyecto-PWM/tree/sprint-1)
- Link al proyecto en Figma: [Figma](https://www.figma.com/design/OS85H9410fIBWvIavd12EM/Pagina?node-id=6-3&t=SEwRmkqbCGws3CMv-1)
- Link al Trello: [Trello](https://trello.com/b/USUG6x1w/pwm-pulse-width-modulation-web)
