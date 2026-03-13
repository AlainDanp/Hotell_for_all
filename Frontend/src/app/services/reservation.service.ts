import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ReservationPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  services: string[];
  specialRequests?: string;
}

@Injectable({ providedIn: 'root' })
export class ReservationService {

  // TODO: remplacer par this.http.post(`${environment.apiUrl}/reservations`, payload)
  createReservation(payload: ReservationPayload): Observable<{ id: string; success: boolean }> {
    const mockId = 'RES-' + Date.now();
    return of({ id: mockId, success: true });
  }

  // TODO: remplacer par this.http.get(`${environment.apiUrl}/reservations/user/${userId}`)
  getUserReservations(userId: string): Observable<any[]> {
    return of([]);
  }
}
