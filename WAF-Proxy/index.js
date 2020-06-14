//Load modules of Mini-WAF.
const Waf = require('mini-waf/wafbase');
const WafRules = require('mini-waf/wafrules');

const HttpProxy = require('http-proxy');
const Express = require('express');

//Create our own web app instance that will run in port 80.
const app = Express();

//Create our own proxy API instance.
const ProxyAPI = HttpProxy.createProxyServer({ xfwd: false, preserveHeaderKeyCase: true });

//Load and run the Mini-WAF middleware that will protect our
//web app from external attacks in our real server IP address.

//Note that the WAF is running with his default settings, thus,
//you can create your own rules and improve his defense rate too.
app.use(Waf.WafMiddleware(WafRules.DefaultSettings));

//Our middleware that receive an request and response object used
//in the http proxy.
app.use((req, res) => {
    ProxyAPI.web(req, res, { target: 'http://localhost:8081', timeout: 10000 }, (error) => {
        if (error){
            //Print something wrong.
            console.log(error);
        }
    });
});

//Run the web app in port 80.
app.listen(80, () => {
    console.log('[+] The Mini-WAF PoC server has started successfully in port 80 (HTTP)');
});