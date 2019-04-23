import { Component } from "@angular/core";
import { AppService } from "./services/service";
import { UserDetails } from "./beans/userdetails";
import { CallResourcesComponent } from './call-resources/call-resources.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "jwt-ui";
  userDetails: UserDetails;

  constructor(private appService: AppService) {}  
}
