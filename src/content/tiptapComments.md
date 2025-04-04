# TipTap Editor

## Initial Discovery

1. **Unstyled by default**  
   TipTap does not have any styling by default. This would increase development cost, though not by a significant margin, and would allow us to provide a more custom editing experience.

2. **No HTML viewer**  
   There is no built-in HTML viewer (like TinyMCE has, for example). We would need to build this in ourselves.

3. **Exposing JSON as HTML**  
   TipTap uses a strict JSON schema to define bold/italics/headings, etc. (see below). It exposes this as HTML simply with:

   ```js
   editor.getHTML()
   ```

4. **Content Control**
   As mentioned above, TipTap's schema enforces strict content controls on what will actually be generated. The [starter kit](https://tiptap.dev/docs/editor/getting-started/configure#default-extensions) defines most basic functionality required for document editing:

   ```js
   const extensions = [
      OfficePaste, // Parses content from office documents
      StarterKit, // Parses most marks and nodes (headers, lists, paragraphs etc)
      Image, // Allows images to be displayed // (<img src="https://picsum.photos/200" alt="placeholder" />) Does not handle uploading.
   ];

   const editor = useEditor({
    extensions: extensions,
    content: html, //default content
   });
   ```

   Defining tighter restrictions is done by simply specifing only the wanted extensions:

   ```js
   import Document from '@tiptap/extension-document'
   import Paragraph from '@tiptap/extension-paragraph'
   import Text from '@tiptap/extension-text'

   const html = `
      <p>Some paragraph</p> /* Will render as normal */
      <strong>Some bold text<strong> /* Will not render as bold */
   `

   const extensions = [
      Document, // required in most cases
      Paragraph,
      Text,
   ];

   const editor = useEditor({
    extensions: extensions,
    content: html, // default content
   });
   ```

   Content not defined in the schema will, in most cases, be added without marks/nodes.

5. **Importing/Pasting Word Documents**
   Pasting from word is fairly painless, since TipTap will automatically drop/unformat content that is unsupported. A plugin has also been written that provides further support for word document structures (providing they are also supported by the extensions you supply). There is no image handling, since tiptap does not parse images by default. Images can be added with the Image module, however we would need to add our own extension for managing uploads of those images. In our use case, this would likely not be nessesary as we would only support adding a logo, of which we would already have the URLs for.

## MUI-TipTap | [Link](https://github.com/sjdemartini/mui-tiptap) | [Provided Demo](https://codesandbox.io/p/sandbox/mui-tiptap-demo-3zl2l6)

Mui-TipTap is a react library that eases implimentation of TipTap by having pre-configured menus and styles, as well as several fixes/improvements over stock TipTap Including: (Taken from Github Repo)

- [ResizableImage](https://github.com/sjdemartini/mui-tiptap#resizableimage) extension for adding and resizing images directly in the editor
- [HeadingWithAnchor](https://github.com/sjdemartini/mui-tiptap#headingwithanchor) extension for dynamic GitHub-like anchor links for every heading you add
- [LinkBubbleMenu](https://github.com/sjdemartini/mui-tiptap#components) so adding and editing links is a breeze
- [FontSize](https://github.com/sjdemartini/mui-tiptap#fontsize) extension for controlling text sizes
- [TableImproved](https://github.com/sjdemartini/mui-tiptap#tableimproved) extension that fixes problems in the underlying Tiptap Table extension
- [TableBubbleMenu](https://github.com/sjdemartini/mui-tiptap#components) for interactively editing your rich text tables
- General-purpose [Controlled BubbleMenu](https://github.com/sjdemartini/mui-tiptap#components) for building your own custom menus, [solving some shortcomings](https://github.com/ueberdosis/tiptap/issues/2305#issuecomment-1020665146) of the Tiptap BubbleMenu

## Forewarnings

MUI-TipTap however does raise some initial concerns over compatability with our existing codebase, specifically around MUI versioning. Initial discovery suggests MUI-TipTap should be compatible, implimentaiton testing will be required.

## Extensions

Extensions should be explicitly defined as issues can and will occour attempting to dynamically import them. Since we require different implimentations for different usecases. Finding below

---

- Mini
  - Used Explicitly with Custom Apps.
- Medium
  - Used for the Storyboard.
- Full Featured
  - Used for the full document editing experience.

---

- ☐ - Unknown
- ☑ - Yes
- ☒ - No

| Extension ⬇        | Mini     | Medium   | Full Featured  | Notes |
| ------------------ | -------- | -------- | -------------- | ----- |
| Document           |  ☑       |  ☑       |  ☑             | Required |
| Text               |  ☑       |  ☑       |  ☑             | Required |
| Paragraph          |  ☑       |  ☑       |  ☑             |  |
| Italic             |  ☑       |  ☑       |  ☑             |  |
| Bold               |  ☑       |  ☑       |  ☑             |  |
| Underline          |  ☑       |  ☑       |  ☑             |  |
| Link               |  ☑       |  ☑       |  ☑             |  |
| Horizontal Rule    |  ☐       |  ☑       |  ☑             |  |
| Strike             |  ☐       |  ☑       |  ☑             |  |
| List Item          |  ☐       |  ☑       |  ☑             |  |
| Ordered List       |  ☐       |  ☑       |  ☑             |  |
| BulletList         |  ☐       |  ☑       |  ☑             |  |
| Hard break         |  ☐       |  ☐       |  ☑             |  |
| Heading            |  ☐       |  ☐       |  ☑             |  |
| Text Style         |  ☐       |  ☐       |  ☑             |  |
| Image              |  ☐       |  ☐       |  ☑             |  |
| Table              |  ☐       |  ☐       |  ☑             |  |
| Table Cell         |  ☐       |  ☐       |  ☑             | Requires Table |
| Table Header       |  ☐       |  ☐       |  ☑             | Requires Table |
| Table Row          |  ☐       |  ☐       |  ☑             | Requires Table |
| Highlight          |  ☐       |  ☐       |  ☑             |  |
| Subscript          |  ☐       |  ☐       |  ☑             |  |
| Superscript        |  ☐       |  ☐       |  ☑             |  |
| Blockquote         |  ☐       |  ☐       |  ☑             |  |
| Task Item          |  ☐       |  ☐       |  ☐             |  |
| Task List          |  ☐       |  ☐       |  ☐             |  |
| Youtube            |  ☐       |  ☐       |  ☐             |  |
| Code               |  ☐       |  ☐       |  ☐             |  |
| Mention            |  ☐       |  ☐       |  ☐             |  |
| CodeBlock          |  ☐       |  ☐       |  ☐             |  |
| CodeBlock Lowlight |  ☐       |  ☐       |  ☐             |  |
| Details            |  ☐       |  ☐       |  ☐             |  |
| DetailsContent     |  ☐       |  ☐       |  ☐             |  |
| DetailsSummary     |  ☐       |  ☐       |  ☐             |  |
