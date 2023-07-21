# vscode + ts-jest incorrect breakpoint location mapping

To reproduce (on node v18.16.1 with VSCode 1.80.1):

1. npm i
2. Set a vscode breakpoint on [package/src/add.ts#2](package/src/add.ts#L2).
3. Run the _Debug Jest Tests_ launch configuration.
4. Observe that the breakpoint is hit twice:
   1. When the module is loaded (**unexpected**).
   2. When the function is executed (expected).

VSCode seems to find two possible breakpoint locations:

```json
{"tag":"dap.receive","timestamp":1689974853326,"metadata":{"connectionId":3,"message":{"command":"breakpointLocations","arguments":{"source":{"name":"src/add.ts","path":"src/add.ts","sourceReference":0,"origin":"Skipped by smartStep"},"line":2},"type":"request","seq":19}},"level":0}

{"tag":"dap.send","timestamp":1689974853327,"metadata":{"connectionId":3,"message":{"seq":1140,"type":"response","request_seq":19,"command":"breakpointLocations","success":true,"body":{"breakpoints":[{"line":2,"column":3},{"line":2,"column":16}]}}},"level":0}
```
