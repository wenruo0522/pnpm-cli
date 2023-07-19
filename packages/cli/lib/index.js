
import { program } from 'commander'
import { Init as createInitCommand } from '@youmayknow/init'
import { log } from '@youmayknow/utils'
import pkg from '../package.json' assert { type: 'json' }


const entry = (args) => {

    log.success('version', pkg.version)

    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug', '是否开启调试模式', false)

    createInitCommand(program)

    program.parse(process.argv)
}
export {
    entry
}