export interface ServiceOrder {

  serviceOrderId: number;

  serviceAccountId: number;

  premiseId: number;

  orderType: string;

  scheduledDate: Date |string;

  completionDate?: Date;

  status: string;

}
 