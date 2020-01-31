import NewDeliveryPartDefinition from "./NewDeliveryPartDefinition";
import { NewDeliveryFreightDetails } from "./NewDeliveryFreightDetails";
export default class NewDeliveryState {
  pickup: NewDeliveryPartDefinition = new NewDeliveryPartDefinition();
  delivery: NewDeliveryPartDefinition = new NewDeliveryPartDefinition();
  details = new NewDeliveryFreightDetails();
}
