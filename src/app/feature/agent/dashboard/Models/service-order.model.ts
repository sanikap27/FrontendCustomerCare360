export interface ServiceOrder {

  serviceOrderId: number;

  serviceAccountId: number;

  premiseId: number;

  orderType: string;

  scheduledDate?: string;

  completionDate?: string;

  status: string;

}
 