import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

export interface Room {
  id: string;
  name: string;
  type: 'standard' | 'deluxe' | 'suite' | 'presidential';
  pricePerNight: number;
  capacity: number;
  description: string;
  image: string;
  amenities: string[];
  available: boolean;
}

@Injectable({ providedIn: 'root' })
export class RoomService {

  private readonly rooms: Room[] = [
    {
      id: 'R001',
      name: 'Chambre Standard',
      type: 'standard',
      pricePerNight: 80,
      capacity: 2,
      description: 'Chambre confortable avec vue sur le jardin.',
      image: '/image/imgchambre1.jpg',
      amenities: ['Wi-Fi', 'Climatisation', 'TV', 'Minibar'],
      available: true
    },
    {
      id: 'R002',
      name: 'Chambre Deluxe',
      type: 'deluxe',
      pricePerNight: 150,
      capacity: 2,
      description: 'Chambre spacieuse avec vue panoramique.',
      image: '/image/imgchambre3.jpg',
      amenities: ['Wi-Fi', 'Climatisation', 'TV', 'Minibar', 'Jacuzzi'],
      available: true
    },
    {
      id: 'R003',
      name: 'Suite Junior',
      type: 'suite',
      pricePerNight: 250,
      capacity: 3,
      description: 'Suite élégante avec salon séparé.',
      image: '/image/imgchambre5.jpg',
      amenities: ['Wi-Fi', 'Climatisation', 'TV 4K', 'Minibar', 'Jacuzzi', 'Room Service'],
      available: true
    },
    {
      id: 'R004',
      name: 'Suite Présidentielle',
      type: 'presidential',
      pricePerNight: 500,
      capacity: 4,
      description: 'Le summum du luxe avec terrasse privée.',
      image: '/image/imgchambre7.jpg',
      amenities: ['Wi-Fi', 'Climatisation', 'TV 4K', 'Minibar', 'Jacuzzi', 'Room Service 24h', 'Butler', 'Terrasse'],
      available: true
    }
  ];

  // TODO: remplacer par this.http.get<Room[]>(`${environment.apiUrl}/rooms`)
  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

  // TODO: remplacer par this.http.get<Room>(`${environment.apiUrl}/rooms/${id}`)
  getRoomById(id: string): Observable<Room | undefined> {
    return of(this.rooms.find(r => r.id === id));
  }
}
