window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "http://localhost:8081/dist_wfm/wfm_2022.09.00_OpenApi-V1.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    supportedSubmitMethods: [],
    defaultModelsExpandDepth: -1,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    configUrl: "swagger-config.yaml"
  });


  //</editor-fold>
};
