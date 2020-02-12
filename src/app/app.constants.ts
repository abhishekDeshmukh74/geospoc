export class CONSTANTS {
  static REGEX = {
    ALLOW_ONLY_NUMBERS: /^\d+$/,
    ALLOW_ONLY_NUMBERS_STARTING_WITHOUT_ZERO: /^[1-9]{1}[0-9]*$/,
    ALLOW_ONLY_NUMBERS_OR_NULL: /^\d+$/,
    ALLOW_ONLY_CHARACTERS: /^[a-zA-Z-']*[a-zA-Z-' ]*$/,
    ALLOW_ONLY_CHARACTERS_APOSTROPHE_HYPHEN: /^[A-Za-z  ' -]*$/,
    ALLOW_ONLY_CHARACTERS_OR_NULL: /^[A-Za-z-']+$/,
    ALLOW_ONLY_NUMBER_AND_CHARACTERS: /^[a-zA-Z0-9]*$/,
    ALLOW_ONLY_NUMBER_SPACE_AND_CHARACTERS: /^[A-Za-z0-9 ]*$/,
    ALLOW_ONLY_NUMBER_SPACE_CHARACTERS_HYPHEN: /^[A-Za-z0-9 -/]*$/,
    ALLOW_ONLY_SPACE_AND_CHARACTERS: /^[A-Za-z ]*$/,
    DISALLOW_SYMBOLS_OR_SPECIAL_CHARS: /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/,
    DISALLOW_MOBILE_NUMBER_WITH_ZERO: /^[1-9][0-9]*$/,
    ALLOW_ALPHANUMERIC_SLASH_HYPHEN: /^[0-9a-zA-Z/-]+$/,
    ALLOW_ALPHANUMERIC_BUT_NOT_ONLY_NUMERIC: /^(?![0-9]*$)[a-zA-Z0-9]+$/,
  };
}
