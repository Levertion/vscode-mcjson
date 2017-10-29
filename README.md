# vscode-mcjson
An extension to bring Minecraft json validation to VSCode
Currently supports Minecraft version 1.12.2 officially
Entirely uses [Minecraft JSON schemas](https://github.com/Levertion/minecraft-json-schemas), developed by me, available under the UNLICENSE

# Setup note
Due to a difficult to trace bug, it is possible that the mcmeta workaround which has been used to allow `mcmeta` files to validate does not work when you install. This can be worked around by adding the following to your user settings:
This is only needed if you didn't get a message telling you about the mcmeta update when you first had an mcmeta file in your workspace
```
"files.associations": {
    "*.mcmeta": "json"
}
```
You can open user settings with the command  `Preferences: Open User Settings`

# Adds support for many files
Features full text descriptions for all aspects of, and tells when the following aren't correct:
1. Advancements 
2. Loot tables
3. `pack.mcmeta` files
4. other `.mcmeta` files (animations)
5. `sounds.json` files
6. Blockstates

# Note  
Please note that this encourages best practises when writing json files  
For example, it requires that the `minecraft:` namespace be used where it can be implied. This does mean that most of the vanilla files don't validate
However, for future compatibility, it is left like that.

#Release notes
## v0.3.0
### Added
 - Support for blockstate definitions
### Fixed
 - `player_hurt_entity` advancement criteria missing
 - Text object not showing an error when there are undefined properties
### Update minecraft-json-schemas to v0.3.0
