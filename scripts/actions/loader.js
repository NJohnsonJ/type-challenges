import process from 'node:process';
import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';
import * as io from '@actions/io';
process.on('unhandledRejection', handleError);
main().catch(handleError);
async function main() {
    const token = process.argv[2];
    const fnName = process.argv[3];
    const github = getOctokit(token);
    // eslint-disable-next-line ts/no-var-requires
    const fn = require(`./${fnName}.ts`);
    fn.default(github, context, core, io);
}
function handleError(err) {
    console.error(err);
    core.setFailed(`Unhandled error: ${err}`);
    process.exit(1);
}
