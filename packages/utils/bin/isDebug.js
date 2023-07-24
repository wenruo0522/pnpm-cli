const isDebug = () => {
    return process.argv.includes('--debug') || process.argv.includes('-d')
}

export {
    isDebug
}