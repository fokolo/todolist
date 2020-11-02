import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import App from "./App";

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById("root")
);
