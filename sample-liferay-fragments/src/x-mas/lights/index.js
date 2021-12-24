var bokeh = fragmentElement.getElementsByClassName("bokeh");
for (i = 0; i < configuration.numberOfLights; i++) {
  var light = document.createElement("div");
  light.classList.add("light");
  bokeh[0].appendChild(light);
  bokeh[0].appendChild(light);
}