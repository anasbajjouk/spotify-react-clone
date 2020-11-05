import { toast } from 'react-toastify'

const toastOptions = (Id) => ({
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: Id,
})

export const parserErrorMessage = (errorMessage) => {
  switch (errorMessage) {
    case 'The access token expired':
      return { msg: 'The access token expired, Try to sign in again!', id: 1 }
    case 'Invalid playlist Id':
      return 'The ID of this playlist is invalid, please check if it exists!'

    default:
      return errorMessage
  }
}

const errorHandler = (errorMessage) => {
  let parsedError = JSON.parse(errorMessage).error.message
  const customId = parserErrorMessage(parsedError)?.id
  const errorText =
    parserErrorMessage(parsedError).msg || parserErrorMessage(parsedError)

  return toast.error(errorText, toastOptions(customId))
}

export default errorHandler
