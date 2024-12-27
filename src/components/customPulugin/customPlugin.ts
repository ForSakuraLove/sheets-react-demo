import { Plugin, ICommandService, UniverInstanceType, Injector, setDependencies } from '@univerjs/core'
import { CustomController } from './customController'

export class CustomPlugin extends Plugin {
    static override type = UniverInstanceType.UNIVER_UNKNOWN
    static override pluginName = 'MY_PLUGIN_NAME'
    protected _injector: Injector;
    protected _commandService: ICommandService;
    constructor(_injector: any, _commandService: any) {
        super()
        this._injector = _injector
        this._commandService = _commandService
    }
    override onStarting() {
        [[CustomController]].forEach(d => this._injector.add(d))
    }
}
setDependencies(CustomPlugin, [Injector, ICommandService])