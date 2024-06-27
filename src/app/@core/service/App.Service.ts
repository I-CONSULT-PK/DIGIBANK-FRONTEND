import { Inject, Injectable } from '@angular/core';
import { BaseService } from './Base.Service';

@Injectable({
    providedIn: 'root',
})
export class AppService<T extends any> extends BaseService<T> {
    constructor(@Inject(String) private appController: string) {

        super(appController, 'http://192.168.0.196:9094');
    }
}
