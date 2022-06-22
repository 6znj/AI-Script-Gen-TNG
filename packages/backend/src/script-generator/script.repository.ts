import { Injectable } from '@nestjs/common';
import { BaseMongoRepository } from '../shared/base-mongo.repository';

/**
 * Repository for Scripts.
 */
@Injectable()
export class ScriptRepository extends BaseMongoRepository {
  public get collection(): any {
    return this._mongoConnectionService.db.collection('scripts');
  }

  /**
   * Find one most recent generated script.
   */
  public async findOneRecentByUserId(userId: string) {
    return await this.collection
      .find({ userId, status: 'completed' })
      .sort({ startTime: -1 })
      .limit(1)
      .next(