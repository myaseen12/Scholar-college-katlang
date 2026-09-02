// ---------------------------------------------------------------------------
// Centralized form submission for admission & contact inquiries.
//
// To connect a real backend / email service later, you only need to change the
// `sendToBackend` function below (see the commented example). Both forms call
// `submitInquiry`, so wiring up a real API requires no changes to the pages.
// ---------------------------------------------------------------------------

const STORAGE_KEYS = {
  admission: 'scholars_college_admission_inquiries',
  contact: 'scholars_college_contact_messages',
}

// Real backend integration point.
//
// When a backend/email service is available, replace the body of this function
// with an actual request, for example:
//
//   const response = await fetch('/api/inquiries', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ ...payload }),
//   })
//   if (!response.ok) throw new Error('The server could not accept your inquiry.')
//
// Until then, this records the inquiry to the browser's localStorage (so no
// information is lost in the demo) and resolves after a short delay so the
// loading state is visible and the flow is ready for a real backend.
async function sendToBackend(payload) {
  const key = payload.type === 'admission' ? STORAGE_KEYS.admission : STORAGE_KEYS.contact
  const record = { ...payload }
  delete record.type

  // Record locally for the demo.
  try {
    const prev = JSON.parse(localStorage.getItem(key) || '[]')
    prev.push({ ...record, submittedAt: new Date().toISOString() })
    localStorage.setItem(key, JSON.stringify(prev))
  } catch {
    // Storage may be unavailable (e.g. private mode or blocked storage).
    throw new Error(
      'Your inquiry could not be saved in this browser (storage unavailable). ' +
        'Please contact the college directly or try a different browser.'
    )
  }

  // Simulated network latency so the submit button shows a loading state.
  // Remove this once a real backend is connected in sendToBackend above.
  await new Promise((resolve) => setTimeout(resolve, 800))
}

// Public submit API used by the Admission and Contact forms.
// `type` is 'admission' or 'contact'; `data` is the form's field values.
export async function submitInquiry(type, data) {
  await sendToBackend({ type, ...data })
}
