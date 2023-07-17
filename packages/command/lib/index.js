class Command {
    constructor(instance) {
        if (!instance) {
            throw new Error(`command instance must not be null!`)
        }

        this.program = instance


        this.program
            .command(this.command)
            .description(this.description)
            .option('-f, --force', '是否强制更新', false)
            .action((name, opts) => {
                console.log('init...', name, opts)
            })

    }

    get command() {
        throw new Error(`command must be implements`)
    }

    get description() {
        throw new Error(`description must be implements`)
    }


}


export {
    Command
}