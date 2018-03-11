import {VendingMachine} from "../models/VendingMachine";
import {Drink} from "../models/Drink";

const VM = new VendingMachine<Drink>(100)
VM.initialize()