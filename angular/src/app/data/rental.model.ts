import { RentalUnit } from './rental-unit.model';

/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * availability: boolean;
 * price: number;
 * discountedPrice?: number;
 * rentalUnit: RentalUnit;
 * ```
 */
export interface Rental {
  id: string;
  name: string;
  availability: boolean;
  price: number;
  discountedPrice?: number;
  rentalUnit: RentalUnit;
}
