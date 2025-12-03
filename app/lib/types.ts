import { IconType } from 'react-icons';
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}
export interface ScheduleItem {
  time: string;
  label: string;
}
export interface PosyanduSchedule {
  dates: number[];
  description: string;
}
export interface Emergency {
  phone: string;
  available: string;
}
export interface Coordinates {
  lat: number;
  lng: number;
}
export interface Location {
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postalCode: string;
  coordinates: Coordinates;
  mapsEmbed: string;
  mapsLink: string;
}
export interface ContactMethod {
  number?: string;
  address?: string;
  link: string;
  linkWithText?: string;
}
export interface Testimonial {
  id: number;
  name: string;
  initial: string;
  role: string;
  text: string;
  rating: number;
}
export interface StatItem {
  label: string;
  value: string;
}
