import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Select2Component} from './ng2-select2.component';
export {Select2OptionData, Select2TemplateFunction} from './ng2-select2.interface';
export {Select2Component} from './ng2-select2.component';

@NgModule({
    declarations: [Select2Component],
    imports     : [FormsModule, ReactiveFormsModule],
    exports     : [Select2Component]
})
export class Select2Module {
}