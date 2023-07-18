import { Lightning, Utils } from '@lightningjs/sdk'

interface CustomizableCardTemplateSpec extends Lightning.Component.TemplateSpec {

}

export class CustomizableCard
  extends Lightning.Component<CustomizableCardTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<CustomizableCardTemplateSpec>
{


  static override _template(): Lightning.Component.Template<CustomizableCardTemplateSpec> {
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
