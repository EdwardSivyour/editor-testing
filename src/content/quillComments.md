# Quill Editor

---

1. **Styled by default**  
   Quill comes with two default themes; Snow, a standard light themed toolbar. And Bubble, which does not have a toolbar and instead relies moves that functionality to a mouse toolbar.

2. **No HTML viewer**  
   There is no built-in HTML viewer (like TinyMCE has, for example). We would need to build this in ourselves.

3. **Accessing Content**
   Accessing quills content is fairly straigtforward, as quill fires an update event with the content

4. **Content Control**
   Much like TipTap, quill allows you to import modules (called Formats), which is handled in much the same way:

   ```js
   const quill = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
         toolbar: [
         [{ header: [1, 2, false] }],
         ['bold', 'italic', 'underline'],
         [{ list: 'ordered' }, { list: 'bullet' }],
         ['link'],
         ],
      },
      formats: ['header', 'bold', 'italic', 'underline', 'list', 'link', 'code-block', 'image'],
   });
   ```
