import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { HomelandingComponent } from './homelanding/homelanding.component';
import { AppRouting } from './app-routing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [AppComponent, HomelandingComponent],
  imports: [BrowserModule, AppRouting],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
