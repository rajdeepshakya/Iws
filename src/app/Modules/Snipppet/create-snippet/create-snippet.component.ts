import { Component, OnInit } from '@angular/core';
import { API_ROUTES } from 'src/app/constants/api-route.constant';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-create-snippet',
  templateUrl: './create-snippet.component.html',
  styleUrls: ['./create-snippet.component.scss']
})
export class CreateSnippetComponent implements OnInit {
  companiesList: any = [];
  companyDetail: any;
  constructor(private service: ApiServiceService,) { }

  ngOnInit(): void {
    this.getsnippetListByUserId()
    //this.companiesList();
  }

  getsnippetListByUserId() {
    debugger

    this.service.get({}, `${API_ROUTES.Account.logs + 3}`).pipe().subscribe((res) => {
      if (res) {
        debugger
        this.companiesList=res;
        // this.companiesList.forEach((element: any) => {
        //   debugger

        //   var liData='{ "ul": ["<li>FIRST</li>", "<li>SECOND</li>", "<li>THIRD</li>", "<li>FORTH</li>"]}';
        //   this.companyDetail = liData;
        //   var finalData = JSON.parse(this.companyDetail);
        //   finalData.forEach((item:any) => {
        //     var resdata = {
        //       name: element.name,
        //       liData: item
        //     }
        //  });
         
        // });

      } else {

      }
    }
    )
  }
}
