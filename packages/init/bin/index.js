
import { Command } from '@youmayknow/command'

class InitCommand extends Command {
    get command() {
        return 'init [name]'
    }

    get description() {
        return 'init project'
    }
}

const Init = (instance) => {
    return new InitCommand(instance)
}


export {
    Init
}