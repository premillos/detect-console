import pkg from "./package.json";

class FuckConsole {
  private o = !1;
  private t = !1;
  private r = 200;
  private s = null;
  private e: HTMLElement;
  private _onClose: Function;
  private _onOpen: Function;

  public version = pkg.version;

  constructor(props: IFuckConsoleProps) {
    this.r = props.rate;
    this._onClose = props.onClose || (() => {});
    this._onOpen = props.onOpen || (() => {});
    this.init();
  }

  private init() {
    this.e = document.createElement("b");
    Object.defineProperty(this.e, "id", {
      get() {
        this.o || (this.onOpen(), (this.o = !0)), (this.t = !0);
      },
    });

    this.s = setInterval(() => {
      (this.o = !1),
        console.info(this.e),
        console.clear(),
        !this.o && this.t && this.onClose(),
        (this.t = !1);
    }, this.r);
  }

  public onOpen(): void {
    this._onOpen();
  }

  public onClose(): void {
    this._onClose();
  }

  public destroy(): void {
    this.s && clearInterval(this.s);
  }
}

export default FuckConsole;

export interface IFuckConsoleProps {
  rate?: number;
  onOpen?: () => void;
  onClose?: () => void;
}
