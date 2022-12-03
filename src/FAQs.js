import React from 'react'

export default function FAQs() {
  return (
    <div className='container'>
      <select class="form-select mt-3" aria-label="Default select example">
        <option selected>What's MyMo</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select mt-3" aria-label="Default select example">
        <option selected>Who is MyMo for?</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select my-3" aria-label="Default select example">
        <option selected>How does MyMo for?</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}
