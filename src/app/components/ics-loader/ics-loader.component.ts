import { Component, Input, OnInit } from "@angular/core";
import { LoaderService } from "app/@core/helper/loader.service";
import { Subscription } from "rxjs";
import { ToolbarEvent } from "../../@core/events/toolbar.event"
import { AppConstants } from "app/@constant/app.constant";
@Component({
    selector: 'ics-loader',
    templateUrl: 'ics-loader.component.html',
    styleUrls: ['ics-loader.component.scss']
})
export class IcsLoaderComponent implements OnInit {
    loading: boolean = false;
    forceloading: boolean = false;
    toolbarEvent: ToolbarEvent;
    toolbarSubscription: Subscription;
    constructor(private loaderService: LoaderService) {
        loaderService.isLoading.subscribe((v) => {
            if (this.loaderService.forceloader.value === false) {
                if (this.forceloading === false) {
                    this.loading = v;
                }
            }
            else {
                this.startLoading()
            }

        });
        {
            this.toolbarEvent = AppConstants.injector.get(ToolbarEvent);

            this.toolbarSubscription = this.toolbarEvent
                .click()
                .subscribe(async arg => {
                    switch (arg.key) {
                        case "start":
                            await this.startLoading();
                            break;
                        case "stop":
                            await this.stopLoading();
                            break;
                        case "forcestart":
                            await this.forcestartLoading();
                            break;
                        case "forcestop":
                            await this.forcestopLoading();
                            break;
                    }
                });
        }
    }
    ngOnInit() { }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.loading = false;
    }
    forcestartLoading() {
        this.forceloading = true;
        this.startLoading()
    }
    forcestopLoading() {
        this.forceloading = false;
        this.stopLoading()
    }

}
