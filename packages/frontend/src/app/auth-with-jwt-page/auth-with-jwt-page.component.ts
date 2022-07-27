import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from '../delay.util';

/**
 * Page showing authentication message after redirect
 * containing JWT from server.
 */
@Component({
  selector: 'app-auth-with-jwt-page',
  templateUrl: './auth-with-jwt-page.component.html'
})
export class AuthWithJwtPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, 