import React from 'react'

export default function Contact() {
  return (
    <>
    <h2 className='d-flex justify-content-center py-5'>CONTACT ME</h2>
   <form className='w-50 ms-auto me-auto'>
  <div className="mb-3">
    <label htmlFor="exampleInputText" className="form-label">Full Name </label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputText" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Massege</label>
</div>
<button type="submit" class="btn btn-success mt-3">Send</button>
  
</form>
    </>

  )
}
