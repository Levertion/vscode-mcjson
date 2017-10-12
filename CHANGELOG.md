# Change Log
All notable changes to the "vscode-mcjson" extension will be documented in this file.

A lot of these changes are directly related to the changes of [minecraft-json-schemas](https://github.com/Levertion/minecraft-json-schemas/blob/master/CHANGELOG.md), also by me, repeated here for convenience of consuming.
However, changes specific to the extension are also mentioned here.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## [Unreleased]

## [v0.1.2] - 2017-10-12
 - Bugfix update
### Fixed
 - `mcmeta` association possibly not working due to missing `;` in Javascript

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

 [Unreleased]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.1...HEAD
 [v0.1.2]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.1...v0.1.2
 [v0.1.1]: https://github.com/Levertion/vscode-mcjson/compare/v0.1.0...v0.1.1
 
 
