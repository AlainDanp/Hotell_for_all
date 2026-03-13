import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Reservation {
  id: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  total: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  activeTab: 'info' | 'reservations' | 'loyalty' | 'security' = 'info';
  editMode = false;
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  saveSuccess = false;

  user = {
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    phone: '+237 6 99 00 11 22',
    nationality: 'Camerounaise',
    address: 'Yaoundé, Cameroun',
    memberSince: '2022',
    tier: 'Gold',
    points: 4750,
    nextTier: 'Platinum',
    pointsToNext: 5000,
    avatar: ''
  };

  reservations: Reservation[] = [
    {
      id: 'RES-2024-001',
      room: 'Suite Présidentielle',
      checkIn: '2024-12-20',
      checkOut: '2024-12-27',
      guests: 2,
      total: 3500,
      status: 'completed'
    },
    {
      id: 'RES-2025-003',
      room: 'Suite Junior',
      checkIn: '2025-03-01',
      checkOut: '2025-03-05',
      guests: 2,
      total: 1000,
      status: 'completed'
    },
    {
      id: 'RES-2025-007',
      room: 'Chambre Deluxe',
      checkIn: '2025-08-10',
      checkOut: '2025-08-15',
      guests: 2,
      total: 750,
      status: 'upcoming'
    }
  ];

  preferences = {
    roomType: 'Suite',
    floor: 'Étage élevé',
    pillow: 'Ferme',
    dietary: 'Sans restriction',
    newsletter: true,
    smsAlerts: false
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName:   [this.user.firstName,   Validators.required],
      lastName:    [this.user.lastName,    Validators.required],
      email:       [this.user.email,       [Validators.required, Validators.email]],
      phone:       [this.user.phone,       Validators.required],
      nationality: [this.user.nationality],
      address:     [this.user.address]
    });

    this.passwordForm = this.fb.group({
      currentPwd: ['', Validators.required],
      newPwd:     ['', [Validators.required, Validators.minLength(8)]],
      confirmPwd: ['', Validators.required]
    });
  }

  get initials(): string {
    return (this.user.firstName[0] + this.user.lastName[0]).toUpperCase();
  }

  get loyaltyPercent(): number {
    return Math.round((this.user.points / this.user.pointsToNext) * 100);
  }

  setTab(tab: 'info' | 'reservations' | 'loyalty' | 'security'): void {
    this.activeTab = tab;
    this.editMode = false;
    this.saveSuccess = false;
  }

  toggleEdit(): void {
    if (this.editMode) {
      this.profileForm.patchValue({
        firstName:   this.user.firstName,
        lastName:    this.user.lastName,
        email:       this.user.email,
        phone:       this.user.phone,
        nationality: this.user.nationality,
        address:     this.user.address
      });
    }
    this.editMode = !this.editMode;
    this.saveSuccess = false;
  }

  saveProfile(): void {
    if (this.profileForm.invalid) return;
    const v = this.profileForm.value;
    this.user.firstName   = v.firstName;
    this.user.lastName    = v.lastName;
    this.user.email       = v.email;
    this.user.phone       = v.phone;
    this.user.nationality = v.nationality;
    this.user.address     = v.address;
    this.editMode  = false;
    this.saveSuccess = true;
    setTimeout(() => this.saveSuccess = false, 3500);
  }

  getNights(checkIn: string, checkOut: string): number {
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
