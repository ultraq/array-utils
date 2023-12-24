
Changelog
=========

### 3.1.1
 - Fix [Masquerading as ESM](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseESM.md)
   issue with the new package layout

### 3.1.0
 - Migrating to pure ESM for the next major version, the following internal
   changes have been made:
    - Added `"type": "module"` so ESM is now the default
    - Package outputs defined using an `exports` map w/ `import` pointing to the
      main source and `require` to a transpiled version of the source
 - Deprecate `flatten` method - it can be replaced by `array.flat(Infinity)`,
   which has [baseline](https://github.com/web-platform-dx/web-features/blob/main/docs/baseline.md)
   status.

### 3.0.1
 - Generated ES/CJS files didn't have the updated browser support targets, so
   this release fixes that up

### 3.0.0
 - Dropped support for all Node versions older than 18
 - Dropped support for IE11
 - JSDocs improved and a type definition file is now generated from it
