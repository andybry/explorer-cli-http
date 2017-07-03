const explorerCliHttp = require('../src');

describe('explorer-cli-http', () => {
    it('should delegate to "request"', () => {
        const request = require('request');
        const cb = jest.fn();
        explorerCliHttp({
            runType: 'http',
            url: 'http://some.host/some/path',
            json: true
        }, cb);
        expect(request).toHaveBeenCalledWith({
            url: 'http://some.host/some/path',
            json: true
        }, cb);
    });
});