import * as fs from 'fs'
import * as path from 'path'
import template from './template'

const filePath = (variant: string) => {
  return path.join(process.cwd(), `/ayu-${variant}.json`)
}

// Solo generar el tema mirage sin borde
(() => {
  const variant = 'mirage'
  const nonBordered = JSON.stringify(template(variant as any, false), null, '\t')
  fs.writeFileSync(filePath(variant), nonBordered)
  console.log(`Updated ${variant}`)
})()
