import path from 'node:path'
import { program } from "commander"
import { dirname } from "dirname-filename-esm"
import fse from "fs-extra"
import semver from "semver"
import chalk from "chalk"
import { log } from "@youmayknow/utils"

const __dirname = dirname(import.meta)
const pkgPath = path.resolve(__dirname, '../package.json')
const pkg = fse.readJsonSync(pkgPath)


const LOWES_NODE_VERSION = '14.0.0'
function checkNodeVersion() {
    log.verbose('node version', process.version)
    if (!semver.gte(process.version, LOWES_NODE_VERSION)) {
        throw new Error(chalk.red(`pnpm-cli 需要安装${LOWES_NODE_VERSION}以上版本的 Node.js`))
    }
}

function preAction() {
    checkNodeVersion()
}

const createCLI = () => {
    log.success('version', pkg.version)

    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug', '是否开启调试模式', false)
        .hook('preAction', preAction)

    program.on('option:debug', () => {
        if (program.opts().debug) {
            log.verbose('debug', 'launch debug mode')
        }
    })

    program.on('command:*', (command) => {
        log.error('未知的命令: ', command[0])
    })

    return program
}

export default createCLI


