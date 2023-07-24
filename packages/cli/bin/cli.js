#! /usr/bin/env node

import importLocal from 'import-local'
import { log } from '@youmayknow/utils'
import { filename } from 'dirname-filename-esm'
// import { fileURLToPath } from 'node:url'

// const __filename = fileURLToPath(import.meta.url)

const __filename = filename(import.meta)

import { entry } from '../lib/index.js'

if (importLocal(__filename))　{
    log.info('cli', '使用本地 pnpm-cli 版本')
} else {
    entry(process.argv.slice(2))
}

