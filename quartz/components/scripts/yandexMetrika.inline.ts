type YmFunction = {
  (...args: unknown[]): void
  a?: unknown[][]
  l?: number
}

const counterId = 110882783

const metrikaWindow = window as typeof window & {
  ym?: YmFunction
}

if (!metrikaWindow.ym) {
  const ym: YmFunction = (...args: unknown[]) => {
    ym.a ??= []
    ym.a.push(args)
  }

  ym.l = Date.now()
  metrikaWindow.ym = ym

  const script = document.createElement("script")
  script.async = true
  script.src = "https://mc.yandex.ru/metrika/tag.js"

  const firstScript = document.getElementsByTagName("script")[0]

  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
  } else {
    document.head.appendChild(script)
  }
}

metrikaWindow.ym?.(counterId, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
})

let previousUrl = window.location.href

document.addEventListener("nav", () => {
  const currentUrl = window.location.href

  if (currentUrl !== previousUrl) {
    metrikaWindow.ym?.(counterId, "hit", currentUrl, {
      referer: previousUrl,
    })

    previousUrl = currentUrl
  }
})

export default ""