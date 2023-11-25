// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock'
import { TextEncoder, TextDecoder } from 'util'

Object.assign(global, { TextDecoder, TextEncoder })
// eslint-disable-next-line no-undef
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {},
}))

fetchMock.enableMocks()
