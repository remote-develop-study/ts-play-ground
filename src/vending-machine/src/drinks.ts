/// <reference path="./typings.d.ts" />
import { Products } from './products';
import * as inventoryData from '../data/inventory.json';

type DrinkCategories = 'SODA' | 'JUICE' | 'COFFEE' | 'TEA' | 'WATER';
type DrinkTemperature = 'HOT' | 'COLD';

interface Drinks extends Products {
  category: DrinkCategories;
  temperature: DrinkTemperature;
}

export { Drinks };
