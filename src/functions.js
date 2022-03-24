export const helloFn = () => 'hello'

export function timeValue(value) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(value))
}