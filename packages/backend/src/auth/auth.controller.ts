import {
  Controller,
  Get,
  UseGuards,
  Res,
  Req,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '../config/config.service';
import { AuthService, Provider } from './auth/auth.service';
import * as bcrypt from 'bcrypt';
import { promisify } from 'util';
import { UserRepository } from './user.repository';


/**
 * Authentication controller.
 */
@Controller('auth')
export class AuthController {
  appRedirectBaseUrl = 'http://localhost';

  constructor(
    configService: ConfigService,
    private authService: AuthService,
    private userRepository: UserRepository,
  ) {
    this.appRedirectBaseUrl = configService.get('APP_REDIRECT_BASE_URL');
  }

  /**
   * Authenticate with Google.
   */
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  /**
   * Callback for authentication with Google.
   */
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback