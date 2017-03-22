var express = require('express'),
    app = express(),
    compression = require('compression'),
    open = require('open'),
    serveIndex = require('serve-index'),
    port = process.env.PORT || 8080,
    publicPath = '',
    directory = __dirname + "/out",
    launchUrl = 'http://localhost:' + port,
    year = 60 * 60 * 24 * 365 * 1000;

// use compress middleware to gzip content
app.use(compression());

// set default mime type to xml for ".library" files
express.static.mime.default_type = "text/xml";

// serve up content directory showing hidden (leading dot) files
app.use(publicPath, express.static(directory, { maxAge: year, dotfiles: 'allow' }));

// enable directory listing
app.use("/", serveIndex(__dirname, { 'icons': true }));
app.use(express.static(directory, { 'dotfiles': 'allow' }));
// start server
app.listen(port);

// launch uri in default browser
// open(launchUrl);

// log to server console
console.log("OpenUI5 SDK server running at\n  => " + launchUrl + " \nCTRL + C to shutdown");