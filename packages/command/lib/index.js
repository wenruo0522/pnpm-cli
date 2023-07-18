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
            .hook('preAction', () => {
                this.preAction()
            })
            .hook('postAction', () => {
                this.postAction()
            })
            .action((...params) => {
                this.action(params)
            })

    }

    get command() {
        throw new Error(`command must be implements`)
    }

    get description() {
        throw new Error(`description must be implements`)
    }

    get options() {
        return []
    }

    get action() {
        throw new Error(`action must be implements`)
    }

    preAction() {}

    postAction() {}

}

export {
    Command
}