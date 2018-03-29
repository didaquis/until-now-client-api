# Until Now 
En algunas actividades, como en el submarinismo o la escalada, se utilza material técnico especializado y diseñado únicamente para tal fin. Los fabricantes de dicho material establecen una duración máxima de uso para estos productos. Exceder la vida útil de los elementos usados en actividades de riesgo puede tener consecuencias letales.

Until Now te ayuda a gestionar la fecha de renovación del material técnico. La aplicación te permite visualizar rápidamente que material debes descartar y/o renovar próximamente.  


[Slides presentación](https://docs.google.com/presentation/d/1wR7b1NG2EA7UwatwS05HfbMU5Qd-fRm0PDvkmQIIeW0/edit?usp=sharing)  


## Until-Now (client API) 
Este módulo es una API que provee métodos para que el frontend interactúe con el server API.  


## Repositorios relacionados 
Este repositorio es parte del proyecto **Until Now**. Consulta los enlaces proporcionados para obtener más información.   

Enlaces relacionados:
* Repositorio principal y documentación: [Until Now frontend app](https://github.com/didaquis/until-now-frontend) 
* [Until Now client API](https://github.com/didaquis/until-now-client-api) 
* [Until Now server API](https://github.com/didaquis/until-now-server-api) 

Para hacer funcionar la aplicación, debes renombrar el fichero `_env` por `.env` y configurar las variables para la correcta utilización de la API y/o el TDD. 

También deberás instalar las dependencias. Antes de desplegar una nueva actualización, ejecuta los test y transpila el código (en el fichero `package.json` hay definidos scripts para tales fines). 

## Instalación y configuración
Puedes descargar está API directamente desde NPM:  
`npm install --save until-now-client-api`

Debes configurar los datos relativos al endpoint. Por ejemplo:
```js
import untilNowApi from 'until-now-client-api';

untilNowApi.protocol = 'https';
untilNowApi.host = 'your-endpoint.com';
untilNowApi.port = '';

// Solicitar un 'ping' a la API server:
untilNowApi.ping().then((res) => {
	// ...
}).catch((error) => {
	// ...
});
```

## Test & Test Coverage 

![Test & Test Coverage](docs/test_api_client.png)  
