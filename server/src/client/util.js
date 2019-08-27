export function htmlTemplate(reactDom, data) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <link rel="stylesheet" type="text/css" href="style.css">
            <title>React SSR</title>
            <script>window.__INITIAL__DATA__ = ${JSON.stringify({
              data
            })}</script>
        </head>
        
        <body>
            <div id="root">${reactDom}</div>
            <script src="./bundle.js"></script>
        </body>
        </html>
    `;
}
