var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTPUSER,
    password: process.env.FTPPASS,
    host: process.env.FTPHOST,
    port: 21,
    localRoot: __dirname + "/server/dist/",
    remoteRoot: "/public_nodejs",
    deleteRemote: false,
    include: ['*']
};

console.log(config.user);
console.log(config.password);
console.log(config.host);

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));
