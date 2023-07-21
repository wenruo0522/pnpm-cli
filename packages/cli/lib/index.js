
import { program } from 'commander'
import semver from 'semver'
import chalk from "chalk"
import { Init as createInitCommand } from '@youmayknow/init'
import { log, isDebug } from '@youmayknow/utils'
import pkg from '../package.json' assert { type: 'json' }


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

process.on('uncaughtException', (e) => {
    if (isDebug()) {
        console.log(e)
    } else {
        console.log(e.message)
    }

})

const entry = (args) => {

    log.success('version', pkg.version)

    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug', '是否开启调试模式', false)
        .hook('preAction', preAction)

    createInitCommand(program)

    program.parse(process.argv)
}
export {
    entry
}