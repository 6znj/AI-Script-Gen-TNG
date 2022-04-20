import { Module, OnModuleInit } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongoConnectionService } from './shared/mongo-connection.service';
import { ScriptGeneratorModule } from './script-generator/script-generator.module';
import { SharedModule } from './shared/sh