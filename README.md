# vscode + ts-jest + project references + ? ... double breakpoint issue

To reproduce (on node v18.16.1 with VSCode 1.80.1):

1. npm i
2. Set a vscode breakpoint on [package/src/add.ts#2](package/src/add.ts#L2).
3. Run the _Debug Jest Tests_ launch configuration.
4. Observe that the breakpoint is hit twice:
   1. When the module is loaded (**unexpected**).
   2. When the function is executed (expected).

VSCode seems to find two possible breakpoint locations:

```json
{"tag":"dap.receive","timestamp":1689973389721,"metadata":{"connectionId":9,"message":{"command":"breakpointLocations","arguments":{"source":{"name":"package/src/add.ts","path":"###REDACTED###/package/src/add.ts","sourceReference":0,"origin":"Skipped by smartStep"},"line":2},"type":"request","seq":19}},"level":0}

{"tag":"dap.send","timestamp":1689973389722,"metadata":{"connectionId":9,"message":{"seq":1134,"type":"response","request_seq":19,"command":"breakpointLocations","success":true,"body":{"breakpoints":[{"line":2,"column":3},{"line":2,"column":16}]}}},"level":0}
```
