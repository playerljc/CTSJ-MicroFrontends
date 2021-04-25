#!/usr/bin/env node

/**
 * isWin32
 * @return {boolean}
 */
function isWin32() {
  return process.platform === 'win32';
}

/**
 * src - 原始目录
 * targetsrc 目标目录
 */
const path = require('path');
const { spawn } = require('child_process');
const args = require('./commandArgs');

// 运行脚本的路径
const runtimePath = process.cwd();

/**
 * cpTask
 * @return {Promise}
 */
function cpTask() {
  return new Promise((resolve) => {
    const command = isWin32() ? `cp-cli.cmd` : `cp-cli`;

    const cpProcess = spawn(command, args.getArgs(), {
      cwd: runtimePath,
      encoding: 'utf-8',
    });

    cpProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    cpProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    cpProcess.on('close', (code) => {
      console.log(`cpClose：${code}`);

      resolve();
    });
  });
}

cpTask().then(() => {
  console.log('finish');
});
