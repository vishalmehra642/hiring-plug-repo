import React  from 'react';
import PostForm from './PostForm';
function PostAJobForm({setJobForm}) {
 
  return (
    <div className="flex items-center justify-center w-full">
    <PostForm setJobForm={setJobForm} />
    </div>
  );
}

export default PostAJobForm;
