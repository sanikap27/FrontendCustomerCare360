export interface Adjustment {

  adjustmentId: number;

  billId: number;

  reason: string;

  amountDelta: number;

  approvedBy?: string;

  status?: string;

}
 