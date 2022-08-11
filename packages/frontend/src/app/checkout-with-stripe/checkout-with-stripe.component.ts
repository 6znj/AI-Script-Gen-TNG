import { Component, ViewChild } from '@angular/core';
import {
  StripeService,
  StripeCardComponent,
  ElementOptions,
  ElementsOptions
} from 'ngx-stripe';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';

/**
 * Checkout form for Script Generator using
 * Stripe.
 */
@Component({
  selector: 'app-checkout-with-stripe',
  templateUrl: './checkout-with-stripe.component.html',
  styleUrls: ['./checkout-with-stripe.component.scss']
})
export class CheckoutWithStripeComponent {
  @ViewChild(StripeCardComponent, { static: true })
  private card: StripeCardComponent;

  constructor(
    public activeModal: NgbActiveModal,
    private stripeService: StripeService
  ) {}

  /**
   * Display options of Stripe Card El