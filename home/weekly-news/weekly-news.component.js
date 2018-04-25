System.register(["@angular/core", "./weekly-news.service", "../../navbar/navbar.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, weekly_news_service_1, navbar_service_1, WeeklyNewsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weekly_news_service_1_1) {
                weekly_news_service_1 = weekly_news_service_1_1;
            },
            function (navbar_service_1_1) {
                navbar_service_1 = navbar_service_1_1;
            }
        ],
        execute: function () {
            WeeklyNewsComponent = class WeeklyNewsComponent {
                constructor(WeeklyNewsService, navbarService) {
                    this.WeeklyNewsService = WeeklyNewsService;
                    this.navbarService = navbarService;
                    this.section = 1;
                    this.sectionTitle = "Home";
                    this.subsection = "Weekly News";
                    this.sideBarLinks = [];
                    this.bodySize = 0;
                }
                ;
                ngOnInit() {
                    this.bodySize = document.getElementsByTagName('body')[0].clientWidth;
                    this.navbarService.getLinkData()
                        .subscribe(navData => {
                        this.sideBarLinks = navData['navLinks'][this.section]['menuItems'];
                        for (let i = 0; i < this.sideBarLinks.length; i++) {
                            this.sideBarLinks[i]['link'] = "../../" + this.sideBarLinks[i]['link'];
                        }
                        ;
                    });
                }
                ;
                buttonClick(weeklyNewsNumber) {
                    window.open("./home/weekly-news/documents/weekly-news-" + weeklyNewsNumber + ".pdf");
                }
            };
            WeeklyNewsComponent = __decorate([
                core_1.Component({
                    selector: 'weekly-news',
                    templateUrl: "home/weekly-news/weekly-news.component.html",
                    providers: [weekly_news_service_1.WeeklyNewsService, navbar_service_1.NavBarService]
                }),
                __metadata("design:paramtypes", [weekly_news_service_1.WeeklyNewsService,
                    navbar_service_1.NavBarService])
            ], WeeklyNewsComponent);
            exports_1("WeeklyNewsComponent", WeeklyNewsComponent);
        }
    };
});
//# sourceMappingURL=weekly-news.component.js.map