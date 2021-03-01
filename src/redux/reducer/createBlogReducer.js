const initialState = {
    form: {
        title: '',
        body: '',
        image: ''
    },
    previewImg: 'halooo'
}

const createBlogReducer = (state = initialState, action) => {
    if(action.type === 'SET_FORM_DATA') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }

    if(action.type === 'SET_IMG_PREVIEW', action) {
        return {
            ...state,
            previewImg: action.payload
        }
    }

    return state;
}

export default createBlogReducer;