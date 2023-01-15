import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserView} from "../model/user-view";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private SERVER =  "http://localhost:8080/rules/";

  constructor(private httpClient: HttpClient) { }

  public findSolution(userView: UserView) {
    let params = {
      birthdayYear: userView.birthdayYear,
      convicted: userView.convicted,
      parentLithuanian: userView.parentLithuanian,
      yearsLivedInLithuania: userView.yearsLivedInLithuania,
      requestedNationality: userView.requestedNationality,
      passedLanguageExam: userView.passedLanguageExam,
      questionCode: userView.questionCode,
    };
    return this.httpClient.post(this.SERVER, JSON.stringify(params), httpOptions);
  }

}
