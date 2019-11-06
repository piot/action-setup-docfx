import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function installLatestDocFXVersion() : Promise<number> {
  const version = '3.0.0-*' 
  const packageRepository = 'https://www.myget.org/F/docfx-v3/api/v2'
  core.debug(`Downloading Latest docfx tool (${version})`);
  const execString = `dotnet tool install -g docfx --version ${version} --add-source ${packageRepository} --verbosity diag`

  return exec.exec(execString)
}

async function run() {
  try {
    const exitCode = await installLatestDocFXVersion();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
