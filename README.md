# vscode + ts-jest + project references double breakpoint issue

To reproduce:

1. Set a breakpoint on [package/src/add.ts#2](src/add.ts#2).
2. Run the _Debug Jest Tests_ launch configuration.
3. Observe that the breakpoint is hit twice:
   1. When the module is loaded (unexpected).
   2. When the function is executed (expected).
