const { exec } = require("child_process");

var targetSite = '*';
var args  = process.argv;

if(args[2]){
    targetSite = args[2];
}

//Disable the target site config(s)
exec(`sudo a2dissite ${targetSite} && sudo systemctl reload apache2 && sudo a2ensite ${targetSite} && systemctl reload apache2`, {cwd: '/etc/apache2/sites-available'}, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(stdout);
});