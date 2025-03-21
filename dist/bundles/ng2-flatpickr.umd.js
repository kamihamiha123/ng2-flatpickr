(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-flatpickr', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ng2-flatpickr'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, function (exports, core, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    if (typeof window !== 'undefined') {
        require('flatpickr');
    }
    var Ng2FlatpickrComponent = /** @class */ (function () {
        function Ng2FlatpickrComponent() {
            var _this = this;
            this._tabindex = 0;
            this.defaultFlatpickrOptions = {
                wrap: true,
                clickOpens: true,
                onChange: function (selectedDates) { _this.writeValue(selectedDates); }
            };
            this.placeholder = "";
            this.addClass = "";
            this.hideButton = false;
            this.propagateChange = function (_) { };
        }
        Ng2FlatpickrComponent_1 = Ng2FlatpickrComponent;
        Object.defineProperty(Ng2FlatpickrComponent.prototype, "tabindex", {
            get: function () { return this._tabindex; },
            set: function (ti) { this._tabindex = Number(ti); },
            enumerable: true,
            configurable: true
        });
        ///////////////////////////////////
        Ng2FlatpickrComponent.prototype.writeValue = function (value) {
            this.propagateChange(value);
        };
        Ng2FlatpickrComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        Ng2FlatpickrComponent.prototype.registerOnTouched = function () { };
        ///////////////////////////////////
        Ng2FlatpickrComponent.prototype.setDateFromInput = function (date) {
            this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
        };
        Ng2FlatpickrComponent.prototype.setAltInputPlaceholder = function (placeholder) {
            this.flatpickrElement.nativeElement._flatpickr.altInput.setAttribute('placeholder', placeholder);
        };
        Ng2FlatpickrComponent.prototype.ngAfterViewInit = function () {
            if (this.config) {
                Object.assign(this.defaultFlatpickrOptions, this.config);
            }
            this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
            if (this.setDate) {
                this.setDateFromInput(this.setDate);
            }
        };
        Ng2FlatpickrComponent.prototype.ngOnChanges = function (changes) {
            if (this.flatpickrElement.nativeElement
                && this.flatpickrElement.nativeElement._flatpickr) {
                if (changes.hasOwnProperty('setDate')
                    && changes['setDate'].currentValue) {
                    this.setDateFromInput(changes['setDate'].currentValue);
                }
                if (this.config.altInput
                    && changes.hasOwnProperty('placeholder')
                    && changes['placeholder'].currentValue) {
                    this.setAltInputPlaceholder(changes['placeholder'].currentValue);
                }
            }
        };
        var Ng2FlatpickrComponent_1;
        __decorate([
            core.ViewChild('flatpickr', {
                static: true
            }),
            __metadata("design:type", Object)
        ], Ng2FlatpickrComponent.prototype, "flatpickrElement", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], Ng2FlatpickrComponent.prototype, "config", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], Ng2FlatpickrComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], Ng2FlatpickrComponent.prototype, "addClass", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], Ng2FlatpickrComponent.prototype, "setDate", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], Ng2FlatpickrComponent.prototype, "tabindex", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], Ng2FlatpickrComponent.prototype, "hideButton", void 0);
        Ng2FlatpickrComponent = Ng2FlatpickrComponent_1 = __decorate([
            core.Component({
                selector: 'ng2-flatpickr',
                template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input *ngIf=\"!hideButton\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" data-input>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return Ng2FlatpickrComponent_1; }),
                        multi: true
                    }
                ]
            })
        ], Ng2FlatpickrComponent);
        return Ng2FlatpickrComponent;
    }());

    var Ng2FlatpickrDirective = /** @class */ (function () {
        function Ng2FlatpickrDirective(parent, ngControl, element, renderer) {
            this.parent = parent;
            this.ngControl = ngControl;
            this.element = element;
            this.renderer = renderer;
            /**
             * onChange gets triggered when the user selects a date, or changes the time on a selected date.
             *
             * Default:  null
             */
            this.flatpickrOnChange = new core.EventEmitter();
            /**
             * onClose gets triggered when the calendar is closed.
             *
             * Default:  null
             */
            this.flatpickrOnClose = new core.EventEmitter();
            /**
             * onOpen gets triggered when the calendar is opened.
             *
             * Default:  null
             */
            this.flatpickrOnOpen = new core.EventEmitter();
            /**
             * onReady gets triggered once the calendar is in a ready state.
             *
             * Default:  null
             */
            this.flatpickrOnReady = new core.EventEmitter();
        }
        /** Allow double-clicking on the control to open/close it. */
        Ng2FlatpickrDirective.prototype.onClick = function () {
            this.flatpickr.toggle();
        };
        Object.defineProperty(Ng2FlatpickrDirective.prototype, "control", {
            get: function () {
                return this.parent ? this.parent.formDirective.getControl(this.ngControl) : null;
            },
            enumerable: true,
            configurable: true
        });
        Ng2FlatpickrDirective.prototype.ngAfterViewInit = function () {
            /** We cannot initialize the flatpickr instance in ngOnInit(); it will
                randomize the date when the form control initializes. */
            var nativeElement = this.element.nativeElement;
            if (typeof nativeElement === 'undefined' || nativeElement === null) {
                throw 'Error: invalid input element specified';
            }
            if (this.flatpickrOptions.wrap) {
                this.renderer.setElementAttribute(this.element.nativeElement, 'data-input', '');
                nativeElement = nativeElement.parentNode;
            }
            this.flatpickr = nativeElement.flatpickr(this.flatpickrOptions);
        };
        Ng2FlatpickrDirective.prototype.ngOnChanges = function (changes) {
            if (this.flatpickr
                && this.flatpickrAltInput
                && changes.hasOwnProperty('placeholder')
                && changes['placeholder'].currentValue) {
                this.flatpickr.altInput.setAttribute('placeholder', changes['placeholder'].currentValue);
            }
        };
        Ng2FlatpickrDirective.prototype.ngOnDestroy = function () {
            if (this.flatpickr) {
                this.flatpickr.destroy();
            }
            if (this.formControlListener) {
                this.formControlListener.unsubscribe();
                this.formControlListener = undefined;
            }
            this.flatpickrOnChange = undefined;
            this.flatpickrOnClose = undefined;
            this.flatpickrOnOpen = undefined;
            this.flatpickrOnReady = undefined;
        };
        Ng2FlatpickrDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.globalOnChange = this.flatpickrOptions.onChange;
            this.globalOnClose = this.flatpickrOptions.onClose;
            this.globalOnOpen = this.flatpickrOptions.onOpen;
            this.globalOnReady = this.flatpickrOptions.onReady;
            this.flatpickrOptions = {
                altFormat: this.getOption('altFormat'),
                altInput: this.getOption('altInput'),
                altInputClass: this.getOption('altInputClass'),
                allowInput: this.getOption('allowInput'),
                appendTo: this.getOption('appendTo'),
                clickOpens: this.getOption('clickOpens', true),
                dateFormat: this.getOption('dateFormat'),
                defaultDate: this.getOption('defaultDate'),
                disable: this.getOption('disable'),
                disableMobile: this.getOption('disableMobile'),
                enable: this.getOption('enable'),
                enableTime: this.getOption('enableTime'),
                enableSeconds: this.getOption('enableSeconds'),
                hourIncrement: this.getOption('hourIncrement'),
                inline: this.getOption('inline'),
                locale: this.getOption('locale'),
                maxDate: this.getOption('maxDate'),
                minDate: this.getOption('minDate'),
                minuteIncrement: this.getOption('minuteIncrement'),
                mode: this.getOption('mode'),
                nextArrow: this.getOption('nextArrow'),
                noCalendar: this.getOption('noCalendar'),
                onChange: this.eventOnChange,
                onClose: this.eventOnClose,
                onOpen: this.eventOnOpen,
                onReady: this.eventOnReady,
                parseDate: this.getOption('parseDate'),
                prevArrow: this.getOption('prevArrow'),
                shorthandCurrentMonth: this.getOption('shorthandCurrentMonth'),
                static: this.getOption('static'),
                time_24hr: this.getOption('time_24hr'),
                utc: this.getOption('utc'),
                weekNumbers: this.getOption('weekNumbers'),
                wrap: this.getOption('wrap', true),
            };
            // Remove unset properties
            Object.keys(this.flatpickrOptions).forEach(function (key) {
                (_this.flatpickrOptions[key] === undefined) &&
                    delete _this.flatpickrOptions[key];
            });
            if (this.control) {
                this.formControlListener = this.control.valueChanges
                    .subscribe(function (value) {
                    if (!(value instanceof Date)) {
                        // Quietly update the value of the form control to be a
                        // Date object. This avoids any external subscribers
                        // from being notified a second time (once for the user
                        // initiated event, and once for our conversion to
                        // Date()).
                        _this.control.setValue(new Date('' + value), {
                            onlySelf: true,
                            emitEvent: false,
                            emitModelToViewChange: false,
                            emitViewToModelChange: false
                        });
                    }
                });
            }
        };
        /**
         * Fire off the event emitter for the directive element, and also for the
         * global onChange callback, if defined.
         */
        Ng2FlatpickrDirective.prototype.eventOnChange = function (selectedDates, dateStr, instance) {
            var event = {
                selectedDates: selectedDates,
                dateStr: dateStr,
                instance: instance
            };
            if (this.flatpickrOnChange) {
                this.flatpickrOnChange.emit(event);
            }
            if (this.globalOnChange) {
                this.globalOnChange(event);
            }
        };
        /**
         * Fire off the event emitter for the directive element, and also for the
         * global onClose callback, if defined.
         */
        Ng2FlatpickrDirective.prototype.eventOnClose = function (selectedDates, dateStr, instance) {
            var event = {
                selectedDates: selectedDates,
                dateStr: dateStr,
                instance: instance
            };
            if (this.flatpickrOnClose) {
                this.flatpickrOnClose.emit(event);
            }
            if (this.globalOnClose) {
                this.globalOnClose(event);
            }
        };
        /**
         * Fire off the event emitter for the directive element, and also for the
         * global onOpen callback, if defined.
         */
        Ng2FlatpickrDirective.prototype.eventOnOpen = function (selectedDates, dateStr, instance) {
            var event = {
                selectedDates: selectedDates,
                dateStr: dateStr,
                instance: instance
            };
            if (this.flatpickrOnOpen) {
                this.flatpickrOnOpen.emit(event);
            }
            if (this.globalOnOpen) {
                this.globalOnOpen(event);
            }
        };
        /**
         * Fire off the event emitter for the directive element, and also for the
         * global onReady callback, if defined.
         */
        Ng2FlatpickrDirective.prototype.eventOnReady = function (selectedDates, dateStr, instance) {
            var event = {
                selectedDates: selectedDates,
                dateStr: dateStr,
                instance: instance
            };
            if (this.flatpickrOnReady) {
                this.flatpickrOnReady.emit(event);
            }
            if (this.globalOnReady) {
                this.globalOnReady(event);
            }
        };
        /**
         * Return the configuration value for option {option}, or {defaultValue} if it
         * doesn't exist.
         */
        Ng2FlatpickrDirective.prototype.getOption = function (option, defaultValue) {
            var localName = 'flatpickr' + option.substring(0, 1).toUpperCase()
                + option.substring(1);
            if (typeof this[localName] !== 'undefined') {
                return this[localName];
            }
            else if (typeof this.flatpickrOptions[option] !== 'undefined') {
                return this.flatpickrOptions[option];
            }
            else {
                return defaultValue;
            }
        };
        __decorate([
            core.Input('flatpickr'),
            __metadata("design:type", Object)
        ], Ng2FlatpickrDirective.prototype, "flatpickrOptions", void 0);
        __decorate([
            core.Input('placeholder'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "placeholder", void 0);
        __decorate([
            core.Input('altFormat'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "flatpickrAltFormat", void 0);
        __decorate([
            core.Input('altInput'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrAltInput", void 0);
        __decorate([
            core.Input('altInputClass'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "flatpickrAltInputClass", void 0);
        __decorate([
            core.Input('allowInput'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrAllowInput", void 0);
        __decorate([
            core.Input('appendTo'),
            __metadata("design:type", HTMLElement)
        ], Ng2FlatpickrDirective.prototype, "flatpickrAppendTo", void 0);
        __decorate([
            core.Input('clickOpens'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrClickOpens", void 0);
        __decorate([
            core.Input('dateFormat'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "flatpickrDateFormat", void 0);
        __decorate([
            core.Input('defaultDate'),
            __metadata("design:type", Object)
        ], Ng2FlatpickrDirective.prototype, "flatpickrDefaultDate", void 0);
        __decorate([
            core.Input('disable'),
            __metadata("design:type", Array)
        ], Ng2FlatpickrDirective.prototype, "flatpickrDisable", void 0);
        __decorate([
            core.Input('disableMobile'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrDisableMobile", void 0);
        __decorate([
            core.Input('enable'),
            __metadata("design:type", Array)
        ], Ng2FlatpickrDirective.prototype, "flatpickrEnable", void 0);
        __decorate([
            core.Input('enableTime'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrEnableTime", void 0);
        __decorate([
            core.Input('enableSeconds'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrEnableSeconds", void 0);
        __decorate([
            core.Input('hourIncrement'),
            __metadata("design:type", Number)
        ], Ng2FlatpickrDirective.prototype, "flatpickrHourIncrement", void 0);
        __decorate([
            core.Input('inline'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrInline", void 0);
        __decorate([
            core.Input('locale'),
            __metadata("design:type", Object)
        ], Ng2FlatpickrDirective.prototype, "flatpickrLocale", void 0);
        __decorate([
            core.Input('maxDate'),
            __metadata("design:type", Object)
        ], Ng2FlatpickrDirective.prototype, "flatpickrMaxDate", void 0);
        __decorate([
            core.Input('minDate'),
            __metadata("design:type", Object)
        ], Ng2FlatpickrDirective.prototype, "flatpickrMinDate", void 0);
        __decorate([
            core.Input('minuteIncrement'),
            __metadata("design:type", Number)
        ], Ng2FlatpickrDirective.prototype, "flatpickrMinuteIncrement", void 0);
        __decorate([
            core.Input('mode'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "flatpickrMode", void 0);
        __decorate([
            core.Input('nextArrow'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "flatpickrNextArrow", void 0);
        __decorate([
            core.Input('noCalendar'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrNoCalendar", void 0);
        __decorate([
            core.Input('parseDate'),
            __metadata("design:type", Function)
        ], Ng2FlatpickrDirective.prototype, "flatpickrParseDate", void 0);
        __decorate([
            core.Input('prevArrow'),
            __metadata("design:type", String)
        ], Ng2FlatpickrDirective.prototype, "flatpickrPrevArrow", void 0);
        __decorate([
            core.Input('shorthandCurrentMonth'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrShorthandCurrentMonth", void 0);
        __decorate([
            core.Input('static'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrStatic", void 0);
        __decorate([
            core.Input('time_24hr'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrTime_24hr", void 0);
        __decorate([
            core.Input('utc'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrUtc", void 0);
        __decorate([
            core.Input('weekNumbers'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrWeekNumbers", void 0);
        __decorate([
            core.Input('wrap'),
            __metadata("design:type", Boolean)
        ], Ng2FlatpickrDirective.prototype, "flatpickrWrap", void 0);
        __decorate([
            core.Output('onChange'),
            __metadata("design:type", core.EventEmitter)
        ], Ng2FlatpickrDirective.prototype, "flatpickrOnChange", void 0);
        __decorate([
            core.Output('onClose'),
            __metadata("design:type", core.EventEmitter)
        ], Ng2FlatpickrDirective.prototype, "flatpickrOnClose", void 0);
        __decorate([
            core.Output('onOpen'),
            __metadata("design:type", core.EventEmitter)
        ], Ng2FlatpickrDirective.prototype, "flatpickrOnOpen", void 0);
        __decorate([
            core.Output('onReady'),
            __metadata("design:type", core.EventEmitter)
        ], Ng2FlatpickrDirective.prototype, "flatpickrOnReady", void 0);
        __decorate([
            core.HostListener('dblclick'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Ng2FlatpickrDirective.prototype, "onClick", null);
        Ng2FlatpickrDirective = __decorate([
            core.Directive({ selector: '[flatpickr]', exportAs: 'ng2-flatpickr' }),
            __metadata("design:paramtypes", [forms.ControlContainer,
                forms.NgControl,
                core.ElementRef,
                core.Renderer])
        ], Ng2FlatpickrDirective);
        return Ng2FlatpickrDirective;
    }());

    var Ng2FlatpickrModule = /** @class */ (function () {
        function Ng2FlatpickrModule() {
        }
        Ng2FlatpickrModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [
                    Ng2FlatpickrComponent,
                    Ng2FlatpickrDirective
                ],
                exports: [
                    Ng2FlatpickrComponent,
                    Ng2FlatpickrDirective
                ]
            })
        ], Ng2FlatpickrModule);
        return Ng2FlatpickrModule;
    }());

    exports.Ng2FlatpickrComponent = Ng2FlatpickrComponent;
    exports.Ng2FlatpickrDirective = Ng2FlatpickrDirective;
    exports.Ng2FlatpickrModule = Ng2FlatpickrModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng2-flatpickr.umd.js.map
