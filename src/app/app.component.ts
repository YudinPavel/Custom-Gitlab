import {Component, OnInit} from '@angular/core';
import {ApiService} from './assets/services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'custom-gitlab';

  /** @internal */
  public hello$: Observable<any>;

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.hello$ = this.apiService.helloWorld().pipe(map((item) => {
      console.log(item);

      return item;
    }));
  }

}
