const letters = [
  {
    code: 'A',
    bg: '#ff6600'
  },
  {
    code: 'B',
    bg: '#ff6600'
  },
  {
    code: 'C',
    bg: '#ff6600'
  },
  {
    code: 'D',
    bg: '#ff6600'
  }


]

export const fetch_letter = (letter_num) => {
  return letters[letter_num]
}