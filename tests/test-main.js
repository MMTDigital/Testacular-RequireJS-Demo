/**
 * Created with IntelliJ IDEA.
 * User: markstar
 * Date: 06/03/2013
 * Time: 12:45
 */

var tests = Object.keys(window.__testacular__.files).filter(function(file)
{
    return /tests\/[\w/]+\.test\.js$/.test(file);
});

require({
    // Testacular serves files from '/base'
    baseUrl:'/base/js',
    paths:{},
    // ask requirejs to load these files (all our tests)
    deps:tests,
    // start test run, once requirejs is done
    callback:window.__testacular__.start
});