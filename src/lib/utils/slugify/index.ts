/* eslint-disable operator-assignment */
const EMPTY_STRING = ''
const vnDiacritics: Record<string, string> = {
  a: 'àáãảạăằắẳẵặâầấẩẫậä',
  e: 'èéẻẽẹêềếểễệë',
  d: 'đ',
  u: 'ùúủũụưừứửữựüû',
  o: 'òóỏõọôồốổỗộơờớởỡợö',
  i: 'ìíỉĩịïî',
  n: 'ñ',
  c: 'ç',
  y: 'ýỳỹỵỷ',
}

const latinDiacritics: Record<string, string> = {
  a: 'àáâäæãåāăą',
  c: 'çćč',
  d: 'đď',
  e: 'èéêëēėęě',
  g: 'ğǵ',
  h: 'ḧ',
  i: 'îïíīįì',
  l: 'ł',
  m: 'ḿ',
  n: 'ñńǹň',
  o: 'ôöòóœøōõő',
  p: 'ṕ',
  r: 'ŕř',
  s: 'ßśšşș',
  t: 'ťț',
  u: 'ûüùúūǘůűų',
  w: 'ẃ',
  x: 'ẍ',
  y: 'ÿý',
  z: 'žźż',
}

const puncs = '·/_,:;'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const genMapping = () => {
  const keys = Array.from(new Set(Object.keys(vnDiacritics).concat(Object.keys(latinDiacritics))))
  const [a, b] = keys.reduce(
    (acc, key) => {
      const uniq = Array.from(
        new Set(
          (vnDiacritics[key] ?? EMPTY_STRING)
            .split(EMPTY_STRING)
            .concat((latinDiacritics[key] ?? EMPTY_STRING).split(EMPTY_STRING))
        )
      )
      acc[0] = acc[0] + uniq.join(EMPTY_STRING)
      acc[1] = acc[1] + key.repeat(uniq.length)
      return acc
    },
    [puncs, '-'.repeat(puncs.length)]
  )
  return [a, b, new RegExp(a.split('').join('|'), 'g')] as const
}

const [a, b, p] = genMapping()
function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/[^\w\-]+/g, '') // eslint-disable-line
    .replace(/\-\-+/g, '-') // eslint-disable-line
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export default slugify
