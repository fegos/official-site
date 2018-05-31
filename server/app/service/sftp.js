/**
 * Created by swx on 2018/1/2.
 */
const fs = require('fs');
const Sftp = require('promise-sftp');

const sftp = new Sftp();
const Service = require('egg').Service;

class SftpService extends Service {
  async upload(file, targetName) {
    let tokens;
    let currPath;
    let len;
    let i;
    let token;
    const { config } = this.config;
    try {
      const status = await sftp.getConnectionStatus();
      if (status !== 'connected') {
        await sftp.connect(config.fego.sftp || {});
      }

      tokens = targetName.split(/\//g);
      currPath = targetName.charAt(0) === '/' ? '/' : '';
      for (i = 0, len = tokens.length; i < len - 1; i++) {
        token = tokens[i];
        if (i > 0) {
          currPath = `${currPath}/${token}`;
        } else {
          currPath = token;
        }
        if (token === '.' || token === '..') {
          continue;
        }
        try {
          await sftp.mkdir(currPath);
        } catch (ex) {
          if (ex.code !== Sftp.ERROR_CODES.FAILURE && ex.code !== Sftp.ERROR_CODES.FILE_ALREADY_EXISTS) {
            throw ex;
          }
        }
      }
      const reader = fs.createReadStream(file.path);
      await sftp.put(reader, targetName);
    } catch (e) {
      throw e;
    }
  }
}
module.exports = SftpService;
