await Bun.build({
    entrypoints: ['./src/client.ts', './src/server.ts'],
    outdir: './build',
    sourcemap: 'inline',
});

// Copy over the index.html file.
await Bun.write(Bun.file('./build/index.html'), Bun.file('./src/index.html'));
