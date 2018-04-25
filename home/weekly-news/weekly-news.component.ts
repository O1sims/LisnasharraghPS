import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { WeeklyNewsService } from './weekly-news.service';
import { NavBarService } from '../../navbar/navbar.service';


@Component({
  selector: 'weekly-news',
  templateUrl: "home/weekly-news/weekly-news.component.html",
  providers: [WeeklyNewsService, NavBarService]
})


export class WeeklyNewsComponent implements OnInit  {
  section = 1;
  sectionTitle = "Home";
  subsection = "Weekly News";
  sideBarLinks = [];

  bodySize = 0;

  constructor(private WeeklyNewsService: WeeklyNewsService,
  private navbarService: NavBarService) {
  };

  ngOnInit() {
    this.bodySize = document.getElementsByTagName('body')[0].clientWidth;
    this.navbarService.getLinkData()
    .subscribe(navData => {
      this.sideBarLinks = navData['navLinks'][this.section]['menuItems'];
      for (let i = 0; i < this.sideBarLinks.length; i++) {
        this.sideBarLinks[i]['link'] = "../../" + this.sideBarLinks[i]['link'];
      };
    });
  };

  buttonClick(weeklyNewsNumber) {
    window.open("./home/weekly-news/documents/weekly-news-" + weeklyNewsNumber + ".pdf");
  }

}
