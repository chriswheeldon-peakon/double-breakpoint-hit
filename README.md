# vscode + ts-jest + project references double breakpoint issue

To reproduce:

1. npm i
2. Set a vscode breakpoint on [package/src/add.ts#2](package/src/add.ts#2).
3. Run the _Debug Jest Tests_ launch configuration.
4. Observe that the breakpoint is hit twice:
   1. When the module is loaded (**unexpected**).
   2. When the function is executed (expected).
