import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  address: string;
  memberSince: string;
  loyaltyPoints: number;
  tier: 'Standard' | 'Gold' | 'Platinum';
}

@Injectable({ providedIn: 'root' })
export class UserService {

  // TODO: remplacer par this.http.get(`${environment.apiUrl}/users/me`)
  getProfile(): Observable<UserProfile> {
    return of({
      id: 'U001',
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'jean.dupont@email.com',
      phone: '+237 6 99 00 11 22',
      nationality: 'Camerounaise',
      address: 'Yaoundé, Cameroun',
      memberSince: '2022',
      loyaltyPoints: 4750,
      tier: 'Gold'
    });
  }

  // TODO: remplacer par this.http.put(`${environment.apiUrl}/users/me`, profile)
  updateProfile(profile: Partial<UserProfile>): Observable<UserProfile> {
    return of({ ...profile } as UserProfile);
  }
}
