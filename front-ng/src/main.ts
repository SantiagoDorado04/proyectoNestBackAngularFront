import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
}
bootstrap();