import { isDebug, log } from "@youmayknow/utils";

const printErrorLog = (e, type) => {
    if (isDebug()) {
        log.error(type, e)
    } else {
        log.error(type, e.message)
    }
}

process.on('uncaughtException', (e) => printErrorLog(e, 'error'))

process.on('onhandledRejection', (e) => printErrorLog(e, 'promise'))
