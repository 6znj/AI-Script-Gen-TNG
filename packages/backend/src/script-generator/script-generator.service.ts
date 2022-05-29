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
    private configService: ConfigSer