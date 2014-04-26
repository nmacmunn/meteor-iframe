iframe = function () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};

UI.registerHelper('iframe', function () {
    return iframe();
});