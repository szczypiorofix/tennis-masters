var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTPUSERPROD,
    password: process.env.FTPPASSPROD,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/server/dist/",
    remoteRoot: "/public_nodejs",
    deleteRemote: false,
    include: ['*']
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));
