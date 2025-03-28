# Sprint 2

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

### Listado de templates

Los templates se encuentran en el directorio ```web/templates/```.

| Nombre de template    | HTML                                                         |
|-----------------------|--------------------------------------------------------------|
| Artist Banner         | [artist-banner.html](web/templates/artist-banner.html)       |
| Header A              | [header.html](web/templates/header.html)                     |
| Header B              | [second-header.html](web/templates/second-header.html)       |
| Footer                | [footer.html](web/templates/footer.html)                     |
| Main Button           | [main-button.html](web/templates/main-button.html)           |
| Return Button         | [return-button.html](web/templates/return-button.html)       |
| Dropdown selector     | [dropdown.html](web/templates/dropdown.html)                 |
| Ticket Table          | [ticket-table.html](web/templates/ticket-table.html)         |
| User Icon             | [user-icon.html](web/templates/user-icon.html)               |
| Login Form            | [login-form.html](web/templates/login-form.html)             |
| Register Form         | [register-form.html](web/templates/register-form.html)       |
| Account Recovery Form | [account-recovery.html](web/templates/account-recovery.html) |
| Accordion             | [accordion.html](web/templates/accordion.html)               |

### Otros aspectos
#### Respecto a la hojas de estilo.
Las hojas de estilo se encuentran en ```web/styles/``` y siguen la siguiente filosofía para separarlas:
- Todos los estilos comunes en toda la web se especifican en ```web/styles/global.css```.
- Todos los botones quedan definidos en ```web/styles/buttons.css```.
- Las hojas de estilo específicas a las páginas son:
	- ```index.css``` para ```index.html```.
	- ```forms.css``` para todos los formularios, que son: ```login.html```, ```register.html```, ```recovery.html``` y ```user-page.html```.
	- ```tickets-table.css``` para ```tickets.html```.
	- ```banners.css``` para ```artists.html```.



#### Respecto a tareas implementadas con JavaScript
- Los scripts de JavaScript se encuentran en el directorio ```web/scripts/``` 
- En este segundo sprint se han implementado las siguientes tareas con JavaScript:
  - Cargar los templates mediante el uso del script ```template-builder.js```, así como ```return-feature.js``` para evitar
  bucles cuando se utiliza el botón de retorno y ```session-manager.js``` para mantener el inicio de sesión y cargar correctamente
  los cambios en las páginas.
  - Para navegar cuando se presiona sobre un botón mediante el evento ```onclick``` en las etíquetas ```<button>```.
- En cuanto a los formularios, tenemos los siguientes scripts:
	- En ```register.js``` encontramos, además de la validación y creación del usuario, un apoyo en tiempo real de los posibles
  campos que estén mal para que no sea necesario pulsar el botón de submit. Por otro lado, creamos el código para realizar el
  registro con Strapi, sin embargo, al no poder añadir la base de datos al repositorio decidimos no implementarlo. Finalmente,
  en caso de validarse el registro, se realizará un localStorage para implementar las funcionalidades del inicio de sesión.
    - En ```login.js``` encontramos, al igual también una validación para el botón ```submit``` y otra para ir actualizando en
  	tiempo real. En este código también implementamos una llamada a Strapi que se quedó sin usar. Una vez se valida el inicio de
  	sesión, se realiza un sessionStorage para implementar las funcionalidades del inicio de sesión.
    - En ```recovery-account.js``` se encuentra tanto la validación del botón ```submit``` como la validación en tiempo real. Por
  	último, cuando se acepta la validación, aparece un mensaje emergente indicando que se ha enviado un correo.
- Finalmente, tenemos el script ```dropdown.js``` el cual se encarga de actualizar dinámicamente los precios de los tickets según
la ubicación. Estos precios se encuentran en distintos ficheros ```.json```.

#### Ficheros .json como base de datos.
Para dinamizar la página web, se hizo uso de varios ficheros en distintas páginas.
- Para la página principal tenemos el fichero ```faq.json```, el cual se encarga de cargar las preguntas y respuestas que se
muestran en el último apartado de la página.
- Para los formularios se hizo uso del fichero ```user.json```, aquí se crearon varios usuarios de prueba para probar las
validaciones de los tres formularios, así como la visualización de la página de usuario con los datos de este.
- Pasando con la página de artistas encontramos el fichero ```artists.json``` donde se encuentra el nombre del artista, su
imagen y tanto la ubicación como la fecha de su actuación.
- Por último, en la página de tickets podemos encontrar varios ficheros:
	- ```event-location.json``` para el dropdown donde se puede elegir la ubicación del festival al que se quiera asistir.
    - ```ticket-table-A.json``` con las entradas y los precios de la ubicación "Arquitectura".
    - ```ticket-table-E.json``` con las entradas y los precios de la ubicación "Empresariales".
    - ```ticket-table-T.json``` con las entradas y los precios de la ubicación "Telecomunicaciones".

#### Validación nativa de HTML5
En los formularios de la página web se ha usado, además de JavaScript, la validación nativa de HTML5. Esta validación 
ofrece una retroalimentación instantánea al usuario  cuando está cumplimentando los campos del formularios, facilitando 
a los mismos que no se equivoquen al rellenar el formulario e indicandoles que y como deben rellenar para poder enviar
el formulario.


#### Aspectos de Look and Feel
La paleta de colores elegida para la página web ha sido diseñada teniendo en cuenta 
la temática de la misma, que es un festival de música techno. Es por ello que hemos
elegido el usar un fondo negro con unos colores turquesa y violeta vivos para que 
resalten como si de un neón se tratase, transmitiendo la estética de este tipo de 
eventos en donde predominan muchas luces, que resaltan aún más cuando hay menos luz
solar.

### Enlaces de interés
- Link al repositorio de Github: [Github](https://github.com/TheTatsujin/proyecto-PWM/tree/sprint-1)
- Link al proyecto en Figma: [Figma](https://www.figma.com/design/OS85H9410fIBWvIavd12EM/Pagina?node-id=6-3&t=SEwRmkqbCGws3CMv-1)
- Link al Trello: [Trello](https://trello.com/invite/b/67a25b4aab7e9795c62e20c7/ATTI65e1187cfe5f881104daf1df712c6473AA3BB91A/pwm-pulse-width-modulation-web)
