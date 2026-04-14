export interface Complaint {

  complaintId: number;

  customerId: number;

  category: string;

  description: string;

  loggedDate?: Date;

  status?: string;

}
 