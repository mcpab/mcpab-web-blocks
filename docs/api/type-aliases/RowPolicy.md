[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / RowPolicy

# Type Alias: RowPolicy()

> **RowPolicy** = (`props`) => [`RowPlan`](RowPlan.md)

Defined in: [src/components/menus/RowPolicyTypes.ts:80](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/menus/RowPolicyTypes.ts#L80)

A function that maps a node's context ([RowPolicyProps](RowPolicyProps.md)) to its visual plan ([RowPlan](RowPlan.md)).

Pass a custom implementation via [MenuRenderContext](../variables/MenuRenderContext.md) to restyle a menu
without modifying any component.

## Parameters

### props

[`RowPolicyProps`](RowPolicyProps.md)

## Returns

[`RowPlan`](RowPlan.md)

## See

 - [defaultDropDownPolicy](../functions/defaultDropDownPolicy.md) — default policy for the horizontal dropdown.
 - [defaultDrawerRowPolicy](../functions/defaultDrawerRowPolicy.md) — default policy for the slide-in drawer.
