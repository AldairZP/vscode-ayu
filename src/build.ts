import * as fs from 'fs'
import * as path from 'path'
import template from './template'

const filePath = (variant: string) => {
  // Evitar sobrescribir el archivo del tema personalizado.
  return path.join(process.cwd(), `/ayu-${variant}.generated.json`)
}

// Solo generar el tema mirage sin borde
(() => {
  const variant = 'mirage'
  const nonBordered = JSON.stringify(template(variant as any, false), null, '\t')
  fs.writeFileSync(filePath(variant), nonBordered)
  console.log(`Updated generated ${variant}`)
})()
