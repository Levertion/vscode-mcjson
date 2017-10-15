# vscode-mcjson
An extension to bring Minecraft json validation to VSCode
Currently supports Minecraft version 1.12.2 officially
Entirely uses [Minecraft JSON schemas](https://github.com/Levertion/minecraft-json-schemas), developed by me, available under the UNLICENSE

# Adds support for many features
Features full text descriptions for all aspects of, and tells when the following aren't correct:
1. Advancements 
2. Loot tables
3. `pack.mcmeta` files
4. other `.mcmeta` files (animations)
5. `sounds.json` files

# Note  
Please note that this encourages best practises when writing json files  
For example, it requires that the `minecraft:` namespace be used where it can be implied. This does mean that most of the vanilla files don't validate
However, for future compatibility, it is left like that.