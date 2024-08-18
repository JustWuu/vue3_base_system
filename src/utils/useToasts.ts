import { app } from '@/main'

const lifeTime = 5000

export function useToasts() {
  const showToast = (
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail?: string
  ) => {
    app.config.globalProperties.$toast.add({
      severity,
      summary,
      detail,
      life: lifeTime
    })
  }

  return {
    success: (summary: string, detail?: string) => showToast('success', summary, detail),
    info: (summary: string, detail?: string) => showToast('info', summary, detail),
    warn: (summary: string, detail?: string) => showToast('warn', summary, detail),
    error: (summary: string, detail?: string) => showToast('error', summary, detail)
  }
}
