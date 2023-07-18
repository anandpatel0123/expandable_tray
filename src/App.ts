import { Lightning, Utils } from '@lightningjs/sdk'

interface AppTemplateSpec extends Lightning.Component.TemplateSpec {

}

export class App
  extends Lightning.Component<AppTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{


  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return {
      
      
    }
  }

  static getFonts() {
    return [
      {
        family: 'Regular',
        url: Utils.asset('fonts/Roboto-Regular.ttf') as string,
      },
    ]
  }


  override _init() {

  }
}
