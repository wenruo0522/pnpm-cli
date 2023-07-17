
import { program } from 'commander'

import pkg from '../package.json' assert { type: 'json' }


const entry = (args) => {

    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d --debug', '是否开启调试模式', false)

    program
        .command('init [name]')
        .description('init project')
        .option('-f, --force', '是否强制更新', false)
        .action((name, opts) => {
            console.log('init...', name, opts)
        })

    program.parse(process.argv)
}
export {
    entry
}