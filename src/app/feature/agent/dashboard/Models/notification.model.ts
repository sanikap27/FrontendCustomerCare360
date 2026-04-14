export interface Notification {
 notificationId: number;
 userId: number;
 message: string;
 category: string;
 status?: string;
 createdDate?: Date;
}