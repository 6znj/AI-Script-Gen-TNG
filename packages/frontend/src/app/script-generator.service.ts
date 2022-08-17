import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

/**
 * REST client for Script Generator Services.
 */
@Injectable({
  providedIn: 'root'
})
export class ScriptGeneratorService {
  constructor(private http: HttpClient) {}

  /**
   * Base url of service to use.
   */
  public baseUrl = environment.apiBaseUrl;

  /**
   * Generate a new script.
   * @param stripePaymentResult Payment information from Stripe.
   */
  public gener