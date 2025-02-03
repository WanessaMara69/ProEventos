import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatSnackBar} from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// Configuração dos providers
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideToastr(),
    MatSnackBar,
    
    importProvidersFrom(
      CommonModule,
      CollapseModule.forRoot(),
      TooltipModule.forRoot(),
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
    ), provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
