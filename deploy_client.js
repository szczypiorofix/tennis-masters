var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTPUSER,
    password: process.env.FTPPASS,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/client/build/",
    remoteRoot: '/public_nodejs/public',
    deleteRemote: true,
    include: ['*']
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));
