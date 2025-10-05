import * as fs from 'fs'
import * as path from 'path'
import template from './template'

const filePath = (variant: string) => {
  // Avoid overwriting the custom theme file.
  return path.join(process.cwd(), `/ayu-${variant}.generated.json`)
}

// Only generate the mirage variant without border
;(() => {
  const variant = 'mirage'
  const nonBordered = JSON.stringify(template(variant as any, false), null, '\t')
  fs.writeFileSync(filePath(variant), nonBordered)
  console.log(`Updated generated ${variant}`)
})()
