/**
 * Created with IntelliJ IDEA.
 * User: markstar
 * Date: 06/03/2013
 * Time: 12:47
 */
define(function()
{
    function foo(reset)
    {
        if(reset)
        {
            this.word = "helloworld";
        }
        else
        {
            this.word = "bar";
        }

        return this;
    }

    return {
        foo: foo,
        word: "helloworld"
    };
});