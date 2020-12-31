#!/usr/bin/env sh

PUBLIC_URL=. npm run web:build    || exit $?
cp index.electron.js .dist/index.js || exit $?
echo {} > .dist/package.json        || exit $?