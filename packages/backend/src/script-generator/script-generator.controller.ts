import { Controller, UseGuards, Get, Post, Body, Param, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ScriptGeneratorService } from './script-generator.service';
import { ScriptRepository } from './script.repository';

/**
 * Controller for script generation.
 */
@Controller('script-generator')
export class ScriptGeneratorController {
  constructor(
    private readonly scriptGenerator: ScriptGeneratorService,
    private readonly scriptRepository: ScriptRepository,
  ) {}

  /**
   * Generate new script.
   * @param payload Payload from frontend containing payment information.
   */
  @Post()
  @UseGuards(AuthGuard('jwt'))
  public async generateNewScript(@Req() req, @Body() payload: any) {
    const stripePaymentId = payload.payment.stripe.id;
    // PROD: In production, you would perform some sort of
    // processing like validation / 