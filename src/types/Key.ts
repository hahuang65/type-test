class Key {
  code: string;
  name: string;
  size: string;
  position: number;
  pressed: boolean;

  constructor(code: string, { size = "1", name = "", position = Key.Position.Standard } = {}) {
    this.code = code
    this.name = name === "" ? code : name
    this.size = size
    this.position = position
    this.pressed = false
  }

  static Position = class {
    static readonly Standard = KeyboardEvent.DOM_KEY_LOCATION_STANDARD
    static readonly Left = KeyboardEvent.DOM_KEY_LOCATION_LEFT
    static readonly Right = KeyboardEvent.DOM_KEY_LOCATION_RIGHT
    static readonly Numpad = KeyboardEvent.DOM_KEY_LOCATION_NUMPAD
  }

}

export default Key
