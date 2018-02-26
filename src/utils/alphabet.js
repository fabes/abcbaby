const letters = [
  {
    code: 'A',
    bg: '#1edc1b'
  },
  {
    code: 'B',
    bg: '#05a5d1'
  },
  {
    code: 'C',
    bg: '#ff6600'
  },
  {
    code: 'D',
    bg: '#e111ef'
  }


]

export const fetch_letter = (letter_num) => {
  return letters[letter_num]
}