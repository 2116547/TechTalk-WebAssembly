import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LaddaModule } from "angular2-ladda";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { HumanizeTimePipe } from "./humanize-time-pipe";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FibonacciComponent } from "./fibonacci/fibonacci.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FibonacciComponent,
    HumanizeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LaddaModule.forRoot({
      style: "zoom-in",
      spinnerSize: 30
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
