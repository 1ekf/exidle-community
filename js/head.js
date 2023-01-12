{
    let temp = document.createElement("template");
    temp.innerHTML = `
    <title>Exponential Idle</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="/exponentialidle/css/style.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/exponentialidle/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/exponentialidle/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/exponentialidle/assets/favicon/favicon-16x16.png">
    <link rel="icon" type="image/ico" href="/exponentialidle/assets/favicon/favicon.ico">
    <link rel="manifest" href="/exponentialidle/assets/favicon/site.webmanifest">
    <link rel="mask-icon" href="/exponentialidle/assets/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta content="Exponential Idle - An incremental idle game" property="og:title">
    <meta content="A math-inspired incremental game available on Android and iOS." property="og:description">
    <meta content="Exponential Idle" property="og:site_name">
    <meta content='/exponentialidle/assets/images/logo.png' property='og:image'>
    `;
    let clon = temp.content.cloneNode(true);
    document.head.appendChild(clon);
  }