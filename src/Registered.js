import React from 'react'

export default function Registered() {
  return (
    <div>
      <button type="button" class="btn btn-primary my-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Login to check your waitlist rank!
      </button>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Notification!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
             You are Already Registered!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
              <button type="button" class="btn btn-primary">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
