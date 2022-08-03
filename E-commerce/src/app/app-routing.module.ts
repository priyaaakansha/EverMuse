import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'otp-email',
    loadChildren: () => import('./otp-email/otp-email.module').then( m => m.OtpEmailPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'otp-signup',
    loadChildren: () => import('./otp-signup/otp-signup.module').then( m => m.OtpSignupPageModule)
  },
  {
    path: 'createprofile',
    loadChildren: () => import('./createprofile/createprofile.module').then( m => m.CreateprofilePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./Checkout/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'reset-pwd',
    loadChildren: () => import('./ForgotPwd/reset-pwd/reset-pwd.module').then( m => m.ResetPwdPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./ForgotPwd/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'new-pwd',
    loadChildren: () => import('./ForgotPwd/new-pwd/new-pwd.module').then( m => m.NewPwdPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Checkout/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./Checkout/thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule)
  },
  {
    path: 'product-view',
    loadChildren: () => import('./product-view/product-view.module').then( m => m.ProductViewPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./track/track.module').then( m => m.TrackPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'tandc',
    loadChildren: () => import('./tandc/tandc.module').then( m => m.TandcPageModule)
  },
  {
    path: 'cancellation',
    loadChildren: () => import('./cancellation/cancellation.module').then( m => m.CancellationPageModule)
  },
  {
    path: 'return',
    loadChildren: () => import('./return/return.module').then( m => m.ReturnPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'subproducts',
    loadChildren: () => import('./subproducts/subproducts.module').then( m => m.SubproductsPageModule)
  },
  {
    path: 'deals',
    loadChildren: () => import('./deals/deals.module').then( m => m.DealsPageModule)
  },
  {
    path: 'logincopy',
    loadChildren: () => import('./logincopy/logincopy.module').then( m => m.LogincopyPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./Checkout/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'saved-addresses',
    loadChildren: () => import('./saved-addresses/saved-addresses.module').then( m => m.SavedAddressesPageModule)
  },
  {
    path: 'order-summary',
    loadChildren: () => import('./Checkout/order-summary/order-summary.module').then( m => m.OrderSummaryPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./orders/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'exchange-reason',
    loadChildren: () => import('./orders/exchange-reason/exchange-reason.module').then( m => m.ExchangeReasonPageModule)
  },
  {
    path: 'exchange-address',
    loadChildren: () => import('./orders/exchange-address/exchange-address.module').then( m => m.ExchangeAddressPageModule)
  },
  {
    path: 'return-address',
    loadChildren: () => import('./orders/return-address/return-address.module').then( m => m.ReturnAddressPageModule)
  },
  {
    path: 'return-reason',
    loadChildren: () => import('./orders/return-reason/return-reason.module').then( m => m.ReturnReasonPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
