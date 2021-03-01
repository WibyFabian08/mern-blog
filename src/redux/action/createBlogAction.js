import axios from 'axios';

export const setForm = (formType, formValue) => {
    return {
        type: 'SET_FORM_DATA',
        formType,
        formValue
    }
}

export const setImgPreview = (payload) => {
    return {
        type: 'SET_IMG_PREVIEW',
        payload
    }
}

export const sendToAPI = (form) => {
    
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);

    axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        "Content-Type": "Multipart/Form-Data"
      }
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
} 

export const updateToAPI = (form, id) => {
    
  const data = new FormData();
  data.append('title', form.title);
  data.append('body', form.body);
  data.append('image', form.image);

  axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    headers: {
      "Content-Type": "Multipart/Form-Data"
    }
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('error : ', err)
  })
} 

