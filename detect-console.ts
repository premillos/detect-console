import pkg from './package.json'

class DetectConsole {
  private o = !1
  private t = !1
  private r = 200
  private s = null
  private e: HTMLElement
  private _onClose: Function
  private _onOpen: Function

  public version = pkg.version

  constructor(props: IDetectConsoleProps) {
    this.r = props.rate
    this._onClose = props.onClose || (() => {})
    this._onOpen = props.onOpen || (() => {})
    this.init()
  }

  private init() {
    const _this = this
    this.e = document.createElement('b')
    Object.defineProperty(this.e, 'id', {
      get() {
        _this.o || (_this.onOpen(), (_this.o = !0)), (_this.t = !0)
      },
    })

    _this.s = setInterval(() => {
      ;(_this.o = !1),
        console.info(_this.e),
        console.clear(),
        !_this.o && !_this.t && _this.onClose(),
        (_this.t = !1)
    }, _this.r)
  }

  public onOpen(): void {
    this._onOpen()
  }

  public onClose(): void {
    this._onClose()
  }

  public destroy(): void {
    this.s && clearInterval(this.s)
  }
}

export default DetectConsole

export interface IDetectConsoleProps {
  rate?: number
  onOpen?: () => void
  onClose?: () => void
}
