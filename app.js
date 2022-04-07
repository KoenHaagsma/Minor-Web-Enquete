const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
let stringified;

const PORT = 8005;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

const fsReadFile = (res, route) => {
    if (route !== 'favicon.ico' && route !== 'results' && route !== 'send') {
        fs.readFile(`json/${route}.json`, 'utf8', (err, data) => {
            if (err) throw err;
            let info;
            if (data) {
                info = JSON.parse(data);
            }
            switch (route) {
                case 'data':
                    res.render('index', { index: info });
                    break;
                case 'wafs':
                    res.render('wafs', { wafs: info });
                    break;
                case 'cttr':
                    res.render('cttr', { cttr: info });
                    break;
                case 'pwa':
                    res.render('pwa', { pwa: info });
                    break;
                case 'bt':
                    res.render('bt', { bt: info });
                    break;
                case 'hcd':
                    res.render('hcd', { hcd: info });
                    break;
                case 'rw':
                    res.render('rw', { rw: info });
                    break;
            }
        });
    }
};

const dataCollector = (req) => {
    return {
        teachers: req.body.teacher,
        week: req.body.week,
        beoordeling: req.body.beoordeling,
        lesstof: req.body.lesstof,
        uitleg: req.body.uitleg,
        inzicht: req.body.inzicht,
    };
};

app.get('/', (req, res) => {
    fsReadFile(res, 'data');
});

app.get('/:id', (req, res) => {
    const route = req.params.id;
    fsReadFile(res, route);
});

app.post('/wafs', (req, res) => {
    const data = {
        name: req.body.name,
        number: req.body.number,
    };

    stringified = JSON.stringify(data);

    fs.writeFile('json/data.json', stringified, (err) => {
        if (err) console.error(err);
    });
    fsReadFile(res, 'wafs');
});

app.post('/cttr', (req, res) => {
    const wafs = dataCollector(req);
    stringified = JSON.stringify(wafs);

    fs.writeFile('json/wafs.json', stringified, (err) => {
        if (err) console.error(err);
    });

    fsReadFile(res, 'cttr');
});

app.post('/pwa', (req, res) => {
    const cttr = dataCollector(req);
    stringified = JSON.stringify(cttr);

    fs.writeFile('json/cttr.json', stringified, (err) => {
        if (err) console.error(err);
    });

    fsReadFile(res, 'pwa');
});

app.post('/bt', (req, res) => {
    const pwa = dataCollector(req);
    stringified = JSON.stringify(pwa);

    fs.writeFile('json/pwa.json', stringified, (err) => {
        if (err) console.error(err);
    });

    fsReadFile(res, 'bt');
});

app.post('/hcd', (req, res) => {
    const bt = dataCollector(req);
    stringified = JSON.stringify(bt);

    fs.writeFile('json/bt.json', stringified, (err) => {
        if (err) console.error(err);
    });

    fsReadFile(res, 'hcd');
});

app.post('/rw', (req, res) => {
    const hcd = dataCollector(req);
    stringified = JSON.stringify(hcd);

    fs.writeFile('json/hcd.json', stringified, (err) => {
        if (err) console.error(err);
    });

    fsReadFile(res, 'rw');
});

function readFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

app.post('/results', (req, res) => {
    const rw = dataCollector(req);
    stringified = JSON.stringify(rw);

    fs.writeFile('json/rw.json', stringified, (err) => {
        if (err) console.error(err);
    });

    const promises = [
        readFromFile('json/data.json'),
        readFromFile('json/bt.json'),
        readFromFile('json/cttr.json'),
        readFromFile('json/hcd.json'),
        readFromFile('json/pwa.json'),
        readFromFile('json/rw.json'),
        readFromFile('json/wafs.json'),
    ];

    Promise.all(promises)
        .then((result) => {
            res.render('results', {
                personal: result[0],
                wafs: result[6],
                cttr: result[2],
                pwa: result[4],
                bt: result[1],
                hcd: result[3],
                rw: result[5],
            });
        })
        .catch((err) => {
            console.error(err);
            res.render('error');
        });
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Application started on port: http://localhost:${PORT}`);
});
