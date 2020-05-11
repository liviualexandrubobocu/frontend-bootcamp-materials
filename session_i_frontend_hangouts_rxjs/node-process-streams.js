const exec = require('child_process').exec;
const { Subject } = require('rxjs');

const ANGULAR_APP_NAME = 'test-angular-two';
const CREATE_ANGULAR_APPLICATION = `ng.cmd new ${ANGULAR_APP_NAME}`;
const ADD_ANGULAR_MATERIAL = `ng.cmd add @angular/material`;
// const GO_TO_ANGULAR_APP = `cd.cmd ${ANGULAR_APP_NAME}`;
const RUN_ANGULAR_APPLICATION = `ng.cmd serve`;

const synchronizeProcessSubject = new Subject();
const finalizeProcessSubject = new Subject();

const executeShellCommand = (command, name) => {
    const childProcess = exec(command, {
        shell: false, stdio: 'inherit', maxBuffer: 600 * 1024,
        cwd: `./user_generated_apps/${name}`
    },
    (error, stdout, stderr) => {
        console.log(error);
        console.log(stdout);
        console.log(stderr);
    })

    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    })

    childProcess.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    childProcess.on('close', (code) => {
        console.log(`---------------------- closing code: ${code}`);
        synchronizeProcessSubject.next(command);
    });

    childProcess.on('exit', (code) => {
        if(code){
            let err = new Error(`command ${command} exited with code ${code}`);
            err.code = code;
            err.command = command;
        }
        console.log('------------- error', command);
    });
}

const createInstallationFlow = () => {
    synchronizeProcessSubject.subscribe(cmd => {
        switch(cmd){
            case CREATE_ANGULAR_APPLICATION:
                executeShellCommand(ADD_ANGULAR_MATERIAL, ANGULAR_APP_NAME);
                break;
            case ADD_ANGULAR_MATERIAL:
                executeShellCommand(RUN_ANGULAR_APPLICATION, ANGULAR_APP_NAME);
            case RUN_ANGULAR_APPLICATION:
                finalizeProcessSubject.next();
                break;
        }
    })
}

const finalizeProcess = () => {
    finalizeProcessSubject.subscribe(info => {
        console.log(info);
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Finalized process');
    })
}

createInstallationFlow();
finalizeProcess();

executeShellCommand(CREATE_ANGULAR_APPLICATION, '');