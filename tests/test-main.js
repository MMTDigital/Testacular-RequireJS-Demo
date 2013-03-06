/**
 * Created with IntelliJ IDEA.
 * User: markstar
 * Date: 06/03/2013
 * Time: 12:45
 */

var tests = Object.keys(window.__testacular__.files).filter(function(file)
{
    // The regular expression below matches all file paths that contain the text "tests/" and end with ".test.js"
    // so that we load all of the test files first. If your test files do not follow the structure
    // "tests/[<folder name>/]<name>.test.js" then you will need to modify the regex below.
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