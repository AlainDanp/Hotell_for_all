import { Injectable } from '@angular/core';

export interface ReservationSummary {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roomLabel: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  breakfast: boolean;
  spa: boolean;
  parking: boolean;
  airportTransfer: boolean;
  totalAmount: number;
}

@Injectable({ providedIn: 'root' })
export class PaymentStateService {

  private summary: ReservationSummary | null = null;

  set(data: ReservationSummary): void {
    this.summary = data;
  }

  get(): ReservationSummary | null {
    return this.summary;
  }

  clear(): void {
    this.summary = null;
  }
}
