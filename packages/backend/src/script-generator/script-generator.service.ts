import { Injectable } from '@nestjs/common';
import * as shell from 'shelljs';
import { ScriptRepository } from './script.repository';
import { ConfigService } from '../config/config.service';
import { DISCLAIMER } from './disclaimer.const';

/**
 * Promisify shell.exec for async.
 * @param args
 */
const execAsync = (...args) =>
  new Promise(resolve =>
    shell.exec(...args, (code, stdout, stderr) =>
      resolve({
        code,
        stdout,
        stderr,
      }),
    ),
  );

/**
 * Service providing script generation
 * functionality.
 */
@Injectable()
export class ScriptGeneratorService {

  constructor(
    private readonly scriptRepository: ScriptRepository,
    private configService: ConfigService,
  ) {}

  /**
   * Get working directory of script generator.
   */
  private getScriptGenWorkingDirectory() {
    const scriptGenWorkingDirectory = this.configService
      .get('SCRIPTGEN_WORKING_DIRECTORY')
      .replace(new RegExp('{{cwd}}', 'g'), process.cwd());
    return scriptGenWorkingDirectory;
  }

  /**
   * Clean generated script from generator
   * text output.
   * @param allOutput Complete output of generator script.
   */
  private cleanGeneratedScript(allOutput: string) {
    const headerLine = '-----BEGIN GENERATED TEXT-----';
    const footerLine = '-----END GENERATED TEXT--