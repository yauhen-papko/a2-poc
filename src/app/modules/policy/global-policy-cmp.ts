import {Component} from 'angular2/core';

@Component({
  template: `
    <div class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="spywareAction"  class="col-sm-4 control-label">Spyware</label>
                <div class="col-sm-8">
                    <select class="form-control" id="spywareAction">
                        <option>Deny</option>
                        <option>Allow</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="botAction"  class="col-sm-4 control-label">Bot</label>
                <div class="col-sm-8">
                    <select class="form-control" id="botAction">
                        <option>Deny</option>
                        <option>Allow</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="malwareAction"  class="col-sm-4 control-label">Malware</label>
                <div class="col-sm-8">
                    <select class="form-control" id="malwareAction">
                        <option>Deny</option>
                        <option>Allow</option>
                    </select>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary pull-right">Save</button>
        </form>
    </div>
  `
})
export class GlobalPolicy {
}
