import Compressor from 'compressorjs'

// AES 加密
export async function compressFile(file: File): Promise<File> {
  return new Promise<File>((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 1200,
      maxHeight: 1200,
      success: (compressedFile: File) => {
        resolve(compressedFile)
      },
      error: (err: Error) => {
        reject(err)
      }
    })
  }).catch((err) => {
    console.error('Compress error: ' + err.message)
    throw err
  })
}
