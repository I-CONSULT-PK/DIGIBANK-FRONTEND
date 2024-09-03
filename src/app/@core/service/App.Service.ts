import { Inject, Injectable } from '@angular/core';
import { BaseService } from './Base.Service';
import { AppConstants} from '../../@constant/app.constant'
@Injectable({
    providedIn: 'root',
})
export class AppService<T extends any> extends BaseService<T> {
    constructor(@Inject(String) private appController: string) {
        super(appController, AppConstants.urls.SITE);
    }
}

