import { DeliveryInterface } from 'interfaces/delivery';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  end_customer_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  delivery?: DeliveryInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    delivery?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  end_customer_id?: string;
  organization_id?: string;
}
