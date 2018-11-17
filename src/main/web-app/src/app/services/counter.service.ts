import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
        
    private counterSource = new BehaviorSubject(0);
    currentCount = this.counterSource.asObservable();

    constructor() { }
    
    changeCounter(count:  number) {        
        this.counterSource.next(count);    
    }
}
