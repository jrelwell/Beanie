import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

var beanies = new Array();
for(var i=0;i<localStorage.length;i++){
    beanies[i] = localStorage.getItem(i.toString());
}

@Component({
    selector: 'table-data',
    template: `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="#item of Beanies; #num = index">
                            <td>{{ num+1 }}</td>
                            <td>{{ item }}</td>
                        </tr>
                    </tbody>
                </table>
              `
})

class TableData {
    public Beanies = beanies;
}

@Component ({
    selector: 'beanie-form',
    template: `
                    <div class="row">
                        <div class="col-md-push-3 col-md-6">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="beanieName" placeholder="Beanie Name" required #bName>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" id="beanieType" placeholder="What kind of animal?" required #bType>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-6">
                                        <input (click)="submitBeanie(bName.value, bType.value)" onclick="window.location.reload()" type="button" class="btn btn-default" value="Submit Beanie" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
              `
})

class BeanieForm    {
   submitBeanie(bName: string, bType: string)  {
       var combined = `${bName} the ${bType}`;
       var num = localStorage.length.toString();
       console.log(num + " " + combined);
       localStorage.setItem(num, combined);
   } 
}
bootstrap(TableData);
bootstrap(BeanieForm);
