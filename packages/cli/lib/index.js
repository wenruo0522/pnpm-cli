import { Init as createInitCommand } from '@youmayknow/init'
import createCLI from './createCLI.js'
import './exception.js'

const entry = (args) => {
    const program = createCLI()
    createInitCommand(program)
    program.parse(process.argv)
}
export {
    entry
}