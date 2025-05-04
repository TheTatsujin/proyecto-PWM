# Sprint 3

## Grupo 41.6: Festival Pulse Width Modulation

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

| Mockup Dektop                                                              | Mockup Tablet 												                                                | Mockup Mobile												                                                 | HTML                                       |                                       
|----------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|--------------------------------------------|
| [Mockup Main Page.png](mockups/desktop/Mockup-Main-Page.png)               | [Mockup Main Page.png](mockups/tablet/Mockup-Main-Page.png)               | [Mockup Main Page.png](mockups/mobile/Mockup-Main-Page.png)               | [index.html](web/pages/index.html)         |
| [Mockup artistas.png](mockups/desktop/Mockup-artistas.png)                 | [Mockup artistas.png](mockups/tablet/Mockup-artistas.png)                 | [Mockup artistas.png](mockups/mobile/Mockup-artistas.png)                 | [artists.html](web/pages/artists.html)     |
| [Mockup login.png](mockups/desktop/Mockup-login.png)                       | [Mockup login.png](mockups/tablet/Mockup-login.png)                       | [Mockup login.png](mockups/mobile/Mockup-login.png)                       | [login.html](web/pages/login.html)         |
| [Mockup recuperar cuenta.png](mockups/desktop/Mockup-recuperar-cuenta.png) | [Mockup recuperar cuenta.png](mockups/tablet/Mockup-recuperar-cuenta.png) | [Mockup recuperar cuenta.png](mockups/mobile/Mockup-recuperar-cuenta.png) | [recovery.html](web/pages/recovery.html)   |
| [Mockup register.png](mockups/desktop/Mockup-register.png)                 | [Mockup register.png](mockups/tablet/Mockup-register.png)                 | [Mockup register.png](mockups/mobile/Mockup-register.png)                 | [register.html](web/pages/register.html)   |
| [Mockup tickets.png](mockups/desktop/Mockup-Tickets.png)                   | [Mockup tickets.png](mockups/tablet/Mockup-Tickets.png)                   | [Mockup tickets.png](mockups/mobile/Mockup-Tickets.png)                   | [tickets.html](web/pages/tickets.html)     |
| [Mockup usuario.png](mockups/desktop/Mockup-usuario.png)                   | [Mockup usuario.png](mockups/tablet/Mockup-usuario.png)                   | [Mockup usuario.png](mockups/mobile/Mockup-usuario.png)                   | [user-page.html](web/pages/user-page.html) |

_**Nota: Figma no exporta correctamente el mockup de la página principal para dispositivos móviles. No obstante en el proyecto de figma se muestra adecuadamente. Hay un enlace al mismo al final del readme.**_

### Listado de componentes de angular

Los componentes de angular se encuentran en el directorio ```pwm-angular/src/app/components```.

| Nombre del Componente | Ruta                                                                    | Funcionalidad (Si procede)                                                                |
|-----------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Artist Banner         | [artist-banner-component](pwm-angular/src/app/components/artist-banner) | Mostrar información concreta acerca de la asistencia de un artista al evento              |
| Header A              | [header-component](pwm-angular/src/app/components/header)               |                                                                                           |
| Header B              | [second-header-component](pwm-angular/src/app/components/second-header) |                                                                                           |
| Footer                | [footer-component](pwm-angular/src/app/components/footer)               |                                                                                           |
| Login Button          | [login-button-component](pwm-angular/src/app/components/login-button)   | Permitir al usuario entrar en la página para iniciar sesión                               |
| Return Button         | [return-button-component](pwm-angular/src/app/components/return-button) | Retroceder en la navegación de la página web                                              |
| Dropdown selector     | [dropdown-component](pwm-angular/src/app/components/dropdown)           | Permite seleccionar entre las diferentes ubicaciones en las que se llevará acabo el vento |
| Ticket Table          | [ticket-table-component](pwm-angular/src/app/components/ticket-table)   | Muestra los precios de las entradas en función de la ubicación seleccionada               |
| Accordion             | [accordion-component](pwm-angular/src/app/components/accordion)         | Mostrar la respuesta a preguntas frecuentes de los usuarios                               |
| Upload | [upload-component](pwm-angular/src/app/components/upload)               | Permitir a los usuarios subir imágenes                                                    |  

Por otro lado dentro del directorio [```pwm-angular/src/app/components/pages```](pwm-angular/src/app/components/pages) se encuentran los 
componentes que conforman las páginas que se iran mostrando al usuario según navege por la página web. A continuación
una tabla con una correspondencia con los mockups


