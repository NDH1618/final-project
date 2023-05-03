import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './adminfoder.css'
import axios from 'axios';


export default function Admifoder({ Urlmage }) {
  const editorRef = useRef(null);
  const [title, setTitle] = useState('')
  // const [database, setDatabase] = useState({
  //   title: '',
  //   content: '',
  //   coverImageUrl: ''
  // })

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      console.log(Urlmage)
      
      let database = {
          title: title,
          content: editorRef.current.getContent(),
          coverImageUrl: Urlmage
        }
      
      console.log(database)

      const getconfig = () => {
        return {
          headers: {
            token: localStorage.getItem('token')
          }
        }
      }

      axios.post('http://contabo.foxcode.site:8085/api/v1/admin/articles', database, getconfig())
        .then(response => {
          console.log(response.data)
          alert('thêm bài viết thành công')
        })
        .catch(error => {
          alert('da co loi xay ra')
        })
      // setDatabase(
      //   {
      //     ...database,
      //     title: '',
      //     content: '',
      //     coverImageUrl: ''
      //   }
      // )
      setTitle('')
      editorRef.current.setContent('')
    }

  };
  return (
    <>
      <div className='to-header'>
        <div className='to-title'>
          <h5>Thêm tiêu đề bài viết</h5>
          <input placeholder='title' type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
        <h5>Thêm nội dung bài viết</h5>
        </div>
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue=''
          init={{
            selector: 'textarea',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ]
          }}
        />
        <button className='log-click' onClick={log}>Thêm mới bài viết</button>
      </div>
    </>
  );
}
