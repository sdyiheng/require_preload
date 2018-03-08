
//配置requirejs
require.config({
    baseUrl: '/requirejsdemo',
    paths: {
        'jquery': 'vendors/jquery-3.3.1.min',
    },
    shim: {
    },
    config: {
    },
    waitSeconds: 0,//,
    //enforceDefine: true
    preLoadedScripts: { "/requirejsdemo/url1.js":"define('url1',[],function(){alert('preloaded。');return {demo:1};})"}
});
require(["url1"],
    function (u) {
		alert(u.demo);
    });
