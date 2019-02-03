// Load the file to test
const urlRewriteTest = require('../../functions/urlRewrite');
// Load some data that can be reused for other lambda@Edge functions
const lambdaAtEdgeFixture = require('../fixtures/lambdaAtEdge');

test(
    'url-rewrite handler appends index.html to root request',
    () => {
        const expectedResponse = { uri: lambdaAtEdgeFixture.event.root_object.Records[0].cf.request.uri + 'index.html' };
        expect(
            urlRewriteTest.handler(
                lambdaAtEdgeFixture.event.root_object,
                lambdaAtEdgeFixture.context.webClient,
                lambdaAtEdgeFixture.callback
            )
        ).toEqual(expect.objectContaining(expectedResponse));
    }
);

test(
    'url-rewrite handler appends index.html to directory requests',
    () => {
        const expectedResponse = { uri: lambdaAtEdgeFixture.event.subdirectory.Records[0].cf.request.uri + 'index.html' };
        expect(
            urlRewriteTest.handler(
                lambdaAtEdgeFixture.event.subdirectory,
                lambdaAtEdgeFixture.context.webClient,
                lambdaAtEdgeFixture.callback
            )
        ).toEqual(expect.objectContaining(expectedResponse));
    }
);

test(
    'url-rewrite handler does not append index.html to root-directory requests',
    () => {
        const expectedResponse = { uri: lambdaAtEdgeFixture.event.file.Records[0].cf.request.uri };
        expect(
            urlRewriteTest.handler(
                lambdaAtEdgeFixture.event.file,
                lambdaAtEdgeFixture.context.webClient,
                lambdaAtEdgeFixture.callback
            )
        ).toEqual(expect.objectContaining(expectedResponse));
    }
);

test(
    'url-rewrite handler does not append index.html to non-directory requests',
    () => {
        const expectedResponse = { uri: lambdaAtEdgeFixture.event.file_in_subdirectory.Records[0].cf.request.uri };
        expect(
            urlRewriteTest.handler(
                lambdaAtEdgeFixture.event.file_in_subdirectory,
                lambdaAtEdgeFixture.context.webClient,
                lambdaAtEdgeFixture.callback
            )
        ).toEqual(expect.objectContaining(expectedResponse));
    }
);
