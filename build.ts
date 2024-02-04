const buildResult = await Bun.build({
    entrypoints: ['./src/client.ts', './src/server.ts'],
    outdir: './build',
    sourcemap: 'inline',
});

for (const it of buildResult.logs) {
    console.log(it);
}

// Copy over the index.html file.
await Bun.write(Bun.file('./build/index.html'), Bun.file('./src/index.html'));
