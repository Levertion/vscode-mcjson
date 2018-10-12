# vscode-mcjson

An extension to bring Minecraft json validation to VSCode Currently supports
Minecraft version 1.13 officially This extension uses
[Minecraft JSON schemas](https://github.com/Levertion/minecraft-json-schemas)

# Adds support for many files

Features full descriptions, completions and error reporting for the following
files:

1. Advancements
2. `pack.mcmeta` for both data and resource packs
3. `*.mcmeta` animation files
4. Loot tables
5. `sounds.json`

# Note

Please note that this encourages best practises when writing json files  
For example, it requires that the `minecraft:` namespace be used where it can be
implied. This does mean that most of the vanilla files don't validate However,
for future compatibility, it is left like that.

#Release notes

## v0.3.0

### Added

-   Support for blockstate definitions

### Fixed

-   `player_hurt_entity` advancement criteria missing
-   Text object not showing an error when there are undefined properties

### Update minecraft-json-schemas to v0.3.0
