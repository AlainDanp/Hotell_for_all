import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentStateService } from '../../services/payment-state.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm!: FormGroup;
  today: string;

  rooms: Record<string, { label: string; price: number }> = {
    standard:    { label: 'Chambre Standard',     price: 80  },
    deluxe:      { label: 'Chambre Deluxe',        price: 150 },
    suite:       { label: 'Suite Junior',           price: 250 },
    presidential:{ label: 'Suite Présidentielle',  price: 500 }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentState: PaymentStateService
  ) {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      firstName:       ['', Validators.required],
      lastName:        ['', Validators.required],
      email:           ['', [Validators.required, Validators.email]],
      phone:           ['', Validators.required],
      checkIn:         ['', Validators.required],
      checkOut:        ['', Validators.required],
      roomType:        ['', Validators.required],
      guests:          ['2'],
      breakfast:       [false],
      spa:             [false],
      parking:         [false],
      airportTransfer: [false],
      specialRequests: ['']
    });
  }

  get f() { return this.reservationForm.controls; }

  get totalNights(): number {
    const ci = this.f['checkIn'].value;
    const co = this.f['checkOut'].value;
    if (!ci || !co) return 0;
    return Math.max(0, Math.floor(
      (new Date(co).getTime() - new Date(ci).getTime()) / (1000 * 60 * 60 * 24)
    ));
  }

  get selectedRoom(): { label: string; price: number } | null {
    const type = this.f['roomType'].value;
    return type ? this.rooms[type] : null;
  }

  get totalPrice(): number {
    if (!this.selectedRoom || this.totalNights === 0) return 0;
    let total = this.selectedRoom.price * this.totalNights;
    if (this.f['breakfast'].value)       total += 15 * this.totalNights;
    if (this.f['spa'].value)             total += 50;
    if (this.f['parking'].value)         total += 10 * this.totalNights;
    if (this.f['airportTransfer'].value) total += 30;
    return total;
  }

  onSubmit(): void {
    if (this.reservationForm.invalid) return;

    this.paymentState.set({
      firstName:       this.f['firstName'].value,
      lastName:        this.f['lastName'].value,
      email:           this.f['email'].value,
      phone:           this.f['phone'].value,
      roomLabel:       this.selectedRoom?.label ?? '',
      roomType:        this.f['roomType'].value,
      checkIn:         this.f['checkIn'].value,
      checkOut:        this.f['checkOut'].value,
      nights:          this.totalNights,
      guests:          Number(this.f['guests'].value),
      breakfast:       this.f['breakfast'].value,
      spa:             this.f['spa'].value,
      parking:         this.f['parking'].value,
      airportTransfer: this.f['airportTransfer'].value,
      totalAmount:     this.totalPrice
    });

    this.router.navigate(['/Payment']);
  }
}
