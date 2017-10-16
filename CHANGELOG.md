# Change Log
All notable changes to the "vscode-mcjson" extension will be documented in this file.

A lot of these changes are directly related to the changes of [minecraft-json-schemas](https://github.com/Levertion/minecraft-json-schemas/blob/master/CHANGELOG.md), also by me, repeated here for convenience of consuming.
However, changes specific to the extension are also mentioned here. These will be at the top of each section

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## [Unreleased]

## [v0.2.0] - 2017-10-16
 - Namespace Update
 - Update to v0.2.0 of 'minecraft-json-schemas'
### Changed
 - Force all places that a `minecraft:` namespace can be used to be used and add mention in README.md
 - Effects object of advancements now checks if it follows the name of an effect
### Fixed
 - Namespace recognition not working properly

## [v0.1.3] - 2017-10-15
 - Bugfix update
 - Update to official v0.1.2 version of 'minecraft-json-schemas'
### Fixed
 - Property not allowed error
    - Due to `"additionalProperties":false` being outside `oneOf`s rather than inside
    - Property tree is not automatically collapsing
    - Had to remove `"additionalProperties":false` for text components, as it is not possible to block additional properties for text components without moving all parts which can apply to all component types 

## [v0.1.2] - 2017-10-12
 - Bugfix update
### Fixed
 - `mcmeta` association possibly not working due to missing `;` in JavaScript

## [v0.1.1] - 2017-10-12
 - Bugfix update
 - Update to official 0.1.1 version of 'minecraft-json-schemas'
### Fixed
 - Incorrect references to json_component in shared definition
 - Only allows functions and conditions with a `minecraft:` namespace in loot tables, as even the vanilla loot tables don't use it
 - Property not defined error

## v0.1.0 - 2017-10-10
 - Initial release
 - Uses pre-official release version of 'minecraft-json-schemas'
### Added
 - advancement support
 - loot table support
 - `pack.mcmeta` support
 - `sounds.json` support
 - other `.mcmeta` file support

 [Unreleased]: https://github.com/Levertion/vscode-mcjson/compare/v0.2.0...HEAD
 [v0.2.0]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.3...v0.2.0 
 [v0.1.3]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.2...v0.1.3 
 [v0.1.2]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.1...v0.1.2
 [v0.1.1]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.0...v0.1.1
 
 
