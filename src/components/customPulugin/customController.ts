import { Disposable } from '@univerjs/core'
import { ISheetClipboardService, ISheetClipboardHook } from '@univerjs/sheets-ui'

export class CustomController extends Disposable {
    constructor(
        @ISheetClipboardService private readonly _sheetClipboardService: ISheetClipboardService
    ) {
        super()
        const yourHook: ISheetClipboardHook = {
            id: 'your-hook-id',
            onBeforeCopy: () => {
                alert('Hello!') // In this method, your code will be executed before copying.
            }
            // all hook methods are optional, you can learn it from interface definition.
        }
        // register your hook
        this.disposeWithMe(this._sheetClipboardService.addClipboardHook(yourHook))
    }
}