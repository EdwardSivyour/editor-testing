# TipTap Editor
---

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

   Defining tighter restrictions is done by simply specifing the expected extensions:

   ```js
   import Document from '@tiptap/extension-document'
   import Paragraph from '@tiptap/extension-paragraph'
   import Text from '@tiptap/extension-text'

   const html = `
      <p>Some paragraph</p> // Will render as normal
      <strong>Some bold text<strong> // Will not render as bold
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
