import { $ } from 'bun';
import type { Subprocess } from 'bun';
import { watch } from 'fs';

let serverProc: Subprocess | null = null;

const RESTART_DELAY = 250;
let restartTimeout: NodeJS.Timeout | null = null;

function restart() {
    if (restartTimeout) {
        clearTimeout(restartTimeout);
    }

    restartTimeout = setTimeout(async () => {
        console.log('Restarting server...');
        if (serverProc) {
            serverProc.kill();
        }
        await $`bun build.ts`;
        serverProc = Bun.spawn(['bun', 'server.js'], {cwd: './build', stdout: 'inherit'});
    }, RESTART_DELAY);
}

restart();

watch(import.meta.dir + '/src', {recursive: true}, (event, filename) => {
    console.log('File changed:', filename);
    restart();
});
