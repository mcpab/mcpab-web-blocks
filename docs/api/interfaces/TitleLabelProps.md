[**@mcpab/web-blocks**](../README.md)

***

[@mcpab/web-blocks](../globals.md) / TitleLabelProps

# Interface: TitleLabelProps

Defined in: [src/components/typography/TitleLabel.tsx:11](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/typography/TitleLabel.tsx#L11)

Heading-styled label component with non-heading semantics.

Uses the same visual scale as `Title` (`h1`..`h4`) while restricting the
rendered element to `span`, `div`, or `p`.

## Extends

- `Omit`\<`React.ComponentProps`\<*typeof* `Typography`\>, `"variant"` \| `"component"`\>

## Properties

### about?

> `optional` **about**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2939

#### Inherited from

`Omit.about`

***

### accessKey?

> `optional` **accessKey**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2912

#### Inherited from

`Omit.accessKey`

***

### align?

> `optional` **align**: `"left"` \| `"right"` \| `"center"` \| `"inherit"` \| `"justify"`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:15

Set the text-align on the component.

#### Default

```ts
'inherit'
```

#### Inherited from

`Omit.align`

***

### alignContent?

> `optional` **alignContent**: `ResponsiveStyleValue`\<readonly string\[\] \| AlignContent \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| AlignContent \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`alignContent`](StandardStackProps.md#aligncontent)

***

### alignItems?

> `optional` **alignItems**: `ResponsiveStyleValue`\<readonly string\[\] \| AlignItems \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| AlignItems \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`alignItems`](StandardStackProps.md#alignitems)

***

### alignSelf?

> `optional` **alignSelf**: `ResponsiveStyleValue`\<readonly string\[\] \| AlignSelf \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| AlignSelf \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`alignSelf`](StandardStackProps.md#alignself)

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2610

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`Omit.aria-activedescendant`

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2612

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`Omit.aria-atomic`

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"list"` \| `"inline"` \| `"none"` \| `"both"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2617

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`Omit.aria-autocomplete`

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2623

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`Omit.aria-braillelabel`

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2628

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`Omit.aria-brailleroledescription`

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2629

#### Inherited from

`Omit.aria-busy`

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2634

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`Omit.aria-checked`

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2639

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`Omit.aria-colcount`

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2644

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`Omit.aria-colindex`

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2649

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`Omit.aria-colindextext`

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2654

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`Omit.aria-colspan`

***

### aria-controls?

> `optional` **aria-controls**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2659

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`Omit.aria-controls`

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"page"` \| `"time"` \| `"step"` \| `"true"` \| `"false"` \| `"location"` \| `"date"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2661

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`Omit.aria-current`

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2666

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`Omit.aria-describedby`

***

### aria-description?

> `optional` **aria-description**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2671

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`Omit.aria-description`

***

### aria-details?

> `optional` **aria-details**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2676

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-details`

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2681

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`Omit.aria-disabled`

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2686

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-dropeffect`

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2691

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`Omit.aria-errormessage`

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2693

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`Omit.aria-expanded`

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2698

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`Omit.aria-flowto`

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2703

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`Omit.aria-grabbed`

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"grid"` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"listbox"` \| `"tree"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2705

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`Omit.aria-haspopup`

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2710

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-hidden`

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2715

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`Omit.aria-invalid`

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2717

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`Omit.aria-keyshortcuts`

***

### aria-label?

> `optional` **aria-label**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2722

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`Omit.aria-label`

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2727

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`Omit.aria-labelledby`

***

### aria-level?

> `optional` **aria-level**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2729

Defines the hierarchical level of an element within a structure.

#### Inherited from

`Omit.aria-level`

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2731

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`Omit.aria-live`

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2733

Indicates whether an element is modal when displayed.

#### Inherited from

`Omit.aria-modal`

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2735

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`Omit.aria-multiline`

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2737

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`Omit.aria-multiselectable`

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2739

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`Omit.aria-orientation`

***

### aria-owns?

> `optional` **aria-owns**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2745

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`Omit.aria-owns`

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2750

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`Omit.aria-placeholder`

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2755

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`Omit.aria-posinset`

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2760

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`Omit.aria-pressed`

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2765

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`Omit.aria-readonly`

***

### aria-relevant?

> `optional` **aria-relevant**: `"all"` \| `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2770

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`Omit.aria-relevant`

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2783

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`Omit.aria-required`

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2785

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`Omit.aria-roledescription`

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2790

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`Omit.aria-rowcount`

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2795

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`Omit.aria-rowindex`

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2800

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`Omit.aria-rowindextext`

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2805

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`Omit.aria-rowspan`

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2810

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`Omit.aria-selected`

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2815

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`Omit.aria-setsize`

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2817

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`Omit.aria-sort`

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2819

Defines the maximum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemax`

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2821

Defines the minimum allowed value for a range widget.

#### Inherited from

`Omit.aria-valuemin`

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2826

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`Omit.aria-valuenow`

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2828

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`Omit.aria-valuetext`

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string` & `object` \| `"none"` \| `"off"` \| `"on"` \| `"sentences"` \| `"words"` \| `"characters"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2913

#### Inherited from

`Omit.autoCapitalize`

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2952

#### Inherited from

`Omit.autoCorrect`

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2914

#### Inherited from

`Omit.autoFocus`

***

### autoSave?

> `optional` **autoSave**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2953

#### Inherited from

`Omit.autoSave`

***

### bgcolor?

> `optional` **bgcolor**: `ResponsiveStyleValue`\<readonly string\[\] \| BackgroundColor \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| BackgroundColor \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`bgcolor`](StandardStackProps.md#bgcolor)

***

### border?

> `optional` **border**: `ResponsiveStyleValue`\<`number` \| `string` & `object` \| `"inset"` \| `"hidden"` \| `"-moz-initial"` \| `"inherit"` \| `"initial"` \| `"revert"` \| `"revert-layer"` \| `"unset"` \| `"none"` \| `"aliceblue"` \| `"antiquewhite"` \| `"aqua"` \| `"aquamarine"` \| `"azure"` \| `"beige"` \| `"bisque"` \| `"black"` \| `"blanchedalmond"` \| `"blue"` \| `"blueviolet"` \| `"brown"` \| `"burlywood"` \| `"cadetblue"` \| `"chartreuse"` \| `"chocolate"` \| `"coral"` \| `"cornflowerblue"` \| `"cornsilk"` \| `"crimson"` \| `"cyan"` \| `"darkblue"` \| `"darkcyan"` \| `"darkgoldenrod"` \| `"darkgray"` \| `"darkgreen"` \| `"darkgrey"` \| `"darkkhaki"` \| `"darkmagenta"` \| `"darkolivegreen"` \| `"darkorange"` \| `"darkorchid"` \| `"darkred"` \| `"darksalmon"` \| `"darkseagreen"` \| `"darkslateblue"` \| `"darkslategray"` \| `"darkslategrey"` \| `"darkturquoise"` \| `"darkviolet"` \| `"deeppink"` \| `"deepskyblue"` \| `"dimgray"` \| `"dimgrey"` \| `"dodgerblue"` \| `"firebrick"` \| `"floralwhite"` \| `"forestgreen"` \| `"fuchsia"` \| `"gainsboro"` \| `"ghostwhite"` \| `"gold"` \| `"goldenrod"` \| `"gray"` \| `"green"` \| `"greenyellow"` \| `"grey"` \| `"honeydew"` \| `"hotpink"` \| `"indianred"` \| `"indigo"` \| `"ivory"` \| `"khaki"` \| `"lavender"` \| `"lavenderblush"` \| `"lawngreen"` \| `"lemonchiffon"` \| `"lightblue"` \| `"lightcoral"` \| `"lightcyan"` \| `"lightgoldenrodyellow"` \| `"lightgray"` \| `"lightgreen"` \| `"lightgrey"` \| `"lightpink"` \| `"lightsalmon"` \| `"lightseagreen"` \| `"lightskyblue"` \| `"lightslategray"` \| `"lightslategrey"` \| `"lightsteelblue"` \| `"lightyellow"` \| `"lime"` \| `"limegreen"` \| `"linen"` \| `"magenta"` \| `"maroon"` \| `"mediumaquamarine"` \| `"mediumblue"` \| `"mediumorchid"` \| `"mediumpurple"` \| `"mediumseagreen"` \| `"mediumslateblue"` \| `"mediumspringgreen"` \| `"mediumturquoise"` \| `"mediumvioletred"` \| `"midnightblue"` \| `"mintcream"` \| `"mistyrose"` \| `"moccasin"` \| `"navajowhite"` \| `"navy"` \| `"oldlace"` \| `"olive"` \| `"olivedrab"` \| `"orange"` \| `"orangered"` \| `"orchid"` \| `"palegoldenrod"` \| `"palegreen"` \| `"paleturquoise"` \| `"palevioletred"` \| `"papayawhip"` \| `"peachpuff"` \| `"peru"` \| `"pink"` \| `"plum"` \| `"powderblue"` \| `"purple"` \| `"rebeccapurple"` \| `"red"` \| `"rosybrown"` \| `"royalblue"` \| `"saddlebrown"` \| `"salmon"` \| `"sandybrown"` \| `"seagreen"` \| `"seashell"` \| `"sienna"` \| `"silver"` \| `"skyblue"` \| `"slateblue"` \| `"slategray"` \| `"slategrey"` \| `"snow"` \| `"springgreen"` \| `"steelblue"` \| `"tan"` \| `"teal"` \| `"thistle"` \| `"tomato"` \| `"turquoise"` \| `"violet"` \| `"wheat"` \| `"white"` \| `"whitesmoke"` \| `"yellow"` \| `"yellowgreen"` \| `"transparent"` \| `"AccentColor"` \| `"AccentColorText"` \| `"ActiveText"` \| `"ButtonBorder"` \| `"ButtonFace"` \| `"ButtonText"` \| `"Canvas"` \| `"CanvasText"` \| `"Field"` \| `"FieldText"` \| `"GrayText"` \| `"Highlight"` \| `"HighlightText"` \| `"LinkText"` \| `"Mark"` \| `"MarkText"` \| `"SelectedItem"` \| `"SelectedItemText"` \| `"VisitedText"` \| `"ActiveBorder"` \| `"ActiveCaption"` \| `"AppWorkspace"` \| `"Background"` \| `"ButtonHighlight"` \| `"ButtonShadow"` \| `"CaptionText"` \| `"InactiveBorder"` \| `"InactiveCaption"` \| `"InactiveCaptionText"` \| `"InfoBackground"` \| `"InfoText"` \| `"Menu"` \| `"MenuText"` \| `"Scrollbar"` \| `"ThreeDDarkShadow"` \| `"ThreeDFace"` \| `"ThreeDHighlight"` \| `"ThreeDLightShadow"` \| `"ThreeDShadow"` \| `"Window"` \| `"WindowFrame"` \| `"WindowText"` \| `"currentColor"` \| `"medium"` \| `"thick"` \| `"thin"` \| `"dashed"` \| `"dotted"` \| `"double"` \| `"groove"` \| `"outset"` \| `"ridge"` \| `"solid"` \| `undefined`\> \| (`theme`) => `ResponsiveStyleValue`\<`number` \| `string` & `object` \| `"inset"` \| `"hidden"` \| `"-moz-initial"` \| `"inherit"` \| `"initial"` \| `"revert"` \| `"revert-layer"` \| `"unset"` \| `"none"` \| `"aliceblue"` \| `"antiquewhite"` \| `"aqua"` \| `"aquamarine"` \| `"azure"` \| `"beige"` \| `"bisque"` \| `"black"` \| `"blanchedalmond"` \| `"blue"` \| `"blueviolet"` \| `"brown"` \| `"burlywood"` \| `"cadetblue"` \| `"chartreuse"` \| `"chocolate"` \| `"coral"` \| `"cornflowerblue"` \| `"cornsilk"` \| `"crimson"` \| `"cyan"` \| `"darkblue"` \| `"darkcyan"` \| `"darkgoldenrod"` \| `"darkgray"` \| `"darkgreen"` \| `"darkgrey"` \| `"darkkhaki"` \| `"darkmagenta"` \| `"darkolivegreen"` \| `"darkorange"` \| `"darkorchid"` \| `"darkred"` \| `"darksalmon"` \| `"darkseagreen"` \| `"darkslateblue"` \| `"darkslategray"` \| `"darkslategrey"` \| `"darkturquoise"` \| `"darkviolet"` \| `"deeppink"` \| `"deepskyblue"` \| `"dimgray"` \| `"dimgrey"` \| `"dodgerblue"` \| `"firebrick"` \| `"floralwhite"` \| `"forestgreen"` \| `"fuchsia"` \| `"gainsboro"` \| `"ghostwhite"` \| `"gold"` \| `"goldenrod"` \| `"gray"` \| `"green"` \| `"greenyellow"` \| `"grey"` \| `"honeydew"` \| `"hotpink"` \| `"indianred"` \| `"indigo"` \| `"ivory"` \| `"khaki"` \| `"lavender"` \| `"lavenderblush"` \| `"lawngreen"` \| `"lemonchiffon"` \| `"lightblue"` \| `"lightcoral"` \| `"lightcyan"` \| `"lightgoldenrodyellow"` \| `"lightgray"` \| `"lightgreen"` \| `"lightgrey"` \| `"lightpink"` \| `"lightsalmon"` \| `"lightseagreen"` \| `"lightskyblue"` \| `"lightslategray"` \| `"lightslategrey"` \| `"lightsteelblue"` \| `"lightyellow"` \| `"lime"` \| `"limegreen"` \| `"linen"` \| `"magenta"` \| `"maroon"` \| `"mediumaquamarine"` \| `"mediumblue"` \| `"mediumorchid"` \| `"mediumpurple"` \| `"mediumseagreen"` \| `"mediumslateblue"` \| `"mediumspringgreen"` \| `"mediumturquoise"` \| `"mediumvioletred"` \| `"midnightblue"` \| `"mintcream"` \| `"mistyrose"` \| `"moccasin"` \| `"navajowhite"` \| `"navy"` \| `"oldlace"` \| `"olive"` \| `"olivedrab"` \| `"orange"` \| `"orangered"` \| `"orchid"` \| `"palegoldenrod"` \| `"palegreen"` \| `"paleturquoise"` \| `"palevioletred"` \| `"papayawhip"` \| `"peachpuff"` \| `"peru"` \| `"pink"` \| `"plum"` \| `"powderblue"` \| `"purple"` \| `"rebeccapurple"` \| `"red"` \| `"rosybrown"` \| `"royalblue"` \| `"saddlebrown"` \| `"salmon"` \| `"sandybrown"` \| `"seagreen"` \| `"seashell"` \| `"sienna"` \| `"silver"` \| `"skyblue"` \| `"slateblue"` \| `"slategray"` \| `"slategrey"` \| `"snow"` \| `"springgreen"` \| `"steelblue"` \| `"tan"` \| `"teal"` \| `"thistle"` \| `"tomato"` \| `"turquoise"` \| `"violet"` \| `"wheat"` \| `"white"` \| `"whitesmoke"` \| `"yellow"` \| `"yellowgreen"` \| `"transparent"` \| `"AccentColor"` \| `"AccentColorText"` \| `"ActiveText"` \| `"ButtonBorder"` \| `"ButtonFace"` \| `"ButtonText"` \| `"Canvas"` \| `"CanvasText"` \| `"Field"` \| `"FieldText"` \| `"GrayText"` \| `"Highlight"` \| `"HighlightText"` \| `"LinkText"` \| `"Mark"` \| `"MarkText"` \| `"SelectedItem"` \| `"SelectedItemText"` \| `"VisitedText"` \| `"ActiveBorder"` \| `"ActiveCaption"` \| `"AppWorkspace"` \| `"Background"` \| `"ButtonHighlight"` \| `"ButtonShadow"` \| `"CaptionText"` \| `"InactiveBorder"` \| `"InactiveCaption"` \| `"InactiveCaptionText"` \| `"InfoBackground"` \| `"InfoText"` \| `"Menu"` \| `"MenuText"` \| `"Scrollbar"` \| `"ThreeDDarkShadow"` \| `"ThreeDFace"` \| `"ThreeDHighlight"` \| `"ThreeDLightShadow"` \| `"ThreeDShadow"` \| `"Window"` \| `"WindowFrame"` \| `"WindowText"` \| `"currentColor"` \| `"medium"` \| `"thick"` \| `"thin"` \| `"dashed"` \| `"dotted"` \| `"double"` \| `"groove"` \| `"outset"` \| `"ridge"` \| `"solid"` \| `undefined`\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`border`](StandardStackProps.md#border)

***

### borderBottom?

> `optional` **borderBottom**: `ResponsiveStyleValue`\<BorderBottom\<string \| number\> \| readonly NonNullable\<BorderBottom\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<BorderBottom\<string \| number\> \| readonly NonNullable\<BorderBottom\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`borderBottom`](StandardStackProps.md#borderbottom)

***

### borderColor?

> `optional` **borderColor**: `ResponsiveStyleValue`\<readonly string\[\] \| BorderColor \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| BorderColor \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`borderColor`](StandardStackProps.md#bordercolor)

***

### borderLeft?

> `optional` **borderLeft**: `ResponsiveStyleValue`\<BorderLeft\<string \| number\> \| readonly NonNullable\<BorderLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<BorderLeft\<string \| number\> \| readonly NonNullable\<BorderLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`borderLeft`](StandardStackProps.md#borderleft)

***

### borderRadius?

> `optional` **borderRadius**: `ResponsiveStyleValue`\<BorderRadius\<string \| number\> \| readonly NonNullable\<BorderRadius\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<BorderRadius\<string \| number\> \| readonly NonNullable\<BorderRadius\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`borderRadius`](StandardStackProps.md#borderradius)

***

### borderRight?

> `optional` **borderRight**: `ResponsiveStyleValue`\<BorderRight\<string \| number\> \| readonly NonNullable\<BorderRight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<BorderRight\<string \| number\> \| readonly NonNullable\<BorderRight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`borderRight`](StandardStackProps.md#borderright)

***

### borderTop?

> `optional` **borderTop**: `ResponsiveStyleValue`\<BorderTop\<string \| number\> \| readonly NonNullable\<BorderTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<BorderTop\<string \| number\> \| readonly NonNullable\<BorderTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`borderTop`](StandardStackProps.md#bordertop)

***

### bottom?

> `optional` **bottom**: `ResponsiveStyleValue`\<Bottom\<string \| number\> \| readonly NonNullable\<Bottom\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Bottom\<string \| number\> \| readonly NonNullable\<Bottom\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`bottom`](StandardStackProps.md#bottom)

***

### boxShadow?

> `optional` **boxShadow**: `ResponsiveStyleValue`\<number \| BoxShadow \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<number \| BoxShadow \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`boxShadow`](StandardStackProps.md#boxshadow)

***

### boxSizing?

> `optional` **boxSizing**: `ResponsiveStyleValue`\<BoxSizing \| readonly NonNullable\<BoxSizing \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<BoxSizing \| readonly NonNullable\<BoxSizing \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`boxSizing`](StandardStackProps.md#boxsizing)

***

### children?

> `optional` **children**: `ReactNode`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:19

The content of the component.

#### Inherited from

`Omit.children`

***

### classes?

> `optional` **classes**: `Partial`\<`TypographyClasses`\> & `Partial`\<`ClassNameMap`\<`never`\>\>

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:23

Override or extend the styles applied to the component.

#### Inherited from

`Omit.classes`

***

### className?

> `optional` **className**: `string`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/OverridableComponent/index.d.ts:35

#### Inherited from

[`ActionButtonProps`](ActionButtonProps.md).[`className`](ActionButtonProps.md#classname)

***

### color?

> `optional` **color**: `string` & `object` \| `OverridableStringUnion`\<`"primary"` \| `"secondary"` \| `"success"` \| `"error"` \| `"info"` \| `"warning"` \| `"textDisabled"` \| `"textPrimary"` \| `"textSecondary"`, `TypographyPropsColorOverrides`\>

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:29

The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).

#### Inherited from

`Omit.color`

***

### columnGap?

> `optional` **columnGap**: `ResponsiveStyleValue`\<ColumnGap\<string \| number\> \| readonly NonNullable\<ColumnGap\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<ColumnGap\<string \| number\> \| readonly NonNullable\<ColumnGap\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`columnGap`](StandardStackProps.md#columngap)

***

### component?

> `optional` **component**: `"p"` \| `"div"` \| `"span"`

Defined in: [src/components/typography/TitleLabel.tsx:16](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/typography/TitleLabel.tsx#L16)

Restrict to non-heading tags to keep semantics clean.

#### Default Value

```ts
'span'
```

***

### content?

> `optional` **content**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2940

#### Inherited from

`Omit.content`

***

### contentEditable?

> `optional` **contentEditable**: `"inherit"` \| `Booleanish` \| `"plaintext-only"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2916

#### Inherited from

`Omit.contentEditable`

***

### contextMenu?

> `optional` **contextMenu**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2917

#### Inherited from

`Omit.contextMenu`

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2399

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`Omit.dangerouslySetInnerHTML`

***

### datatype?

> `optional` **datatype**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2941

#### Inherited from

`Omit.datatype`

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2906

#### Inherited from

`Omit.defaultChecked`

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2907

#### Inherited from

`Omit.defaultValue`

***

### dir?

> `optional` **dir**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2918

#### Inherited from

`Omit.dir`

***

### display?

> `optional` **display**: `ResponsiveStyleValue`\<readonly string\[\] \| Display \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| Display \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`display`](StandardStackProps.md#display)

***

### displayPrint?

> `optional` **displayPrint**: `ResponsiveStyleValue`\<readonly string\[\] \| Display \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| Display \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`displayPrint`](StandardStackProps.md#displayprint)

***

### draggable?

> `optional` **draggable**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2919

#### Inherited from

`Omit.draggable`

***

### enterKeyHint?

> `optional` **enterKeyHint**: `"search"` \| `"enter"` \| `"done"` \| `"go"` \| `"next"` \| `"previous"` \| `"send"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2920

#### Inherited from

`Omit.enterKeyHint`

***

### exportparts?

> `optional` **exportparts**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2978

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/exportparts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts)

#### Inherited from

`Omit.exportparts`

***

### flex?

> `optional` **flex**: `ResponsiveStyleValue`\<Flex\<string \| number\> \| readonly NonNullable\<Flex\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Flex\<string \| number\> \| readonly NonNullable\<Flex\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`flex`](StandardStackProps.md#flex)

***

### flexBasis?

> `optional` **flexBasis**: `ResponsiveStyleValue`\<FlexBasis\<string \| number\> \| readonly NonNullable\<FlexBasis\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<FlexBasis\<string \| number\> \| readonly NonNullable\<FlexBasis\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`flexBasis`](StandardStackProps.md#flexbasis)

***

### flexDirection?

> `optional` **flexDirection**: `ResponsiveStyleValue`\<FlexDirection \| readonly NonNullable\<FlexDirection \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<FlexDirection \| readonly NonNullable\<FlexDirection \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`flexDirection`](StandardStackProps.md#flexdirection)

***

### flexGrow?

> `optional` **flexGrow**: `ResponsiveStyleValue`\<FlexGrow \| readonly NonNullable\<FlexGrow \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<FlexGrow \| readonly NonNullable\<FlexGrow \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`flexGrow`](StandardStackProps.md#flexgrow)

***

### flexShrink?

> `optional` **flexShrink**: `ResponsiveStyleValue`\<FlexShrink \| readonly NonNullable\<FlexShrink \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<FlexShrink \| readonly NonNullable\<FlexShrink \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`flexShrink`](StandardStackProps.md#flexshrink)

***

### flexWrap?

> `optional` **flexWrap**: `ResponsiveStyleValue`\<FlexWrap \| readonly NonNullable\<FlexWrap \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<FlexWrap \| readonly NonNullable\<FlexWrap \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`flexWrap`](StandardStackProps.md#flexwrap)

***

### fontFamily?

> `optional` **fontFamily**: `ResponsiveStyleValue`\<readonly string\[\] \| FontFamily \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| FontFamily \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`fontFamily`](StandardStackProps.md#fontfamily)

***

### fontSize?

> `optional` **fontSize**: `ResponsiveStyleValue`\<FontSize\<string \| number\> \| readonly NonNullable\<FontSize\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<FontSize\<string \| number\> \| readonly NonNullable\<FontSize\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`fontSize`](StandardStackProps.md#fontsize)

***

### fontStyle?

> `optional` **fontStyle**: `ResponsiveStyleValue`\<readonly string\[\] \| FontStyle \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| FontStyle \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`fontStyle`](StandardStackProps.md#fontstyle)

***

### fontWeight?

> `optional` **fontWeight**: `ResponsiveStyleValue`\<`string` \| `string` & `object` \| `number` & `object` \| `undefined`\> \| (`theme`) => `ResponsiveStyleValue`\<`string` \| `string` & `object` \| `number` & `object` \| `undefined`\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`fontWeight`](StandardStackProps.md#fontweight)

***

### gap?

> `optional` **gap**: `ResponsiveStyleValue`\<Gap\<string \| number\> \| readonly NonNullable\<Gap\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Gap\<string \| number\> \| readonly NonNullable\<Gap\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gap`](StandardStackProps.md#gap)

***

### gridArea?

> `optional` **gridArea**: `ResponsiveStyleValue`\<GridArea \| readonly NonNullable\<GridArea \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridArea \| readonly NonNullable\<GridArea \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridArea`](StandardStackProps.md#gridarea)

***

### gridAutoColumns?

> `optional` **gridAutoColumns**: `ResponsiveStyleValue`\<GridAutoColumns\<string \| number\> \| readonly NonNullable\<GridAutoColumns\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridAutoColumns\<string \| number\> \| readonly NonNullable\<GridAutoColumns\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridAutoColumns`](StandardStackProps.md#gridautocolumns)

***

### gridAutoFlow?

> `optional` **gridAutoFlow**: `ResponsiveStyleValue`\<readonly string\[\] \| GridAutoFlow \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| GridAutoFlow \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridAutoFlow`](StandardStackProps.md#gridautoflow)

***

### gridAutoRows?

> `optional` **gridAutoRows**: `ResponsiveStyleValue`\<GridAutoRows\<string \| number\> \| readonly NonNullable\<GridAutoRows\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridAutoRows\<string \| number\> \| readonly NonNullable\<GridAutoRows\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridAutoRows`](StandardStackProps.md#gridautorows)

***

### gridColumn?

> `optional` **gridColumn**: `ResponsiveStyleValue`\<GridColumn \| readonly NonNullable\<GridColumn \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridColumn \| readonly NonNullable\<GridColumn \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridColumn`](StandardStackProps.md#gridcolumn)

***

### gridRow?

> `optional` **gridRow**: `ResponsiveStyleValue`\<GridRow \| readonly NonNullable\<GridRow \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridRow \| readonly NonNullable\<GridRow \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridRow`](StandardStackProps.md#gridrow)

***

### gridTemplateAreas?

> `optional` **gridTemplateAreas**: `ResponsiveStyleValue`\<readonly string\[\] \| GridTemplateAreas \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| GridTemplateAreas \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridTemplateAreas`](StandardStackProps.md#gridtemplateareas)

***

### gridTemplateColumns?

> `optional` **gridTemplateColumns**: `ResponsiveStyleValue`\<GridTemplateColumns\<string \| number\> \| readonly NonNullable\<GridTemplateColumns\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridTemplateColumns\<string \| number\> \| readonly NonNullable\<GridTemplateColumns\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridTemplateColumns`](StandardStackProps.md#gridtemplatecolumns)

***

### gridTemplateRows?

> `optional` **gridTemplateRows**: `ResponsiveStyleValue`\<GridTemplateRows\<string \| number\> \| readonly NonNullable\<GridTemplateRows\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<GridTemplateRows\<string \| number\> \| readonly NonNullable\<GridTemplateRows\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`gridTemplateRows`](StandardStackProps.md#gridtemplaterows)

***

### gutterBottom?

> `optional` **gutterBottom**: `boolean`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:34

If `true`, the text will have a bottom margin.

#### Default

```ts
false
```

#### Inherited from

`Omit.gutterBottom`

***

### height?

> `optional` **height**: `ResponsiveStyleValue`\<Height\<string \| number\> \| readonly NonNullable\<Height\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Height\<string \| number\> \| readonly NonNullable\<Height\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`height`](StandardStackProps.md#height)

***

### hidden?

> `optional` **hidden**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2921

#### Inherited from

`Omit.hidden`

***

### id?

> `optional` **id**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2922

#### Inherited from

`Omit.id`

***

### inlist?

> `optional` **inlist**: `any`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2942

#### Inherited from

`Omit.inlist`

***

### inputMode?

> `optional` **inputMode**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2969

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`Omit.inputMode`

***

### is?

> `optional` **is**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2974

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`Omit.is`

***

### itemID?

> `optional` **itemID**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2958

#### Inherited from

`Omit.itemID`

***

### itemProp?

> `optional` **itemProp**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2955

#### Inherited from

`Omit.itemProp`

***

### itemRef?

> `optional` **itemRef**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2959

#### Inherited from

`Omit.itemRef`

***

### itemScope?

> `optional` **itemScope**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2956

#### Inherited from

`Omit.itemScope`

***

### itemType?

> `optional` **itemType**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2957

#### Inherited from

`Omit.itemType`

***

### justifyContent?

> `optional` **justifyContent**: `ResponsiveStyleValue`\<readonly string\[\] \| JustifyContent \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| JustifyContent \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`justifyContent`](StandardStackProps.md#justifycontent)

***

### justifyItems?

> `optional` **justifyItems**: `ResponsiveStyleValue`\<readonly string\[\] \| JustifyItems \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| JustifyItems \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`justifyItems`](StandardStackProps.md#justifyitems)

***

### justifySelf?

> `optional` **justifySelf**: `ResponsiveStyleValue`\<readonly string\[\] \| JustifySelf \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| JustifySelf \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`justifySelf`](StandardStackProps.md#justifyself)

***

### key?

> `optional` **key**: `Key` \| `null`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:262

#### Inherited from

`Omit.key`

***

### lang?

> `optional` **lang**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2923

#### Inherited from

`Omit.lang`

***

### left?

> `optional` **left**: `ResponsiveStyleValue`\<Left\<string \| number\> \| readonly NonNullable\<Left\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Left\<string \| number\> \| readonly NonNullable\<Left\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`left`](StandardStackProps.md#left)

***

### letterSpacing?

> `optional` **letterSpacing**: `ResponsiveStyleValue`\<LetterSpacing\<string \| number\> \| readonly NonNullable\<LetterSpacing\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<LetterSpacing\<string \| number\> \| readonly NonNullable\<LetterSpacing\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`letterSpacing`](StandardStackProps.md#letterspacing)

***

### lineHeight?

> `optional` **lineHeight**: `ResponsiveStyleValue`\<LineHeight\<string \| number\> \| readonly NonNullable\<LineHeight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<LineHeight\<string \| number\> \| readonly NonNullable\<LineHeight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`lineHeight`](StandardStackProps.md#lineheight)

***

### m?

> `optional` **m**: `ResponsiveStyleValue`\<Margin\<string \| number\> \| readonly NonNullable\<Margin\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Margin\<string \| number\> \| readonly NonNullable\<Margin\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`m`](StandardStackProps.md#m)

***

### margin?

> `optional` **margin**: `ResponsiveStyleValue`\<Margin\<string \| number\> \| readonly NonNullable\<Margin\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Margin\<string \| number\> \| readonly NonNullable\<Margin\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`margin`](StandardStackProps.md#margin)

***

### marginBlock?

> `optional` **marginBlock**: `ResponsiveStyleValue`\<MarginBlock\<string \| number\> \| readonly NonNullable\<MarginBlock\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginBlock\<string \| number\> \| readonly NonNullable\<MarginBlock\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginBlock`](StandardStackProps.md#marginblock)

***

### marginBlockEnd?

> `optional` **marginBlockEnd**: `ResponsiveStyleValue`\<MarginBlockEnd\<string \| number\> \| readonly NonNullable\<MarginBlockEnd\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginBlockEnd\<string \| number\> \| readonly NonNullable\<MarginBlockEnd\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginBlockEnd`](StandardStackProps.md#marginblockend)

***

### marginBlockStart?

> `optional` **marginBlockStart**: `ResponsiveStyleValue`\<MarginBlockStart\<string \| number\> \| readonly NonNullable\<MarginBlockStart\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginBlockStart\<string \| number\> \| readonly NonNullable\<MarginBlockStart\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginBlockStart`](StandardStackProps.md#marginblockstart)

***

### marginBottom?

> `optional` **marginBottom**: `ResponsiveStyleValue`\<MarginBottom\<string \| number\> \| readonly NonNullable\<MarginBottom\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginBottom\<string \| number\> \| readonly NonNullable\<MarginBottom\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginBottom`](StandardStackProps.md#marginbottom)

***

### marginInline?

> `optional` **marginInline**: `ResponsiveStyleValue`\<MarginInline\<string \| number\> \| readonly NonNullable\<MarginInline\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginInline\<string \| number\> \| readonly NonNullable\<MarginInline\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginInline`](StandardStackProps.md#margininline)

***

### marginInlineEnd?

> `optional` **marginInlineEnd**: `ResponsiveStyleValue`\<MarginInlineEnd\<string \| number\> \| readonly NonNullable\<MarginInlineEnd\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginInlineEnd\<string \| number\> \| readonly NonNullable\<MarginInlineEnd\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginInlineEnd`](StandardStackProps.md#margininlineend)

***

### marginInlineStart?

> `optional` **marginInlineStart**: `ResponsiveStyleValue`\<MarginInlineStart\<string \| number\> \| readonly NonNullable\<MarginInlineStart\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginInlineStart\<string \| number\> \| readonly NonNullable\<MarginInlineStart\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginInlineStart`](StandardStackProps.md#margininlinestart)

***

### marginLeft?

> `optional` **marginLeft**: `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginLeft`](StandardStackProps.md#marginleft)

***

### marginRight?

> `optional` **marginRight**: `ResponsiveStyleValue`\<MarginRight\<string \| number\> \| readonly NonNullable\<MarginRight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginRight\<string \| number\> \| readonly NonNullable\<MarginRight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginRight`](StandardStackProps.md#marginright)

***

### marginTop?

> `optional` **marginTop**: `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginTop`](StandardStackProps.md#margintop)

***

### marginX?

> `optional` **marginX**: `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginX`](StandardStackProps.md#marginx)

***

### marginY?

> `optional` **marginY**: `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`marginY`](StandardStackProps.md#marginy)

***

### maxHeight?

> `optional` **maxHeight**: `ResponsiveStyleValue`\<MaxHeight\<string \| number\> \| readonly NonNullable\<MaxHeight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MaxHeight\<string \| number\> \| readonly NonNullable\<MaxHeight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`maxHeight`](StandardStackProps.md#maxheight)

***

### maxWidth?

> `optional` **maxWidth**: `ResponsiveStyleValue`\<MaxWidth\<string \| number\> \| readonly NonNullable\<MaxWidth\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MaxWidth\<string \| number\> \| readonly NonNullable\<MaxWidth\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`maxWidth`](StandardStackProps.md#maxwidth)

***

### mb?

> `optional` **mb**: `ResponsiveStyleValue`\<MarginBottom\<string \| number\> \| readonly NonNullable\<MarginBottom\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginBottom\<string \| number\> \| readonly NonNullable\<MarginBottom\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`mb`](StandardStackProps.md#mb)

***

### minHeight?

> `optional` **minHeight**: `ResponsiveStyleValue`\<MinHeight\<string \| number\> \| readonly NonNullable\<MinHeight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MinHeight\<string \| number\> \| readonly NonNullable\<MinHeight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`minHeight`](StandardStackProps.md#minheight)

***

### minWidth?

> `optional` **minWidth**: `ResponsiveStyleValue`\<MinWidth\<string \| number\> \| readonly NonNullable\<MinWidth\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MinWidth\<string \| number\> \| readonly NonNullable\<MinWidth\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`minWidth`](StandardStackProps.md#minwidth)

***

### ml?

> `optional` **ml**: `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`ml`](StandardStackProps.md#ml)

***

### mr?

> `optional` **mr**: `ResponsiveStyleValue`\<MarginRight\<string \| number\> \| readonly NonNullable\<MarginRight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginRight\<string \| number\> \| readonly NonNullable\<MarginRight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`mr`](StandardStackProps.md#mr)

***

### mt?

> `optional` **mt**: `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`mt`](StandardStackProps.md#mt)

***

### mx?

> `optional` **mx**: `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginLeft\<string \| number\> \| readonly NonNullable\<MarginLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`mx`](StandardStackProps.md#mx)

***

### my?

> `optional` **my**: `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<MarginTop\<string \| number\> \| readonly NonNullable\<MarginTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`my`](StandardStackProps.md#my)

***

### nonce?

> `optional` **nonce**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2924

#### Inherited from

`Omit.nonce`

***

### noWrap?

> `optional` **noWrap**: `boolean`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:42

If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.

Note that text overflow can only happen with block or inline-block level elements
(the element needs to have a width in order to overflow).

#### Default

```ts
false
```

#### Inherited from

`Omit.noWrap`

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2458

#### Inherited from

`Omit.onAbort`

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2459

#### Inherited from

`Omit.onAbortCapture`

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2586

#### Inherited from

`Omit.onAnimationEnd`

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2587

#### Inherited from

`Omit.onAnimationEndCapture`

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2588

#### Inherited from

`Omit.onAnimationIteration`

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2589

#### Inherited from

`Omit.onAnimationIterationCapture`

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2584

#### Inherited from

`Omit.onAnimationStart`

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2585

#### Inherited from

`Omit.onAnimationStartCapture`

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2504

#### Inherited from

`Omit.onAuxClick`

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2505

#### Inherited from

`Omit.onAuxClickCapture`

***

### onBeforeInput?

> `optional` **onBeforeInput**: `InputEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2430

#### Inherited from

`Omit.onBeforeInput`

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2431

#### Inherited from

`Omit.onBeforeInputCapture`

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2424

#### Inherited from

`Omit.onBlur`

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2425

#### Inherited from

`Omit.onBlurCapture`

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2460

#### Inherited from

`Omit.onCanPlay`

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2461

#### Inherited from

`Omit.onCanPlayCapture`

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2462

#### Inherited from

`Omit.onCanPlayThrough`

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2463

#### Inherited from

`Omit.onCanPlayThroughCapture`

***

### onChange?

> `optional` **onChange**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2428

#### Inherited from

`Omit.onChange`

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2429

#### Inherited from

`Omit.onChangeCapture`

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2506

#### Inherited from

`Omit.onClick`

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2507

#### Inherited from

`Omit.onClickCapture`

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2414

#### Inherited from

`Omit.onCompositionEnd`

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2415

#### Inherited from

`Omit.onCompositionEndCapture`

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2416

#### Inherited from

`Omit.onCompositionStart`

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2417

#### Inherited from

`Omit.onCompositionStartCapture`

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2418

#### Inherited from

`Omit.onCompositionUpdate`

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2419

#### Inherited from

`Omit.onCompositionUpdateCapture`

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2508

#### Inherited from

`Omit.onContextMenu`

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2509

#### Inherited from

`Omit.onContextMenuCapture`

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2406

#### Inherited from

`Omit.onCopy`

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2407

#### Inherited from

`Omit.onCopyCapture`

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2408

#### Inherited from

`Omit.onCut`

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2409

#### Inherited from

`Omit.onCutCapture`

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2510

#### Inherited from

`Omit.onDoubleClick`

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2511

#### Inherited from

`Omit.onDoubleClickCapture`

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2512

#### Inherited from

`Omit.onDrag`

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2513

#### Inherited from

`Omit.onDragCapture`

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2514

#### Inherited from

`Omit.onDragEnd`

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2515

#### Inherited from

`Omit.onDragEndCapture`

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2516

#### Inherited from

`Omit.onDragEnter`

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2517

#### Inherited from

`Omit.onDragEnterCapture`

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2518

#### Inherited from

`Omit.onDragExit`

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2519

#### Inherited from

`Omit.onDragExitCapture`

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2520

#### Inherited from

`Omit.onDragLeave`

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2521

#### Inherited from

`Omit.onDragLeaveCapture`

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2522

#### Inherited from

`Omit.onDragOver`

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2523

#### Inherited from

`Omit.onDragOverCapture`

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2524

#### Inherited from

`Omit.onDragStart`

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2525

#### Inherited from

`Omit.onDragStartCapture`

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2526

#### Inherited from

`Omit.onDrop`

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2527

#### Inherited from

`Omit.onDropCapture`

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2464

#### Inherited from

`Omit.onDurationChange`

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2465

#### Inherited from

`Omit.onDurationChangeCapture`

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2466

#### Inherited from

`Omit.onEmptied`

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2467

#### Inherited from

`Omit.onEmptiedCapture`

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2468

#### Inherited from

`Omit.onEncrypted`

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2469

#### Inherited from

`Omit.onEncryptedCapture`

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2470

#### Inherited from

`Omit.onEnded`

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2471

#### Inherited from

`Omit.onEndedCapture`

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2444

#### Inherited from

`Omit.onError`

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2445

#### Inherited from

`Omit.onErrorCapture`

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2422

#### Inherited from

`Omit.onFocus`

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2423

#### Inherited from

`Omit.onFocusCapture`

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2570

#### Inherited from

`Omit.onGotPointerCapture`

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2571

#### Inherited from

`Omit.onGotPointerCaptureCapture`

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2432

#### Inherited from

`Omit.onInput`

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2433

#### Inherited from

`Omit.onInputCapture`

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2438

#### Inherited from

`Omit.onInvalid`

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2439

#### Inherited from

`Omit.onInvalidCapture`

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2448

#### Inherited from

`Omit.onKeyDown`

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2449

#### Inherited from

`Omit.onKeyDownCapture`

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2451

#### Deprecated

Use `onKeyUp` or `onKeyDown` instead

#### Inherited from

`Omit.onKeyPress`

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2453

#### Deprecated

Use `onKeyUpCapture` or `onKeyDownCapture` instead

#### Inherited from

`Omit.onKeyPressCapture`

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2454

#### Inherited from

`Omit.onKeyUp`

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2455

#### Inherited from

`Omit.onKeyUpCapture`

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2442

#### Inherited from

`Omit.onLoad`

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2443

#### Inherited from

`Omit.onLoadCapture`

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2472

#### Inherited from

`Omit.onLoadedData`

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2473

#### Inherited from

`Omit.onLoadedDataCapture`

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2474

#### Inherited from

`Omit.onLoadedMetadata`

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2475

#### Inherited from

`Omit.onLoadedMetadataCapture`

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2476

#### Inherited from

`Omit.onLoadStart`

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2477

#### Inherited from

`Omit.onLoadStartCapture`

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2572

#### Inherited from

`Omit.onLostPointerCapture`

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2573

#### Inherited from

`Omit.onLostPointerCaptureCapture`

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2528

#### Inherited from

`Omit.onMouseDown`

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2529

#### Inherited from

`Omit.onMouseDownCapture`

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2530

#### Inherited from

`Omit.onMouseEnter`

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2531

#### Inherited from

`Omit.onMouseLeave`

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2532

#### Inherited from

`Omit.onMouseMove`

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2533

#### Inherited from

`Omit.onMouseMoveCapture`

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2534

#### Inherited from

`Omit.onMouseOut`

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2535

#### Inherited from

`Omit.onMouseOutCapture`

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2536

#### Inherited from

`Omit.onMouseOver`

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2537

#### Inherited from

`Omit.onMouseOverCapture`

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2538

#### Inherited from

`Omit.onMouseUp`

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2539

#### Inherited from

`Omit.onMouseUpCapture`

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2410

#### Inherited from

`Omit.onPaste`

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2411

#### Inherited from

`Omit.onPasteCapture`

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2478

#### Inherited from

`Omit.onPause`

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2479

#### Inherited from

`Omit.onPauseCapture`

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2480

#### Inherited from

`Omit.onPlay`

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2481

#### Inherited from

`Omit.onPlayCapture`

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2482

#### Inherited from

`Omit.onPlaying`

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2483

#### Inherited from

`Omit.onPlayingCapture`

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2562

#### Inherited from

`Omit.onPointerCancel`

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2563

#### Inherited from

`Omit.onPointerCancelCapture`

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2556

#### Inherited from

`Omit.onPointerDown`

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2557

#### Inherited from

`Omit.onPointerDownCapture`

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2564

#### Inherited from

`Omit.onPointerEnter`

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2565

#### Inherited from

`Omit.onPointerLeave`

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2558

#### Inherited from

`Omit.onPointerMove`

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2559

#### Inherited from

`Omit.onPointerMoveCapture`

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2568

#### Inherited from

`Omit.onPointerOut`

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2569

#### Inherited from

`Omit.onPointerOutCapture`

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2566

#### Inherited from

`Omit.onPointerOver`

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2567

#### Inherited from

`Omit.onPointerOverCapture`

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2560

#### Inherited from

`Omit.onPointerUp`

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2561

#### Inherited from

`Omit.onPointerUpCapture`

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2484

#### Inherited from

`Omit.onProgress`

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2485

#### Inherited from

`Omit.onProgressCapture`

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2486

#### Inherited from

`Omit.onRateChange`

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2487

#### Inherited from

`Omit.onRateChangeCapture`

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2434

#### Inherited from

`Omit.onReset`

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2435

#### Inherited from

`Omit.onResetCapture`

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2576

#### Inherited from

`Omit.onScroll`

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2577

#### Inherited from

`Omit.onScrollCapture`

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2488

#### Inherited from

`Omit.onSeeked`

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2489

#### Inherited from

`Omit.onSeekedCapture`

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2490

#### Inherited from

`Omit.onSeeking`

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2491

#### Inherited from

`Omit.onSeekingCapture`

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2542

#### Inherited from

`Omit.onSelect`

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2543

#### Inherited from

`Omit.onSelectCapture`

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2492

#### Inherited from

`Omit.onStalled`

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2493

#### Inherited from

`Omit.onStalledCapture`

***

### onSubmit?

> `optional` **onSubmit**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2436

#### Inherited from

`Omit.onSubmit`

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2437

#### Inherited from

`Omit.onSubmitCapture`

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2494

#### Inherited from

`Omit.onSuspend`

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2495

#### Inherited from

`Omit.onSuspendCapture`

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2496

#### Inherited from

`Omit.onTimeUpdate`

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2497

#### Inherited from

`Omit.onTimeUpdateCapture`

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2546

#### Inherited from

`Omit.onTouchCancel`

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2547

#### Inherited from

`Omit.onTouchCancelCapture`

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2548

#### Inherited from

`Omit.onTouchEnd`

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2549

#### Inherited from

`Omit.onTouchEndCapture`

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2550

#### Inherited from

`Omit.onTouchMove`

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2551

#### Inherited from

`Omit.onTouchMoveCapture`

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2552

#### Inherited from

`Omit.onTouchStart`

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2553

#### Inherited from

`Omit.onTouchStartCapture`

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2592

#### Inherited from

`Omit.onTransitionEnd`

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2593

#### Inherited from

`Omit.onTransitionEndCapture`

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2498

#### Inherited from

`Omit.onVolumeChange`

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2499

#### Inherited from

`Omit.onVolumeChangeCapture`

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2500

#### Inherited from

`Omit.onWaiting`

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2501

#### Inherited from

`Omit.onWaitingCapture`

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2580

#### Inherited from

`Omit.onWheel`

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLSpanElement`\>

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2581

#### Inherited from

`Omit.onWheelCapture`

***

### order?

> `optional` **order**: `ResponsiveStyleValue`\<Order \| readonly NonNullable\<Order \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Order \| readonly NonNullable\<Order \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`order`](StandardStackProps.md#order)

***

### overflow?

> `optional` **overflow**: `ResponsiveStyleValue`\<readonly string\[\] \| Overflow \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| Overflow \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`overflow`](StandardStackProps.md#overflow)

***

### p?

> `optional` **p**: `ResponsiveStyleValue`\<Padding\<string \| number\> \| readonly NonNullable\<Padding\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Padding\<string \| number\> \| readonly NonNullable\<Padding\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`p`](StandardStackProps.md#p)

***

### padding?

> `optional` **padding**: `ResponsiveStyleValue`\<Padding\<string \| number\> \| readonly NonNullable\<Padding\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Padding\<string \| number\> \| readonly NonNullable\<Padding\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`padding`](StandardStackProps.md#padding)

***

### paddingBlock?

> `optional` **paddingBlock**: `ResponsiveStyleValue`\<PaddingBlock\<string \| number\> \| readonly NonNullable\<PaddingBlock\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingBlock\<string \| number\> \| readonly NonNullable\<PaddingBlock\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingBlock`](StandardStackProps.md#paddingblock)

***

### paddingBlockEnd?

> `optional` **paddingBlockEnd**: `ResponsiveStyleValue`\<PaddingBlockEnd\<string \| number\> \| readonly NonNullable\<PaddingBlockEnd\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingBlockEnd\<string \| number\> \| readonly NonNullable\<PaddingBlockEnd\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingBlockEnd`](StandardStackProps.md#paddingblockend)

***

### paddingBlockStart?

> `optional` **paddingBlockStart**: `ResponsiveStyleValue`\<PaddingBlockStart\<string \| number\> \| readonly NonNullable\<PaddingBlockStart\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingBlockStart\<string \| number\> \| readonly NonNullable\<PaddingBlockStart\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingBlockStart`](StandardStackProps.md#paddingblockstart)

***

### paddingBottom?

> `optional` **paddingBottom**: `ResponsiveStyleValue`\<PaddingBottom\<string \| number\> \| readonly NonNullable\<PaddingBottom\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingBottom\<string \| number\> \| readonly NonNullable\<PaddingBottom\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingBottom`](StandardStackProps.md#paddingbottom)

***

### paddingInline?

> `optional` **paddingInline**: `ResponsiveStyleValue`\<PaddingInline\<string \| number\> \| readonly NonNullable\<PaddingInline\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingInline\<string \| number\> \| readonly NonNullable\<PaddingInline\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingInline`](StandardStackProps.md#paddinginline)

***

### paddingInlineEnd?

> `optional` **paddingInlineEnd**: `ResponsiveStyleValue`\<PaddingInlineEnd\<string \| number\> \| readonly NonNullable\<PaddingInlineEnd\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingInlineEnd\<string \| number\> \| readonly NonNullable\<PaddingInlineEnd\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingInlineEnd`](StandardStackProps.md#paddinginlineend)

***

### paddingInlineStart?

> `optional` **paddingInlineStart**: `ResponsiveStyleValue`\<PaddingInlineStart\<string \| number\> \| readonly NonNullable\<PaddingInlineStart\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingInlineStart\<string \| number\> \| readonly NonNullable\<PaddingInlineStart\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingInlineStart`](StandardStackProps.md#paddinginlinestart)

***

### paddingLeft?

> `optional` **paddingLeft**: `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingLeft`](StandardStackProps.md#paddingleft)

***

### paddingRight?

> `optional` **paddingRight**: `ResponsiveStyleValue`\<PaddingRight\<string \| number\> \| readonly NonNullable\<PaddingRight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingRight\<string \| number\> \| readonly NonNullable\<PaddingRight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingRight`](StandardStackProps.md#paddingright)

***

### paddingTop?

> `optional` **paddingTop**: `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingTop`](StandardStackProps.md#paddingtop)

***

### paddingX?

> `optional` **paddingX**: `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingX`](StandardStackProps.md#paddingx)

***

### paddingY?

> `optional` **paddingY**: `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`paddingY`](StandardStackProps.md#paddingy)

***

### ~~paragraph?~~

> `optional` **paragraph**: `boolean`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:48

If `true`, the element will be a paragraph element.

#### Default

```ts
false
```

#### Deprecated

Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.

#### Inherited from

`Omit.paragraph`

***

### part?

> `optional` **part**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2982

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes/part](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)

#### Inherited from

`Omit.part`

***

### pb?

> `optional` **pb**: `ResponsiveStyleValue`\<PaddingBottom\<string \| number\> \| readonly NonNullable\<PaddingBottom\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingBottom\<string \| number\> \| readonly NonNullable\<PaddingBottom\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`pb`](StandardStackProps.md#pb)

***

### pl?

> `optional` **pl**: `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`pl`](StandardStackProps.md#pl)

***

### position?

> `optional` **position**: `ResponsiveStyleValue`\<Position \| readonly NonNullable\<Position \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Position \| readonly NonNullable\<Position \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`position`](StandardStackProps.md#position)

***

### pr?

> `optional` **pr**: `ResponsiveStyleValue`\<PaddingRight\<string \| number\> \| readonly NonNullable\<PaddingRight\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingRight\<string \| number\> \| readonly NonNullable\<PaddingRight\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`pr`](StandardStackProps.md#pr)

***

### prefix?

> `optional` **prefix**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2943

#### Inherited from

`Omit.prefix`

***

### property?

> `optional` **property**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2944

#### Inherited from

`Omit.property`

***

### pt?

> `optional` **pt**: `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`pt`](StandardStackProps.md#pt)

***

### px?

> `optional` **px**: `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingLeft\<string \| number\> \| readonly NonNullable\<PaddingLeft\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`px`](StandardStackProps.md#px)

***

### py?

> `optional` **py**: `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<PaddingTop\<string \| number\> \| readonly NonNullable\<PaddingTop\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`py`](StandardStackProps.md#py)

***

### radioGroup?

> `optional` **radioGroup**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2933

#### Inherited from

`Omit.radioGroup`

***

### ref?

> `optional` **ref**: (`instance`) => `void` \| `RefObject`\<`HTMLSpanElement`\> \| `null`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:1633

#### Inherited from

`Omit.ref`

***

### rel?

> `optional` **rel**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2945

#### Inherited from

`Omit.rel`

***

### resource?

> `optional` **resource**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2946

#### Inherited from

`Omit.resource`

***

### results?

> `optional` **results**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2960

#### Inherited from

`Omit.results`

***

### rev?

> `optional` **rev**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2947

#### Inherited from

`Omit.rev`

***

### right?

> `optional` **right**: `ResponsiveStyleValue`\<Right\<string \| number\> \| readonly NonNullable\<Right\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Right\<string \| number\> \| readonly NonNullable\<Right\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`right`](StandardStackProps.md#right)

***

### role?

> `optional` **role**: `AriaRole`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2936

#### Inherited from

`Omit.role`

***

### rowGap?

> `optional` **rowGap**: `ResponsiveStyleValue`\<RowGap\<string \| number\> \| readonly NonNullable\<RowGap\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<RowGap\<string \| number\> \| readonly NonNullable\<RowGap\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`rowGap`](StandardStackProps.md#rowgap)

***

### sectionType

> **sectionType**: `"page"` \| `"section"` \| `"subsection"` \| `"subsubsection"`

Defined in: [src/components/typography/TitleLabel.tsx:14](https://github.com/mcpab/mcpab-web-blocks/blob/8bc7381f3498b756aaaf0f873689bbe1606a3c4e/src/components/typography/TitleLabel.tsx#L14)

Visual hierarchy level mapped to `h1`..`h4` typography variants.

***

### security?

> `optional` **security**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2961

#### Inherited from

`Omit.security`

***

### slot?

> `optional` **slot**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2925

#### Inherited from

`Omit.slot`

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2926

#### Inherited from

`Omit.spellCheck`

***

### style?

> `optional` **style**: `CSSProperties`

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/OverridableComponent/index.d.ts:36

#### Inherited from

[`ActionButtonProps`](ActionButtonProps.md).[`style`](ActionButtonProps.md#style)

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2908

#### Inherited from

`Omit.suppressContentEditableWarning`

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2909

#### Inherited from

`Omit.suppressHydrationWarning`

***

### sx?

> `optional` **sx**: `SxProps`\<`Theme`\>

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:52

The system prop that allows defining system overrides as well as additional CSS styles.

#### Inherited from

`Omit.sx`

***

### tabIndex?

> `optional` **tabIndex**: `number`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2928

#### Inherited from

`Omit.tabIndex`

***

### textAlign?

> `optional` **textAlign**: `ResponsiveStyleValue`\<TextAlign \| readonly NonNullable\<TextAlign \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<TextAlign \| readonly NonNullable\<TextAlign \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`textAlign`](StandardStackProps.md#textalign)

***

### textOverflow?

> `optional` **textOverflow**: `ResponsiveStyleValue`\<readonly string\[\] \| TextOverflow \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| TextOverflow \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`textOverflow`](StandardStackProps.md#textoverflow)

***

### textTransform?

> `optional` **textTransform**: `ResponsiveStyleValue`\<readonly string\[\] \| TextTransform \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| TextTransform \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`textTransform`](StandardStackProps.md#texttransform)

***

### title?

> `optional` **title**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2929

#### Inherited from

`Omit.title`

***

### top?

> `optional` **top**: `ResponsiveStyleValue`\<Top\<string \| number\> \| readonly NonNullable\<Top\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Top\<string \| number\> \| readonly NonNullable\<Top\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`top`](StandardStackProps.md#top)

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2930

#### Inherited from

`Omit.translate`

***

### typeof?

> `optional` **typeof**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2948

#### Inherited from

`Omit.typeof`

***

### typography?

> `optional` **typography**: `ResponsiveStyleValue`\<`string` \| `undefined`\> \| (`theme`) => `ResponsiveStyleValue`\<`string` \| `undefined`\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`typography`](StandardStackProps.md#typography)

***

### unselectable?

> `optional` **unselectable**: `"off"` \| `"on"`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2962

#### Inherited from

`Omit.unselectable`

***

### variantMapping?

> `optional` **variantMapping**: `Partial`\<`Record`\<`OverridableStringUnion`\<`"inherit"` \| `TypographyVariant`, `TypographyPropsVariantOverrides`\>, `string`\>\>

Defined in: node\_modules/.pnpm/@mui+material@7.3.6\_@emotion+react@11.14.0\_@types+react@18.3.27\_react@19.2.0\_\_@emotion+\_93388dfb2fa05c28044ec0f5d75034aa/node\_modules/@mui/material/esm/Typography/Typography.d.ts:77

The component maps the variant prop to a range of different HTML element types.
For instance, subtitle1 to `<h6>`.
If you wish to change that mapping, you can provide your own.
Alternatively, you can use the `component` prop.

#### Default

```ts
{
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
```

#### Inherited from

`Omit.variantMapping`

***

### visibility?

> `optional` **visibility**: `ResponsiveStyleValue`\<Visibility \| readonly NonNullable\<Visibility \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Visibility \| readonly NonNullable\<Visibility \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`visibility`](StandardStackProps.md#visibility)

***

### vocab?

> `optional` **vocab**: `string`

Defined in: node\_modules/.pnpm/@types+react@18.3.27/node\_modules/@types/react/index.d.ts:2949

#### Inherited from

`Omit.vocab`

***

### whiteSpace?

> `optional` **whiteSpace**: `ResponsiveStyleValue`\<readonly string\[\] \| WhiteSpace \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<readonly string\[\] \| WhiteSpace \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`whiteSpace`](StandardStackProps.md#whitespace)

***

### width?

> `optional` **width**: `ResponsiveStyleValue`\<Width\<string \| number\> \| readonly NonNullable\<Width\<string \| number\> \| undefined\>\[\] \| undefined\> \| (`theme`) => `ResponsiveStyleValue`\<Width\<string \| number\> \| readonly NonNullable\<Width\<string \| number\> \| undefined\>\[\] \| undefined\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`width`](StandardStackProps.md#width)

***

### zIndex?

> `optional` **zIndex**: `ResponsiveStyleValue`\<`string` \| `string` & `object` \| `number` & `object` \| `undefined`\> \| (`theme`) => `ResponsiveStyleValue`\<`string` \| `string` & `object` \| `number` & `object` \| `undefined`\>

#### Inherited from

[`StandardStackProps`](StandardStackProps.md).[`zIndex`](StandardStackProps.md#zindex)
