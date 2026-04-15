import { Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/login/login-component';
import { RegisterComponent } from './feature/auth/register/register-component';
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard';
import { AgentDashboardComponent } from './feature/agent/dashboard/agent-dashboard';
import { BillingDashboardComponent } from './feature/billing/dashboard/billing-dashboard';
import { CustomerDashboardComponent } from './feature/customer/dashboard/customer-dashboard';
import { CustomersComponent } from './admin/customers/customers';
import { ServiceAccountsComponent } from './admin/service-accounts/service-accounts';
import { AdminHomeComponent } from './admin/admin-home/admin-home';
import { ServiceRequestsComponent } from './admin/service-requests/service-requests';
import { CustomerReportsComponent } from './admin/CustomerReport/CustomerReports';
import { BillingCyclesComponent } from './admin/billing-cycles/billing-cycles';
import { CustomerHomeComponent } from './feature/customer/dashboard/customer-home/customer-home';
import { BillsComponent } from './feature/customer/bills/bills';
import { ComplaintsComponent } from './feature/customer/complaints/complaints';
import { RoleGuard } from './core/guards/role-guard';
import { ProfileComponent } from './feature/customer/profile/profile';
import { CustomerRequestComponent } from './feature/customer/customer-request/customer-request';
import { PremisesComponent } from './admin/premise/premise';
import { Admin_BillsComponent } from './admin/Admin_bills/Admin_bill';
import { Admin_ComplaintsComponent } from './admin/Admin_complaints/Admin_complaints';
import { Admin_NotificationsComponent } from './admin/notifications/Admin_notifications';
import { Billing_BillingCycleComponent } from './feature/billing/billing-cycle/billing-cycle';
import { BillingHomeComponent } from './feature/billing/billinghome/billinghome';
import { BillingBillsComponent } from './feature/billing/billing-bills/billing-bills';
import { BillingAdjustmentComponent } from './feature/billing/billing-adjustment/billing-adjustment';
import { BillingNavbarComponent } from './feature/billing/billing-navbar/billing-navbar';
import { AgentHomeComponent } from './feature/agent/dashboard/agent-home/agent-home';
import { AgentCustomerComponent } from './feature/agent/dashboard/agent-customer/agent-customer';
import { AgentServiceRequestComponent } from './feature/agent/dashboard/agent-service-request/agent-service-request';
import { AgentServiceOrderService } from './feature/agent/dashboard/Services/agent-service-order.service';
import { AgentServiceOrderComponent } from './feature/agent/dashboard/service-order/agent-service-order';
import { AgentPremiseComponent } from './feature/agent/dashboard/Agent-Premise/agent-premise';
import { AgentAdjustmentComponent } from './feature/agent/dashboard/agent-adjustment/agent-adjustment';
import { AgentComplaintComponent } from './feature/agent/dashboard/complaint/agent-complaint';
import { AgentNotificationComponent } from './feature/agent/dashboard/notification/agent-notification';

export const routes: Routes = [
  // 🔐 AUTH
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // ✅ ADMIN
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [RoleGuard],
    data: { role: 'Admin' }
  },
  // ✅ AGENT
  // {
  //   path: 'agent-dashboard',
  //   component: AgentDashboardComponent,
  //   canActivate: [RoleGuard],
  //   data: { role: 'Agent' }
  //},
  // ✅ BILLING
  {
    path: 'billing-dashboard',
    component: BillingDashboardComponent,
    canActivate: [RoleGuard],
    data: { role: 'Billing' }
  },
  // ✅ CUSTOMER
  //  {
  //    path: 'customer-dashboard',
  //    component: CustomerDashboardComponent,
  //    canActivate: [RoleGuard],
  //    data: { role: 'Customer' }
  //  },
  // 🔁 DEFAULT
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {

    path: 'customer-dashboard',

    component: CustomerDashboardComponent,

    canActivate: [RoleGuard],

    data: { role: 'Customer' },

    children: [

      { path: '', component: CustomerHomeComponent },  // ✅ default

      { path: 'services', component: CustomerRequestComponent },



      { path: 'bills', component: BillsComponent },

      { path: 'complaints', component: ComplaintsComponent },
      {
        path: 'notifications',
        loadComponent: () => import('./feature/customer/notification/notification')
          .then(m => m.NotificationsComponent)
      },

    ]

  },
  { path: 'customer-dashboard/profile', component: ProfileComponent },
  // {path: 'customer-dashboard/services', component: CustomerRequestComponent},

  {

    path: 'customer-dashboard/notifications',

    loadComponent: () => import('./feature/customer/notification/notification')

      .then(m => m.NotificationsComponent)

  },

  {

    path: 'admin',

    component: AdminDashboardComponent,

    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: AdminHomeComponent},

      { path: 'customers', component: CustomersComponent },

      { path: 'service-accounts', component: ServiceAccountsComponent },

      { path: 'premises', component: PremisesComponent },

      { path: 'service-requests', component: ServiceRequestsComponent },

 

      { path: 'billing-cycles', component: BillingCyclesComponent },

      { path: 'bills', component: Admin_BillsComponent },

      { path: 'CustomerReports', component: CustomerReportsComponent },

      { path: 'complaints', component: Admin_ComplaintsComponent },

      { path: 'notifications', component: Admin_NotificationsComponent }

    ]

  },




  // 🔷 BILLING (SEPARATE DASHBOARD)

  {

    path: 'billing',

    component: BillingDashboardComponent,

    children: [

      { path: '', component: BillingHomeComponent }, // dashboard

      { path: 'billing-cycle', component: Billing_BillingCycleComponent },

      { path: 'bills', component: BillingBillsComponent },

      { path: 'adjustments', component: BillingAdjustmentComponent },
      { path :'BillNavbar' ,component:BillingNavbarComponent},
      {path:'billing-profile', component:ProfileComponent},
      

    ]

  },
  {

  path: 'agent',

  component: AgentDashboardComponent,

  children: [

    { path: '', component: AgentHomeComponent },
    {path:'profile', component:ProfileComponent},
    {path:'customers',component:AgentCustomerComponent},
    {path:'service-request',component:AgentServiceRequestComponent},
    {path:'orders',component:AgentServiceOrderComponent},
    {path:'premises',component:AgentPremiseComponent},
    {path:'adjustments',component:AgentAdjustmentComponent},
    {path :'complaints',component:AgentComplaintComponent},
    {path:'notifications',component:AgentNotificationComponent}

  ]

}
 

];
 





