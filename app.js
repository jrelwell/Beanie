System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var beanies, i, TableData, BeanieForm;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            beanies = new Array();
            for (i = 0; i < localStorage.length; i++) {
                beanies[i] = localStorage.getItem(i.toString());
            }
            TableData = (function () {
                function TableData() {
                    this.Beanies = beanies;
                }
                TableData = __decorate([
                    core_1.Component({
                        selector: 'table-data',
                        template: "\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"#item of Beanies; #num = index\">\n                            <td>{{ num+1 }}</td>\n                            <td>{{ item }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableData);
                return TableData;
            })();
            BeanieForm = (function () {
                function BeanieForm() {
                }
                BeanieForm.prototype.submitBeanie = function (bName, bType) {
                    var combined = bName + " the " + bType;
                    var num = localStorage.length.toString();
                    console.log(num + " " + combined);
                    localStorage.setItem(num, combined);
                };
                BeanieForm = __decorate([
                    core_1.Component({
                        selector: 'beanie-form',
                        template: "\n                    <div class=\"row\">\n                        <div class=\"col-md-push-3 col-md-6\">\n                            <form class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-12\">\n                                        <input type=\"text\" class=\"form-control\" id=\"beanieName\" placeholder=\"Beanie Name\" required #bName>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-12\">\n                                        <input type=\"text\" class=\"form-control\" id=\"beanieType\" placeholder=\"What kind of animal?\" required #bType>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-6\">\n                                        <input (click)=\"submitBeanie(bName.value, bType.value)\" onclick=\"window.location.reload()\" type=\"button\" class=\"btn btn-default\" value=\"Submit Beanie\" />\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BeanieForm);
                return BeanieForm;
            })();
            browser_1.bootstrap(TableData);
            browser_1.bootstrap(BeanieForm);
        }
    }
});
//# sourceMappingURL=app.js.map