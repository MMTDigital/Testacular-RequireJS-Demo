define(['sample'], function(sample)
{
    describe('sample', function()
    {
        it('word should initially be helloworld', function()
        {
            expect(sample.word).toBe("helloworld");
        });

        it('word should be bar after foo()', function()
        {
            expect(sample.foo().word).toBe("bar");
        });
    });
});