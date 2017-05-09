(function (G, o, O, g, L, e) {
    G[g] = G[g] || function () {
        (G[g]['q'] = G[g]['q'] || []).push(
        arguments)
    }, G[g]['t'] = 1 * new Date; L = o.createElement(O), e = o.getElementsByTagName(
    O)[0]; L.async = 1; L.src = '//www.google.com/adsense/search/async-ads.js';
    e.parentNode.insertBefore(L, e)
})(window, document, 'script', '_googCsa');

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function () {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
    '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();
