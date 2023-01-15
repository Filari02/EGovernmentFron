import {Component, OnInit} from '@angular/core';
import {UserView} from "./model/user-view";
import {ElementService} from "./service/element-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "e-government"
  result: boolean = false;
  searched: boolean = false;

  model: UserView = {
    birthdayYear: 0,
    convicted: false,
    parentLithuanian: false,
    yearsLivedInLithuania: 0,
    requestedNationality: false,
    passedLanguageExam: false,
    questionCode: ""
  }

  constructor(private elementService: ElementService) { }

  onSubmit() {
    this.elementService.findSolution(this.model).subscribe((result:any) => {
      this.result = result;
      this.searched = true;
    })
  }
}
