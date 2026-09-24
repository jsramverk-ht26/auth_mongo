process.env.NODE_ENV = 'test';

import * as chai from 'chai';
import { default as chaiHttp, request } from 'chai-http';
import HTMLParser from 'node-html-parser';
import server from '../app.js';

chai.should();

chai.use(chaiHttp);

describe('app', () => {
    describe('GET /', () => {
        it('200 HAPPY PATH getting base', (done) => {
            request.execute(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });

        it('page should contain H1 with auth', (done) => {
            request.execute(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a("string");

                    let HTMLResponse = HTMLParser.parse(res.text);
                    let h1Element = HTMLResponse.querySelector('h1');

                    h1Element.should.be.an("object");

                    var h1Text = h1Element.childNodes[0].rawText;

                    h1Text.should.equal("auth Documentation");

                    done();
                });
        });
    });
});
