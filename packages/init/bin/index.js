
import { Command } from '@youmayknow/command'

class InitCommand extends Command {
    get command() {
        return 'init [name]'
    }

    get description() {
        return 'init project'
    }

    get options() {
        return [
            ['-f, --force', '是否强制更新', false]
        ]
    }

    action([name, opts]) {
        console.log('init', name, opts)
    }
}

const Init = (instance) => {
    return new InitCommand(instance)
}


export {
    Init
}