## CSS

css are lines of **rule**.
**rule** tells you **some kind of tags** should be present in **a certain styles**.


Syntax:
>< rule > := < selector > {**(**< attribute >: < value >;**)** **+**}



### selector

- different tags my have **different attributes, name, and taken different attribute values**.

- what's more, html can be parsed into **a tree** structure. which meaning different tags may have **different parent and different childrens**.

- selector select tags according the **tag's attriubte**, and the **tag's ancestors and transcents**.

#### FAQ:
- So how can you select a "a" tag. obviously the most easy way is using "a" in selector to select all "a" tags, that's just the case.

```css
a {color:red}
```
- the above rule means all a tags is painted red.

- how can you select tags which have href attribute.
**\*** represent every.
```css
*[href] {color: red}
```
- the above rule means all tags which have href attribute will be painted red.

- how can you select tags whose href are valued "http://www.zhibo8.com"
```css
*[href="http://www.zhibo8.com"] {color: red}
```
- the above rule means all tags whose href attribute valued "http://www.zhibo8.com" will be painted red.

- how can you select tags whose parent tag is "a" tag.
```css
a>* {color: red}
```


- how can you select tags whose child tag is "a" tag.
cannot be done

- how can you select tags which has an "a" tag as its anchestor.
```css
a * {color: red}
```


- how can you select tags which has an "a" tag as its transends.
cannot be done

- how to do logical operation on the above conditions.
selector1,selctor2  represent or.
```css
p,a {color: red}
```
p tags and a tags will be painted red.
the above rule equals to
```css
p {color: red}
a {color: red}
```

```css
p[att1="val1"][attr2="val2"]
```
```css
.href.name
```

For convient:

- class selector:

```css
.ask_title {color: red}
```
select tags whose class attribute are valued ask_title.

- id selector:
#
```css
#ask_title {color: red}
```

select tags whose id attribute are valued ask\_title.


warning: CSS cannot select parent.

- pseudo class and Element: not well understood

a:visited, a:link
:after, :before
:hover
:not



### attribute values(not well understood)

selector and cascade are concertrate on syntax(you can understand without seeing the affect of css), while the values are concerntrate on semantic, without seeing the affect, you cannot understand well. this part is easy to understand, while hard to known them all.


- color
>-  rgb(a, b, c), a, b, c are numbers in 0-255.
>-  \#abcefg, a,b,c,e,f,g are 0-9a-f, such as #ffffff
>-  \#abc, a,b,c are 0-9a-f, such as #fff, \#abc equals to \#aabbcc
>-  literal, such as "white", "red", "yellow", "maroon".

- font
>-size
>-bruce
>-font

- layout


### cascade and inherit

- most attribute values will inherits from parents.

- specificity:

specificity is a four bit number

- id : 0, 1, 0, 0
- attribute: 0, 0, 1, 0
- tag: 0, 0, 0, 1
- \*, pesudo class, 0, 0, 0, 0

- css in script: 1, 0, 0, 0
- css is linked, not contained in the current html: 0, 0, 0, 0


when two rules have the same specificity, the two rules are valid both. you can think that one rule apply to the html, and then another rule apply to the html. what you actually see is the style described by the rule which is applied last (that's the meaning of cascade). So in what order, css rule apply is important. 

- Source:

- reader: any one who see the html page. chrome provide interface to modify css, the source of such css is reader.
- designer: the one who write css text for the html.
- agent: default css style of agent(usually a browser such as chrome.)

css rules from agent apply first, then designer's normal css rule, then reader's normal css rule, then designer's import css rule, at last the reader's import css rule. in each category the order which rule apply is the order css rule appears(in the css text).


!import
p {font: italic arial,sans-serif !import; color: red; }
p {font: italic arial, sans-serif} is import declared, such rule have high preferrence than normal rules.