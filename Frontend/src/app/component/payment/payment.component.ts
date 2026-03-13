import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentStateService, ReservationSummary } from '../../services/payment-state.service';

type PaymentMethod = 'mtn' | 'orange' | 'visa' | 'mastercard' | null;
type PaymentStatus = 'idle' | 'processing' | 'success' | 'failed';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  summary: ReservationSummary | null = null;
  selectedMethod: PaymentMethod = null;
  status: PaymentStatus = 'idle';

  mobileForm!: FormGroup;
  cardForm!: FormGroup;

  methods = [
    { id: 'mtn',        label: 'MTN Mobile Money',  icon: 'smartphone', color: '#ffcc00', type: 'mobile' },
    { id: 'orange',     label: 'Orange Money',       icon: 'smartphone', color: '#ff6600', type: 'mobile' },
    { id: 'visa',       label: 'Visa',               icon: 'credit_card', color: '#1a1f71', type: 'card' },
    { id: 'mastercard', label: 'Mastercard',          icon: 'credit_card', color: '#eb001b', type: 'card' },
  ];

  constructor(
    private paymentState: PaymentStateService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.summary = this.paymentState.get();
    if (!this.summary) {
      this.router.navigate(['/Reservation']);
      return;
    }

    this.mobileForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^6[5-9][0-9]{7}$/)]]
    });

    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardName:   ['', Validators.required],
      expiry:     ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv:        ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  get currentMethod() {
    return this.methods.find(m => m.id === this.selectedMethod) ?? null;
  }

  get isMobile(): boolean {
    return this.currentMethod?.type === 'mobile';
  }

  get isCard(): boolean {
    return this.currentMethod?.type === 'card';
  }

  get activeForm(): FormGroup {
    return this.isMobile ? this.mobileForm : this.cardForm;
  }

  selectMethod(id: string): void {
    this.selectedMethod = id as PaymentMethod;
    this.status = 'idle';
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  pay(): void {
    if (!this.selectedMethod || this.activeForm.invalid) return;

    this.status = 'processing';

    // Simulation du délai de traitement (remplacer par appel HTTP au backend)
    setTimeout(() => {
      // TODO: this.http.post(`${environment.apiUrl}/payments`, payload).subscribe(...)
      const success = Math.random() > 0.15; // 85% succès en simulation
      this.status = success ? 'success' : 'failed';
      if (success) this.paymentState.clear();
    }, 2800);
  }

  retry(): void {
    this.status = 'idle';
  }

  goHome(): void {
    this.router.navigate(['/Homepage']);
  }

  goReservation(): void {
    this.router.navigate(['/Reservation']);
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').slice(0, 16);
    this.cardForm.get('cardNumber')?.setValue(input.value, { emitEvent: false });
  }

  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    let val = input.value.replace(/\D/g, '').slice(0, 4);
    if (val.length >= 3) val = val.slice(0, 2) + '/' + val.slice(2);
    input.value = val;
    this.cardForm.get('expiry')?.setValue(val, { emitEvent: false });
  }
}
