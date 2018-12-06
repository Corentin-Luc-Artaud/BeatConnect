import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  translate;
  selected = 'fr';
  ngOnInit() {
  }
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fr');
    this.translate = translate;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
