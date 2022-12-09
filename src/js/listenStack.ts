import { useMutationObserver } from '../event/useMutationObserver'
export function listenStack(target: string | Element) {
  // 监听目标元素的子元素变化的栈
  return useMutationObserver(
    target,
    () => {
      console.groupCollapsed('childList or sub tree or attributes changed')
      console.trace()
      console.groupEnd()
    },
    {
      childList: true,
      subtree: true,
      attributes: true,
    },
  )
}
