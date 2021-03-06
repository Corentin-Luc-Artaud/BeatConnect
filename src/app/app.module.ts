import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TranslateComponent } from './translate/translate.component';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { GmapComponent } from './gmap/gmap.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    TranslateComponent,
    GmapComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatSelectModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    LeafletModule.forRoot(),
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVOMgjfTsoYMcrmlYwqv7jnGboQDskpy8'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
