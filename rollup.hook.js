import { spawnSync } from 'child_process';

export function run (command) {
    return {
        name: 'run',
        buildStart: function () {
            spawnSync(command, {
                shell: true,
                stdio: 'inherit',
                env: process.env
            });
        }
    }
}