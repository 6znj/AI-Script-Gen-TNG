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
 * Authentication 