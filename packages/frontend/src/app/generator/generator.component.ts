
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotAuthenticatedAlertComponent } from '../not-authenticated-alert/not-authenticated-alert.component';
import { CheckoutWithStripeComponent } from '../checkout-with-stripe/checkout-with-stripe.component';
import { ToastrService } from 'ngx-toastr';
import { ScriptGeneratorService } from '../script-generator.service';
import { delay } from '../delay.util';
import { environment } from '../../environments/environment';

/**
 * Component for generation and
 * display of generated scripts.
 */
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  constructor(
    private scriptGeneratorService: ScriptGeneratorService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  /**
   * Is generation button disabled?
   */
  public isDisabled = false;