| Mockup Dektop                                                              | Mockup Tablet 												                                                | Mockup Mobile												                                                 | Componente en angular                                                         |                                       
|----------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [Mockup Main Page.png](mockups/desktop/Mockup-Main-Page.png)               | [Mockup Main Page.png](mockups/tablet/Mockup-Main-Page.png)               | [Mockup Main Page.png](mockups/mobile/Mockup-Main-Page.png)               | [main-page](pwm-angular/src/app/components/pages/main-page)                   |
| [Mockup artistas.png](mockups/desktop/Mockup-artistas.png)                 | [Mockup artistas.png](mockups/tablet/Mockup-artistas.png)                 | [Mockup artistas.png](mockups/mobile/Mockup-artistas.png)                 | [artist-page](pwm-angular/src/app/components/pages/artist-page)               |
| [Mockup login.png](mockups/desktop/Mockup-login.png)                       | [Mockup login.png](mockups/tablet/Mockup-login.png)                       | [Mockup login.png](mockups/mobile/Mockup-login.png)                       | [login-form-page](pwm-angular/src/app/components/pages/login-form-page)       |
| [Mockup recuperar cuenta.png](mockups/desktop/Mockup-recuperar-cuenta.png) | [Mockup recuperar cuenta.png](mockups/tablet/Mockup-recuperar-cuenta.png) | [Mockup recuperar cuenta.png](mockups/mobile/Mockup-recuperar-cuenta.png) | [recovery-form](pwm-angular/src/app/components/pages/recovery-form)           |
| [Mockup register.png](mockups/desktop/Mockup-register.png)                 | [Mockup register.png](mockups/tablet/Mockup-register.png)                 | [Mockup register.png](mockups/mobile/Mockup-register.png)                 | [register-form-page](pwm-angular/src/app/components/pages/register-form-page) |
| [Mockup tickets.png](mockups/desktop/Mockup-Tickets.png)                   | [Mockup tickets.png](mockups/tablet/Mockup-Tickets.png)                   | [Mockup tickets.png](mockups/mobile/Mockup-Tickets.png)                   | [ticket-page](pwm-angular/src/app/components/pages/ticket-page)             |
| [Mockup usuario.png](mockups/desktop/Mockup-usuario.png)                   | [Mockup usuario.png](mockups/tablet/Mockup-usuario.png)                   | [Mockup usuario.png](mockups/mobile/Mockup-usuario.png)                   | [user-page](pwm-angular/src/app/components/pages/user-page)              |



### Estructuración de los datos en Firebase

Los datos en firebase siguen un modelo no-relacional. Cabe destacar que las imágenes que subieron a otro proveedor de
almacenamiento debido a que Firebase requiere registrar una tarjeta de crédito para acceder a esta funcionalidad. La 
base de datos en Firebase sigue la siguiente estructura:

#### Colecciones
- Artists
- Event-locations
- FAQ
- Tickets
- Users
- Uploads

A continuación se explica lo que cada colección contiene y su propósito

#### Artistas
Guarda objetos de tipo artista para mostrar la plantilla que va asistir al evento.
Sus campos son:
- name: ***'string'*** = Nombre profesional de DJ
- date: ***'string'*** = Fecha de asistencia
- image: ***'string'*** = Url de su imagen representativa como DJ
- location: ***'string'*** = Evento al que va a asistir

#### Event-locations
Localizaciones donde se celebrarán los eventos. Sus datos tienen un único campo como string, que es el nombre.

#### FAQ
Preguntas frecuentes sobre el evento junto con su respuesta.
- question: ***'string'*** = Duda en relación con el evento
- answer: ***'string'*** = La respuesta del equipo de organización

#### Tickets

Colección para controlar los tickets disponibles para cada evento y su precio. 

- Hay 3 tipos de categoría según los privilegios: early, normal y vip.
- Hay 3 tickets según la el tiempo que se desee disfrutar: 1, 2 y 3 días.
- evento: ***'string'*** = Localización

#### Users
Contiene la información de cada usuario:
- email: ***'string'*** = Dirección de correo electrónico 
- name: ***'string'*** = Nombre
- password: ***'string'*** = Contraseña
- confirm: ***'string'*** = Confirmación de la contraseña
- birthdate: ***'string'*** = Fecha de nacimiento
- phoneNumber: ***'string'*** = Número telefónico
- tickets: ***'string'*** = Información acerca de las entradas adquiridas
- termConditions: ***'boolean'*** = Aceptación de los términos de servicio
- receiver: ***'boolean'*** = Aceptación para recibir información sobre actualizaciones del evento
- notifications: ***'boolean'*** = Denegación del envío de notificaciones

#### uploads
Imágenes que usuarios suben durante la experiencia en el evento. Se almacena la siguiente información:
- name: ***'string'*** = Nombre de la imagen, con extensión incluida
- value: ***'boolean'*** = Valor de la imagen **codificada en base 64** para posteriormente poder decodificarla si fuese necesario. Se trabaja asi ya que firestorage requiere de una subscripción.


### Enlaces de interés
- Link al repositorio de Github: [Github](https://github.com/TheTatsujin/proyecto-PWM/tree/sprint-3)
- Link al proyecto en Figma: [Figma](https://www.figma.com/design/OS85H9410fIBWvIavd12EM/Pagina?node-id=6-3&t=SEwRmkqbCGws3CMv-1)
- Link al Trello: [Trello](https://trello.com/invite/b/67a25b4aab7e9795c62e20c7/ATTI65e1187cfe5f881104daf1df712c6473AA3BB91A/pwm-pulse-width-modulation-web)
