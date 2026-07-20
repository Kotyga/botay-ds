import { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/yandexMetrika.inline"

const YandexMetrika: QuartzComponent = () => <></>

YandexMetrika.afterDOMLoaded = script

export default (() => YandexMetrika) satisfies QuartzComponentConstructor