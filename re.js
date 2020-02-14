#!/usr/bin/env node

const { exec } = require("child_process");

//Disable the target site config(s)
exec(`sudo a2dissite * && sudo systemctl reload apache2 && sudo a2ensite * && systemctl reload apache2`, {cwd: '/etc/apache2/sites-available'}, (error, stdout, stderr) => {
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